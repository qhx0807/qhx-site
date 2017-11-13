<template>
  <div class="home">
    <Headermenu></Headermenu>
    <div class="home-top">
      <div class="slant slant-left"></div>
      <div class="slant slant-right"></div>
      <div class="top-info">
        <div class="top-avatar">
          <router-link to="/">
            <img src="http://img.aktax.cn/wp-content/uploads/2016/09/dashu.jpg" alt="">
          </router-link>
        </div>
        <div class="top-my">
          <p>Carpe Diem and Do what I like</p>
        </div>
        <div class="top-jscb">
          人生本来就没有相欠。别人对你付出，是因为别人欢喜；你对别人付出，是因为自己甘愿。
        </div>
        <div class="top-social">
          <ul>
            <li @mouseover="onMouseOverWechat(1)" @mouseout="onOutWechat(1)">
              <i class="iconfont icon-weixin"></i>
              <div class="inner wechat-inner" :style="{opacity: wechatOpcity,transform: wechatTsf}"></div>
            </li>
            <li>
              <i class="iconfont icon-QQ"></i>
              <div class="inner wechat-inner"></div>
            </li>
            <li>
              <i class="iconfont icon-weibo"></i>
              <div class="inner wechat-inner"></div>
            </li>
            <li>
              <i class="iconfont icon-zhihu"></i>
              <div class="inner wechat-inner"></div>
            </li>
            <li>
              <i class="iconfont icon-zhifubao"></i>
              <div class="inner wechat-inner"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headermenu from './Header.vue'
export default {
  name: 'home',
  data() {
    return {
      wechatOpcity:0,
      wechatTsf: 'translate3d(0,50px,0)',
    }
  },
  components:{
    Headermenu
  },
  computed: {},
  created() {},

  methods: {
    onMouseOverWechat(e){
      switch (e) {
        case 1:
          this.wechatOpcity = 1
          this.wechatTsf = 'translate3d(0,0,0)'
          break;
      
        default:
          break;
      }
    },
    onOutWechat(e){
      switch (e) {
        case 1:
          this.wechatOpcity = 0
          this.wechatTsf = 'translate3d(0,50px,0)'
          break;
      
        default:
          break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  
  .home-top{
    height: 650px;
    background-image: url('http://www.aktax.cn/wp-content/themes/akina/images/headerbg6.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    //z-index: -1;
    position: relative;
    overflow: hidden;
    .slant-left{
      background-color: #fff;
      width: 100%;
      position: absolute;
      right: 48%;
      height: 200px;
      transform: rotate(6deg);
      bottom: -80px;

    }
    .slant-right{
      background-color: #fff;
      width: 100%;
      position: absolute;
      left: 48%;
      height: 200px;
      transform: rotate(-6deg);
      bottom: -80px;

    }
    .top-info{
      position: relative;
      max-width: 800px;
      padding: 0 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      box-sizing: border-box;
      .top-avatar{
        img{
          width: 80px;
          height: auto;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, .3);
        }
      }
      .top-my{
        width: 60%;
        margin: auto;
        font-size: 14px;
        color: #EAEADF;
        background-color: rgba(0, 0, 0, .6);
        padding: 20px 30px;
        margin-top: 25px;
        letter-spacing: 1px;
        line-height: 30px;
        p{
          margin: 0;
        }
      }
      .top-jscb{
        width: 60%;
        margin: auto;
        font-size: 14px;
        color: #EAEADF;
        background-color: rgba(0, 0, 0, .6);
        padding: 20px 30px;
        letter-spacing: 1px;
        line-height: 30px;
        border-top: 1px dashed #f8f8f8;
      }
      .top-social{
        height: 32px;
        margin-top: 30px;
        margin-left: 10px;
        display: inline-block;
        ul{
          list-style: none;
          li{
            float: left;
            margin-right: 13px;
            width: 32px;
            height: 32px;
            background-color: #fff;
            border-radius: 50%;
            line-height: 32px;
            text-align: center;
            position: relative;
            i{
              font-size: 16px;
            }
            .icon-weixin{
              color: #51C332;
            }
            .icon-QQ{
              color: #2A9CD5;
            }
            .icon-weibo{
              color: #FF5466;
            }
            .icon-zhihu{
              font-size: 15px;
              color: #1389E9;
            }
            .icon-zhifubao{
              font-size: 15px;
              color: #07A0F8;
            }
            .inner{
              position: absolute;
              transition: .7s all ease;
            }
            .wechat-inner{
              width: 121px;
              height: 121px;
              padding: 10px;
              background: #fff;
              top: 40px;
              left: -40px;
              transform: translate3d(0, 50px, 0);
              opacity: 0;
            }
          }
        }
      }
    }
    
  }
}
</style>
