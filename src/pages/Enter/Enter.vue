<template>
	<div id="Enter">
		<div class="top"></div>
		<div class="content container">
			<div class="row">
				<div class="col row-content container">
					<div class="row" v-for="(row,index) in EnterInfo" :key="index" v-if="index<2">
						<div class="left col">
							<div class="part">
								<img class="part-top" :src="row[0].src">
								<div class="part-bottom">
									<div class="title container"><span>{{row[0].title}}</span></div>
									<div class="descript container"><span>{{row[0].descript}}</span></div>
								</div>
							</div>
						</div>
						<div class="right col">
							<div class="part">
								<img class="part-top" :src="row[1].src">
								<div class="part-bottom">
									<div class="title container"><span>{{row[1].title}}</span></div>
									<div class="descript container"><span>{{row[1].descript}}</span></div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col bottom-row">
							<div class="part">
								<img class="part-top" :src="EnterInfo[2][0].src">
								<div class="part-bottom">
									<div class="title container"><span>{{EnterInfo[2][0].title}}</span></div>
									<div class="descript container"><span>{{EnterInfo[2][0].descript}}</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row"></div>
			<div class="row"></div>
		</div>
		<PageBottom></PageBottom>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import PageBottom from '../../components/Page_bottom/Page_bottom.vue'
	
	export default{
		components:{
			PageBottom
		},
		computed: {
			...mapState([
				'EnterInfo'
			])
		}
	}
	
</script>

<style scoped="scoped">
	
	#Enter{
		width: 100vw;
		padding-top: 70px;
	}
	
	.top{
		width: 100%;
		height: 320px;
		background-image: url('http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/headOfjoinin-41314fe739.png');
		background-size: cover;
		background-repeat: no-repeat;
		margin-bottom: 60px;
	}
	
	.row-content{
		height: auto;
	}
	
	.left{
		padding: 20px 10px 20px 30px;
	}
	
	.right{
		padding: 20px 30px 20px 10px;
	}
	
	.part{
		width: 100%;
		height: 100%;
		box-shadow: #E8E8E8 0px 0px 20px;
	}
	
	.part:hover{
		border: solid 4px #FFBD27;
	}
	
	.part-top{
		width: 100%;
		height: 70%;
	}
	
	.part-bottom{
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
	
	.bottom-row{
		height: 480px;
		padding: 20px 30px 20px 30px;
	}
	
	
	
	/* @media区 */
	
	@media (min-width:1200px){
		.left,.right{
			height: 535px;
		}
		.title{
			font-size: 36px;
		}
		.descript{
			font-size: 18px;
		}
	}
	@media (min-width:992px) and (max-width:1200px){
		.left,.right{
			height: 475px;
		}
		.title{
			font-size: 30px;
		}
		.descript{
			font-size: 13px;
		}
	}
	@media (min-width:768px) and (max-width:992px){
		.left,.right{
			height: 405px;
		}
		.part-top{
			height: 60%;
		}
		.part-bottom{
			height: 40%;
		}
		.title{
			font-size: 20px;
		}
		.descript{
			font-size: 12px;
		}
	}
	@media (min-width:576px) and (max-width:768px){
		.left,.right{
			height: 345px;
		}
		.part-top{
			height: 50%;
		}
		.part-bottom{
			height: 50%;
		}
		.title{
			font-size: 17px;
		}
		.descript{
			font-size: 12px;
			margin-top: 0;
		}
	}
	@media (max-width:576px){
		.left,.right{
			height: 275px;
		}
		.title{
			font-size: 17px;
		}
		.descript{
			display: none;
		}
	}
	
</style>
