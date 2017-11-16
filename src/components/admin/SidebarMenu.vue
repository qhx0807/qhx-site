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
					name:'CarList',
					icon:'ios-home-outline',
					text:'首页',
				},
				{
					name:'Review',
					icon:'document',
					text:'笔记',
				},

				{
					name:'Account',
					icon:'ios-pricetag-outline',
					text:'标签',
				},
				{
					name:'Account',
					icon:'volume-high',
					text:'公告',
				},
				{
					name:'Log',
					icon:'ios-photos-outline',
					text:'留言板',
				},
				{
					name:'Setting',
					icon:'images',
					text:'照片墙',
				},
				{
					name:'Setting',
					icon:'paper-airplane',
					text:'发布文章',
				},
				{
					name:'Setting',
					icon:'ios-calendar',
					text:'日志查询',
				},
				{
					name:'Setting',
					icon:'stats-bars',
					text:'网站浏览',
				},
				{
					name:'Setting',
					icon:'ios-person',
					text:'账户管理',
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
