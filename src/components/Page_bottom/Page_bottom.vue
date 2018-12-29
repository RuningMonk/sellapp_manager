<template>
	<div id="page-bottom">
		<div class="container">
			<div class="row">
				<div class="bottom-left col-6">
					<ul class="ul">
						<li class="list">开放平台</li>
						<li class="list">媒体报道</li>
						<li class="list">平台制度</li>
						<li class="list">入驻加盟</li>
					</ul>
					<ul class="ul">
						<li class="list">常见问题</li>
						<li class="list">用户反馈</li>
						<li class="list">诚信举报</li>
						<li class="list">加入我们</li>
					</ul>
				</div>
				<div class="bottom-right col-6">
					<div class="right-title">
						<span>更多商家，更多优惠</span>
					</div>
					<div class="right-code">
						<img src="http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/qrcode-app-83d17aeff8.png" class="code">
						<img src="http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/qrcode-wxapp-c4639d9def.png" class="code">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		
	}
	
</script>

<style scoped="scoped">
	
	#page-bottom{
		width: 100vw;
		height: 25vh;
		background-color: #333333;
		position: absolute;
	}
	
	.container{
		height: 25vh;
	}
	
	.bottom-left{
		height: 25vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row
	}
	
	.ul{
		width: 25%;
		height: 60%;
		display: flex;
		flex-direction: column;
		margin-bottom: 0;
	}
	
	.list{
		display: flex;
		width: 100%;
		height: 25%;
		color: #AAAAAA;
		font-size: 14px;
		cursor: pointer;
	}
	
	.list:hover{
		color: #EEEEEE;
	}
	
	.bottom-right{
		height: 25vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column
	}
	
	.right-title{
		width: 100%;
		font-size: 22px;
		color: #eee;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
	}
	
	.code{
		width: 90px;
		height: 90px;
		float: left;
		margin: 15px 7.5px 0 7.5px;
		
	}
	
	
	
</style>
