<template>
  <div>
    <Home></Home>
    <div class="content">
      <div class="history">
        <div class="title">
          <div class="circle">2017</div>
        </div>
        <div class="his-content">
          <ul>
            <li>
              <div class="li-left">
                <span class="year">2017</span>
                <span class="md">0807</span>
              </div>
              <div class="point">
                <b class="active-point"></b>
              </div>
              <div class="liright">
                <div class="lr-title">
                  <router-link to="/">HTML5发展历史</router-link>
                </div>
                <div class="lr-info">
                  随着用户的访问量增大,功能不能满足需求，我们进行了重大更新，对设计和功能都进行大幅度的升级,增加了原创，欣赏版块
                </div>
              </div>
            </li>
            <li>
              <div class="li-left">
                <span class="year">2017</span>
                <span class="md">0807</span>
              </div>
              <div class="point">
                <b></b>
              </div>
              <div class="liright">
                <div class="lr-title">
                  <router-link to="/">HTML5发展历史</router-link>
                </div>
                <div class="lr-info">随着用户的访问量增大,功能不能满足需求，我们进行了重大更新，对设计和功能都进行大幅度的升级,增加了原创，欣赏版块</div>
              </div>
            </li>
          </ul>
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
  name: 'archives',
  data() {
    return {}
  },
  components: {
    Home,
    FooterPage
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.content {
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  padding-bottom: 20px;
  .history {
    width: 100%;
    position: relative;
    .title {
      .circle {
        height: 95px;
        width: 95px;
        border-radius: 50%;
        border: 6px solid rgba(0, 0, 0, 0.1);
        margin-left: 30%;
        text-align: center;
        line-height: 95px;
        font-size: 24px;
        color: #A0DAD0;
        font-weight: 600;
      }
    }
    .his-content{
      min-height: 400px;
      background: url('../../assets/vertical.png') repeat-y 36% 1px;
      padding-top: 10px;
      ul{
        padding: 0;
        li{
          min-height: 110px;
          position: relative;
          padding: 10px;
          margin-bottom: 20px;
          .li-left{
            position: absolute;
            top: 0;
            left: 0;
            width: 32%;
            height: 55px;
            line-height: 55px;
            text-align: right;
            .year{
              font-size: 12px;
              color: #aeaeae;
              margin-right: 10px;
            }
            .md{
              font-size: 18px;
              color: #AEAEAE;
            }
          }
          .point{
            width: 55px;
            height: 55px;
            position: absolute;
            top: 0;
            left: 33%;
            background:url('../../assets/point.png') no-repeat 0px 18px; 
            overflow: hidden;
            b{
              box-sizing: content-box;
              height: 13px;
              width: 13px;
              background-color: #fff;
              display: block;
              border-radius: 50%;
              border: 2px solid #A0DAD0;
              margin: 19px 0 0 16px;
              transition: all 0.2s linear;
              position: absolute;
              top: 0;
              left: 0;
              &.active-point{
                border: 7px solid #A0DAD0;
                margin: 13px 0 0 11px;
              }
            }
          }
          .liright{
            position: absolute;
            top: 0;
            right: 0;
            width: 60%;
            .lr-title{
              height: 36px;
              line-height: 36px;
              a{
                font-size: 20px;
                color: #747474;
                transition: all 0.3s linear;
                text-decoration: underline;
                &:hover{
                  color: #A0DAD0;
                }
              }
            }
            .lr-info{
              font-size: 14px;
              color: #6e6e6e;
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>
