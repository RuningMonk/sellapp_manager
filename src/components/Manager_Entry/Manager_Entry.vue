<template>
	<div id="Entry" class="container-fluid">
		<!-- <div class="shadow"></div> -->
		<div class="row justify-content-center">
			<div class="col-12 Entry-part">
				<div class="part-body">
					<div class="part-left flex-box">
						<div class="name-box flex-box">
							<div class="relative-box">
								<div class="box-title must">商品名称</div>
								<input type="text" class="name box-text" v-model="name" placeholder="..." :class="{'wrong':!NameCheck}" :disabled="EditState.edit">
								<div class="box-descropt">您想要添加的商品的名称，请将字数限制在1-20以内。一个好听的名字说不定会提升销量哦</div>
							</div>
						</div>
						<div class="category-box flex-box">
							<div class="relative-box">
								<div class="box-title must">商品类别</div>
								<input type="button" class="category box-text" @click="dropdownShow=!dropdownShow" :value="category?category:FirstClassName">
								<div class="box-descropt" style="top: 51%">您想要添加的商品的类别，可在已有的类别中选择。如果需要特别添加新类别请前往 <router-link tag="span" to="/manager/setting" class="link-to-setting">商铺设置</router-link> 中添加类别</div>
								<ul class="dropdown-ul" :class="{'dropdown-show':dropdownShow}">
									<li class="dropdown-li" v-for="item in Category" :key="item.ID" @click="listClick(item)">{{item}}</li>
								</ul>
							</div>
						</div>
						<div class="price-box flex-box">
							<div class="relative-box">
								<div class="box-title must">商品价格</div>
								<input type="number" class="price box-text" v-model="price" placeholder="..." :class="{'wrong':!PriceCheck}">
								<div class="readjust">
									<input type="button" class="readjust-up" @click="ChangePrice('up')">
									<input type="button" class="readjust-down" @click="ChangePrice('down')">
								</div>
								<div class="box-descropt">您想要添加的商品的价格</div>
							</div>
						</div>
						<div class="tags-box flex-box">
							<div class="relative-box">
								<div class="box-title">标签</div>
								<textarea v-model="tags" cols="30" rows="2" class="tags" maxlength="40" placeholder="..."></textarea>
								<div class="box-descropt">您想要添加的商品的标签，请将字数限制在1-40以内，每个标签用逗号(,)连接。标签越详细顾客更能够精确自己的口味和体验哦</div>
							</div>
						</div>
					</div>
					<div class="part-right flex-box">
						<div class="show-box flex-box">
							<div class="relative-box">
								<img :src="EditInfo.src?EditInfo.src:'../../../static/img/default_img.jpg'" class="show">
							</div>
						</div>
						<div class="url-box flex-box">
							<div class="relative-box">
								<div class="box-title must" style="left: 10%">图片上传</div>
								<input type="text" class="url-src box-text" v-model="src" placeholder="..." :class="{'wrong':!SrcCheck}">
								<input type="button" class="url-sub btn btn-dark btn-sm" value="更新预览" @click="preview()">
								<div class="box-descropt" style="left: 10%;top: 78%;width: 80%">请选择正确、清晰的网络图片地址，卖相也是吸引顾客重要的一环哦</div>	
							</div>
						</div>
						<div class="submit-box flex-box">
							<div class="relative-box">
								<input type="button" class="config-btn btn btn-danger btn-sm" :value="EditState.edit?'提交修改':'确定'" @click="UpdateClick()" :disabled="!NameCheck||!PriceCheck||!SrcCheck">
								<input type="button" class="reset-btn btn btn-primary btn-sm" value="重置" @click="!EditState.edit?ClearClick():ResetClick()">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions,mapGetters} from 'vuex'
	
	export default{
		data() {
			return {
				dropdownShow:false,
				name:'',
				category:'',
				price:'',
				tags:'',
				src:''
			}
		},
		computed: {
			...mapState([
				'DMInfo',
				'EditState',
				'LoginState',
				'StoreInfo'
			]),
			...mapGetters([
				'EditInfo'
			]),
			FirstClassName(){
				if(this.Category[0]){
					return this.Category[0]
				}else{
					return ''
				}
			},
			NameCheck(){
				if(this.name){
					return true;
				}else{
					return false;
				}
			},
			PriceCheck(){
				if(this.price){
					return true;
				}else{
					return false;
				}
			},
			SrcCheck(){
				if(this.src){
					return true;
				}else{
					return false;
				}
			},
			Category(){
				return this.StoreInfo.category.split(',')
			}
		},
		methods: {
			...mapActions([
				'getStoreInfo',
				'getDMInfo',
				'UpdateEditState',
				'Update'
			]),
			listClick(value) {
				this.category = value;
				this.dropdownShow = false
			},
			ChangePrice(action){
				if(action == 'up'){
					if(this.price == ''){
						this.price = '1.00'
					}else{
						this.price = (parseFloat(this.price)+1).toFixed(2)
					}
				}else if(action == 'down'){
					if(this.price < 1){
						this.price = '0.00'
					}else{
						this.price = (parseFloat(this.price)-1).toFixed(2)
					}
				}
			},
			preview(){
				$(".show").attr('src',this.src)
			},
			UpdateClick(){
				let sql;
				if(this.EditState.edit){
					sql = "UPDATE goods_table SET class_name='" + this.category + "',price='" + this.price + "',src='" + this.src + "',tags='" + this.tags + "' WHERE name='" + this.name + "'"
					let result = this.Update(sql);
					if(result){
						alert('信息修改成功');
						this.ClearClick();
						this.$router.push('/manager/datamanager')
					}
				}else{
					if(!this.category){
						this.category = this.FirstClassName
					}
					if(this.tags){
						sql = "INSERT INTO goods_table(shop_id,class_name,name,src,price,tags) VALUES ('";
						sql += this.LoginState.shop_id+"','"+this.category+"','"+this.name+"','"+this.src+"','"+this.price+"','"+this.tags+"')"
					}else{
						sql = "INSERT INTO goods_table(shop_id,class_name,name,src,price) VALUES ('"; 
						sql += this.LoginState.shop_id+"','"+this.category+"','"+this.name+"','"+this.src+"','"+this.price+"')"
					}
					let result = this.Update(sql);
					if(result){
						alert('商品录入成功');
						this.ClearClick();
						this.$router.push('/manager/datamanager')
					}
				}
			},
			ClearClick(){
				this.name = '';
				this.category = this.FirstClassName;
				this.price = '0.00';
				this.tags = '';
				this.src = ''
			},
			ResetClick(){
				if(this.EditState.edit){
					this.name = this.EditInfo.name;
					this.category = this.EditInfo.class_name;
					this.price = this.EditInfo.price;
					this.tags = this.EditInfo.tags;
					this.src = this.EditInfo.src;
				}
			}
		},
		async mounted(){
			const that = this;
			that.getDMInfo(that.LoginState.shop_id);
			
			$(".price").click(function(){
				if(that.price!=''){
					that.price = parseFloat(that.price)
				}
			});
			$(".price").blur(function(){
				if(that.price!=''){
					that.price = parseFloat(that.price).toFixed(2)
				}
			})
			
			console.log(that.Category)
		},
		watch:{
			name(value){
				if(this.name){
					if(this.name.length>20)
						this.name = this.name.substring(0,20)
				}
			},
			tags(value){
				if(this.tags){
					if(this.tags.length>40)
						this.tags = this.tags.substring(0,40)
				}
			},
			EditInfo(value){
				//判断,如果当前状态为修改模式,就把信息先放上去
				if(this.EditState.edit){
					this.name = this.EditInfo.name;
					this.category = this.EditInfo.class_name;
					this.price = this.EditInfo.price;
					this.tags = this.EditInfo.tags;
					this.src = this.EditInfo.src;
				}
			}
		},
		destroyed(){
			const EditState = {
				edit: false,
				table: 0,
				row: 0
			};
			this.UpdateEditState(EditState)
		}
	}
	
</script>

<style scoped="scoped">
	
	.shadow{
		width: 100%;
		height: calc(850px + 25vh);
		position: absolute;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 5;
		left: 0;
		top: 0;
	}
	
	#Entry{
		width: 100%;
		height: auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
	.Entry-part{
		height: auto;
		padding: 0px 38px 0px 23px;
	}
	
	.part-body{
		height: 750px;
		background-color: #FFFFFF;
		border-radius: 5px;
		box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-direction: row;
	}
	
	.flex-box{
		display: flex;
		padding: 15px;
		
		/* border: solid 1px; */
	}
	
	.part-left{
		width: 60%;
		height: 100%;
		flex-direction: column;
	}
	
	.name-box{
		height: 20%;
	}
	
	.category-box{
		height: 30%;
	}
	
	.price-box{
		height: 20%;
	}
	
	.tags-box{
		height: 30%;
	}
	
	.part-right{
		width: 40%;
		height: 100%;
		flex-direction: column;
	}
	
	.show-box{
		height: 50%;
	}
	
	.url-box{
		height: 20%;
	}
	
	.submit-box{
		height: 30%;
	}
	
	.relative-box{
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.box-text{
		height: 50px;
		transform: translate(-50%,-50%);
		padding-left: 20px;
		border: solid 1px #D8D8D8;
		font-size: 14px;
		outline-color: #3DC6B6;
		position: absolute;
	}
	
	.name{
		width: 60%;
		left: 50%;
		top: 50%;
	}
	
	.category{
		width: 60%;
		left: 50%;
		top: 33%;
		background-color: #FFFFFF;
		outline: none;
		text-align: left;
	}
	
	.dropdown-ul{
		transition: all 0.3s;
		width: 60%;
		position: absolute;
		left: 50%;
		top: calc(33% - 25px);
		transform: translateX(-50%);
		opacity: 0;
		margin-bottom: 0;
		border: none;
		border: solid 1px #D8D8D8;
		border-top: none;
		z-index: -1;
	}
	
	.dropdown-show{
		opacity: 1;
		z-index: 1;
		margin-top: 50px;
	}
	
	.dropdown-li{
		transition: all 0.5s;
		width: 100%;
		height: 30px;
		text-align: left;
		font-size: 14px;
		padding-left: 20px;
		line-height: 30px;
		background-color: #FFFFFF;
		cursor: default;
	}
	
	.dropdown-li:hover{
		background-color: #E8E8E8;
	}
	
	.price{
		width: 30%;
		left: 35%;
		top: 51%;
	}
	
	.readjust{
		width: 25px;
		height: 50px;
		position: absolute;
		left: 50%;
		top: 29%;
		background-color: #E8E8E8;
		display: flex;
		flex-direction: column;
	}
	
	.readjust-up{
		width: 25px;
		height: 25px;
		display: flex;
		background-image: url(../../../static/img/icon/icon-up.png);
		background-size: 15px 15px;
		background-position: 5px 5px;
		background-repeat: no-repeat;
		border: none;
		outline: none;
		cursor: pointer;
	}
	
	.readjust-down{
		width: 25px;
		height: 25px;
		display: flex;
		background-image: url(../../../static/img/icon/icon-down.png);
		background-size: 17px 17px;
		background-position: 4px 4px;
		background-repeat: no-repeat;
		border: none;
		outline: none;
		cursor: pointer;
	}
	
	.tags{
		width: 60%;
		height: 105px;
		position: absolute;
		left: 50%;
		top: 48%;
		transform: translate(-50%,-50%);
		padding: 7px 20px;
		border: solid 1px #D8D8D8;
		font-size: 14px;
		outline-color: #3DC6B6;
		resize: none;
	}
	
	.show{
		width: 300px;
		height: 300px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		border-radius: 10px;
	}
	
	.url-src{
		width: 60%;
		left: 40%;
		top: 50%;
		padding-right: 20px;
		/* 超出部分用省略号代替 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.url-sub{
		width: 100px;
		left: 75%;
		top: 50%;
		position: absolute;
		transform: translateY(-50%);
	}
	
	.config-btn{
		width: 120px;
		height: 40px;
		position: absolute;
		top: 80%;
		left: 30%;
		transform: translate(-50%,-50%);
	}
	
	.reset-btn{
		width: 120px;
		height: 40px;
		position: absolute;
		top: 80%;
		left: 70%;
		transform: translate(-50%,-50%);
	}
	
	.box-title{
		font-size: 16px;
		font-weight: 600;
		font-family: Roboto, sans-serif;
		-webkit-font-smoothing: antialiased;
		cursor: default;
		position: absolute;
		left: 20%;
		top: 5%;
	}
	
	.must::after{
		content: ' *';
		color: red;
		font-size: 16px;
	}
	
	.box-descropt{
		width: 60%;
		text-align: left;
		position: absolute;
		left: 20%;
		top: 80%;
		font-size: 12px;
		color: #afafaf;
	}
	
	.link-to-setting{
		cursor: pointer;
		text-decoration: underline;
	}
	
	.link-to-setting:hover{
		color: #06c1ae;
	}
	
	.wrong{
		border: solid 1px #e9686b;
	}
	
	/* 关闭input type="number"时自带的数值调整按钮 */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	input[type="number"]{
		-moz-appearance: textfield;
	}
	
	/* @media区 */
	@media (min-width:768px) and (max-width:992px){
		.show{
			width: 220px;
			height: 220px;
		}
		.url-src{
			width: 90%;
			left: 50%;
			top: 30%;
		}
		.url-sub{
			width: 100px;
			height: 40px;
			top: 80%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		.config-btn{
			width: 80px;
		}
		.reset-btn{
			width: 80px;
		}
	}
	@media (min-width:576px) and (max-width:768px){
		.show{
			width: 160px;
			height: 160px;
		}
		.url-src{
			width: 90%;
			left: 50%;
			top: 30%;
		}
		.url-sub{
			width: 100px;
			height: 40px;
			top: 80%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		.config-btn{
			width: 120px;
			top: 30%;
			left: 50%;
		}
		.reset-btn{
			width: 120px;
			top: 80%;
			left: 50%;
		}
	}
	@media (max-width:576px){
		.show{
			display: none;
		}
		.url-src{
			width: 90%;
			left: 50%;
			top: 30%;
		}
		.url-sub{
			width: 90%;
			height: 30px;
			top: 80%;
			left: 50%;
			transform: translate(-50%,-50%);
			font-size: 12px;
		}
		.config-btn{
			width: 90%;
			top: 30%;
			left: 50%;
		}
		.reset-btn{
			width: 90%;
			top: 80%;
			left: 50%;
		}
	}
	
</style>
