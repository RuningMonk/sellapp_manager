<template>
	<div id="Setting" class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 Setting-body">
				<div class="body-left">
					<div class="input_list body-part">
						<div class="relative-box">
							<div class="name">
								<div class="box-title must">店铺名称</div>
								<input type="text" class="name-input box-text" v-model="name">
							</div>
							<div class="time">
								<div class="box-title must" :style="{top: OnlyLi?'25%':'5%'}">营业时间</div>
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
							<div class="position">
								<div class="box-title must">店铺地址</div>
								<input type="text" class="position-input box-text" v-model="position">
							</div>
							<div class="tags">
								<div class="box-title" style="top: 5%">店铺优惠</div>
								<ul class="tags-ul">
									<li class="tags-li" v-for="(item,index) in 5" :key="item.ID" :class="{hide: AddTagsCount < index}">
										<input type="text" class="tags-input box-text">{{index}}
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
					<div class="img body-part">
						<div class="relative-box"></div>
					</div>
					<div class="price_announce body-part">
						<div class="relative-box"></div>
					</div>
					<div class="sub body-part">
						<div class="relative-box"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default{
		data() {
			return {
				OnlyLi: true,
				AddTagsCount: 0,
				dropdownShow:false,
				
				name: '',
				time: '',
				position: '',
				classify: ''
				
			}
		},
		computed: {
			...mapState([
				'ClassifyList'
			]),
			FirstClassName(){
				if(this.ClassifyList[0]){
					return this.ClassifyList[0]
				}else{
					return ''
				}
			}
		},
		methods: {
			TagAdd(){
				if(this.AddTagsCount < 4){
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
			}
		},
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
	}
	
	.tags{
		width: 100%;
		height: 40%;
		position: relative;
		padding: 5px 10px;
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
		left: 70%;
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
		left: 70%;
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
		height: 200px;
		margin-bottom: 0;
		position: absolute;
		top: 57%;
		left: 50%;
		
		transform: translate(-50%,-50%);
	}
	
	.tags-li{
		width: 100%;
		height: 40px;
		padding: 5px;
		float: left;
		position: relative;
		transition: all 0.5s;
		opacity: 1;
		z-index: 1;
	}
	
	.hide{
		opacity: 0;
		margin-top: -40px;
		z-index: -1;
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
	
	/*去除input的各种自带的调整按钮(太丑了)*/
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button,
	input::-webkit-clear-button {
		display: none;
	}
	
</style>
