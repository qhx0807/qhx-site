<template>
    <Menu :active-name="activeName" theme="dark" width="auto" @on-select="selectMenu">
        <div class="layout-logo-left"></div>
		<MenuItem v-for="item in menuList" :key="item.name" :name="item.name">
			<Icon :type="item.icon" :size="iconSize"></Icon>
            <span class="layout-text">{{item.text}}</span>
		</MenuItem>
		
    </Menu>
</template>

<script>
export default {
	name: "SidebarMenu",
	data() {
		return {
			activeName:'CarList',
			iconSize:18,
			menuList:[
				{
					name:'Dashboard',
					icon:'ios-home-outline',
					text:'首页',
				},
				{
					name:'Notes',
					icon:'document',
					text:'笔记',
				},
				{
					name:'NoteTags',
					icon:'ios-pricetag-outline',
					text:'标签',
				},
				{
					name:'Archive',
					icon:'ios-folder-outline',
					text:'归档',
				},
				{
					name:'Notice',
					icon:'volume-high',
					text:'公告',
				},
				{
					name:'Message',
					icon:'ios-photos-outline',
					text:'留言板',
				},
				{
					name:'Photo',
					icon:'images',
					text:'照片墙',
				},
				{
					name:'Publish',
					icon:'paper-airplane',
					text:'发布文章',
				},
				{
					name:'Log',
					icon:'ios-calendar',
					text:'日志查询',
				},
				{
					name:'Pv',
					icon:'stats-bars',
					text:'网站浏览',
				},
				{
					name:'Manager',
					icon:'ios-person',
					text:'账户管理',
				},
				{
					name:'Qiniu',
					icon:'ios-cloud-outline',
					text:'七牛对象存储',
				},
            ],
			auth:[],
			isadmin:null,
		}
	},
	created () {
		// if(sessionStorage.auth){
		// 	this.auth = sessionStorage.auth.split('')
		// 	this.isadmin = sessionStorage.isadmin
		// }else{
		// 	//this.$Message.info("请登录~~")
		// 	this.$router.replace({name:'Login'})
		// }
	},
	methods:{
		selectMenu(e){
            this.$router.push({name: e})
		},
	}
};
</script>

<style lang="less" scoped>
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
.ivu-menu-dark.ivu-menu-vertical
	.ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
	color: rgba(255, 255, 255, 0.7);
}
.layout-menu-left {
  background: #464c5b;
  overflow: auto;
}
.layout-logo-left {
	width: 90%;
	height: 30px;
	background: #5b6270;
	border-radius: 3px;
	margin: 15px auto;
}
</style>
