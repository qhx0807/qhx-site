<template>
  <div class="message">
    <Spin fix v-if="spinShow"></Spin>
    <Row>
      <Col span="12" v-for="item in tableData" :key="item._id">
        <Card :bordered="false" @click.native="onClickMsg(item)">
          <div class="avatar">
            <Avatar size="large" :src="item.headImg" />
          </div>
          <div class="msg-content">
            <p>
              {{item.email}}[{{item.location}}/{{item.ip}}]
              <span class="msg-date">
                <span>
                  <Icon type="thumbsup"></Icon>&nbsp;{{item.like}}&nbsp;
                  <Icon type="thumbsdown"></Icon>&nbsp;{{item.unlike}}&nbsp;
                </span>
                &nbsp;
                <Icon type="ios-clock-outline"></Icon>
                <span>{{item.date}}</span>
              </span>
            </p>
            {{item.message}}
          </div>
          <div class="msg-commit">
            <ul>
              <li v-for="(n, index) in item.reply" :key="index">
                <Avatar icon="person" size="small" />
                <span>{{n.email}}[{{n.location}}/{{n.ip}}]：</span>
                <span>{{n.target}}{{n.content}}</span>
                <span>{{n.date}}</span>
              </li>
            </ul>
          </div>
        </Card>
      </Col>
    </Row>
    <Modal v-model="editMOdal" width="800">
      <p slot="header" style="text-align:center">
        <span>UPTATE MESSAGE</span>
      </p>
      <div style="padding-right:20px;">
        <Form :model="editData" :label-width="90">
          <FormItem label="MESSAGE">
            <Input type="textarea" :autosize="{minRows: 4,maxRows: 8}" v-model="editData.message" placeholder="message"></Input>
          </FormItem>
           <FormItem label="AVATAR">
            <Input v-model="editData.headImg" placeholder="headImg"></Input>
          </FormItem>
          <Row>
            <Col span="12">
              <FormItem label="LIKE">
                <InputNumber style="width:100%" v-model="editData.like" :max="9999999" :min="0"></InputNumber>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="UNLIKE">
                <InputNumber style="width:100%" v-model="editData.unlike" :max="9999999" :min="0"></InputNumber>
              </FormItem>
            </Col>
          </Row>
          <div class="reply">
            <ul>
              <li v-for="(n, index) in editData.reply" :key="index">
                <Avatar icon="person" size="small" />
                <span>{{n.email}}[{{n.location}}/{{n.ip}}]：</span>
                <span>{{n.target}}{{n.content}}</span>
                <span>{{n.date}}</span>
                <span style="padding-left:20px;">
                  <a style="color:#f60" @click="deleteRep(index)">delete</a>
                </span>
              </li>
            </ul>
          </div>
        </Form>
      </div>
      <div slot="footer">
        <Button type="ghost" @click="editMOdal=false">关闭</Button>
        <Button type="error" :loading="del_loading" @click="deleteMsg">删除</Button>
        <Button type="primary" :loading="modal_loading" @click="onClickSaveEdit">保存</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'message',
  data() {
    return {
      spinShow: true,
      tableData:[],
      modal_loading:false,
      editMOdal:false,
      del_loading:false,
      editData:{},
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.spinShow = true
      axios.get(API_URL + '/message').then(function(response) {
        console.log(response)
        this.tableData = response.data.Data
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    onClickMsg(item){
      this.editData = item
      this.editMOdal = true
    },
    deleteRep(index){
      if (!this.editData.message) {
        this.$Message.info('message is required')
        return false
      }
      this.modal_loading = true
      axios.put(API_URL + '/message', this.editData).then(function(response) {
        if (response.data.OK) {
          this.editData.reply.splice(index, 1)
          this.$Message.info("delete success!")
          this.getList()
        }
        this.modal_loading = false
      }.bind(this)).catch(function(error) {
        this.modal_loading = false
      }.bind(this))
    },
    onClickSaveEdit(){
      if (!this.editData.message) {
        this.$Message.info('message is required')
        return false
      }
      this.modal_loading = true
      axios.put(API_URL + '/message', this.editData).then(function(response) {
        if (response.data.OK) {
          this.$Message.info("update success!")
          this.editMOdal = false
          this.getList()
        }
        this.modal_loading = false
      }.bind(this)).catch(function(error) {
        this.editMOdal = false
        this.modal_loading = false
      }.bind(this))
    },
    deleteMsg(){
      if (!this.editData._id) return false
      var id = this.editData._id
      this.btn_loading = true
      axios.delete(API_URL + '/message?id=' + id).then(function(response) {
        if (response.data.OK) {
          this.$Message.info("delete success!")
          this.editModal = false
          this.getList()
        } else {
          this.$Message.info("error")
        }
        this.btn_loading = true
      }.bind(this)).catch(function(error) {
        this.btn_loading = true
         this.editModal = false
      }.bind(this))
    },

  }
}
</script>

<style lang="less" scoped>
.message {
  padding: 6px;
  position: relative;
  .avatar{
    position: absolute;
    top: 25px;
  }
  .msg-content{
    padding-left: 60px;
    padding-top: 7px;
    float: left;
    word-break: break-all;
    .msg-date{
      float: right;
      color: #80848f;
      font-size: 12px;
      span{
        vertical-align: middle;
      }
    }
  }
  .msg-commit{
    clear: both;
    padding-top: 5px;
    margin-left: 56px;
    font-size: 12px;
    color: #80848f;
    ul{
      padding: 0;
      li{
        margin-top: 6px;
        span{
          vertical-align: middle;
        }
      }
    }
  }
  .reply{
    background-color: #f8f8f8;
    padding-left: 50px;
  }
}
</style>
