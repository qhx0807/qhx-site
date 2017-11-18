<template>
  <div class="dashboard">
    <Row>
        <Col span="6">
          <Card>
            <div class="login-info">
              <img src="../../assets/avatar.jpg" alt="">
              <div class="login-name">
                <h2>Admin</h2>
                <p>super administrator</p>
                <p>上次登录时间： 2017-09-12 12:09:22</p>
              </div>
            </div>
            <!-- <hr class="line"> -->
          </Card>
        </Col>
        <Col span="3">
          <Card>
            <div class="data-wrap">
              <div class="data-icon">
                <Icon type="ios-eye" size="30" color="rgb(100, 213, 114);"></Icon>
              </div>
              <div class="data-num">
                <p>今日浏览量</p>
                <p>2123</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col span="3">
          <Card>
            <div class="data-wrap">
              <div class="data-icon">
                <Icon type="eye" size="30" color="rgb(100, 213, 114);"></Icon>
              </div>
              <div class="data-num">
                <p>历史浏览量</p>
                <p>2123</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col span="3">
          <Card>
            <div class="data-wrap">
              <div class="data-icon">
                <Icon size="30" type="ios-heart"></Icon>
              </div>
              <div class="data-num">
                <p>点赞</p>
                <p>2123</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col span="3">
          <Card>
            <div class="data-wrap">
              <div class="data-icon">
                <Icon size="30" type="images"></Icon>
              </div>
              <div class="data-num">
                <p>照片</p>
                <p>2123</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col span="3">
          <Card>
            <div class="data-wrap">
              <div class="data-icon">
                <Icon size="30" type="ios-cloud"></Icon>
              </div>
              <div class="data-num">
                <p>服务调用</p>
                <p>2123</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col span="3">
          <Card>
            <div class="data-wrap">
              <div class="data-icon">
                <Icon size="30" type="compose"></Icon>
              </div>
              <div class="data-num">
                <p>笔记</p>
                <p>2123</p>
              </div>
            </div>
          </Card>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name:'dashboard',
  data () {
      return {
          
      }
  },
  created () {
      
  },
  methods: {
      
  }
}
</script>

<style lang="less" scoped>
.dashboard{
  padding: 6px;
  .ivu-col-span-6{
    padding: 0 6px;
  }
  .ivu-col-span-3{
    padding: 0 6px;
  }
  .login-info{
    display: flex;
    img{
      height: 90px;
      width: 90px;
    }
    .login-name{
      padding-left: 30px;
      flex: 1;
      padding-top: 20px;
      h2{
        font-size: 22px;
      }
    }
  }
  .line{
    border: none;
    margin-top: 12px;
    border-bottom: 1px solid #eee;
  }
  .data-wrap{
    height: 60px;
    display: flex;
    .data-icon{
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .data-num{
      flex: 1;
      padding-top: 8px;
      padding-left: 6px;
      p{
        height: 20px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.65);
        &:nth-child(2){
          font-size: 18px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
        }
      }
    }
  }
}
</style>
