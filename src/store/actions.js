/*
通过mutation间接更新state的多个方法的对象
*/

import {
	RECEIVE_LOGIN_STATE,
	RECEIVE_FOLD_STATE,
	RECEIVE_DM,
	RECEIVE_STORE,
	RECEIVE_EDIT_STATE,
	CLEAN_LOGIN_STATE
	
} from './mutation-types'

import {
	reqLogin,
	reqLoginState,
	reqQuitLogin,
	reqBanners,
	reqDMInfo,
	reqStoreInfo,
	reqUpdate
	
} from '../api'

export default{
	//异步登陆请求
	async Login({commit},{user,pwd}){
		//发送异步ajax请求
		const result = await reqLogin({user,pwd})
		//根据结果提交一个mutation
		if(result.Login===true){
			const LoginState = result
			commit(RECEIVE_LOGIN_STATE,{LoginState})
		}else{
			alert(result.msg)
		}
	},
	//进入登录页面时的登录状态监测
	async getLoginState({commit}){
		//发送异步ajax请求
		const result = await reqLoginState()
		//根据结果提交一个mutation
		if(result.Login===true){
			const LoginState = result
			commit(RECEIVE_LOGIN_STATE,{LoginState})
		}
	},
	//退出登录
	async QuitLogin({commit}){
		const result = await reqQuitLogin()
		if(result.OK === true){
			commit(CLEAN_LOGIN_STATE)
		}
	},
	//异步获取DM信息
	async getDMInfo({commit},shop_id){
		//发送异步ajax请求
		const result = await reqDMInfo({shop_id})
		//根据结果提交一个mutation
		if(result.OK===true){
			const DMInfo = result.data
			commit(RECEIVE_DM,{DMInfo})
		}
	},
	//异步获取店铺信息
	async getStoreInfo({commit},shop_id){
		//发送异步ajax请求
		const result = await reqStoreInfo({shop_id})
		//根据结果提交一个mutation
		if(result.OK===true){
			const StoreInfo = result.data[0]
			commit(RECEIVE_STORE,{StoreInfo})
		}
	},
	//异步上传数据更新
	async Update({commit},sql){
		//发送异步ajax请求
		const result = await reqUpdate({sql})
		//根据结果提交一个mutation
		if(result.OK===true){
			return true
			// this.$router.change('/manager/datamanager')
		}
	},
	//同步Manager界面折叠状态
	ChangeFoldState({commit},FoldState){
		commit(RECEIVE_FOLD_STATE,{FoldState})
	},
	//同步更新编辑状态
	UpdateEditState({commit},EditState){
		commit(RECEIVE_EDIT_STATE,{EditState})
	}
}