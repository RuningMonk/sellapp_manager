<template>
	<div id="login">
		<div class="part" v-if="!login">
			<div class="title">
				<div class="title-text">注册开店</div>
			</div>
			<div class="input">
				<div class="input-part">
					<div class="part-top" :class="{error:!PhoneCheckShow}">
						<input type="button" class="dropdown-btn" @click="dropdownShow=!dropdownShow" :value="dropdownValue">
						<ul class="dropdown-ul" :class="{'dropdown-show':dropdownShow}">
							<li class="dropdown-li" @click="listClick('+86 中国')">+86 中国</li>
							<li class="dropdown-li" @click="listClick('+852 中国香港')">+852 中国香港</li>
							<li class="dropdown-li" @click="listClick('+853 中国澳门')">+853 中国澳门</li>
							<li class="dropdown-li" @click="listClick('+65 新加坡')">+65 新加坡</li>
						</ul>
						<input type="text" class="phone-input" v-model="phone" placeholder="请输入手机号">
					</div>
					<div class="part-bottom" v-if="!PhoneCheckShow">
						<img src="../../../static/img/icon/alertErr.png" class="alert-icon">
						<div class="alert-text">请检查手机号是否填写正确!</div>
					</div>
				</div>
				<div class="input-part">
					<div class="part-top" :class="{error:!CodeCheckShow}">
						<input type="text" class="code-input" v-model="code" placeholder="验证码">
						<input type="button" class="code-send" :disabled="!PhoneCheck" v-model="TimeShow" @click="verification()" />
					</div>
					<div class="part-bottom" v-if="!CodeCheckShow">
						<img src="../../../static/img/icon/alertErr.png" class="alert-icon">
						<div class="alert-text">请检查验证码是否填写正确!</div>
					</div>
				</div>
			</div>
			<div class="button">
				<input type="button" class="login-btn" value="注册" />
				<span class="link link-to-login" @click="login=!login">已有账号，去登陆</span>
			</div>
		</div>
		<div class="part register" v-if="login">
			<div class="tabs">
				<div class="tab" @click="settab(0)" :class="{'tab-active':LoginType==0}"><span class="tab-text">账号密码登录</span></div>
				<div class="tab" @click="settab(1)" :class="{'tab-active':LoginType==1}"><span class="tab-text">手机验证登录</span></div>
			</div>
			<div class="form">
				<div class="form-body">
					<div class="body-part" v-if="LoginType==0">
						<img src="../../../static/img/icon/user_icon.png" class="input-icon">
						<input type="text" class="form-input" v-model="user" placeholder="账号">
					</div>
					<div class="body-part" v-if="LoginType==0">
						<img src="../../../static/img/icon/pwd-icon.png" class="input-icon">
						<input type="text" class="form-input" v-model="pwd" placeholder="密码">
					</div>
					<div class="body-part" v-if="LoginType==1">
						<img src="../../../static/img/icon/phone_icon.png" class="input-icon">
						<input type="text" class="form-input" v-model="phone" placeholder="手机号">
					</div>
					<div class="body-part" v-if="LoginType==1">
						<input type="text" class="form-input phone-code" v-model="phoneCode" placeholder="验证码">
						<input type="button" class="phone-code-send" :disabled="!PhoneCheck" v-model="TimeShow" @click="verification()" />
					</div>
					<div class="body-part">
						<input type="button" class="form-btn" value="登录" @click="LoginRequest">
					</div>
					<div class="body-part form-link">
						<span class="link link-to-register" @click="login=!login">注册账号，免费入驻</span>
						<span class="link link-to-forget">忘记账号/密码</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				login:true,
				dropdownShow:false,
				dropdownValue:'+86 中国',
				phone:'',
				code:'',
				time:0,
				user:'',			//账号
				pwd:'',				//密码
				phoneCode:'',		//手机登录验证码		
				phoneinit:0,		//刚打开页面时的显示控制
				codeinit:0,			//刚打开页面时的显示控制
				LoginType:0,		//登录方式
			}
		},
		computed: {
			PhoneCheck(){
				const that = this;
				if(that.phone){
					that.phoneinit = 1;
					return /^1\d{10}$/.test(that.phone)
				}else{
					return false
				}
			},
			CodeCheck(){
				const that = this;
				if(that.code){
					that.codeinit = 1;
					return /^.{1,4}$/.test(that.code)
				}else{
					return false
				}
			},
			TimeShow(){
				return this.time>0 ? "已发送("+this.time+')':'获取验证码'
			},
			PhoneCheckShow(){
				const that = this;
				if(!that.PhoneCheck && that.phoneinit){
					return false
				}else{
					return true
				}
			},
			CodeCheckShow(){
				const that = this;
				if(!that.CodeCheck && that.codeinit){
					return false
				}else{
					return true
				}
			}
		},
		methods: {
			listClick(value) {
				this.dropdownValue = value;
				this.dropdownShow = false
			},
			verification(){
				$(".code-send").attr('disabled',true);
				$(".phone-code-send").attr('disabled',true);
				this.time=15;
				const interval = setInterval(()=>{
					this.time--;
					if(this.time<=0){
						this.time=0;
						$(".code-send").attr('disabled',false);
						$(".phone-code-send").attr('disabled',false);
						clearInterval(interval);
					}
				},1000)
			},
			settab(index){
				this.LoginType = index
			},
			LoginRequest(){
				this.$router.replace('/manager/home')
			}
		},
	}
	
</script>

<style scoped="scoped">
	
	#login{
		width: 40%;
		height: 50%;
		margin-top: -20%;
		display: flex;
		flex-direction: column;
	}
	
	.part{
		width: 100%;
		height: calc(100% - 40px);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.title{
		width: 100%;
		height: 20%;
		display: flex;
		justify-content: center;
		position: relative;
	}
	
	.title-text{
		width: auto;
		height: auto;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		font-size: 24px;
	}
	
	.input{
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
		position: relative;
		
	}
	
	.input-part{
		width: 80%;
		height: 80px;
		margin: auto;
		
	}
	
	.part-top{
		width: 100%;
		height: 50px;
		border: solid 1px #D8D8D8;
		position: relative;
	}
	
	.error{
		border: solid 1px #FF5338;
	}
	
	.dropdown-btn{
		width: 40%;
		height: 20px;
		float: left;
		outline: none;
		background-color: #FFFFFF;
		border: none;
		border-right: solid 1px #D8D8D8;
		font-size: 14px;
		position: absolute;
		top: 50%;
		left: 0;
		z-index: 1;
		transform: translateY(-50%);
		text-align: left;
		padding-left: 20px;
	}
	
	.phone-input{
		width: 60%;
		height: 48px;
		border: none;
		padding-left: 15px;
		font-size: 14px;
		outline: none;
		float: left;
		margin-left: 40%;
	}
	
	.dropdown-ul{
		transition: all 0.3s;
		width: 100%;
		height: 121px;
		position: absolute;
		left: 0;
		top: 0;
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
		width: 100%;
		height: 30px;
		text-align: left;
		font-size: 14px;
		padding-left: 20px;
		line-height: 30px;
		background-color: #FFFFFF;
		cursor: default;
	}
	
	.part-bottom{
		width: 100%;
		height: 30px;
		position: relative;
		z-index: -1;
	}
	
	.alert-icon{
		width: 10px;
		height: 10px;
		float: left;
		margin: 10px;
	}
	
	.alert-text{
		width: calc(100% - 30px);
		height: 100%;
		float: left;
		text-align: left;
		font-size: 12px;
		line-height: 30px;
	}
	
	.code-input{
		width: 60%;
		height: 48px;
		border: none;
		padding-left: 20px;
		font-size: 14px;
		outline: none;
		float: left;
	}
	
	.code-send{
		width: 40%;
		height: 20px;
		float: left;
		outline: none;
		background-color: #FFFFFF;
		border: none;
		border-left: solid 1px #D8D8D8;
		font-size: 14px;
		position: absolute;
		top: 50%;
		left: 60%;
		transform: translateY(-50%);
		z-index: 0;
		cursor: pointer;
	}
	
	.button{
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: column;
	}
	
	.login-btn{
		width: 80%;
		height: 40px;
		margin: 10px 10% 10px 10%;
		border: none;
		background-color: #3DC6B6;
		font-size: 14px;
		color: #FFFFFF;
		cursor: pointer;
		outline: none;
	}
	
	.login-btn:hover{
		background-color: #20BBA9;
	}
	
	.link-to-login{
		width: 50%;
		font-size: 12px;
		color: #3DC6B6;
		display: block;
		text-align: left;
		padding-left: 10%;
		cursor: pointer;
	}
	
	.link:hover{
		text-decoration: underline;
	}
	
	.tabs{
		width: 100%;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: relative;
	}
	
	.tabs::before{
		content: '';
		display: block;
		position: absolute;
		width: 65%;
		height: 1px;
		background-color: #E8E8E8;
		top: 100%;
		left: 17.5%;
	}
	
	.tabs::after{
		content: '';
		display: block;
		position: absolute;
		left: 50%;
		top: 50%;
		width: 1px;
		height: 20px;
		background-color: #E8E8E8;
		transform: translateY(-50%);
	}
	
	.tab{
		width: 30%;
		height: 100%;
		display: flex;
	}
	
	.tab-text{
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 50px;
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		font-size: 18px;
		cursor: pointer;
	}
	
	.tab-active{
		color: #3dc6b6;
		font-weight: 700;
	}
	
	.form{
		width: 100%;
		height: calc(100% - 50px);
		display: flex;
	}
	
	.form-body{
		width: 100%;
		height: 100%;
		display: block;
		margin-top: 5px;
	}
	
	.body-part{
		width: 100%;
		height: 15%;
		position: relative;
	}
	
	.form-input{
		width: calc(60% - 1px);
		height: 40px;
		margin: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		outline-color: #3DC6B6;
		font-size: 14px;
		padding-left: 30px;
	}
	
	.phone-code{
		padding-left: 10px;
		width: 30%;
		left: 35%;
	}
	
	.phone-code-send{
		position: absolute;
		width: 28%;
		height: 40px;
		margin: auto;
		top: 50%;
		left: 66%;
		border: none;
		outline: none;
		cursor: pointer;
		background-color: #E5E5E5;
		transform: translate(-50%,-50%);
		font-size: 14px;
	}
	
	.phone-code-send:hover{
		background-color: #D9D9D9;
	}
	
	.input-icon{
		width: 30px;
		height: 30px;
		position: absolute;
		z-index: 1;
		left: calc(20% + 1px);
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
	}
	
	.form-btn{
		width: 60%;
		height: 40px;
		margin: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		border: none;
		background-color: #3DC6B6;
		font-size: 14px;
		color: #FFFFFF;
		cursor: pointer;
		outline: none;
	}
	
	.form-btn:hover{
		background-color: #20BBA9;
	}
	
	.link-to-register{
		font-size: 12px;
		color: #3DC6B6;
		cursor: pointer;
		position: absolute;
		left: 20%;
	}
	
	.link-to-forget{
		font-size: 12px;
		color: #3DC6B6;
		cursor: pointer;
		position: absolute;
		right: 20%;
	}
	
	
	/* @media区域 */
	@media (min-width:992px) and (max-width:1200px){
		#login{
			background-color: red;
			width: 50%;
		}
	}
	
	@media (min-width:768px) and (max-width:992px){
		#login{
			background-color: blue;
			width: 80%;
		}
	}
	
	@media (min-width:576px) and (max-width:768px){
		#login{
			background-color: green;
			width: 100%;
		}
	}
	
	@media (max-width:576px){
		#login{
			background-color: grey;
			width: 100%;
			margin-top: -60%;
		}
	}
	
</style>
