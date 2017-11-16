<template>
  <div class="admin">
    <div class="sidebar-menu-con" :style="{width: hideMenuText?'60px':'200px', overflow: hideMenuText ? 'visible' : 'auto',}">
      <SidebarMenu></SidebarMenu>
    </div>
    <div class="admin-content">
      <div class="con-header"></div> 
    </div>
  </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'
import SidebarMenuShrink from './SidebarMenuShrink.vue'
export default {
  name: 'admin',
  data() {
    return {
      hideMenuText: false,
      hideMenuText: false,
    }
  },
  components: {
    SidebarMenu
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.admin {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  background: url('../../assets/bg.png') repeat;
  .sidebar-menu-con {
    height: 100%;
    background: rgb(73, 80, 96);
  }
  .admin-content{
    flex: 1;
    .con-header{
      height: 60px;
      width: 100%;
      position: fixed;
      background-color: #fff;
      z-index: 99;
      box-shadow: 0 2px 1px 1px rgba(99, 99, 99, 0.1);
    }
  }
}
</style>
