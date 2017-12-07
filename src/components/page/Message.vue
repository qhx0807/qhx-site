<template>
  <div>
    <Home></Home>
    <div>
      msg
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

</style>
