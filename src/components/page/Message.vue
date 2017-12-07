<template>
  <div>
    <Home></Home>
    <div class="msg-content">
      <div class="msg-from">
        <aside class="msg-from-head">123</aside>
        <textarea placeholder="请给我留言~"></textarea>
        <div class="msg-from-foot">
          <div class="user-fields">
            <label>
              <input type="text" placeholder="个性昵称">
            </label>
            <label>
              <input type="text" placeholder="电子邮箱">
            </label>
            <label>
              <button>发布</button>
            </label>
          </div>
        </div>
      </div>
    </div>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import Home from './Home'
import FooterPage from './FooterPage'
import axios from 'axios'
export default {
  name: 'msg',
  data() {
    return {

    }
  },
  components: {
    Home,
    FooterPage,
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.msg-content {
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  padding-bottom: 20px;
  .msg-from {
    &-head {
      height: 44px;
      padding: 10px;
      padding-left: 200px;
    }
    textarea {
      width: 800px;
      outline: none;
      border: 1px solid rgb(222, 222, 221);
      resize: none;
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .1);
      min-height: 90px;
      font-size: 14px;
      padding: 6px 16px;
    }
    &-foot {
      margin-top: 16px;
      width: 800px;
      &:after{
        clear: both;
        content:'';
        display:block;
        width:0;
        height:0;
        visibility:hidden;
      }
      .user-fields {
        float: right;
        max-width: 90%;
        display: flex;
        label{
          margin: 0 0 0 15px;
          display: inline-block;
          vertical-align: middle;
          input{
            width: 240px;
            color: #525251;
            border: 1px solid rgba(0, 0, 0, .1);
            outline: none;
            appearance: none;
            font-size: 14px;
            height: 32px;
            padding: 6px 15px;
          }
          button{
            width: 100px;
            padding: 6px 16px;
            height: 32px;
            border: none;
            outline: none;
            line-height: 20px;
            font-size: 14px;
            background-color: #A0DAD0;
            color: #fff;
            cursor: pointer;
          }
        }
        
      }
    }
  }
}
</style>
