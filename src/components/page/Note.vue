<template>
  <div>
    <Home></Home>
    <div class="content">
      
    </div>
    <FooterPage></FooterPage>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Home from './Home'
import FooterPage from './FooterPage'
import axios from 'axios'
export default {
  name: 'index',
  data() {
    return {
      noticeData:[],
      notesData:[],
      isActive:'',
    }
  },
  components:{
    Home,
    FooterPage,
  },
  created () {

  },
  methods: {
    getNotice(){
      axios.get(API_URL + '/notice').then(function(response) {
        this.noticeData = response.data.Data
      }.bind(this)).catch(function(error) {
      }.bind(this))
    },
    
  }
}
</script>

<style lang="less" scoped>
.content{
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
