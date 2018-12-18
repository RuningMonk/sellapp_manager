import Vue from 'vue'
import Router from 'vue-router'

//一般在顶级路由组件中设置缓存懒加载就够了,小组件不需要
const Home = () => import('../pages/Home/Home.vue')

import Guide from '../components/Guide/Guide.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	component:Home,		//返回路由组件的函数,只有执行此函数时才会加载路由组件,这个函数在第一次请求对应的路由路径的时候才会执行
			meta:{
				GuideShow:true
			}
    },
		{
			path:'/home',
			component:Home,
			meta:{
				GuideShow:true
			}
		},
  ]
})
