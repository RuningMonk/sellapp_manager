<template>
	<div id="Seller_Guide">
		<div class="title">商家中心</div>
		<div class="client">
			<div class="download">
				<span class="text text-pc">商家PC客户端</span>
			</div>
			<div class="download">
				<span class="text text-phone">商家手机客户端</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped="scoped">

	#Seller_Guide{
		width: 100vw;
		height: 60px;
		background-color: #06c1ae;
	}
	
	.title{
		width: 280px;
		height: 100%;
		line-height: 60px;
		float: left;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		font-size: 24px;
		color: #FFFFFF;
	}
	
	.client{
		width: 320px;
		height: 100%;
		float: right;
		display: flex;
		flex-direction: row;
	}
	
	.download{
		width: 50%;
		height: 100%;
		display: flex;
		padding: 15px 8px;
		position: relative;
		cursor: pointer;
	}
	
	.text{
		width: 100%;
		height: 100%;
		line-height: 30px;
		font-size: 16px;
		color: #FFFFFF;
		padding-left: 30px;
		text-align: left;
	}
	
	.text-pc::before{
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		position: absolute;
		left: 13px;
		top: 20px;
		background-image: url(../../../static/img/icon/windows.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	
	.text-phone::before{
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		position: absolute;
		left: 13px;
		top: 20px;
		background-image: url(../../../static/img/icon/phone.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	
	@media (max-width:600px){
		.client{
			display: none;
		}
	}
	
</style>
