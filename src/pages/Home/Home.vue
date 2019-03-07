<template>
	<div id="Home">
		<div class="top">
			<div id="black1"></div>
			<div id="black2"></div>
			<div id="black3"></div>
		</div>
		<div class="info">
			<ul class="linklist">
				<router-link tag="li" to="/seller" class="item store">
					<div class="item_top">
						<img class="item_icon" src="http://waimai.meituan.com/static/img/new2018/enter-icon.png" >
						<div class="top_text">我要入驻</div>
					</div>
					<div class="item_bottom">商家、配送、城市代理、服务市场</div>
				</router-link>
				<li class="item manager">
					<div class="item_top">
						<img class="item_icon" src="http://waimai.meituan.com/static/img/new2018/dev-icon.png" >
						<div class="top_text">管理者平台</div>
					</div>
					<div class="item_bottom">外卖、餐饮数据管理平台</div>
				</li>
				<li class="item order">
					<div class="item_top">
						<img class="item_icon" src="http://waimai.meituan.com/static/img/new2018/waimai-icon.png" >
						<div class="top_text">我要点外卖</div>
					</div>
					<div class="item_bottom">快捷下单、一键点餐</div>
				</li>
			</ul>
			<div class="info_parts">
				<HomePart1 class="info_part"></HomePart1>
				<HomePart2 class="info_part"></HomePart2>
			</div>
		</div>
		<PageBottom></PageBottom>
	</div>
</template>

<script>
	import HomePart1 from '../../components/Home_part1/Home_part1.vue'
	import HomePart2 from '../../components/Home_part2/Home_part2.vue'
	import PageBottom from '../../components/Page_bottom/Page_bottom.vue'
	
	export default{
		components:{
			HomePart1,
			HomePart2,
			PageBottom
		},
		computed:{
			
		},
		methods: {
			
		}
	}
	
</script>

<style scoped="scoped">
	
	.top{
		position: relative;
	}
	
	.item{
		position: relative;
	}
	
	#black1{
		position: absolute;
		width: 7%;
		height: 15px;
		top: 30.5%;
		left: 65%;
		background-color: #000000;
		transform: rotateZ(15deg);
	}
	
	#black2{
		position: absolute;
		width: 2%;
		height: 6px;
		top: 65%;
		left: 13.2%;
		background-color: #000000;
		transform: rotateZ(15deg);
	}
	
	#black3{
		position: absolute;
		width: 2%;
		height: 6px;
		top: 70%;
		left: 15.5%;
		background-color: #000000;
	}
	
	#Home{
		width: 100%;
		padding-top: 70px;
	}
	
	@media (min-width:768px){
		.top{
			margin-top: -70px;
			width: 100vw;
			height: 40vw;
			background-image: url('https://p1.meituan.net/1440.590/codeman/d2ab674fa0e4c875865e524d82fe15a34372569.png');
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
	
	@media (min-width:0px) and (max-width:992px){
		.top{
			margin-top: -70px;
			width: 99vw;
			height: 150vw;
			background-image: url('http://bpic.wotucdn.com/16/63/49/16634990-a1f8911fddd702436265fc6ba76dd784.jpg');
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
	
	.info{
		width: 100%;
		height: 210vh;
		padding-top: 170px;
	}
	
	.linklist{
		width: 999px;
		height: 170px;
		margin: auto;
		margin-top: -230px;
	}
	
	.store{
		width: 33%;
		height: 100%;
		float: left;
		background-color: #658FF7;
		transition: all 0.3s;
	}
	
	.store:hover{
		margin-top: -5px;
		height: 180px;
		/* 阴影 */
		-webkit-box-shadow: #658FF7 0px 0px 10px;		/* 针对chrome */
		-moz-box-shadow: #658FF7 0px 0px 10px;			/* 针对firefox*/
		box-shadow: #658FF7 0px 0px 10px;				/* 普通浏览器*/
	}
	
	.manager{
		width: 34%;
		height: 100%;
		float: left;
		background-color: #F54C45;
		transition: all 0.3s;
	}
	
	.manager:hover{
		margin-top: -5px;
		height: 180px;
		/* 阴影 */
		-webkit-box-shadow: #F54C45 0px 0px 10px;		/* 针对chrome */
		-moz-box-shadow: #F54C45 0px 0px 10px;			/* 针对firefox*/
		box-shadow: #F54C45 0px 0px 10px;				/* 普通浏览器*/
	}
	
	.order{
		width: 33%;
		height: 100%;
		float: left;
		background-color: #FFBD27;
		transition: all 0.3s;
	}
	
	.order:hover{
		margin-top: -5px;
		height: 180px;
		/* 阴影 */
		-webkit-box-shadow: #FFBD27 0px 0px 10px;		/* 针对chrome */
		-moz-box-shadow: #FFBD27 0px 0px 10px;			/* 针对firefox*/
		box-shadow: #FFBD27 0px 0px 10px;				/* 普通浏览器*/
	}
	
	.item{
		cursor: pointer;
	}
	
	.item_top{
		width: 100%;
		height: 40px;
		margin-top: 50px;
		position: relative;
	}
	
	.item_icon{
		width: 30px;
		height: 30px;
		margin-left: 80px;
		margin-top: 6px;
		float: left;
	}
	
	.top_text{
		color: #fff;
		font-size: 26px;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		text-align: center;
		font-weight: 400;
		margin-left: 10px;
		padding-right: 20px;
		float: left;
		background: url(../../../static/img/icon/right-arrow.png) no-repeat right;
		background-size: 10px 14px;
	}
	
	.item_bottom{
		width: 100%;
		margin-top: 10px;
		font-size: 16px;
		color: rgba(255,255,255,0.80);
		text-align: center;
		line-height: 16px;
	}
	
	.info_parts{
		width: 100%;
		height: auto;
	}
	
	.info_part{
		width: 100%;
		height: 100vh;
		position: relative;
	}
	
	
</style>
