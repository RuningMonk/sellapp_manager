<template>
	<div id="Guide">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="head-title">
				<a class="navbar-brand" href="#">XX外卖</a>
			</div>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="head-content collapse navbar-collapse" id="navbarContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item" @click="setindex(0)" :class="{'active':nav_index==0}">
						<router-link class="nav-link" to="/home">首页</router-link>
					</li>
					<li class="nav-item" @click="setindex(1)" :class="{'active':nav_index==1}">
						<router-link class="nav-link" to="/enter">入驻加盟</router-link>
					</li>
					<li class="nav-item" @click="setindex(2)" :class="{'active':nav_index==2}">
						<router-link class="nav-link" to="/open">开放平台</router-link>
					</li>
					<li class="nav-item" @click="setindex(4)" :class="{'active':nav_index==4}">
						<a class="nav-link" href="#">点外卖</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">下载手机版</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				nav_index:0
			}
		},
		methods:{
			setindex(n){
				this.nav_index = n
			}
		}
	}
</script>

<style scoped="scoped">
	.navbar{
		width: 100%;
		height: 70px;
		position: fixed;
		z-index: 100;
		
		-webkit-box-shadow: #8E8E8E 0px 0px 10px;		/* 针对chrome */
		-moz-box-shadow: #8E8E8E 0px 0px 10px;			/* 针对firefox*/
		box-shadow: #8E8E8E 0px 0px 10px;
	}
	
	.navbar-brand{
		margin-right: 0;
	}
	
	.navbar-toggler{
		outline: none;
	}
	
	.head-title{
		width: 50%;
		float: left;
	}
	
	.head-content{
		width: 50%;
		float: left;
		background-color: #F8F9FA;
	}
	
	.active::after{
		content: "";
		display: block;
		width: 100%;
		height: 3px;
		background-color: #FFDB27;
	}
</style>
