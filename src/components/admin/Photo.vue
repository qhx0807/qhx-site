<template>
  <div class="photo">
    <Spin fix v-if="spinShow"></Spin>
    <ul>
      <li v-for="(item, index) in list" :key="item._id" @click="onClickImg(item)" @mouseover="hoverItem(index)" @mouseout="outItem">
        <img :src="item.url" alt="">
        <div class="info" :class="{'hover-item':actItem==index}">
          {{item.describe}}[{{item.date ? item.date.substring(0,10) : ''}}]
        </div>
        <div class="location">
          <Icon type="ios-location-outline"></Icon>
          <span>{{item.location}}</span>
        </div>
      </li>
      <li class="add" @click="onClickAdd">
        <Icon type="ios-plus-empty" size="34"></Icon>
      </li>
    </ul>

    <Modal v-model="addModal">
      <p slot="header" style="text-align:center">
        <span>INSERT</span>
      </p>
      <div style="padding-right:20px;">
        <Form :model="addData" :label-width="90">
          <FormItem label="DESCRIBE">
            <Input v-model="addData.describe" placeholder="describe"></Input>
          </FormItem>
          <FormItem label="URL">
            <Input v-model="addData.url" placeholder="url"></Input>
          </FormItem>
          <FormItem label="LOCATION">
            <Input v-model="addData.location" placeholder="location"></Input>
          </FormItem>
          <FormItem label="DATE">
            <DatePicker style="width:100%" type="date" :value="addData.date" @on-change="selectDate" placeholder="Select date"></DatePicker>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="ghost" @click="addModal=false">关闭</Button>
        <Button type="primary" :loading="modal_loading" @click="onClickSaveAdd">保存</Button>
      </div>
    </Modal>

    <Modal v-model="editMOdal">
      <p slot="header" style="text-align:center">
        <span>UPTATE</span>
      </p>
      <div style="padding-right:20px;">
        <Form :model="editData" :label-width="90">
          <FormItem label="DESCRIBE">
            <Input v-model="editData.describe" placeholder="describe"></Input>
          </FormItem>
          <FormItem label="URL">
            <Input v-model="editData.url" placeholder="url"></Input>
          </FormItem>
          <FormItem label="LOCATION">
            <Input v-model="editData.location" placeholder="location"></Input>
          </FormItem>
          <FormItem label="DATE">
            <DatePicker style="width:100%" type="date" :value="editData.date" @on-change="selectDate" placeholder="Select date"></DatePicker>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="ghost" @click="editMOdal=false">关闭</Button>
        <Button type="error" :loading="btn_loading" @click="delImg">删除</Button>
        <Button type="primary" :loading="modal_loading" @click="onClickSaveEdit">保存</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'photo',
  data() {
    return {
      spinShow: true,
      editMOdal:false,
      addModal:false,
      modal_loading:false,
      btn_loading:false,
      list: [],
      actItem: -1,
      editData:{},
      addData:{
        url : "",
        date : "",
        describe : "",
        location : "",
      },
    }
  },
  created() {
    this.getList()
    this.addData.date = moment().format().split('T')[0]
  },
  methods: {
    getList() {
      axios.get(API_URL + '/photo').then(function(response) {
        //console.log(response)
        this.list = response.data.Data
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    hoverItem(e) {
      this.actItem = e
    },
    outItem(){
      this.actItem = -1
    },
    onClickImg(item){
      console.log(item)
      this.editData = item
      this.editMOdal = true
    },
    selectDate(e){
      this.editData.date = e
      this.addData.date = e
    },
    delImg(){
      if (!this.editData._id) return false
      var id = this.editData._id
      this.btn_loading = true
      axios.delete(API_URL + '/photo?id=' + id).then(function(response) {
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
    onClickSaveEdit(){
      if (!this.editData.url) {
        this.$Message.info('URL is required')
        return false
      }
      this.modal_loading = true
      axios.put(API_URL + '/photo', this.editData).then(function(response) {
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
    onClickAdd(){
      this.addData = {
        url : "",
        date : "",
        describe : "",
        location : "",
      }
      this.addData.date = moment().format().split('T')[0]
      this.addModal = true
    },
    onClickSaveAdd() {
      if (!this.addData.url) {
        this.$Message.info('url is required')
        return false
      }
      this.modal_loading = true
      axios.post(API_URL + '/photo', this.addData).then(function(response) {
        if (response.data.OK) {
          this.addModal = false
          this.getList()
        }
        this.modal_loading = false
      }.bind(this)).catch(function(error) {
        this.addModal = false
        this.modal_loading = false
      }.bind(this))
    },
  }
}
</script>

<style lang="less" scoped>
.photo {
  padding: 6px;
  position: relative;
  ul {
    padding: 0;
    li {
      height: 190px;
      width: 180px;
      float: left;
      margin: 12px 12px 0 0;
      position: relative;
      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
      }
      &.add {
        background-color: #fff;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .location{
        position: absolute;
        color: #fff;
        right: 5px;
        top: 5px;
        font-size: 14px;
        span{
          font-size: 12px;
        }
      }
      .info {
        max-height: 0px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        overflow: hidden;
        font-size: 12px;
        padding: 6px;
        transition: all 0.7s ease;
        &.hover-item {
          max-height: 80px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
