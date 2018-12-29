import Vue from 'vue'
import Router from 'vue-router'

//一般在顶级路由组件中设置缓存懒加载就够了,小组件不需要
const Home = () => import('../pages/Home/Home.vue')
const Enter = () => import('../pages/Enter/Enter.vue')
const Open = () => import('../pages/Open/Open.vue')
const Seller = () => import('../pages/Seller/Seller.vue')
const Manager = () => import('../pages/Manager/Manager.vue')

import Guide from '../components/Guide/Guide.vue'
import M_Home from '../components/Manager_Home/Manager_Home.vue'
import M_DM from '../components/Manager_DM/Manager_DM.vue'
import M_Entry from '../components/Manager_Entry/Manager_Entry.vue'
import M_Setting from '../components/Manager_Setting/Manager_Setting.vue'

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
		{
			path:'/enter',
			component:Enter,
			meta:{
				GuideShow:true
			}
		},
		{
			path:'/open',
			component:Open,
			meta:{
				GuideShow:true
			}
		},
		{
			path:'/seller',
			component:Seller
		},
		{
			path:'/manager',
			component:Manager,
			children:[
				{
					path:'/manager/home',
					component:M_Home,
					meta:{
						ManagerGuide:true
					}
				},
				{
					path:'/manager/datamanager',
					component:M_DM,
					meta:{
						ManagerGuide:true
					}
				},
				{
					path:'/manager/entry',
					component:M_Entry,
					meta:{
						ManagerGuide:true
					}
				},
				{
					path:'/manager/setting',
					component:M_Setting,
					meta:{
						ManagerGuide:true
					}
				}
			],
			meta:{
				ManagerGuide:true
			}
		}
  ]
})
