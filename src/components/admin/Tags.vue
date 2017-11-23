<template>
  <div class="tag">
    <Spin fix v-if="spinShow"></Spin>
    <Row>
      <Col span="3" v-for="item in tableData" :key="item._id">
      <Card @click.native="onClickEditicon(item)" :bordered="false">
        <Icon type="ios-pricetag-outline"></Icon>&nbsp;&nbsp;
        <span class="tag-name">{{item.name}}</span>
      </Card>
      </Col>
      <Col span="2">
      <Card @click.native="onClickAddicon" :bordered="false">
        <Icon type="plus-round"></Icon>
      </Card>
      </Col>
    </Row>
    <Modal v-model="addModal">
      <p slot="header" style="text-align:center">
        <span>添加标签 Tags</span>
      </p>
      <div style="padding-right:20px;">
        <Form :model="addData" :label-width="50">
          <FormItem label="NAME">
            <Input v-model="addData.name" placeholder="name"></Input>
          </FormItem>
          <FormItem label="MEMO">
            <Input v-model="addData.memo" placeholder="name"></Input>
          </FormItem>
          <FormItem label="URL">
            <Input v-model="addData.url" placeholder="url"></Input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="ghost" @click="addModal=false">关闭</Button>
        <Button type="primary" :loading="modal_loading" @click="onClickSaveAdd">保存</Button>
      </div>
    </Modal>
    <Modal v-model="editModal">
      <p slot="header" style="text-align:center">
        <span>修改标签 Tags</span>
      </p>
      <div style="padding-right:20px;">
        <Form :model="editData" :label-width="50">
          <FormItem label="NAME">
            <Input v-model="editData.name" placeholder="name"></Input>
          </FormItem>
          <FormItem label="MEMO">
            <Input v-model="editData.memo" placeholder="name"></Input>
          </FormItem>
          <FormItem label="URL">
            <Input v-model="editData.url" placeholder="url"></Input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="ghost" @click="editModal=false">关闭</Button>
        <Button type="error" @click="delTag" :loading="btnLoading">删除</Button>
        <Button type="primary" :loading="modal_loading" @click="onClickSaveEdit">保存</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'tag',
  data() {
    return {
      tableData: [],
      spinShow: true,
      addModal: false,
      editModal: false,
      modal_loading: false,
      btnLoading: false,
      addData: {
        name: '',
        memo: '',
        url: '',
      },
      editData: {},
    }
  },
  created() {
    this.getTagsList()
  },
  methods: {
    getTagsList() {
      axios.get(API_URL + '/tags').then(function(response) {
        this.tableData = response.data.Data
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    onClickAddicon() {
      this.addModal = true
      this.addData = {
        name: '',
        memo: '',
        url: '',
      }
    },
    onClickEditicon(item) {
      this.editModal = true
      this.editData = item
      console.log(item)
    },
    onClickSaveAdd() {
      if (!this.addData.name) {
        this.$Message.info("tag name is required")
        return false
      }
      this.modal_loading = true
      axios.post(API_URL + '/tags', this.addData).then(function(response) {
        if (response.data.OK) {
          this.addModal = false
          this.getTagsList()
        }
        this.modal_loading = false
      }.bind(this)).catch(function(error) {
        this.modal_loading = false
      }.bind(this))
    },
    delTag() {
      if (!this.editData._id) return false
      var id = this.editData._id
      this.btnLoading = true
      axios.delete(API_URL + '/tags?id=' + id).then(function(response) {
        if (response.data.OK) {
          this.$Message.info("delete success!")
          this.editModal = false
          this.getTagsList()
        } else {
          this.$Message.info("error")
        }
        this.btnLoading = true
      }.bind(this)).catch(function(error) {
        this.btnLoading = true
      }.bind(this))
    },
    onClickSaveEdit() {
      if (!this.editData.name) {
        this.$Message.info("tag name is required")
        return false
      }
      this.modal_loading = true
      axios.put(API_URL + '/tags', this.editData).then(function(response) {
        if (response.data.OK) {
          this.editModal = false
          this.getTagsList()
          this.$Message.info("update success!")
        }
        this.modal_loading = false
      }.bind(this)).catch(function(error) {
        this.modal_loading = false
      }.bind(this))
    },
  }
}
</script>

<style lang="less" >
.tag {
  padding: 6px;
  position: relative;
  .ivu-col {
    padding: 10px;
  }
  .ivu-card-body {
    text-align: center!important;
  }
  .tag-name {
    vertical-align: top;
    font-size: 16px;
  }
}
</style>
