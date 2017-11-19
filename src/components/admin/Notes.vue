<template>
  <div class="note">
    <Card :bordered="false">
      <Table :columns="columns1" :data="data1"></Table>
    </Card>

  </div>
</template>

<script>
export default {
  name: 'notes',
  data() {
    return {
      columns1: [
        {
          title: '标题',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="less">
.note {
  padding: 6px;
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
