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
      </div>
    </div>
  </div>
</template>

<script>
import Headermenu from './Header.vue'
export default {
  name: 'home',
  data() {
    return {}
  },
  components:{
    Headermenu
  },
  computed: {},
  created() {},

  methods: {}
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
    z-index: -1;
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
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
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
        background-color: rgba(0, 0, 0, .66);
        padding: 20px 30px;
        margin-top: 30px;
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
        background-color: rgba(0, 0, 0, .66);
        padding: 20px 30px;
        letter-spacing: 1px;
        line-height: 30px;
        border-top: 1px dashed #f8f8f8;
      }
    }
    
  }
}
</style>
