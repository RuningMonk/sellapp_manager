<template>
	<div id="Open">
		<div class="content container">
			<div class="row">
				<div class="part" v-for="item in OpenInfo" :key="item.ID">
					<div class="part-content" :style="{'background-image':'url('+item.src+')'}">
						<div class="bg">
							<div class="title">{{item.title}}</div>
							<div class="descript">{{item.descript}}</div>
							<div class="button">{{item.btnText}}</div>
						</div>
					</div>
				</div>
			</div>
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
				'OpenInfo'
			])
		}
	}
	
</script>

<style scoped="scoped">
	
	#Open{
		width: 100vw;
		padding-top: 70px;
	}
	
	.content{
		width: 100%;
		height: 130vh;
	}
	
	.row{
		width: 100%;
		height: 100%;
		padding: 30px;
		margin-left: 0;
		flex-direction: column;
	}
	
	.part{
		width: 100%;
		height: 33%;
		display: flex;
		padding: 30px;
	}
	
	.part-content{
		width: 100%;
		height: 100%;
		cursor: pointer;
		
		background-size: cover;
		background-repeat: no-repeat;
	}
	
	.bg:hover{
		box-sizing: border-box;
		border: solid 4px #FFBD27;
	}
	
	.bg{
		width: 100%;
		height: 100%;
		position: relative;
		background-color: rgba(0, 0, 0, 0.3);
	}
	
	.title{
		position: absolute;
		width: 100%;
		top: 35%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 40px;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		color: #fff;
	}
	
	.descript{
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 20px;
		font-family: PingFangSC-Light,Microsoft Yahei,Arial,Helvetica,sans-serif;
		color: #fff;
	}
	
	.button{
		position: absolute;
		top: 70%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #FFFFFF;
		padding: 12px 40px;
		font-size: 16px;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
	}
	
	/* @media区 */
	@media (min-width:992px) and (max-width:1200px){
		.content{
			height: 110vh;
		}
		.title{
			font-size: 35px;
		}
		.descript{
			font-size: 15px;
		}
		.button{
			font-size: 15px;
		}
	}
	@media (min-width:768px) and (max-width:992px){
		.content{
			height: 90vh;
		}
		.title{
			font-size: 30px;
		}
		.descript{
			font-size: 13px;
		}
		.button{
			padding: 10px 30px;
			font-size: 12px;
		}
	}
	@media (min-width:576px) and (max-width:768px){
		.content{
			height: 80vh;
		}
		.title{
			font-size: 23px;
		}
		.descript{
			font-size: 12px;
		}
		.button{
			padding: 6px 20px;
			font-size: 12px;
			width: 70%;
		}
	}
	@media (max-width:576px){
		.content{
			height: 80vh;
		}
		.title{
			font-size: 15px;
		}
		.descript{
			font-size: 12px;
		}
		.button{
			padding: 6px 20px;
			font-size: 12px;
			width: 70%;
		}
	}
	
</style>
