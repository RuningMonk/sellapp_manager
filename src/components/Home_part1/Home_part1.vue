<template>
	<div class="info_part">
		<img class="info-title-img" :class="{'slide-show':scrolly>=200}" src="http://waimai.meituan.com/static/img/new2018/serviceintro.png" >
		<div class="list_img" :class="{'slide-show':scrolly>=400}">
			<div class="list">
				<div class="list-title">
					我们能够为您提供的服务
				</div>
				<ul class="list-info">
					<li class="info-item" @mouseover="hover(0)" :class="{'hover':listHover==0}">
						<div class="item-left">
							<div class="item-icon order-icon" :class="{'order-icon-hover':listHover==0}"></div>
						</div>
						<div class="item-right">
							<div class="text-up" :class="{'text-up-hover':listHover==0}">美食 Delicacy</div>
							<div class="text-down" :class="{'text-down-hover':listHover==0}">大牌优惠</div>
						</div>
					</li>
					<li class="info-item" @mouseover="hover(1)">
						<div class="item-left">
							<div class="item-icon store-icon" :class="{'store-icon-hover':listHover==1}"></div>
						</div>
						<div class="item-right">
							<div class="text-up" :class="{'text-up-hover':listHover==1}">入驻 Enter</div>
							<div class="text-down" :class="{'text-down-hover':listHover==1}">即刻加入</div>
						</div>
					</li>
					<li class="info-item" @mouseover="hover(2)">
						<div class="item-left">
							<div class="item-icon manager-icon" :class="{'manager-icon-hover':listHover==2}"></div>
						</div>
						<div class="item-right">
							<div class="text-up" :class="{'text-up-hover':listHover==2}">管理 Manager</div>
							<div class="text-down" :class="{'text-down-hover':listHover==2}">数据管理</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="img">
				<div class="show-border">
					<div class="show-img" :style="{'background-image':'url(http://waimai.meituan.com'+imgSrc+')'}" ></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				scrolly: 0,
				listHover: 0,
			}
		},
		computed:{
			imgSrc(){
				switch(this.listHover){
					case 0:
						return '/static/img/new2018/delicacy.png';
						break;
					case 1:
						return '/static/img/new2018/desserts.png';
						break;
					case 2:
						return '/static/img/new2018/supermarket.png';
						break;
				}
			}
		},
		methods: {
			hover(n) {
				this.listHover = n;
			}
		},
		mounted(){
			const that = this;
			$(document).ready(function(){
				$(window).scroll(function(){
					that.scrolly = window.scrollY;
				})
			})
			
		}
	}
</script>

<style scoped="scoped">
	
	.info-title-img{
		transition: all 0.5s;
		width: 400px;
		height: 115px;
		position: absolute;
		top: 150px;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
	}
	
	.list_img{
		transition: all 0.5s;
		width: 999px;
		height: 70vh;
		position: absolute;
		top: 265px;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
		/* background-color: #F8F8F8; */
	}
	
	.list{
		width: 50%;
		height: 100%;
		float: left;
	}
	
	.list-title{
		width: 100%;
		height: 20%;
		float: left;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		font-size: 40px;
		color: #000000;
		line-height: 450%;
		text-align: left;
	}
	
	.list-info{
		width: 100%;
		height: 80%;
		float: left;
		margin-bottom: 0;
	}
	
	.info-item:nth-child(1){
		margin-top: 55px;
	}
	
	.info-item{
		width: 100%;
		height: 18%;
		float: left;
		padding-left: 45px;
		cursor: pointer;
	}
	
	.item-left{
		width: 40px;
		height: 100%;
		float: left;
		position: relative;
		margin-left: -40px;
	}
	
	.item-icon{
		transition: all 0.5s;
		display: block;
		width: 40px;
		height: 40px;
		position: absolute;
		top: 0;
		left: 0;
		
		background-size: cover;
		background-repeat: no-repeat;
	}
	
	.order-icon{
		background-image: url('http://waimai.meituan.com/static/img/new2018/Delicacy-nopick.png');
	}
	
	.order-icon-hover{
		background-image: url('http://waimai.meituan.com/static/img/new2018/Delicacy-picked.png');
	}
	
	.store-icon{
		background-image: url('http://waimai.meituan.com/static/img/new2018/Supermarket-nopick.png');
	}
	
	.store-icon-hover{
		background-image: url('http://waimai.meituan.com/static/img/new2018/Supermarket-picked.png');
	}
	
	.manager-icon{
		background-image: url('http://waimai.meituan.com/static/img/new2018/fruit-nopick.png');
	}
	
	.manager-icon-hover{
		background-image: url('http://waimai.meituan.com/static/img/new2018/fruit-picked.png');
	}
	
	.item-right{
		width: 100%;
		height: 100%;
		float: left;
		position: relative;
	}
	
	.text-up{
		position: absolute;
		top: 0;
		height: 50%;
		transition: all 0.5s;
		font-size: 26px;
		text-align: left;
		line-height: 170%;
		text-indent: 20px;
	}
	
	.text-up-hover{
		margin-top: -20px !important;
		transform: scale(1.5) translateX(-7px);
		transform-origin: left 50%;
		color: #FFBA1E;
	}
	
	.text-up-hover::after{
		content: '';
		display: block;
		width: 120px;
		height: 2px;
		background-color: #FFBD27;
		margin-left: 20px;
	}
	
	.text-down{
		position: absolute;
		top: 50%;
		height: 50%;
		transition: all 0.5s;
		opacity: 0.5;
		font-family: Microsoft YaHei;
		font-size: 16px;
		color: #000000;
		text-align: left;
		text-indent: 20px;
	}
	
	.text-down-hover{
		color: #FFBA1E;
		opacity: 1;
	}
	
	.img{
		width: 50%;
		height: 100%;
		float: left;
		position: relative;
	}
	
	.show-border{
		width: 330px;
		height: 100%;
		position: absolute;
		border: solid 10px #373737;
		border-radius: 40px;
		left: 50%;
		transform: translateX(-50%) translateY(5%);
		
	}
	
	.show-img{
		width: 100%;
		height: 100%;
		transition: all 0.5s;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 30px;
	}
	
	.slide-show{
		margin-top: -50px;
		opacity: 1;
	}
	
</style>
