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
            <li>
              <img src="../../assets/avatar.jpg" alt="">
              <div class="fe-lay">
                <router-link to="/">feature1</router-link>
              </div>
            </li>
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
                <router-link to="/">
                  <i class="iconfont icon-gengduo1"></i>
                </router-link>
              </div>
            </div>
            <hr class="hr">
            <div class="note-info active">
              <p><i class="iconfont icon-pinglun1"></i>&nbsp;<span>1 条评论</span></p>
              <p><i class="iconfont icon-kan"></i>&nbsp;<span>1002 热度</span></p>
            </div>
          </article>
          <article class="note-item">
            <div class="note-inner">
              <div class="note-left">
                <img class="route" src="http://www.aktax.cn/wp-content/themes/akina/images/random/deu4.jpg" alt="">
              </div>
              <div class="note-title">
                  <router-link to="/">Linux目录结构详解</router-link>
              </div>
              <div class="note-time">2018-12-12</div>
              <p class="note-con">/ root，根目录。 文件系统的入口，最高一级目录。 只有root用户具有该目录下的写权限。请注意，/root是root用户的主目 录，这与/.不 一样。 /bin User Binar...
                有root用户具有该目录下的写权限。请注意，/root是root用户的主目 录，这与/.不 一
              </p>
              <div class="note-footer">
                <router-link to="/">
                  <i class="iconfont icon-gengduo1"></i>
                </router-link>
              </div>
            </div>
            <hr class="hr">
          </article>
        </div>
      </div>
      <div class="loadmore">
        <button>加载更多</button>
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
          position: relative;
          overflow: hidden;
          border: 1px solid #f8f8f8;
          &:nth-child(2){
            margin: 0 5px;
          }
          img{
            height: 158px;
            width: 100%;
            transition: 0.5s all ease;
            &:hover{
              transform: scale(1.2); 
            }
          }
          .fe-lay{
            position: absolute;
            height: 120px;
            width: 120px;
            z-index: 9;
            top: 50%;
            margin-top: -60px;
            left:50%;
            margin-left: -60px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, .4);
            display: flex;
            justify-content: center;
            align-items: center;
            a{
              color:#eee;
              font-size: 14px;
            }
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
        
        .note-info{
          position: absolute;
          z-index: 8;
          margin-top: 15px;
          top: 20px;
          left: 0px;
          padding-top: 8px;
          border-top: 1px solid #eee;
          transition: .7s all ease;
          height: 66px;
          width: 88px;
          background-color: #fff;
          opacity: 0;
          p{
            font-size: 12px;
            color: #B3B3B3;
            .icon-pinglun1{
              font-size: 18px;
            }
            i{
              vertical-align: middle;
            }
            span{
              vertical-align: middle;
            }
          }
          &.active{
            left: -90px;
            opacity: 1;
          }
        }
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
            z-index: 9;
            height: 100px;
            width: 100px;
            margin-top: 16px;
            img{
              border: 1px solid #ddd;
              border-radius: 50%;
              padding: 2px;
              transition: 0.6s all ease;
              &.route{
                transform:rotate(360deg);
              }
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
              &:hover{
                color:#A0DAD0;
              }
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
            a{
              font-weight: 800;
              color: #A0DAD0;
              i{
                font-size: 18px;
              }
              &:hover{
                color: #989898;
              }
            }
          }
          
          
        }
        
      }
    }
  }
  .loadmore{
    padding: 20px 0;
    margin: 120px 0 60px 0;
    text-align: center;
    button{
      outline: none;
      padding: 8px 35px;
      border: 1px solid #d6d6d6;
      font-size: 14px;
      border-radius: 50px;
      color: #adadad;
      background-color: #fff;
      cursor: pointer;
      &:hover{
        color:#A0DAD0;
        border: 1px solid #A0DAD0;
      }
    }
  }
}
</style>
