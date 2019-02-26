<template>
	<div id="Setting" class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 Setting-body">
				<div class="body-left">
					<div class="input_list body-part">
						<div class="relative-box">
							<div class="name" :class="{'name-minus':AddTagsCount>4}">
								<div class="box-title must">店铺名称</div>
								<input type="text" class="name-input box-text" v-model="name" disabled="disabled">
							</div>
							<div class="time" :class="{'time-minus':AddTagsCount>4}">
								<div class="box-title must" :style="{top: TimeTitleTop}">营业时间</div>
								<ul class="time-ul">
									<li class="time-li" :class="{'time-li-only': OnlyLi}">
										<input type="time" class="time-input-start box-text">
										<input type="time" class="time-input-end box-text">
										<div class="li-add" :style="{opacity: OnlyLi+0,display:OnlyLi?'block':'none'}" @click="OnlyLi=!OnlyLi"></div>
									</li>
									<li class="time-li" :style="{opacity: !OnlyLi+0,display:!OnlyLi?'block':'none'}">
										<input type="time" class="time-input-start box-text">
										<input type="time" class="time-input-end box-text">
										<div class="li-del" :style="{opacity: !OnlyLi+0}" @click="OnlyLi=!OnlyLi"></div>
									</li>
								</ul>
							</div>
							<div class="position" :class="{'position-minus':AddTagsCount>4}">
								<div class="box-title must">店铺地址</div>
								<input type="text" class="position-input box-text" v-model="position">
							</div>
							<div class="tags" :class="{'tags-plus':AddTagsCount>4}">
								<div class="box-title">店铺优惠</div>
								<ul class="tags-ul">
									<li class="tags-li" v-for="(item,index) in 7" :key="item.ID" :class="{hide: AddTagsCount < index}">
										<input type="text" class="tags-input box-text">
										<div class="li-add" style="left: 85%" @click="TagAdd()" v-if="index==0"></div>
										<div class="li-del" style="left: 85%" @click="TagDel()" v-if="AddTagsCount==index&&index!=0"></div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="check body-part">
						<div class="relative-box">
							<div class="check-top" :class="{'check-box-hide':dropdownShow}">
								<div class="box-title must">配送方式</div>
								<div class="radio-box">
									<input type="radio" value="美团配送" id="way1" name="delivery" class="radio-button" checked="checked" />
									<label for="way1" class="radio-text">加盟配送</label>
									<input type="radio" value="自行配送" id="way2" name="delivery" class="radio-button" />
									<label for="way2" class="radio-text">自行配送</label>
								</div>
							</div>
							<div class="check-bottom" :class="{'check-box-spread':dropdownShow}">
								<div class="box-title must" :style="{top: dropdownShow?'3%':'15%'}">店铺类型</div>
								<input type="button" class="classify-btn box-text" @click="dropdownShow=!dropdownShow" :value="classify?classify:FirstClassName" :style="{'top':dropdownShow?'25%':'65%'}">
								<ul class="dropdown-ul" :class="{'dropdown-show':dropdownShow}">
									<li class="dropdown-li" v-for="item in ClassifyList" :key="item.ID" @click="listClick(item)">{{item}}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="body-right">
					<div class="img body-part" :class="{'img-plus': ImgBoxPlus}">
						<div class="relative-box">
							<div class="category" :class="{'plus': ImgBoxPlus,'ImgView-fold': ImgPreView}">
								<div class="box-title must" style="left: 10%;top: 5%">分类设置</div>
								<ul class="category-ul" :class="{'category-ul-type1': !ImgBoxPlus,'category-ul-type2': ImgBoxPlus}">
									<li class="category-li" v-for="(item,index) in 10" :key="item.ID" :class="{hide: AddCateCount < index}">
										<div class="li-index">{{index+1}}.</div>
										<input type="text" class="category-input box-text">
										<div class="li-add" style="left: 85%" @click="CategoryAdd()" v-if="index==0"></div>
										<div class="li-del" style="left: 85%" @click="CategoryDel()" v-if="AddCateCount==index&&index!=0"></div>
									</li>
								</ul>
							</div>
							<div class="url" :class="{'pre-minus': CategoryPre,'minus': ImgBoxPlus&&!CategoryPre,'ImgView-spread': ImgPreView}">
								<div class="box-title view-title1" :class="{'view-title-hide':!ImgPreView,'view-title-plus':ImgPreView&&ImgBoxPlus}">图片预览</div>
								<img src="" class="view-img" :class="{'view-img-hide':!ImgPreView,'view-img-plus':ImgPreView&&ImgBoxPlus}">
								<div class="box-title view-title2" :class="{'view-title2-spread-type1':ImgPreView,'view-title2-spread-type2':ImgPreView&&ImgBoxPlus}">图片上传</div>
								<input type="text" class="url-src box-text" :class="{'view-text-spread-type1':ImgPreView,'view-text-spread-type2':ImgPreView&&ImgBoxPlus}" v-model="src" placeholder="...">
								<input type="button" class="url-sub btn btn-sm" :class="{'view-btn-spread-type1':ImgPreView,'view-btn-spread-type2':ImgPreView&&ImgBoxPlus,'btn-primary':!ImgPreView,'btn-dark':ImgPreView}" :value="ImgPreView?'关闭预览':'预览'" @click="preview()">
							</div>
						</div>
					</div>
					<div class="price_announce body-part" :class="{'price-minus': ImgBoxPlus}">
						<div class="relative-box">
							<div class="price">
								<div class="min">
								<div class="box-title must">配送服务最低价格</div>
									<input type="number" class="price-input box-text" v-model="min_price" @click="number_click(min_price,0)" @blur="number_blur(min_price,0)">
									<span class="unit">¥</span>
								</div>
								<div class="fee">
								<div class="box-title must" style="left: 0%">配送费</div>
									<input type="number" class="price-input box-text" v-model="fee" @click="number_click(fee,1)" @blur="number_blur(fee,1)" style="left: 25%">
									<span class="unit" style="left: 47%">¥</span>
								</div>
							</div>
							<div class="announce">
								<div class="box-title" style="left: 13%;top: 10%">店铺公告</div>
								<textarea v-model="announce" cols="30" rows="2" class="announce-content" maxlength="40" placeholder="..."></textarea>
							</div>
						</div>
					</div>
					<div class="sub body-part">
						<div class="relative-box">
							<input type="button" class="config-btn btn btn-danger btn-sm" value="保存" @click="UpdateClick()">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	
	export default{
		data() {
			return {
				OnlyLi: true,
				AddTagsCount: 0,
				AddCateCount: 0,
				dropdownShow: false,
				ImgBoxPlus: false,
				ImgPreView: false,
				
				name: '',
				position: '',
				classify: '',
				src: '',
				announce: '',
				min_price: '',
				fee: ''
			}
		},
		computed: {
			...mapState([
				'ClassifyList',
				'LoginState',
				'StoreInfo',
				'DMInfo'
			]),
			TimeTitleTop(){
				if(this.AddTagsCount>4){
					if(this.OnlyLi){
						return '25%'
					}else{
						return '3%'
					}
				}else{
					if(this.OnlyLi){
						return '23%'
					}else{
						return '7%'
					}
				}
			},
			FirstClassName(){
				if(this.ClassifyList[0]){
					return this.ClassifyList[0]
				}else{
					return ''
				}
			},
			CategoryPre(){
				if(3<this.AddCateCount && this.AddCateCount< 7){
					return true
				}else{
					return false
				}
			},
			
		},
		methods: {
			...mapActions([
				'getStoreInfo',
				'getDMInfo',
				'Update'
			]),
			TagAdd(){
				if(this.AddTagsCount < 6){
					this.AddTagsCount++;
				}
			},
			TagDel(){
				if(this.AddTagsCount > 0){
					this.AddTagsCount--;
				}
			},
			listClick(value) {
				this.classify = value;
				this.dropdownShow = false
			},
			CategoryAdd(){
				if(this.AddCateCount < 9){
					this.AddCateCount++;
				}
			},
			CategoryDel(){
				if(this.AddCateCount > 0){
					this.AddCateCount--;
				}
			},
			preview(){
				this.ImgPreView = !this.ImgPreView;
				$(".view-img").attr('src',this.src)
			},
			number_click(value,flag){
				if(flag==0){
					if(value!=''){
						this.min_price = parseFloat(value)
					}
				}else{
					if(value!=''){
						this.fee = parseFloat(value)
					}
				}
				
			},
			number_blur(value,flag){
				if(flag==0){
					if(value!=''){
						this.min_price = parseFloat(value).toFixed(2)
					}
				}else{
					if(value!=''){
						this.fee = parseFloat(value).toFixed(2)
					}
				}
			},
			time(){
				let Time = '';
				if(this.OnlyLi){
					Time = $('.time-input-start')[0].value + '-' +  $('.time-input-end')[0].value;
				}else{
					Time = $('.time-input-start')[0].value + '-' +  $('.time-input-end')[0].value;
					Time += ',' + $('.time-input-start')[1].value + '-' +  $('.time-input-end')[1].value
				}
				return Time
			},
			UpdateClick(){
				const that = this;
				let sql,way;
				//获取配送方式的选择
				let radio = document.getElementsByName('delivery');
				if(radio[0].checked == true){
					way = radio[0].value
				}else{
					way = radio[1].value
				}
				//获取标签的文本
				let li_tags = document.getElementsByClassName('tags-input');
				let tags = '';
				for(let i = 0;i < li_tags.length;i++){
					if(li_tags[i].value != ''){
						tags += li_tags[i].value + ','
					}
				}
				tags = tags.substr(0,tags.length-1);
				//获取分类的文本
				let li_category = document.getElementsByClassName('category-input');
				let category = '';
				for(let i = 0;i < li_category.length;i++){
					if(li_category[i].value != ''){
						category += li_category[i].value + ','
					}
				}
				category = category.substr(0,category.length-1);
				//sql语句的组合
				sql = "UPDATE store_table SET position='" + that.position + "',delivery='" + way + "',serve_time='" + that.time() + "',announcement='" + that.announce + "',min_price='" + parseFloat(that.min_price) + "',fee='" + parseFloat(that.fee) + "',Store_tags='" + tags + "',Store_classify='" + that.classify + "' WHERE Store_name='" + that.name + "'";
				// console.log(sql)
				//update提交
				let result = this.Update(sql);
				if(result){
					alert('信息修改成功');
					this.$router.push('/manager/home')
				}
			}
		},
		async mounted(){
			const that = this;
			that.getStoreInfo(that.LoginState.shop_id);
			that.getDMInfo(that.LoginState.shop_id);
			// console.log(that.StoreInfo)
		},
		watch: {
			AddCateCount(value){
				if(value > 3){
					this.ImgBoxPlus = true
				}else{
					this.ImgBoxPlus = false
				}
			},
			StoreInfo(value){
				// 店铺名称
				this.name = this.StoreInfo.Store_name;
				// 店铺位置
				this.position = this.StoreInfo.position;
				//店铺类型
				this.classify = this.StoreInfo.Store_classify;
				// 店铺公告
				this.announce = this.StoreInfo.announcement;
				// 店铺头像
				this.src = this.StoreInfo.Store_src;
				// 营业时间
				if(this.StoreInfo.serve_time.indexOf(',')!=-1){
					this.OnlyLi = false;
					let timeArr = this.StoreInfo.serve_time.split(',');
					for(let i = 0;i < timeArr.length; i++){
						let time = timeArr[i].split('-');
						$('.time-input-start')[i].value = time[0];
						$('.time-input-end')[i].value = time[1]
					}
				}else{
					this.OnlyLi = true;
					let time = this.StoreInfo.serve_time.split('-');
					$('.time-input-start')[0].value = time[0];
					$('.time-input-end')[0].value = time[1]
				}
				// 优惠设置
				let tagArr = this.StoreInfo.Store_tags.split(',');
				this.AddTagsCount = tagArr.length - 1;
				for(let i = 0;i < tagArr.length; i++){
					$('.tags-input')[i].value = tagArr[i]
				}
				//配送设置
				if(this.StoreInfo.delivery == '美团跑腿'){
					$('#way1')[0].checked = true
				}else{
					$('#way2')[0].checked = true
				}
				//底价设置
				this.min_price = parseFloat(this.StoreInfo.min_price).toFixed(2);
				this.fee = parseFloat(this.StoreInfo.fee).toFixed(2);
			},
			DMInfo(value){
				//分类设置
				let ClassArr = new Array();
				for(let i = 0;i < this.DMInfo.length; i++){
					ClassArr.push(this.DMInfo[i].class_name);
					$('.category-input')[i].value = this.DMInfo[i].class_name
				}
				this.AddCateCount = ClassArr.length - 1;
			}
		}
	}
	
</script>

<style scoped="scoped">
	
	#Setting{
		width: 100%;
		height: auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
	.Setting-body{
		height: calc(100vh - 50px);
		padding: 0px 38px 0px 23px;
		
		display: flex;
		flex-direction: row;
	}
	
	.body-left,.body-right{
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.body-part{
		display: flex;
		padding: 10px 10px;
		flex-direction: column;
		transition: height 0.5s;
	}
	
	.input_list{
		height: 70%;
	}
	
	.check{
		height: 30%;
	}
	
	.img{
		height: 40%;
	}
	
	.price_announce{
		height: 40%;
	}
	
	.img-plus{
		height: 55%;
	}
	
	.price-minus{
		height: 25%;
	}
	
	.sub{
		height: 20%;
	}
	
	.relative-box{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		border-radius: 5px;
		position: relative;
	}
	
	.box-text{
		height: 50px;
		transform: translate(-50%,-50%);
		padding-left: 20px;
		padding-right: 20px;
		border: solid 1px #D8D8D8;
		font-size: 14px;
		outline-color: #3DC6B6;
		position: absolute;
		transition: all 0.5s;
		/* 超出部分用省略号代替 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.name,.time,.position{
		width: 100%;
		height: 20%;
		position: relative;
		padding: 5px 10px;
		transition: all 0.5s;
	}
	
	.tags{
		width: 100%;
		height: 40%;
		position: relative;
		padding: 5px 10px;
		transition: all 0.5s;
	}
	
	.box-title{
		transition: all 0.5s;
		font-size: 16px;
		font-weight: 600;
		font-family: Roboto, sans-serif;
		-webkit-font-smoothing: antialiased;
		cursor: default;
		position: absolute;
		left: 20%;
		top: 15%;
	}
	
	.tags .box-title{
		top: 0%;
	}
	
	.must::after{
		content: ' *';
		color: red;
		font-size: 16px;
	}
	
	.name-input{
		width: 60%;
		left: 50%;
		top: 60%;
	}
	
	.time-ul{
		width: 100%;
		height: 80px;
		margin-bottom: 0;
		position: absolute;
		top: 60%;
		left: 50%;
		
		transform: translate(-50%,-50%);
	}
	
	.time-li{
		width: 100%;
		height: 40px;
		padding: 5px;
		float: left;
		position: relative;
		transition: all 0.5s;
	}
	
	.time-li-only{
		transform: translateY(50%);
	}
	
	.time-input-start{
		width: 20%;
		height: 30px !important;
		left: 30%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	
	.time-input-start::after{
		content: '开始';
		left: 80%;
		top: 50%;
		font-size: 14px;
		font-family: Roboto, sans-serif;
		transform: translate(-50%,-50%);
		position: absolute;
	}
	
	.time-input-end{
		width: 20%;
		height: 30px !important;
		left: 55%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	
	.time-input-end::after{
		content: '结束';
		left: 80%;
		top: 50%;
		font-size: 14px;
		font-family: Roboto, sans-serif;
		transform: translate(-50%,-50%);
		position: absolute;
	}
	
	.li-add{
		width: 25px;
		height: 25px;
		position: absolute;
		left: 75%;
		top: 50%;
		transform: translate(-50%,-50%);
		cursor: pointer;
		
		background-image: url(../../../static/img/icon/icon-add.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	.li-add:hover{
		background-image: url(../../../static/img/icon/icon-add-hover.png);
	}
	
	.li-del{
		width: 25px;
		height: 25px;
		position: absolute;
		left: 75%;
		top: 50%;
		transform: translate(-50%,-50%);
		cursor: pointer;
		
		background-image: url(../../../static/img/icon/icon-del.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	.li-del:hover{
		background-image: url(../../../static/img/icon/icon-del-hover.png);
	}
	
	.position-input{
		width: 60%;
		left: 50%;
		top: 60%;
	}
	
	.tags-ul{
		width: 100%;
		height: auto;
		margin-bottom: 0;
		position: absolute;
		top: 10%;
		left: 50%;
		
		transform: translateX(-50%);
		
	}
	
	.tags-li{
		width: 100%;
		height: 40px;
		padding: 5px;
		float: left;
		position: relative;
		transition: all 0.5s;
		opacity: 1;
		z-index: 0;
	}
	
	.tags-input{
		width: 60%;
		height: 30px !important;
		font-size: 12px;
		left: 50%;
		top: 50%;
	}
	
	.check-top,.check-bottom{
		width: 100%;
		height: 50%;
		position: relative;
		transition: all 0.3s;
	}
	
	.radio-box{
		width: auto;
		height: auto;
		position: absolute;
		transform: translate(-50%,-50%);
		top: 60%;
		left: 40%;
	}
	
	.radio-button{
		opacity: 0;
	}
	
	.radio-text{
		position: relative;
		cursor: pointer;
		font-size: 16px;
		margin: 0;
		margin-left: 10px;
		margin-right: 10px;
	}
	
	.radio-text::before{
		content: '';
		width: 18px;
		height: 18px;
		position: absolute;
		border: solid 2px #777777;
		border-radius: 50%;
		left: -20px;
		top: 12px;
		transform: translate(-50%,-50%);
		transition: all 0.3s;
	}
	
	.radio-text::after{
		content: '';
		width: 0px;
		height: 0px;
		background-color: #777777;
		border-radius: 50%;
		position: absolute;
		left: -20px;
		top: 12px;
		transform: translate(-50%,-50%);
		opacity: 0;
		transition: all 0.3s;
	}
	
	.radio-button:checked + .radio-text::before{
		content: '';
		width: 18px;
		height: 18px;
		position: absolute;
		border: solid 2px #06c1ae;
		border-radius: 50%;
		left: -20px;
		top: 12px;
		transform: translate(-50%,-50%);
	}
	
	.radio-button:checked + .radio-text::after{
		content: '';
		width: 9px;
		height: 9px;
		background-color: #06c1ae;
		border-radius: 50%;
		position: absolute;
		left: -20px;
		top: 12px;
		transform: translate(-50%,-50%);
		opacity: 1;
	}
	
	.check-box-hide{
		opacity: 0;
		height: 0;
	}
	
	.check-box-spread{
		height: 100%;
	}
	
	/*dropdownList*/
	.classify-btn{
		width: 60%;
		left: 50%;
		top: 65%;
		background-color: #FFFFFF;
		outline: none;
		text-align: left;
		transition: all 0.2s;
	}
	
	.dropdown-ul{
		transition: all 0.3s;
		width: 60%;
		position: absolute;
		left: 50%;
		top: calc(24% - 25px);
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
		z-index: 0;
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
	
	.category{
		width: 100%;
		height: 70%;
		position: relative;
		transition: all 0.5s;
		opacity: 1;
		z-index: 0;
	}
	
	.category-ul{
		height: auto;
		transition: all 0.5s;
		margin-bottom: 0;
		position: absolute;
		transform: translateX(-50%);
	}
	
	.category-ul-type1{
		width: 100%;
		top: 22%;
		left: 50%;
	}
	
	.category-ul-type2{
		width: 100%;
		top: 12%;
		left: 50%;
	}
	
	.category-li{
		width: 100%;
		height: 40px;
		padding: 5px;
		float: left;
		position: relative;
		transition: all 0.5s;
		opacity: 1;
		z-index: 0;
	}
	
	.li-index{
		font-size: 12px;
		position: absolute;
		left: 18%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	
	.category-input{
		width: 60%;
		height: 30px !important;
		font-size: 12px;
		left: 50%;
		top: 50%;
	}
	
	.url{
		width: 100%;
		height: 30%;
		position: relative;
		transition: all 0.5s;
		opacity: 1;
		z-index: 0;
		
	}
	
	.url-src{
		width: 60%;
		left: 40%;
		top: 60%;
		padding-right: 20px;
		/* 超出部分用省略号代替 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.url-sub{
		width: 100px;
		left: 75%;
		top: 60%;
		position: absolute;
		transform: translateY(-50%);
	}
	
	.plus{
		height: 100%;
	}
	
	.pre-minus{
		margin-top: -130px;
	}
	
	.minus{
		height: 0%;
		opacity: 0;
		z-index: -1;
	}
	
	.price{
		width: 100%;
		height: 40%;
		position: relative;
		animation: all 0.5s;
	}
	
	.min,.fee{
		width: 50%;
		height: 100%;
		float: left;
		position: relative;
	}
	
	.min .box-title,.fee .box-title{
		left: 25%;
		top: 25%;
	}
	
	.price-input{
		width: 50%;
		height: 30px;
		top: 60%;
		left: 50%;
	}
	
	.unit{
		height: 30px;
		position: absolute;
		line-height: 30px;
		left: 72%;
		top: 60%;
		transform: translate(-50%,-50%);
		font-size: 16px;
		font-family: Roboto, sans-serif;
		cursor: default
	}
	
	.announce{
		width: 100%;
		height: 60%;
		animation: all 0.5s;
		position: relative;
	}
	
	.announce-content{
		width: 75%;
		height: 120px;
		position: absolute;
		left: 50%;
		top: 55%;
		transform: translate(-50%,-50%);
		padding: 7px 20px;
		border: solid 1px #D8D8D8;
		font-size: 14px;
		outline-color: #3DC6B6;
		resize: none;
	}
	
	.config-btn{
		width: 120px;
		height: 40px;
		position: absolute;
		top: 60%;
		left: 80%;
		transform: translate(-50%,-50%);
	}
	
	.ImgView-fold{
		height: 0%;
		opacity: 0;
		z-index: -1;
	}
	
	.ImgView-spread{
		height: 100%;
	}
	
	.view-title1{
		transition: all 0.5s;
		opacity: 1;
		z-index: 0;
		left: 10%;
		top: 5%;
	}
	
	.view-title2{
		left: 10%;
		top: 5%;
	}
	
	.view-img{
		transition: all 0.5s;
		opacity: 1;
		z-index: 0;
		width: 200px;
		height: 200px;
		position: absolute;
		left: 50%;
		top: 10%;
		transform: translateX(-50%);
	}
	
	.view-title-hide{
		opacity: 0;
		z-index: -1;
	}
	
	.view-img-hide{
		opacity: 0;
		z-index: -1;
		height: 0;
		width: 0;
	}
	
	.view-title2-spread-type1{
		top: 72%;
	}
	
	.view-title2-spread-type2{
		top: 105%;
	}
	
	.view-text-spread-type1{
		top: 88%;
	}
	
	.view-text-spread-type2{
		top: 118%;
	}
	
	.view-btn-spread-type1{
		top: 88%;
	}
	
	.view-btn-spread-type2{
		top: 118%;
	}
	
	.view-title-plus{
		top: 35%;
	}
	
	.view-img-plus{
		top: 45%;
		width: 250px;
		height: 250px;
	}
	
	.name-minus,.time-minus,.position-minus{
		height: 15%;
	}
	
	.name-minus .box-title,.time-minus .box-title,.position-minus .box-title{
		top: 14%;
	}
	
	.name-minus .box-text,.time-minus .box-text,.position-minus .box-text{
		top: 70%;
	}
	
	.time-minus .li-add,.time-minus .li-del{
		top: 70%;
	}
	
	.tags-plus{
		height: 55%;
	}
	
	.tags-plus .box-title{
		top: 5%;
	}
	
	.tags-plus .tags-ul{
		top: 11%;
	}
	
	/*去除input的各种自带的调整按钮(太丑了)*/
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button,
	input::-webkit-clear-button {
		display: none;
	}
	
	/*列表的隐藏*/
	.hide{
		opacity: 0;
		margin-top: -40px;
		z-index: -1;
	}
	
	.price-minus .box-title{
		top: 15%;
	}
	
	.price-minus .price-input{
		top: 70%;
	}
	
	.price-minus .unit{
		top: 70%;
	}
	
	.price-minus .announce-content{
		height: 60px;
		top: 60%;
	}
	
	
</style>
