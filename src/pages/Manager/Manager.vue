<template>
	<div id="Manager">
		<Header v-show="$route.meta.ManagerGuide"></Header>
		<div class="Manager-content" :class="{'content-fold':!FoldState}">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
		<PageBottom></PageBottom>
	</div>
</template>

<script>
	import Header from '../../components/Manager_Header/Manager_Header.vue'
	import PageBottom from '../../components/Page_bottom/Page_bottom.vue'
	import {mapState,mapActions} from 'vuex'
	
	export default{
		components:{
			Header,
			PageBottom
		},
		computed: {
			...mapState([
				'FoldState'
			])
		},
		methods: {
			...mapActions([
				'getDMInfo'
			])
		},
		async mounted(){
			this.getDMInfo(2)
		}
	}
	
</script>

<style scoped="scoped">
	
	#Manager{
		background-color: #F6F6F6;
		/* height: 100vh; */
	}
	
	.Manager-content{
		width: 100%;
		height: 100%;
		padding-top: 60px;
		transition: all 0.3s;
	}
	
	.content-fold{
		width: calc(100% - 255px);
		margin-left: 255px;
	}
	
</style>
