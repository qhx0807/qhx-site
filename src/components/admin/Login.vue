<template>
  <div class="login">
    <div class="login-wrap">
      <h2>SIGN IN</h2>
      <div class="from-group">
        <input type="text" v-model="name" placeholder="USERNAME">
      </div>
      <div class="from-group">
        <input type="text" v-model="psd" placeholder="PASSWORD">
      </div>
      <div class="from-group">
        <p>Only for the administrators .</p>
      </div>
      <div class="from-group">
        <button @click="onClickLogin">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      name:'',
      psd:'',
    }
  },
  created() {

  },
  methods: {
    onClickLogin(){
      this.$router.push({name: 'Admin'})
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg.png') repeat;
  position: relative;
  .login-wrap {
    width: 360px;
    height: 460px;
    background-color: #fff;
    box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
    padding: 30px;
    position: absolute;
    top: 50%;
    margin-top: -300px;
    left: 50%;
    margin-left: -180px;
    h2{
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0 0 50px 0;
      color: #666;
      font-size: 20px;
      font-weight: 500;
    }
    .from-group{
      margin-bottom: 30px;
      input{
        font-size: 16px;
        font-weight: 300;
        height: 50px;
        width: 100%;
        padding: 6px 0;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        border-radius: 0;
        transition: all .4s ease;
      }
      p{

      }
      button{
        border: none;
        outline: none;
        height: 50px;
        padding: 6px 20px;
        cursor: pointer;
        background-color: #33cccc;
        color: #fff;
      }
    }
  }
}
</style>
