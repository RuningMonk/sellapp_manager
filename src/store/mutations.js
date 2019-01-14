/*
直接更新state的多个方法的对象
*/

import {
	RECEIVE_LOGIN_STATE,
	RECEIVE_FOLD_STATE,
	RECEIVE_EDIT_STATE,
	RECEIVE_DM,
	RECEIVE_STORE,
	CLEAN_LOGIN_STATE
	
} from './mutation-types'

import Vue from 'vue'

export default {
	[RECEIVE_LOGIN_STATE](state, {LoginState}) {
		state.LoginState = LoginState
	},
	[RECEIVE_FOLD_STATE](state, {FoldState}) {
		state.FoldState = FoldState
	},
	[RECEIVE_DM](state, {DMInfo}) {
		state.DMInfo = DMInfo
	},
	[RECEIVE_STORE](state, {StoreInfo}) {
		state.StoreInfo = StoreInfo
	},
	[RECEIVE_EDIT_STATE](state, {EditState}) {
		state.EditState = EditState
	},
	[CLEAN_LOGIN_STATE](state) {
		state.LoginState = {}
	}
}
