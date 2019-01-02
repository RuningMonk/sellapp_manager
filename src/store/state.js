/*
状态对象
*/

export default {
	FoldState:true,			//Manager界面的折叠效果管理
	EditState:{},			//管理录入页面是新增还是修改,并记录修改时的目标位置
	shop_id:3,				//测试用的shop_id
	DMInfo:{},				//店铺商品信息
	StoreInfo:{},			//店铺信息
	BannerInfo:[
		{
			tag:'XX服务市场',
			title:'米粉面馆接入经营助手服务，收入增幅达51.52%',
			content:'开一家店有多操心？加盟、选址、经营、管理到真正赚钱，期间的辛苦只有每家店老板才深有体会。美团服务市场聚集垂直领域优质服务商，打造一站式服务生态！从新店开业到老店升级、从店铺装修到营销托管、从食材供应到金融服务等，为所有商家提供店铺经营全方位服务，解决经营所遇难题，助力轻松做生意。',
			src:'http://waimai.meituan.com/static/img/new2018/static/story1.jpg'
		},
		{
			tag:'XX外卖骑手人物：李君',
			title:'为减肥而成为美团兼职骑手，后来副业变“主业”',
			content:'李君是11位骑手中的一位，来自内蒙古包头市，他近三个月的准时率平均达到了99.9%，满意度100。当问到他知道自己可以去俄罗斯看世界杯时是什么心情，李君说接到电话刚开始不敢相信，后来反应过来就直接飞奔回家拿上身份证就去办加急护照了。开心激动的心情久久难平复……',
			src:'http://waimai.meituan.com/static/img/new2018/static/story2.jpg'
		},
		{
			tag:'XX外卖骑手人物：徐振',
			title:'平凡之路上的英雄梦',
			content:'我觉得自从成了美团众包骑手之后，遇到了很多有趣新奇的人和事。以前我的生活比较单调，上班、回家两点一线。加入美团众包后，认识了许多朋友，帮助了一些人也得到了一些人的帮助。美团众包，为我的生活打开了一扇新的大门。我喜欢它的弹性、自由，让我对生活有了更多的掌控......',
			src:'http://waimai.meituan.com/static/img/new2018/static/story3.jpg'
		}
	],
	EnterInfo:[
		[
			{
				src:'http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-b-00a69ad1bf.png',
				title:'外卖商家入驻',
				descript:'平台优势，成交量有保证'
			},
			{
				src:'http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-s-8085075ad8.png',
				title:'零售商家入驻',
				descript:'超市便利店、生鲜蔬菜、药品鲜花招商'
			}
		],
		[
			{
				src:'http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-deliver-b167fdce0b.png',
				title:'美团配送',
				descript:'做美团骑手，当配送加盟商。加入全球最大的实时配送网络，高收入高回报'
			},
			{
				src:'http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-city-cd25a55a3b.png',
				title:'城市代理',
				descript:'开放外卖商家合作洽谈、订单配送等业务。帮助商家入驻美团外卖，三方合作，共享红利'
			}
		],
		[
			{
				src:'http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/join-service-53b6ea859a.png',
				title:'美团服务市场',
				descript:'为百万商家提供全品类优质服务，让生意更简单'
			}
		]
	],
	OpenInfo:[
		{
			src:'http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/openplatform-c-070c8da7fd.png',
			title:'XX外卖C端开放平台',
			descript:'将XX外卖的服务能力全方位输出给合作伙伴，实现流量转化，业态升级',
			btnText:'提供定制化的API和H5'
		},
		{
			src:'http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/openplatform-b-6f5f17ca06.png',
			title:'XX外卖商家端开放平台',
			descript:'帮助连锁品牌商家为顾客提供优质的服务',
			btnText:'自动接入，门店、订单、商品接口一应俱全'
		},
		{
			src:'http://s1.meituan.net/bs/?f=wm/inode_lfs:dist/img/csr/openplatform-erp-0fef9cf462.png',
			title:'聚宝盆————XX点评餐饮ERP开放平台',
			descript:'致力于与餐饮ERP厂商共建高效生态系统，推动餐饮业效率提升',
			btnText:'提供团购、外卖、闪惠接口'
		}
	],
	ClassifyList:[
		'中式简餐',
		'西式快餐',
		'瓜果蔬菜',
		'浪漫鲜花',
		'生活用品',
		'网络药店'
	]
}
