<template>
  <div class="admin">
    <div class="sidebar-menu-con" :style="{width: hideMenuText?'60px':'200px', overflow: hideMenuText ? 'visible' : 'auto',}">
      <SidebarMenu v-show="!hideMenuText"></SidebarMenu>
      <SidebarMenuShrink v-show="hideMenuText"></SidebarMenuShrink>
    </div>
    <div class="admin-content">
      <div class="con-header">
        <Button type="text" style="margin-top:6px;" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
      </div>
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
    }
  },
  components: {
    SidebarMenu,
    SidebarMenuShrink
  },
  created() {

  },
  methods: {
    toggleClick(){
      this.hideMenuText = !this.hideMenuText
    }
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
    transition: all 0.2s ease;
  }
  .admin-content{
    flex: 1;
    overflow: auto;
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
