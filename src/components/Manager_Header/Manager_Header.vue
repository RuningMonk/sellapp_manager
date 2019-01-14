<template>
	<div id="Header">
		<div class="List-body" :class="{'List-show':!FoldState}">
			<div class="List-top">商家</div>
			<div class="List-bottom">
				<ul class="List-ul">
					<router-link to="/manager/home" tag="li" class="List-li" @click.native="ChangeFoldState(!FoldState)">
						<img src="../../../static/img/icon/manager-icon-home.png" class="li-icon">
						<div class="li-content">主页</div>
					</router-link>
					<router-link to="/manager/datamanager" tag="li" class="List-li" @click.native="ChangeFoldState(!FoldState)">
						<img src="../../../static/img/icon/manager-icon-dm.png" class="li-icon">
						<div class="li-content">数据管理</div>
					</router-link>
					<router-link to="/manager/entry" tag="li" class="List-li" @click.native="ChangeFoldState(!FoldState)">
						<img src="../../../static/img/icon/manager-icon-entry.png" class="li-icon">
						<div class="li-content">数据录入</div>
					</router-link>
					<router-link to="/manager/setting" tag="li" class="List-li" @click.native="ChangeFoldState(!FoldState)">
						<img src="../../../static/img/icon/manager-icon-setting.png" class="li-icon">
						<div class="li-content">设置中心</div>
					</router-link>
				</ul>
			</div>
		</div>
		<div class="Header-body" :class="{'Header-unfold':FoldState}">
			<div class="fold-function" @click="ChangeFoldState(!FoldState)"><img src="../../../static/img/icon/fold-icon.png" class="fold-icon"></div>
			<div class="Header-function first-function" @click="quit()"><img src="../../../static/img/icon/more-icon.png" class="function-icon"></div>
			<div class="Header-function"><img src="../../../static/img/icon/use-icon.png" class="function-icon"></div>
			<div class="Header-function have"><img src="../../../static/img/icon/message-icon.png" class="function-icon"></div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	
	export default{
		computed: {
			...mapState([
				'FoldState'
			])
		},
		methods: {
			...mapActions([
				'ChangeFoldState',
				'QuitLogin'
			]),
			quit(){
				const that = this;
				that.QuitLogin();
				setTimeout(function(){
					that.$router.replace('/seller')
				},800)
			}
		},
	}
	
</script>

<style scoped="scoped">
	
	#Header{
		width: 100%;
		height: 60px;
		position: fixed;
		top: 0;
		z-index: 1;
	}
	
	.List-body{
		transition: all 0.3s;
		width: 0px;
		height: 70vh;
		position: fixed;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 10px #585858;
		opacity: 0;
	}
	
	.List-show{
		width: 255px;
		opacity: 1;
	}
	
	.List-show>.List-bottom{
		display: block;
	}
	
	.List-top{
		width: 100%;
		height: 60px;
		text-align: center;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		font-size: 24px;
		line-height: 60px;
		
		border-bottom: solid 1px #E8E8E8;
	}
	
	.List-bottom{
		width: 100%;
		height: calc(100% - 60px);
		display: none;
	}
	
	.List-ul{
		width: 100%;
		margin-top: 20px;
		margin-bottom: 0;
	}
	
	.List-li{
		width: 100%;
		height: 60px;
		padding: 4px 20px;
		cursor: pointer;
		position: relative;
	}
	
	.li-icon{
		width: 30px;
		height: 30px;
		top: 50%;
		left: 12%;
		transform: translateY(-50%);
		position: absolute;
	}
	
	.li-content{
		transition: background-color 0.8s;
		width: 100%;
		height: 100%;
		text-align: left;
		line-height: 52px;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		font-size: 20px;
		font-weight: 500;
		border-radius: 5px;
		padding-left: 50px;
	}
	
	.li-content:hover{
		background-color: #F0F0F0;
	}
	
	.Header-body{
		transition: all 0.3s;
		width: calc(100vw - 255px);
		height: 100%;
		margin-left: 255px;
		position: relative;
		background-color: #06c1ae;
		box-shadow: 10px 0px 10px #585858;
	}
	
	.Header-unfold{
		width: 100vw;
		margin-left: 0;
	}
	
	.fold-function{
		transition: all 0.3s;
		width: 55px;
		height: 55px;
		float: left;
		margin: 2.5px;
		padding: 12.5px;
		position: relative;
		cursor: pointer;
	}
	
	.fold-function:hover{
		background-color: #059e8f;
	}
	
	.fold-icon{
		width: 30px;
		height: 30px;
		margin: auto;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		cursor: pointer;
	}
	
	.Header-function{
		transition: all 0.3s;
		width: 55px;
		height: 55px;
		float: right;
		margin: 2.5px;
		padding: 12.5px;
		position: relative;
		cursor: pointer;
	}
	
	.first-function{
		margin-right: 22.5px
	}
	
	.Header-function:hover{
		background-color: #059e8f;
	}
	
	.function-icon{
		width: 30px;
		height: 30px;
	}
	
	.have::after{
		content: '3';
		position: absolute;
		right: 10px;
		top: 10px;
		width: 20px;
		height: 20px;
		background-color: #E52D27;
		color: #FFFFFF;
		font-size: 12px;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
	}
	
</style>
