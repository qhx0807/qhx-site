<template>
  <div class="hello">
    <transition
  name="slide"
  enter-active-class="slideInLeft"
  leave-active-class="slideOutRight"
>
  <p v-if="show">hello</p>
</transition>
    <button @click="show = !show">toggle</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
  margin: 0px;
}
</style>
