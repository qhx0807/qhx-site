<template>
  <div class="publish">
    <Row>
      <Col span="19">
        <Form ref="formInline" :model="publishObj" :rules="ruleInline">
          <FormItem prop="" label="文章标题" :label-width="80">
            <Input type="text" v-model="publishObj.title">
            </Input>
          </FormItem>
        </Form>
        <mavon-editor :ishljs="true" @change="onInputMd" :value="publishObj.mdValue" code-style="code-hybrid" style="height: 800px"></mavon-editor>
      </Col>
      <Col span="5" style="padding-left:10px;">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="image"></Icon>
          图片
        </p>
        <div class="head-img">
          
        </div>
      </Card>
      <Card :bordered="false" style="margin-top:12px;">
        <p slot="title">
          <Icon type="ios-pricetags-outline"></Icon>
          标签
        </p>
        <div>
          <span class="tag-span" @click="onSlectTags(item.name, index)"  v-for="(item, index) in tagsData" :class="{active : isSelect[index]}" :key="item._id">{{item.name}}</span>
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
          <Button type="primary" @click="publishAction">发布文章</Button>
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
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'publish',
  data() {
    return {
      value: '',
      htmlCode: '',
      formInline:{},
      ruleInline:{},
      archData:[],
      tagsData:[],
      publishObj:{
        archive:'',
        title:'',
        htmlvalue:'',
        mdValue:'',
        date:'',
        titleImg:'',
        auth: sessionStorage.name,
        like: 0,
        watch: 0,
        commits:[],
      },
      isSelect: null,
    }
  },
  components: {
    mavonEditor
  },
  created() {
    this.getTagsList()
    this.getArchList()
  },
  methods: {
    onInputMd(val, render) {
      this.publishObj.htmlvalue = render
      this.publishObj.mdValue = val
    },
    getTagsList() {
      axios.get(API_URL + '/tags').then(function(response) {
        this.tagsData = response.data.Data
        this.spinShow = false
        this.isSelect = new Array(response.data.Data.length).fill(false)
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    getArchList() {
      axios.get(API_URL + '/archive').then(function(response) {
        this.archData = response.data.Data
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    publishAction(){
      this.publishObj.date = moment().format().replace('T', ' ').substring(0,19)
      console.log(this.publishObj)
    },
    onSlectTags(name,index){
      this.isSelect[index] = !this.isSelect[index]
      console.log(this.isSelect)
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
  .head-img{
    height: 100px;
  }
  .tag-span{
    padding: 4px 8px;
    border: 1px solid #eee;
    margin-right: 8px;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 6px;
    &.active{
      border: 1px solid #444;
    }
  }
}
</style>
