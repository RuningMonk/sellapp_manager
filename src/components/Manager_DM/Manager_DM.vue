<template>
	<div id="DM" class="container-fluid">
		<div class="row justify-content-center">
			<div class="DM-part col-12">
				<div class="part-body" v-for="(part,Tableindex) in DMInfo" :key="part.ID">
					<div class="title-body">
						<div class="title">{{part.class_name}}</div>
					</div>
					<div class="table-body">
						<table class="table" :id="'table'+Tableindex">
							<tr class="table-tr">
								<th class="table-th tr-first">商品名称</th>
								<th class="table-th">售价(¥)</th>
								<th class="table-th">销售量(份)</th>
								<th class="table-th">点赞(次)</th>
								<th class="table-th">标签</th>
								<th class="table-th tr-last"></th>
							</tr>
							<tr class="table-tr" v-for="(item,Rowindex) in part.foods" :key="item.ID">
								<td class="table-td tr-first">{{item.name}}</td>
								<td class="table-td">{{item.price}}</td>
								<td class="table-td">{{item.sell}}</td>
								<td class="table-td">{{item.like}}</td>
								<td class="table-td">{{item.tags?item.tags:'该商品暂无标签'}}</td>
								<td class="table-td tr-last">
									<div class="delete fun" @click="delClick(Tableindex,Rowindex)"></div>
									<div class="edit fun" @click="editClick(Tableindex,Rowindex)"></div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	
	export default{
		computed: {
			...mapState([
				'DMInfo',
				'LoginState'
			])
		},
		methods: {
			...mapActions([
				'UpdateEditState',
				'getDMInfo'
			]),
			delClick(table,row){
				console.log('delete')
			},
			editClick(table,row){
				const EditState = {
					edit: true,
					table: table,
					row: row
				};
				this.UpdateEditState(EditState);
				this.$router.push('/manager/entry')
			}
		},
		async mounted(){
			this.getDMInfo(this.LoginState.shop_id)
		}
	}
	
</script>

<style scoped="scoped">
	
	#DM{
		width: 100%;
		height: auto;
		padding-top: 55px;
		padding-bottom: 55px;
	}
	
	.DM-part{
		height: auto;
		padding: 0px 38px 0px 23px;
	}
	
	.part-body:nth-of-type(1){
		margin-top: 0;
	}
	
	.part-body{
		margin-top: 55px;
		height: auto;
		background-color: #FFFFFF;
		border-radius: 5px;
		box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.15);
	}
	
	.title-body{
		width: 100%;
		height: 80px;
		padding: 16px;
	}
	
	.title{
		width: 100%;
		height: 100%;
		text-align: left;
		line-height: 48px;
		font-size: 16px;
		font-weight: 600;
		font-family: Roboto, sans-serif;
		-webkit-font-smoothing: antialiased;
		cursor: default;
	}
	
	.table-body{
		width: 100%;
		height: auto;
	}
	
	.table{
		width: 100%;
		height: auto;
		border-collapse: collapse;
		margin-bottom: 0;
	}
	
	.table-tr{
		width: 100%;
		height: 45px;
		transition: background-color 0.3s;
	}
	
	.table-tr:hover{
		background-color: #EEEEEE;
	}
	
	.table-tr:hover .tr-last{
		opacity: 1;
	}
	
	.table-th,.table-td{
		padding: 14px 10px;
		color: #757575;
		font-size: 13px;
		text-align: right;
		border-bottom: 1px solid #cccccc;
		font-weight: 500;
		border-top: none;
		
		/* 超出部分用省略号代替 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.table-th{
		font-weight: bold;
	}
	
	.tr-first{
		text-align: left;
		padding-left: 30px;
		max-width: 200px;
	}
	
	.tr-last{
		padding-right: 30px;
		width: 100px;
		padding: 0;
		opacity: 0;
	}
	
	.delete{
		background-image: url(../../../static/img/icon/delete.png);
		background-size: 21px 21px;
		background-position: 1px 2px;
		background-repeat: no-repeat;
		transition: background-image 0.3s;
	}
	
	.delete:hover{
		background-image: url(../../../static/img/icon/delete-hover.png);
	}
	
	.edit{
		background-image: url(../../../static/img/icon/edit.png);
		background-size: cover;
		background-repeat: no-repeat;
		transition: background-image 0.3s;
	}
	
	.edit:hover{
		background-image: url(../../../static/img/icon/edit-hover.png);
	}
	
	.fun{
		width: 25px;
		height: 25px;
		margin: 10px;
		float: right;
		cursor: pointer;
	}
	
</style>
