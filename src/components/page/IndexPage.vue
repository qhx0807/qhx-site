<template>
  <div>
    <Home></Home>
    <div class="content">
      <div class="notice">
        <i class="iconfont icon-shuye"></i>
        <div class="notice-content">注意： 人生本来就没有相欠。别人对你付</div>
      </div>
      <div class="feature">
        <h1 class="fe-title">聚焦</h1>
        <div class="fe-content">
          <ul>
            <li>12</li>
            <li>12</li>
            <li>12</li>
          </ul>
        </div>
      </div>
      <div class="area">
        <div class="main">
          <h1 class="main-title">近况</h1>
          <article class="note-item">
            <div class="note-inner">
              <div class="note-left">
                <img src="http://www.aktax.cn/wp-content/themes/akina/images/random/deu4.jpg" alt="">
              </div>
              <div class="note-title">
                  <router-link to="/">Linux目录结构详解</router-link>
              </div>
              <div class="note-time">2018-12-12</div>
              <p class="note-con">/ root，根目录。 文件系统的入口，最高一级目录。 只有root用户具有该目录下的写权限。请注意，/root是root用户的主目 录，这与/.不 一样。 /bin User Binar...
                有root用户具有该目录下的写权限。请注意，/root是root用户的主目 录，这与/.不 一
              </p>
              <div class="note-footer">
                <span class="more">...</span>
              </div>
            </div>
            <hr class="hr">
          </article>
          <article class="note-item">
            <div class="note-inner">
              <div class="note-left">
                <img src="http://www.aktax.cn/wp-content/themes/akina/images/random/deu4.jpg" alt="">
              </div>
              <div class="note-title">
                  <router-link to="/">Linux目录结构详解</router-link>
              </div>
              <div class="note-time">2018-12-12</div>
              <p class="note-con">/ root，根目录。 文件系统的入口，最高一级目录。 只有root用户具有该目录下的写权限。请注意，/root是root用户的主目 录，这与/.不 一样。 /bin User Binar...
                有root用户具有该目录下的写权限。请注意，/root是root用户的主目 录，这与/.不 一
              </p>
              <div class="note-footer">
                <span class="more">...</span>
              </div>
            </div>
            <hr class="hr">
          </article>
        </div>
      </div>
    </div>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import Home from './Home'
import FooterPage from './FooterPage'
export default {
  name: 'index',
  data() {
    return {

    }
  },
  components:{
    Home,
    FooterPage
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
  padding-bottom: 20px;
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
  .feature{
    width: 100%;
    margin-top: 30px;
    .fe-title{
      color: #757575;
      font-size: 16px;
      font-weight: 400;
      padding-bottom: 12px;
      padding-top: 20px;
      border-bottom: 1px dashed #ececec; 
    }
    .fe-content{
      margin-top: 20px;
      ul{
        list-style: none;
        li{
          float: left;
          width: 32.9%;
          height: 160px;
          border: 1px solid #f8f8f8;
          &:nth-child(2){
            margin: 0 5px;
          }
        }
      }
    }
  }
  .area{
    clear: both;
    .main{
      padding-top: 60px;
      .main-title{
        color: #757575;
        font-size: 16px;
        font-weight: 400;
        padding-bottom: 12px;
        padding-top: 20px;
        border-bottom: 1px dashed #ececec; 
      }
      .note-item{
        margin: 0 0 6% 0;
        position: relative;
        height: 150px;
        .hr{
          height: 1px;
          width: 40%;
          border: 0;
          margin: 0 auto;
          margin-top: 10px;
          background:#EFEFEF;
        }
        .note-inner{
          .note-left{
            position: absolute;
            height: 100px;
            width: 100px;
            margin-top: 16px;
            img{
              border: 1px solid #ddd;
              border-radius: 50%;
              padding: 2px;
            }
          }
          .note-title{
            font-size: 20px;
            font-weight: 400;
            line-height: 50px;
            margin: 0 0 0 136px;
            position: relative;
            z-index: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            a{
              color: rgb(51, 51, 51);
            }
          }
          .note-time{
            position: absolute;
            right: 0;
            top: 16px;
            font-size: 12px;
            color: #989898;
            letter-spacing: 1px;
            
          }
          .note-con{
            max-height: 75px;
            padding-left: 136px;
            font-size: 14px;
            color: #232323;
            letter-spacing: 1px;
            line-height: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            
          }
          .note-footer{
            padding-left: 136px;
            margin-top: 10px;
            text-align: right;
            .more{
              color: #A0DAD0;
              font-weight: 800;
              letter-spacing: 2px;
            }
          }
          
          
        }
        
      }
    }
  }
}
</style>
