<template>
	<div id="myFinancial">
    <!-- 头部功能区 -->
    <div class="head-func-box">
      <img src="../assets/icon-menu.png" class="icon-menu" alt="菜单" @click="showMenu"/>
      <div class="connect-pocket">
        <img src="../assets/icon-qianbao.png" class="icon-qianbao" alt="钱包"/>
        链接钱包
      </div>
    </div>
    <!-- 页面title -->
    <div class="page-title">我的理财</div>
    
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
	  name: 'myFinancial',
    components: {
      
    },
		setup(props){
			const route = useRoute();
			const router = useRouter();
			const data = reactive({
				
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
  #myFinancial{
    width: 100%;
    min-height: 100%;
    background-color: #04050E;
    background-image: url(../assets/bj-shouyi.png);
    background-size: contain;
    background-position: top left;
    background-repeat: no-repeat;
    position: relative;
  }
</style>
