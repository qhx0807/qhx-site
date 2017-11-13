<template>
  <div class="header" :style="{top: headerTop + 'px'}">
    header menu
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'headermenu',
  data() {
    return {}
  },
  computed: {
    ...mapState(['headerTop'])
  },
  created() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.header {
  height: 100px;
  width: 100%;
  background-color: #fff;
  transition: all 0.4s ease;
  position: fixed;
  top: 0;
  z-index: 99;
  //border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 1px 1px 0px #f8f8f8;
}
</style>
