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
              <div class="data-icon">1</div>
              <div class="data-num">2</div>
            </div>
          </Card>
        </Col>
        <Col span="3">
          <Card>
            123
          </Card>
        </Col>
        <Col span="3">
          <Card>
            123
          </Card>
        </Col>
        <Col span="3">
          <Card>
            123
          </Card>
        </Col>
        <Col span="3">
          <Card>
            123
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

<style lang="less" >
.dashboard{
  padding: 6px;
  .ivu-card-body{
    padding: 0!important;
  }
  .ivu-col-span-6{
    padding: 0 6px;
  }
  .ivu-col-span-3{
    padding: 0 6px;
  }
  .login-info{
    display: flex;
    padding: 16px;
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
    height: 100px;
    display: flex;
    .data-icon{
      width: 80px;
      //background-color: rgb(45, 140, 240);
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      //color: #fff;
    }
    .data-num{
      flex: 1;
    }
  }
}
</style>
