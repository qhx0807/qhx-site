<template>
  <div class="admin">
    <Button type="primary">Primary</Button>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
      name: '',
      psd: '',
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.admin{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
