<template>
	<div id="getEarnings">
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
    <!-- 可用余额 -->
    <div class="can-get-amount">
      可提取金额：{{data.amount}}&nbsp;USDT
      <div class="get-all-btn" @click="allSlected">全部</div>
    </div>
    <!-- 提取量输入框 -->
    <div class="input-box">
      <input type="text" class="amount-input" placeholder="请输入可提取金额" v-model="data.amountSelected"/>
    </div>
    <!-- tips -->
    <div class="tips">提取将会收取1%的手续费</div>
    <!-- 确定按钮 -->
    <div class="submit-btn" @click="submit">确认</div>
	</div>
</template>

<script>
  import { reactive, onMounted } from 'vue';
	import { useRouter,useRoute } from "vue-router";
	export default {
	  name: 'getEarnings',
    components: {
      
    },
		setup(props){
			const route = useRoute();
			const router = useRouter();
			const data = reactive({
				amount:'1,000',
        amountSelected:''
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
      const allSlected = function(){
        data.amountSelected = data.amount;
      };
      const submit = function(){
        console.log(data.amountSelected);
      };
			return { data,showMenu,hideMenu,toggleShowUp,allSlected,submit };
		},
	}
</script>

<style scoped>
  #getEarnings{
    width: 100%;
    min-height: 100%;
    background-color: #04050E;
    background-image: url(../assets/bj-shouyi.png);
    background-size: contain;
    background-position: top left;
    background-repeat: no-repeat;
    position: relative;
  }
  .can-get-amount{
    width: 355px;
    height: 21px;
    line-height: 21px;
    font-size: 15px;
    color: #53FEFD;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 44px auto 0;
  }
  .get-all-btn{
    text-decoration: underline;
  }
  .input-box{
    width: 355px;
    height: 55px;
    background: linear-gradient(90deg, #53FEFD 0%, #4DA1FF 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    border-radius: 10px;
  }
  .amount-input{
    width: 349px;
    height: 51px;
    display: block;
    outline: none;
    background-color: #060709;
    border-radius: 10px;
    border: 0;
    color: #777A86;
    text-indent: 10px;
  }
  .tips{
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #E2095E;
    text-indent: 10px;
  }
  .submit-btn{
    width: 355px;
    height: 45px;
    background: #53FEFD;
    border-radius: 10px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    margin: 144px auto 0;
  }
</style>
