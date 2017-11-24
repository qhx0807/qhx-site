<template>
  <div class="manager">
    <Spin fix v-if="spinShow"></Spin>
    <Card :bordered="false">
      <Table :columns="tableColumns" :data="tableData"></Table>
    </Card>

    <Modal v-model="editMOdal">
      <p slot="header" style="text-align:center">
        <span>UPTATE</span>
      </p>
      <div style="padding-right:20px;">
        <Form :model="editData" :label-width="90">
          <FormItem label="NAME">
            <Input v-model="editData.name" placeholder="name"></Input>
          </FormItem>
          <FormItem label="PASSWORLD">
            <Input v-model="editData.pwd" placeholder="pwd"></Input>
          </FormItem>
          <FormItem label="ROLE">
            <Input v-model="editData.role" placeholder="role"></Input>
          </FormItem>
           <FormItem label="AVATAR">
            <Input v-model="editData.headImg" placeholder="headImg"></Input>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="ghost" @click="editMOdal=false">关闭</Button>
        <Button type="primary" :loading="modal_loading" @click="onClickSaveEdit">保存</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'manager',
  data() {
    return {
      spinShow: true,
      editMOdal:false,
      modal_loading:false,
      tableData: [],
      tableColumns: [
        {
          title: '登录名',
          key: 'name',
          width: 100,
        },
        {
          title: '密码',
          key: 'pwd',
          width: 100,
        },
        {
          title: '上次登录时间',
          key: 'lastLoginTime',
          width: 180,
        },
        {
          title: '上次登录IP',
          key: 'ip',
          width: 140,
        },
        {
          title: '上次登录地点',
          key: 'location',
          width: 140,
        },
        {
          title: '角色',
          key: 'role',
          width: 180,
        },
        {
          title: '头像',
          key: 'headImg',
        },
        {
          title: '操作',
          key: '_id',
          width: 150,
          render: (h, params) => {
            return h('Button', {
              props: {
                type: 'text'
              },
              on: {
                click: () => {
                  this.onClickMod(params.row)
                }
              }
            }, 'UPDATE')
          }
        },
      ],
      editData: {},
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.spinShow = true
      axios.get(API_URL + '/user').then(function(response) {
        this.tableData = response.data.Data
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    onClickMod(item) {
      //console.log(item)
      this.editData = item
      this.editMOdal = true
    },
    onClickSaveEdit(){
      if (!this.editData.name) {
        this.$Message.info('NAME is required')
        return false
      }
      this.modal_loading = true
      axios.put(API_URL + '/user', this.editData).then(function(response) {
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
    }
  }
}
</script>

<style lang="less" >
.manager {
  padding: 6px;
  position: relative;
  .ivu-table-wrapper {
    border: none!important;
  }
  .ivu-table:before {
    height: 0;
  }
  .ivu-table:after {
    width: 0;
  }
}
</style>
