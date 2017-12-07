<template>
  <div>
    <Home></Home>
    <div class="photo-content">
      photo
    </div>
    <FooterPage></FooterPage>
  </div>
  
</template>

<script>
import Home from './Home'
import FooterPage from './FooterPage'
import axios from 'axios'
export default {
  name: 'photo',
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
.photo-content {
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
