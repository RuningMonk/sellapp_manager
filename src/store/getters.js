/*
包含多个基于state的getter计算属性的对象
*/

export default {
	EditInfo(state) {
		if(state.EditState.edit){
			const good = state.DMInfo[state.EditState.table].foods[state.EditState.row];
			const Info = {
				name: good.name,
				class_name: good.class_name,
				price: parseFloat(good.price).toFixed(2),
				tags: good.tags,
				src: good.src
			}
			return Info
		}else{
			return {}
		}
	},
}
