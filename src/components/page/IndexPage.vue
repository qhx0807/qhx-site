<template>
  <div>
    <Home></Home>
    <div class="content">
      <div class="notice">
        <i class="iconfont icon-shuye"></i>
        <div class="notice-content">注意： 人生本来就没有相欠。别人对你付</div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './Home'
export default {
  name: 'index',
  data() {
    return {

    }
  },
  components:{
    Home
  },
  created () {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.content{
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  .notice{
    margin-top: 30px;
    padding: 20px;
    border: 1px dashed #e6e6e6;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    background-color: #f8f8f8;
    .icon-shuye{
      color: #A0DAD0;
      float: left;
      margin-right: 10px;
      vertical-align: bottom;
      font-size: 20px;
      padding-top: 2px;
    }
    .notice-content{
      display: inline-block;
      font-size: 14px;
      color: #969696;
      line-height: 24px;
    }
  }
}
</style>
