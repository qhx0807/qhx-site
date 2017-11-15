<template>
  <div>
    <Home></Home>
    <div class="content">
        
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
    return {

    }
  },
  components: {
    Home,
    FooterPage
  },
  computed: {
   
  },
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
.content {
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
