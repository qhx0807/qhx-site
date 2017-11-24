<template>
  <div class="manager">
    <Card :bordered="false">
      <Table :columns="tableColumns" :data="tableData"></Table>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'manager',
  data() {
    return {
      tableData:[],
      tableColumns:[
        {
          title:'登录名',
          key:'name',
        },
        {
          title:'密码',
          key:'pwd',
        },
        {
          title:'上次登录时间',
          key:'lastLoginTime',
        },
        {
          title:'上次登录IP',
          key:'ip',
        },
        {
          title:'上次登录地点',
          key:'location',
        },
        {
          title:'角色',
          key:'role',
        },
        {
          title:'头像',
          key:'headImg',
        },
         {
          title:'操作',
          key:'_id',
        },
      ],
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
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
