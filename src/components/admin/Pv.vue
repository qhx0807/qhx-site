<template>
  <div class="pv">
    <Spin fix v-if="spinShow"></Spin>
    <Card :bordered="false">
      <Row>
        <Col span="4">
          <DatePicker type="date" @on-change="onSelectDate" :options="optionsDis" placeholder="Select date" ></DatePicker>
        </Col>
        <Col span="4">
          <Button type="primary" @click="queryPv">QUERY</Button>
        </Col>
      </Row>
    </Card>
    <Card :bordered="false" style="margin-top:12px">
      <Table :columns="tableColumns" :data="tableData | limitBy(offset)"></Table>
      <div class="page">
        <Page show-total :total="total" :current="currentPage" @on-change="changePage"></Page>
      </div>
      <div style="clear:both;"></div>
    </Card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pv',
  data() {
    return {
      spinShow: false,
      tableData: [],
      total: 0,
      currentPage: 1,
      offset: 0,
      selectDate:'',
      optionsDis: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now()
        }
      },
      tableColumns: [
        {
          title: 'Time',
          key: 'time',
        },
        {
          title: 'IP',
          key: 'ip',
        },
        {
          title: 'LOCATION',
          key: 'location',
        },
        // {
        //   title: 'Params',
        //   key: 'params',
        //   render: (h, params) => {

        //   }
        // },
      ],
    }
  },
  created() {
    this.getList("")
  },
  filters: {
    limitBy: function(arr, offset) {
      return arr.slice(offset, 10 + offset)
    }
  },
  methods: {
    getList(date) {
      this.spinShow = true
      axios.get(API_URL + '/pv?date=' + date).then(function(response) {
        this.tableData = response.data.Data
        this.total = response.data.Data.length
        this.spinShow = false
      }.bind(this)).catch(function(error) {
        this.spinShow = false
      }.bind(this))
    },
    changePage(e) {
      this.currentPage = e
      this.offset = (e - 1) * 10
    },
    onSelectDate(e){
      this.selectDate = e
    },
    queryPv(){
      this.getList(this.selectDate)
    },
  }
}
</script>

<style lang="less" >
.pv {
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
  .page {
    float: right;
    padding-top: 20px;
  }
}
</style>
