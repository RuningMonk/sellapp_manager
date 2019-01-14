/*
包含N个接口请求函数的模块
函数的返回值都是promise
*/

import ajax from './ajax.js'

const BASE_URL = '/api'
// const BASE_URL = 'http://100.89.230.234:2400'

//1.登录请求
export const reqLogin = ({user,pwd}) => ajax(BASE_URL+'/manager_login',{user,pwd},'POST')
//2.根据账户获取商铺商品信息
export const reqDMInfo = ({shop_id}) => ajax(BASE_URL+'/shop_goods',{shop_id})
//3.根据账户获取商铺信息
export const reqStoreInfo = ({shop_id}) => ajax(BASE_URL+'/shop_info',{shop_id},'POST')
//4.获取访问时的登录状态
export const reqLoginState = () => ajax(BASE_URL+'/manager_login_state',{},'POST')
//5.用户登出
export const reqQuitLogin = () => ajax(BASE_URL+'/manager_quit_login')
//6.数据更新
export const reqUpdate = ({sql}) => ajax(BASE_URL+'/manager_update',{sql},'POST')


//1.根据经纬度获取位置
export const reqBanners = () => ajax(BASE_URL+'/banners')
//2.设置当前店铺位置的session
// export const reqShopSession = ({shop_name}) => ajax(BASE_URL+'/shop_session',{shop_name})
//3.获取商铺列表
export const reqStoreList = () => ajax(BASE_URL+'/storelist')
//4.根据经纬度和关键字搜索商铺列表
//export const reqAddress = () => ajax()
//6.发送短信验证码
//export const reqAddress = () => ajax()
//7.手机号验证码登录
//export const reqAddress = () => ajax()


//11.获取当前店铺的评价列表
export const reqCommentsList = ({shop_id}) => ajax(BASE_URL+'/shop_comments',{shop_id})
//12.店铺的搜索
export const reqStoreSearch = ({search}) => ajax(BASE_URL+'/search',{search})
//13.支付
export const reqPay = ({price,id,name,descript}) => ajax(BASE_URL+'/pay',{price,id,name,descript},'POST')
//14.查询订单记录
export const reqHistory = ({userphone}) => ajax(BASE_URL+'/history',{userphone},'POST')