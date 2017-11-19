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
		<!-- <template v-if="auth[0]==1 || auth[2]==1 || auth[4]==1">
			<Tooltip :class="{active:active==0}" content="车辆列表" placement="right">
				<Button style="width: 60px;margin-left: 0px;padding:10px 0;" type="text"  @click="selectMenu(0,'CarList')">
                    <Icon :size="24" :color="iconColor" type="android-car"></Icon>
                </Button>
			</Tooltip>
		</template>
		<template  v-if="auth[1]==1 || auth[3]==1 || auth[5]==1">
			<Tooltip :class="{active:active==1}" content="操作审核" placement="right">
				<Button style="width: 60px;margin-left: 0px;padding:10px 0;" type="text"  @click="selectMenu(1,'Review')">
                    <Icon :size="24" :color="iconColor" type="ios-keypad"></Icon>
                </Button>
			</Tooltip>
		</template>
		<template v-if="isadmin==1">
			<Tooltip :class="{active:active==2}" content="账户管理" placement="right">
				<Button style="width: 60px;margin-left: 0px;padding:10px 0;" type="text"  @click="selectMenu(2,'Account')">
                    <Icon :size="24" :color="iconColor" type="ios-person"></Icon>
                </Button>
			</Tooltip>
		</template>
		<template  v-if="auth[6]==1">
			<Tooltip :class="{active:active==3}" content="日志查询" placement="right">
				<Button style="width: 60px;margin-left: 0px;padding:10px 0;" type="text"  @click="selectMenu(3,'Log')">
                    <Icon :size="24" :color="iconColor" type="ios-calendar"></Icon>
                </Button>
			</Tooltip>
		</template>
		<template v-if="isadmin==1">
			<Tooltip :class="{active:active==4}" content="系统设置" placement="right">
				<Button style="width: 60px;margin-left: 0px;padding:10px 0;" type="text"  @click="selectMenu(4,'Setting')">
                    <Icon :size="24" :color="iconColor" type="ios-gear"></Icon>
                </Button>
			</Tooltip>
		</template> -->
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
