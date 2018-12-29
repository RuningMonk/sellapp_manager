<template>
	<div class="info_part">
		<img class="info-title-img" :class="{'slide-show':scrolly>=1100}" src="http://waimai.meituan.com/static/img/new2018/story.png">
		<div class="banner_img" :class="{'slide-show':scrolly>=1300}">
			<div class="left" @click="pre()"></div>
			<div class="right" @click="next()"></div>
			<div class="bg" :class="{'slide-show':scrolly>=1300}"></div>
			<div id="banner" class="banner" :class="{'slide-show':scrolly>=1300}">
				<ul id="banner-list">
					<li class="banner-item" v-for="item in BannerInfo" :key="item.ID">
						<div class="item-left">
							<div class="tag">{{item.tag}}</div>
							<div class="title">{{item.title}}</div>
							<div class="content">{{item.content}}</div>
							<input type="button" class="detail-btn" value="查看详情">
						</div>
						<div class="item-right">
							<img :src="item.src" class="item-img">
						</div>
					</li>
				</ul>
			</div>
			<div class="tab-index">
				<ul class="tabs">
					<li v-for="(item,index) in BannerInfo" :key="index" class="tab" :class="{active:bannerIndex==index}" @click="setindex(index)"></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		data() {
			return {
				scrolly: 0,
				bannerIndex: 0
			}
		},
		computed: {
			...mapState([
				'BannerInfo'
			]),
			imgSrc() {
				switch (this.bannerIndex) {
					case 0:
						return '/static/img/new2018/static/story1.jpg';
						break;
					case 1:
						return '/static/img/new2018/static/story2.jpg';
						break;
					case 2:
						return '/static/img/new2018/static/story3.jpg';
						break;
				}
			}
		},
		methods: {
			setindex(n) {
				let BannerWidth = document.getElementById('banner').clientWidth;
				let BannerUl = document.getElementById('banner-list');
				this.bannerIndex = n;
				BannerUl.style.left = -BannerWidth*this.bannerIndex+'px';
				this.initbanner()
			},
			initbanner(){
				const that = this;
				// 如果原先有定时器,就清除它
				if(that.interval){
					window.clearInterval(that.interval)
				}
				//开始设置定时器
				let BannerWidth = document.getElementById('banner').clientWidth;
				let BannerUl = document.getElementById('banner-list');
				that.interval = setInterval(function(){
					that.bannerIndex++;
					if(that.bannerIndex>=3){
						that.bannerIndex = 0;
						BannerUl.style.left = '0px'
					}else{
						BannerUl.style.left = -BannerWidth*that.bannerIndex+'px'
					}
				},3000)
			},
			next(){
				let BannerWidth = document.getElementById('banner').clientWidth;
				let BannerUl = document.getElementById('banner-list');
				if(this.bannerIndex==2){
					this.bannerIndex = 0;
				}else{
					this.bannerIndex++;
				}
				BannerUl.style.left = -BannerWidth*this.bannerIndex+'px';
				this.initbanner()
			},
			pre(){
				let BannerWidth = document.getElementById('banner').clientWidth;
				let BannerUl = document.getElementById('banner-list');
				if(this.bannerIndex==0){
					this.bannerIndex = 2;
				}else{
					this.bannerIndex--;
				}
				BannerUl.style.left = -BannerWidth*this.bannerIndex+'px';
				this.initbanner()
			}
		},
		mounted() {
			const that = this;
			
			//初始化banner
			that.initbanner();
			
			// 添加滚轮监听
			$(document).ready(function() {
				$(window).scroll(function() {
					that.scrolly = window.scrollY;
				})
			})

		}
	}
</script>

<style scoped="scoped">
	.info_part {
		background-color: #FFC43C;
		position: relative;
	}

	.info-title-img {
		transition: all 0.5s;
		width: 270px;
		height: 115px;
		position: absolute;
		top: 150px;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
	}

	.banner_img {
		transition: all 0.5s;
		width: 1080px;
		height: 70vh;
		position: absolute;
		top: 265px;
		left: 50%;
		transform: translateX(-50%);
		opacity: 0;
	}

	.bg {
		transition: all 1s;
		width: 690px;
		height: 45vh;
		position: absolute;
		top: 55%;
		left: 58%;
		transform: translateX(-40%) translateY(-50%);
		background: linear-gradient(to right, #FF764A, #FF9D4A);
		opacity: 0;
		border-radius: 8px;
	}

	.banner {
		width: 920px;
		height: 340px;
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		overflow: hidden;
		border-radius: 8px;
	}

	#banner-list {
		transition: all 0.5s;
		width: 300%;
		height: 100%;
		margin-bottom: 0;
		position: absolute;
		left: 0;
	}

	.banner-item {
		width: 920px;
		height: 100%;
		border-radius: 5px;
		float: left;
	}

	.item-left {
		width: 65%;
		height: 100%;
		float: left;
		background-color: #FFFFFF;
		padding: 20px 30px 20px 30px;
	}

	.tag {
		width: 100%;
		height: 34px;
		float: left;
		line-height: 34px;
		font-size: 16px;
		color: #000;
		font-weight: 400;
		font-family: PingFangSC-Semibold, Microsoft Yahei, Arial, Helvetica, sans-serif;
		text-align: left;
		background-image: url(http://waimai.meituan.com/static/img/new2018/star-icon.png);
		background-repeat: no-repeat;
		background-size: 30px 33px;
		padding-left: 40px;
	}

	.title {
		width: 100%;
		margin-top: 15px;
		float: left;
		font-family: PingFangSC-Semibold, Microsoft Yahei, Arial, Helvetica, sans-serif;
		font-size: 24px;
		font-weight: bold;
		color: #000000;
		line-height: 24px;
		text-align: left;
	}

	.content {
		width: 100%;
		float: left;
		margin-top: 15px;
		font-size: 16px;
		color: #888;
		letter-spacing: -0.3px;
		line-height: 28px;
		text-align: left;
	}

	.detail-btn {
		width: 86px;
		height: 30px;
		float: left;
		border: 1px solid #FFBE2E;
		border-radius: 20px;
		background-color: #FFFFFF;
		color: #FFBE2E;
		font-family: PingFangTC-Medium, Microsoft Yahei, Arial, Helvetica, sans-serif;
		font-size: 13px;
		outline: none;
		margin-top: 10px;
		cursor: pointer;
	}

	.item-right {
		width: 35%;
		height: 100%;
		float: left;
	}

	.item-img {
		width: 100%;
		height: 100%;
	}

	.left {
		width: 15px;
		height: 25px;
		position: absolute;
		left: 30px;
		top: 50%;
		transform: translateY(-50%);
		background-image: url(http://waimai.meituan.com/static/img/new2018/story-l.png);
		background-size: 15px 25px;
		background-repeat: no-repeat;
		cursor: pointer;

	}

	.right {
		width: 15px;
		height: 25px;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		background-image: url(http://waimai.meituan.com/static/img/new2018/story-r.png);
		background-size: 15px 25px;
		background-repeat: no-repeat;
		cursor: pointer;
	}

	.left:hover {
		background-image: url(http://waimai.meituan.com/static/img/new2018/story-l-hover.png);
	}

	.right:hover {
		background-image: url(http://waimai.meituan.com/static/img/new2018/story-r-hover.png);
	}

	.tab-index{
		width: 90px;
		height: 20px;
		position: absolute;
		top: 85%;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.tabs{
		width: 100%;
		height: 100%;
		margin-bottom: 0;
		text-align: center;
	}
	
	.tab{
		width: 12px;
		height: 12px;
		background-color: #FFFFFF;
		border-radius: 50%;
		float: left;
		margin-left: 13.5px;
		margin-top: 2px;
		cursor: pointer;
	}
	
	.tab:hover{
		background-color: #FF5C49;
	}
	
	.active{
		background-color: #FF5C49;
	}

	.slide-show {
		margin-top: -50px;
		opacity: 1;
	}
</style>
