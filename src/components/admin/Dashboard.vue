<template>
  <div class="dashboard">
    <Row>
      <Col span="6">
      <Card :bordered="false">
        <div class="login-info">
          <img :src="headImg" alt="">
          <div class="login-name">
            <h2>{{name}}</h2>
            <p>{{role}}</p>
            <p>上次： {{lastLoginTime}}</p>
            <p>{{lastLoginCity}}&nbsp;&nbsp; {{lastLoginIp}} </p>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="3">
      <Card :bordered="false">
        <div class="data-wrap">
          <div class="data-icon">
            <Icon type="eye" size="30" color="rgb(100, 213, 114);"></Icon>
          </div>
          <div class="data-num">
            <p>今日浏览量</p>
            <p>{{staData.tpv}}</p>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="3">
      <Card :bordered="false">
        <div class="data-wrap">
          <div class="data-icon">
            <Icon size="30" type="arrow-graph-up-right"></Icon>
          </div>
          <div class="data-num">
            <p>历史浏览量</p>
            <p>{{staData.pv}}</p>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="3">
      <Card :bordered="false">
        <div class="data-wrap">
          <div class="data-icon">
            <Icon size="30" type="ios-heart"></Icon>
          </div>
          <div class="data-num">
            <p>点赞</p>
            <p>{{staData.like}}</p>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="3">
      <Card :bordered="false">
        <div class="data-wrap">
          <div class="data-icon">
            <Icon size="30" type="images"></Icon>
          </div>
          <div class="data-num">
            <p>照片</p>
            <p>{{staData.photo}}</p>
          </div>
        </div>
      </Card>
      </Col>
      <Col span="3">
      <Card :bordered="false">
        <div class="data-wrap">
          <div class="data-icon">
            <Icon size="30" type="ios-cloud"></Icon>
          </div>
          <div class="data-num">
            <p>服务调用</p>
            <p>{{staData.api}}</p>
          </div>
        </div>
      </Card>
      </Col>
      <!-- <Col span="3">
      <Card :bordered="false">
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
      </Col> -->
      <Col span="3">
      <Card :bordered="false">
        <div class="data-wrap">
          <div class="data-icon">
            <Icon size="30" type="ios-cloud-upload"></Icon>
          </div>
          <div class="data-num">
            <p>今日服务调用</p>
            <p>{{staData.tapi}}</p>
          </div>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'dashboard',
  data() {
    return {
      name: '',
      role: '',
      lastLoginTime: '',
      lastLoginCity: '',
      lastLoginIp: '',
      headImg: '',
      staData:{},
    }
  },
  created() {
    this.name = sessionStorage.name
    this.role = sessionStorage.role
    this.lastLoginTime = sessionStorage.lastLoginTime
    //alert(sessionStorage.lastLoginTime)
    this.lastLoginCity = sessionStorage.lastLoginCity
    this.lastLoginIp = sessionStorage.lastLoginIp
    this.headImg = sessionStorage.headImg
    this.getData()
  },
  methods: {
    getData(){
      axios.get(API_URL + '/sta').then(function(response) {
        this.staData = response.data
      }.bind(this)).catch(function(error) {
      }.bind(this))
    },
  }
}
</script>

<style lang="less" scoped>
.dashboard {
  padding: 6px;
  .ivu-col-span-6 {
    padding: 0 6px;
  }
  .ivu-col-span-3 {
    padding: 0 6px;
  }
  .login-info {
    display: flex;
    img {
      height: 90px;
      width: 90px;
    }
    .login-name {
      padding-left: 30px;
      flex: 1;
      padding-top: 4px;
      text-transform: capitalize;
      h2 {
        font-size: 22px;
      }
    }
  }
  .line {
    border: none;
    margin-top: 12px;
    border-bottom: 1px solid #eee;
  }
  .data-wrap {
    height: 60px;
    display: flex;
    .data-icon {
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .data-num {
      flex: 1;
      padding-top: 8px;
      padding-left: 6px;
      p {
        height: 20px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.65);
        &:nth-child(2) {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
        }
      }
    }
  }
}
</style>
