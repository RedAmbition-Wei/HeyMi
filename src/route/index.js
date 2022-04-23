import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
	{
		path:"/",
		name:"index",
		component:()=>import("@/views/index.vue"),
		meta: {
			title: '天天赚理财'
		}
	},
  {
  	path:"/views/myFinancial",
  	name:"myFinancial",
  	component:()=>import("@/views/myFinancial.vue"),
  	meta: {
  		title: '我的理财'
  	}
  },
  {
  	path:"/views/financialDetail/:id",
  	name:"financialDetail",
  	component:()=>import("@/views/financialDetail.vue"),
  	meta: {
  		title: '理财详情'
  	}
  },
  {
  	path:"/views/myEarnings",
  	name:"myEarnings",
  	component:()=>import("@/views/myEarnings.vue"),
  	meta: {
  		title: '我的收益'
  	}
  },
  {
  	path:"/views/getEarnings",
  	name:"getEarnings",
  	component:()=>import("@/views/getEarnings.vue"),
  	meta: {
  		title: '可提取收益'
  	}
  },
]
const router = createRouter({
  history:createWebHashHistory(),
  routes:routes
});
export default router;