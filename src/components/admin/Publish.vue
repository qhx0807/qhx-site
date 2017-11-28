<template>
  <div class="publish">
    <Row>
      <Col span="19">
        <Form ref="formInline" :model="publishObj" :rules="ruleInline">
          <FormItem prop="title" label="文章标题" style="margin-bottom:10px" :label-width="80">
            <Input type="text" v-model="publishObj.title"></Input>
          </FormItem>
          <FormItem prop="titleImg" label="标题图" style="margin-bottom:10px" :label-width="80">
            <Input type="text" v-model="publishObj.titleImg"></Input>
          </FormItem>
        </Form>
        <mavon-editor :ishljs="true" @change="onInputMd" :value="publishObj.mdValue" code-style="code-hybrid" style="height: 600px"></mavon-editor>
      </Col>
      <Col span="5" style="padding-left:10px;">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="image"></Icon>
          图片
        </p>
        <div class="head-img">
          <img :src="publishObj.titleImg" alt="">
          <hi-upload @complete="uploadComplete" @beforeUpload="onUploadBefore" flag="titleImg" @progress="uploadProgress">
            <a>选择图片</a>
            <span>{{progress.toFixed(2)}}%</span>
          </hi-upload>
        </div>
      </Card>
      <Card :bordered="false" style="margin-top:12px;">
        <p slot="title">
          <Icon type="ios-pricetags-outline"></Icon>
          标签
        </p>
        <div>
          <span class="tag-span" @click="onSlectTags(item.name, index)"  v-for="(item, index) in tagsData" :class="{active:isSelect[index]}" :key="item._id">{{item.name}}</span>
        </div>
      </Card>
      <Card :bordered="false" style="margin-top:12px;">
        <p slot="title">
          <Icon type="ios-folder-outline"></Icon>
          归档
        </p>
        <div>
          <Select v-model="publishObj.archive">
              <Option v-for="item in archData" :value="item.name" :key="item._id">{{ item.name }}</Option>
          </Select>
        </div>
      </Card>
      <Card :bordered="false" style="margin-top:12px;">
        <p slot="title">
          <Icon type="ios-gear-outline"></Icon>
          动作
        </p>
        <div>
          <hi-upload @complete="uploadComplete" @beforeUpload="onUploadBefore" @progress="uploadProgress">
            <a>选择图片</a>
             <span>{{progress.toFixed(2)}}%</span>
          </hi-upload>
          <Button style="margin-left:10px" type="primary" :loading="submitLoading" @click="publishAction">发布文章</Button>
        </div>
      </Card>
      <Card :bordered="false" style="margin-top:12px;">
        <p slot="title">http://os70o8m36.bkt.clouddn.com/</p>
        <div>
          <ul>
            <li v-for="item in upLoadImgData" :key="item.hash">
              {{item.key}}
            </li>
          </ul>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { mavonEditor } from 'mavon-editor'
import HiUpload from '../common/upload'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'publish',
  data() {
    return {
      value: '',
      htmlCode: '',
      ruleInline: {},
      archData: [],
      tagsData: [],
      submitLoading:false,
      publishObj: {
        title: "",
        titleImg: "",
        archive: "",
        auth: sessionStorage.name,
        date: "",
        htmlvalue: "",
        mdValue: "",
        like: 0,
        watch: 0,
        commits: [],
        tags: [],
      },
      isSelect: [],
      upLoadImgData:[],
      progress:0,
    }
  },
  components: {
    mavonEditor,
    HiUpload
  },
  created() {
    this.getTagsList()
    this.getArchList()
  },
  computed: {},
  methods: {
    onInputMd(val, render) {
      this.publishObj.htmlvalue = render
      this.publishObj.mdValue = val
    },
    getTagsList() {
      axios.get(API_URL + '/tags').then(
          function(response) {
            this.tagsData = response.data.Data
            this.spinShow = false
            this.isSelect = new Array(response.data.Data.length).fill(false)
          }.bind(this)
        )
        .catch(
          function(error) {
            this.spinShow = false
          }.bind(this)
        )
    },
    getArchList() {
      axios
        .get(API_URL + '/archive')
        .then(
          function(response) {
            this.archData = response.data.Data
            this.spinShow = false
          }.bind(this)
        )
        .catch(
          function(error) {
            this.spinShow = false
          }.bind(this)
        )
    },
    publishAction() {
      this.isSelect.forEach(
        function(item, index) {
          if (item) {
            this.publishObj.tags.push(this.tagsData[index].name)
          }
        }.bind(this)
      )
      if(this.publishObj.title==''){
        this.$Message.info("title is required")
        return false
      }else if(this.publishObj.titleImg==''){
        this.$Message.info("titleImg is required")
        return false
      }else if(this.publishObj.mdValue==''){
        this.$Message.info("mdValue is required")
        return false
      }else if(this.publishObj.archive==''){
        this.$Message.info("archive is required")
        return false
      }else if(this.publishObj.tags.length==0){
        this.$Message.info("tags is required")
        return false
      }
      this.submitLoading = true
      this.publishObj.date = moment()
        .format()
        .replace('T', ' ')
        .substring(0, 19)
      //console.log(this.publishObj)
      axios.post(API_URL + '/notes', this.publishObj).then(
        function(response) {
          if(response.data.OK){
            this.$Message.info('publish success')
            this.$Notice.success({
              title: 'Publish success',
              desc: '发布成功',
              duration: 0
            })
          }else{
            this.$Message.info(response.data.Data)
          }
          this.submitLoading = false
        }.bind(this)).catch(
        function(error) {
          this.submitLoading = false
        }.bind(this))
    },
    onSlectTags(name, index) {
      this.$set(this.isSelect, index, !this.isSelect[index])
    },
    uploadComplete(state, result, flag){
      this.progress = 0
      this.$Loading.finish()
      if(state==200){
        this.upLoadImgData.push(result)
        this.$Notice.open({
          name:'complete',
          title: '[qiniu]上传成功！',
          desc: 'http://os70o8m36.bkt.clouddn.com/'+result.key,
          duration: 0
        })
        if(flag=='titleImg'){
          this.publishObj.titleImg = 'http://os70o8m36.bkt.clouddn.com/'+result.key
        }
      }else{
        this.$Loading.error()
        this.$Message.info(state)
      }
    },
    onUploadBefore(flag){
      this.$Loading.start()
      this.progress = 0
    },
    uploadProgress(progress){
      this.progress = progress
      if(progress==100){
        this.$Notice.close('progress')
      }
    },
  }
}
</script>

<style lang="less" scoped>
.publish {
  padding: 6px;
  height: 580px;
  .v-note-wrapper {
    z-index: 99;
  }
  .head-img {
    height: 100px;
    img{
      height: 90px;
      vertical-align: middle;
    }
  }
  .tag-span {
    padding: 4px 8px;
    border: 1px solid #eee;
    margin-right: 8px;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 6px;
    &.active {
      border: 1px solid #444;
    }
  }
}
</style>
