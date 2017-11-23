<template>
  <div class="log">
    <Spin fix v-if="spinShow"></Spin>
    <Card :bordered="false">
      <Table :columns="tableColumns" :data="tableData"></Table>
      <div class="page">
        <Page :total="total" :current="currentPage" @on-change="changePage"></Page>
      </div>
      <div style="clear:both;"></div>
    </Card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'log',
  data() {
    return {
      spinShow:false,
      tableData: [],
      total:0,
      currentPage:1,
      tableColumns: [
        {
          title: 'Api',
          key: 'api',
          width: 150,
        },
        {
          title: 'Time',
          key: 'time',
          width: 180,
        },
        {
          title: 'Method',
          key: 'method',
          width: 150,
        },
        {
          title: 'Body',
          key: 'body',
          render: (h, params) => {
            return JSON.stringify(params.row.body)
          }
        },
        {
          title: 'Params',
          key: 'params',
          render: (h, params) => {
            return JSON.stringify(params.row.params)
          }
        },
      ],
    }
  },
  created() {
    this.getList(this.currentPage)
  },
  methods: {
    getList(page){
      this.spinShow = true
      axios.get(API_URL + '/log?page='+ page).then(function(response) {
        //console.log(response)
        this.tableData = response.data.Data
        this.total = response.data.Total
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    changePage(e){
      this.getList(e)
    },
  }
}
</script>

<style lang="less" scoped>
.log {
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
  .page{
    float: right;
    padding-top: 20px;
  }
}
</style>
