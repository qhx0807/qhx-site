<template>
  <div class="footer">
    <div class="foot-info">
		  Copyright &copy; 2017	.All rights reserved.	
      <span> | </span>
      <a href="www.qhxing.site">qhx's Zone</a>
      <span> | </span>
      Theme frome <a href="">fuzzz.</a>
      <div><a href="">网站统计</a></div>
      <div>渝ICP备xxxx</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'FooterPage',
  data () {
    return {
      
    }
  },
  created () {
    
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
.footer{
  clear: both;
  padding: 2%;
  margin-top: 12px;
  background-color: #fff;
  border-top: 1px solid #f7f7f7;
  .foot-info{
    text-align: center;
    font-size: 13px;
    color: #B9B9B9;
    a{
      color: #848484;
      &:hover{
        color: #A0DAD0;
      }
    }
  }
}
</style>


