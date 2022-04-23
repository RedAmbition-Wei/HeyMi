<template>
	<div id="financialDetail">
    <!-- 头部功能区 -->
    <div class="head-func-box">
      <img src="../assets/icon-menu.png" class="icon-menu" alt="菜单" @click="showMenu"/>
      <div class="connect-pocket">
        <img src="../assets/icon-qianbao.png" class="icon-qianbao" alt="钱包"/>
        链接钱包
      </div>
    </div>
    <!-- 页面title -->
    <div class="page-title">理财详情</div>
    <!-- 详情item -->
    <div class="data-by-date-item" v-for="(item,index) in data.dateArray" :id="item.id">
      <div class="data-line">
        <div class="data-line-date">2022-04-12</div>
        <div class="data-line-num">+3.2&nbsp;USDT</div>
      </div>
     <div class="data-line" v-for="$item in item.recordArray">
        <div>买入1000U</div>
        <div>赚取1U</div>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="menu-content" v-if="data.isShowMenu">
      <div class="close-btn-box">
        <img class="close-btn" src="../assets/icon-guanbi.png" alt="关闭" @click="hideMenu"/>
      </div>
      <div class="menu-item">首页</div>
      <div class="menu-item">我的理财</div>
      <div class="menu-item">我的收益</div>
      <div class="menu-item">我的团队</div>
      <div class="menu-item">分享邀请</div>
      <div class="language-change" @click="toggleShowUp">
        语言切换
        <img src="../assets/icon-shouqi.png" class="icon-shouqi" v-if="data.ifShowUp" alt="待收起icon"/>
        <img src="../assets/icon-zhankai.png" class="icon-shouqi" v-else alt="待打开icon"/>
        <div class="language-content" v-if="data.ifShowUp">
          <div class="language-item">简体中文</div>
          <div class="language-item">英文</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import { reactive, onMounted } from 'vue';
	import { useRouter,useRoute } from "vue-router";
	export default {
	  name: 'financialDetail',
    components: {
      
    },
		setup(props){
			const route = useRoute();
			const router = useRouter();
			const data = reactive({
				dateArray:[
				  {
				    id:1,
				    recordArray:[
				      {id:1},{id:2},{id:3},{id:4},{id:5}
				    ]
				  },
				  {
				    id:2,
				    recordArray:[
				      {id:1},{id:2},{id:3},{id:4},{id:5}
				    ]
				  },
				  {
				    id:3,
				    recordArray:[
				      {id:1},{id:2},{id:3},{id:4},{id:5}
				    ]
				  }
				]
			});
      onMounted(()=>{});
      const showMenu = function(){
        data.isShowMenu = true;
      };
      const hideMenu = function(){
        data.isShowMenu = false;
      };
      const toggleShowUp = function(){
        data.ifShowUp = !data.ifShowUp;
      };
			return { data,showMenu,hideMenu,toggleShowUp };
		},
	}
</script>

<style scoped>
#financialDetail{
  width: 100%;
  min-height: 100%;
  background-color: #04050E;
  position: relative;
}
.data-by-date-item{
  width: 355px;
  height: auto;
  overflow: hidden;
  background: #171725;
  border-radius: 10px;
  margin: 0 auto 10px;
  box-sizing: border-box;
  padding: 15px 10px;
}
.data-line{
  width: 100%;
  height: 21px;
  line-height: 21px;
  color: #777A86;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.data-line-date{
  color: #FFFFFF;
}
.data-line-num{
  color: #58DB58;
}
</style>
