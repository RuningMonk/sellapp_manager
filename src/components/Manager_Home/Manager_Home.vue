<template>
	<div id="Home" class="container-fluid">
		<div class="row justify-content-center top">
			<div class="top-bg col-12" :class="{'top-bg-fold':!FoldState}">
				<div class="fog">
					<div class="top-title">欢迎加入XX外卖</div>
					<div class="top-descript">XX外卖在全国范围内已拥有多达4家美食店铺入驻，是您通向破产的不二之选</div>
				</div>
			</div>
		</div>
		<div class="row justify-content-center bottom">
			<div class="part">
				<router-link to="/manager/datamanager" tag="div" class="part-content">
					<img class="part-img" src="http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-b-00a69ad1bf.png">
					<div class="part-text">
						<div class="title container"><span>管理我的店铺</span></div>
						<div class="descript container"><span>店铺开放、店铺公告、营业时间</span></div>
					</div>
				</router-link>
			</div>
			<div class="part">
				<router-link to="/manager/entry" tag="div" class="part-content">
					<img class="part-img" src="http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-s-8085075ad8.png">
					<div class="part-text">
						<div class="title container"><span>添加新商品</span></div>
						<div class="descript container"><span>新品入店、简易增添、实时更新</span></div>
					</div>
				</router-link>
			</div>
			<div class="part">
				<router-link to="/manager/setting" tag="div" class="part-content">
					<img class="part-img" src="http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-city-cd25a55a3b.png">
					<div class="part-text">
						<div class="title container"><span>账户设置</span></div>
						<div class="descript container"><span>商铺基础信息、用户密码更改</span></div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default{
		computed: {
			...mapState([
				'FoldState'
			])
		}
	}
	
</script>

<style scoped="scoped">
	
	#Home{
		width: 100%;
		height: 100%;
	}
	
	.top{
		height: calc(40vh - 60px);
	}
	
	.bottom{
		height: 60vh;
	}
	
	.top-bg{
		transition: background-size 0.3s;
		background-image: url('http://cdn.thedesignwork.com/wp-content/uploads/2011/09/Cool-Wood-Texture-Background-05.jpg');
		background-size: 100vw 40vh;
		background-repeat: no-repeat;
		padding: 0;
	}
	
	.top-bg-fold{
		background-size: calc(100vw - 255px) 40vh;
	}
	
	.top-bg>.fog{
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		position: relative;
	}
	
	.top-title{
		position: absolute;
		width: 100%;
		top: 42%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 70px;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		color: #fff;
	}
	
	.top-descript{
		position: absolute;
		width: 100%;
		top: 70%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 23px;
		font-family: PingFangSC-Light,Microsoft Yahei,Arial,Helvetica,sans-serif;
		color: #fff;
	}
	
	.part{
		float: left;
		width: 400px;
		height: 55vh;
		padding: 10px;
		margin-top: 25px;
	}
	
	.part-content{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		border-radius: 5px;
		cursor: pointer;
	}
	
	.part-content:hover{
		border: solid 1.5px #06c1ae;
	}
	
	.part-img{
		width: 100%;
		height: 70%;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	
	.part-text{
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.title{
		width: 100%;
		display: flex;
		color: #000;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		line-height: 36px;
	}
	
	.title>span,.descript>span{
		width: 100%;
		display: block;
	}
	
	.descript{
		width: 80%;
		margin-top: 10px;
		display: flex;
		color: #888;
		font-family: PingFangSC-Light,Microsoft Yahei,Arial,Helvetica,sans-serif;
		line-height: 26px;
	}
	
	/* @media区域 */
	@media (min-width:1200px){
		.title{
			font-size: 36px;
		}
		.descript{
			font-size: 18px;
		}
	}
	@media (min-width:992px) and (max-width:1200px){
		.part{
			width: 330px;
			height: 50vh;
			margin-top: 50px;
		}
		.title{
			font-size: 30px;
		}
		.descript{
			font-size: 13px;
		}
	}
	@media (min-width:768px) and (max-width:992px){
		.part{
			width: 250px;
			height: 40vh;
			margin-top: 80px;
		}
		.title{
			font-size: 30px;
		}
		.descript{
			font-size: 13px;
		}
		.top-title{
			font-size: 60px;
		}
		.top-descript{
			font-size: 18px;
		}
	}
	@media (max-width:768px){
		.part{
			width: 400px;
			height: 55vh;
			margin-top: 30px;
		}
		.title{
			font-size: 17px;
		}
		.descript{
			font-size: 12px;
			margin-top: 0;
		}
		.bottom{
			height: 100%;
		}
		.top-title{
			font-size: 50px;
		}
		.top-descript{
			font-size: 16px;
		}
	}
	
	
</style>
