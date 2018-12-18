<template>
  <div id="app">
		<div class="container">
			<button type="button" class="btn btn-default">123123</button>
		</div>
    <img id="img" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
	mounted() {
		$("#img").click(function(){
			alert('1')
		})
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
