<template>
  <div class="notice">
    <Spin fix v-if="spinShow"></Spin>
    <Card style="margin-bottom:12px;" v-for="item in list" :key="item._id">
      <div class="n-wrap">
        {{item.content}}
        <span style="padding-left:20px;">[{{item.date}}/{{item.user}}]</span>
        <div class="n-operation">
          <Button type="text" @click="onClickMod(item)">UPDATE</Button>
          <Button type="text" @click="onClickDel(item._id)" :loading="btnLoading">DELETE</Button>
        </div>
      </div>
    </Card>
    <Card @click.native="onClickAddicon" :bordered="false">
      <Icon type="plus-round"></Icon>
    </Card>
    <div>
      <Modal v-model="addModal">
        <p slot="header" style="text-align:center">
          <span>INSERT</span>
        </p>
        <div style="padding-right:20px;">
          <Form :model="addData" :label-width="100">
            <FormItem label="CONTENT">
              <Input type="textarea" v-model="addData.content" placeholder="content"></Input>
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
      <Modal v-model="modModal">
        <p slot="header" style="text-align:center">
          <span>UPDATE</span>
        </p>
        <div style="padding-right:20px;">
          <Form :model="editData" :label-width="100">
            <FormItem label="CONTENT">
              <Input type="textarea" v-model="editData.content" placeholder="content"></Input>
            </FormItem>
            <FormItem label="DATE">
              <DatePicker style="width:100%" type="date" :value="editData.date" @on-change="selectDate" placeholder="Select date"></DatePicker>
            </FormItem>
          </Form>
        </div>
        <div slot="footer">
          <Button type="ghost" @click="modModal=false">关闭</Button>
          <Button type="primary" :loading="modal_loading" @click="onClickSaveEdit">保存</Button>
        </div>
      </Modal>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'notice',
  data() {
    return {
      list: [],
      modal_loading: false,
      spinShow: false,
      addModal: false,
      modModal: false,
      btnLoading: false,
      addData: {
        content: '',
        date: '',
        user: sessionStorage.name,
      },
      editData: {},
    }
  },
  created() {
    this.getList()
    this.addData.date = moment().format().split('T')[0]
  },
  methods: {
    getList() {
      axios.get(API_URL + '/notice').then(function(response) {
        //console.log(response)
        this.list = response.data.Data
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    onClickMod(item) {
      this.editData = item
      this.modModal = true
    },
    onClickAddicon() {
      this.addData = {
        content: '',
        date: '',
        user: sessionStorage.name,
      }
      this.addData.date = moment().format().split('T')[0]
      this.addModal = true
    },
    onClickSaveAdd() {
      if (!this.addData.content) {
        this.$Message.info('CONTENT is required')
        return false
      }
      this.modal_loading = true
      axios.post(API_URL + '/notice', this.addData).then(function(response) {
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
    onClickSaveEdit(){
      if (!this.editData.content) {
        this.$Message.info('CONTENT is required')
        return false
      }
      this.modal_loading = true
      axios.put(API_URL + '/notice', this.editData).then(function(response) {
        if (response.data.OK) {
          this.$Message.info("update success!")
          this.modModal = false
          this.getList()
        }
        this.modal_loading = false
      }.bind(this)).catch(function(error) {
        this.modModal = false
        this.modal_loading = false
      }.bind(this))
    },
    onClickDel(id) {
      this.$Modal.confirm({
        title: 'Confirm',
        content: '<p>Confirm delete notice</p>',
        onOk: () => {
          axios.delete(API_URL + '/notice?id=' + id).then(function(response) {
            if (response.data.OK) {
              this.$Message.info("delete success!")
              this.getList()
            } else {
              this.$Message.info("error")
            }
          }.bind(this)).catch(function(error) {
          }.bind(this))
        },
        onCancel: () => {
          this.$Message.info('Clicked cancel')
        }
      })

    },
    selectDate(e) {
      this.addData.date = e
      this.editData.date = e
    }
  }
}
</script>

<style lang="less" scoped>
.notice {
  padding: 6px;
  position: relative;
  .n-wrap {
    position: relative;
    .n-operation {
      position: absolute;
      right: 20px;
      top: 0;
    }
  }
}
</style>
