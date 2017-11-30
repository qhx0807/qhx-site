<template>
    <div>
        <div class="layout-logo-left"></div>
        <template v-for="(item, index) in menuList">
            <Tooltip :class="{active:active==index}" :key="index" :content="item.text" placement="right">
                <Button style="width: 60px;margin-left: 0px;padding:10px 0;" type="text"  @click="selectMenu(index,item.name)">
                    <Icon :size="22" :color="iconColor" :type="item.icon"></Icon>
                </Button>
            </Tooltip>
        </template>
    </div>
</template>

<script>
export default {
	name: "SidebarMenu",
	data() {
		return {
			activeName:'CarList',
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
            iconColor:'#ffffff',
			active:-1,
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
		selectMenu(index,e){
            this.active = index
            this.$router.push({name: e})
		},
	}
};
</script>

<style lang="less" scoped>
.layout-logo-left {
	width: 90%;
	height: 30px;
	background: #5b6270;
	border-radius: 3px;
	margin: 15px auto;
}
.active{
    background: #363E4F;
}
</style>
