<template>
  <div class="tag">
    <Spin fix v-if="spinShow"></Spin>
    <Row>
      <Col span="3" v-for="item in tableData" :key="item._id">
      <Card :bordered="false">
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
        <Form :model="formItem" :label-width="50">
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
      modal_loading: false,
      addData: {
        name: '',
        memo: '',
        url: '',
      },
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
    },
    onClickSaveAdd() {

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
