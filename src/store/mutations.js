/*
直接更新state的多个方法的对象
*/

import {
	RECEIVE_TEST,
	RECEIVE_FOLD_STATE,
	RECEIVE_DM,
	RECEIVE_STORE
	
} from './mutation-types'

import Vue from 'vue'

export default {
	[RECEIVE_TEST](state, {testinfo}) {
		state.testinfo = testinfo
	},
	[RECEIVE_FOLD_STATE](state, {FoldState}) {
		state.FoldState = FoldState
	},
	[RECEIVE_DM](state, {DMInfo}) {
		state.DMInfo = DMInfo
	},
	[RECEIVE_STORE](state, {StoreInfo}) {
		state.StoreInfo = StoreInfo
	}
}
