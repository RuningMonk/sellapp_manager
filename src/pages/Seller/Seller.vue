<template>
	<div>
		<Guide />
		<div class="body">
			<div class="part container">
				<Login />
			</div>
		</div>
	</div>
</template>

<script>
	import Guide from '../../components/Seller_Guide/Seller_Guide.vue'
	import Login from '../../components/Login/Login.vue'
	
	export default{
		components:{
			Guide,
			Login
		}
	}
	
</script>

<style scoped="scoped">
	
	.body{
		width: 100vw;
		height: 100vh;
		height: calc(100vh - 60px);
	}
	
	.part{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	
</style>
