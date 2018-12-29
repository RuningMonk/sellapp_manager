/*
通过mutation间接更新state的多个方法的对象
*/

import {
	RECEIVE_TEST,
	RECEIVE_FOLD_STATE,
	RECEIVE_DM,
	RECEIVE_STORE
	
} from './mutation-types'

import {
	reqBanners,
	reqDMInfo,
	reqStoreInfo
	
} from '../api'

export default{
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
			const StoreInfo = result.data
			commit(RECEIVE_STORE,{StoreInfo})
		}
	},
	//同步Manager界面折叠状态
	ChangeFoldState({commit},FoldState){
		commit(RECEIVE_FOLD_STATE,{FoldState})
	}
}