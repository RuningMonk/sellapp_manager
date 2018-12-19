<template>
	<div id="app">
		<Guide v-show="$route.meta.GuideShow"></Guide>
		<router-view />
	</div>
</template>

<script>
	import Guide from './components/Guide/Guide.vue'
	
	export default {
		components:{
			Guide
		},
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		/* 抗锯齿 */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		
		width: 98.9vw;
		height: 100vh;
	}
	
	
</style>
