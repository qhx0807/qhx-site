<template>
  <div class="header" :style="{top: headerTop + 'px'}">
    <div class="header-wrap">
      <div class="header-logo">
        <img src="../../assets/logo1.png" alt="">
        <span>Qhx's zone</span>
      </div>
      <div class="header-search">
        <i class="ivu-icon ivu-icon-ios-search-strong"></i>
      </div>
      <div class="header-menu">
        <ul>
          <li>
            <router-link to="/">照片</router-link>
            
          </li>
          <li><router-link to="/">留言</router-link></li>
          <li><router-link to="/">归档</router-link></li>
          <li><router-link to="/">标签</router-link></li>
          <li><router-link to="/">首页</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'headermenu',
  data() {
    return {}
  },
  computed: {
    ...mapState(['headerTop'])
  },
  created() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.header {
  height: 100px;
  width: 100%;
  background-color: #fff;
  transition: all 0.4s ease;
  position: fixed;
  top: 0;
  z-index: 99;
  //border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 1px 1px 0px #f8f8f8;
  .header-wrap{
    max-width: 800px;
    margin: 0 auto;
    padding: 0 10px;
    .header-logo{
      float: left;
      height: 100px;
      line-height: 100px;
      img{
        height: 30px;
        width: 30px;
        vertical-align: middle;
      }
      span{
        font-weight: 600;
        font-size: 18px;
        vertical-align: middle;
        margin-left: 5px;
      }
    }
    .header-search{
      float: right;
      margin-left: 20px;
      padding-top: 43px;
      i{
        color: #E2E2E2;
        font-size: 25px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    .header-menu{
      float: right;
      position: relative;
      margin: 24px 0 21px;
      ul{
        list-style: none;
        padding: 0;
        li{
          float: right;
          a{
            padding: 20px;
            display: inline-block;
            color: #545454;
            font-weight: normal;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
