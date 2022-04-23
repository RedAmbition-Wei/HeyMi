<template>
	<div id="myEarnings">
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
    <!-- 总收益 -->
    <div class="total-earnings">
      <div class="total-title">总收益</div>
      <div class="total-num">9,999&nbsp;USDT</div>
      <div class="total-type-box">
        <div class="total-type">
          <div class="total-type-name">待提取收益</div>
          <div class="total-type-num">2,000&nbsp;USDT</div>
        </div>
        <div class="total-type1" @click="toGetEarnings">
          <div class="total-type-content">
            <div class="total-type-name" style="margin-top: 0px;">可提取收益</div>
            <div class="total-type-num">2,000&nbsp;USDT</div>
          </div>
          <img src="../assets/icon-gd.png" class="icon-gd" alt="可点击icon"/>
        </div>
      </div>
    </div>
    <!-- tab菜单 -->
    <div class="tab-menu">
      <div :class="data.isCurrentId == 1 ? 'tab-item active' : 'tab-item'" id="1" @click="chooseTab">理财收益</div>
      <div :class="data.isCurrentId == 2 ? 'tab-item active' : 'tab-item'" id="2" @click="chooseTab">分享收益</div>
      <div :class="data.isCurrentId == 3 ? 'tab-item active' : 'tab-item'" id="3" @click="chooseTab">管理津贴</div>
      <div :class="data.isCurrentId == 4 ? 'tab-item active' : 'tab-item'" id="4" @click="chooseTab">特别贡献奖</div>
    </div>
    <template v-if="data.isCurrentId == 1">
      <!-- 详情item -->
      <div class="data-by-date-item" v-for="(item,index) in data.dateArray" :id="item.id">
        <div class="data-line">
          <div>理财收益</div>
          <div class="data-line-num">+10U</div>
        </div>
        <div class="data-line">
          <div>理财金额</div>
          <div>1000U</div>
        </div>
        <div class="data-line">
          <div>月化收益</div>
          <div>15%</div>
        </div>
        <div class="data-line">
          <div>发放时间</div>
          <div>2022-04-01</div>
        </div>
      </div>
    </template>
    <template v-if="data.isCurrentId == 2">
      <!-- 详情item -->
      <div class="data-by-date-item" v-for="(item,index) in data.dateArray" :id="item.id">
        <div class="data-line">
          <div>直接分享</div>
          <div class="data-line-num">+30U</div>
        </div>
        <div class="data-line">
          <div>客户理财金额</div>
          <div>1000U</div>
        </div>
        <div class="data-line">
          <div>客户地址</div>
          <div class="data-line-address">0x23….BN879<img src="../assets/icon-fuzhi.png" class="icon-fuzhi" alt="复制"/></div>
        </div>
        <div class="data-line">
          <div>发放时间</div>
          <div>2022-04-01</div>
        </div>
      </div>
    </template>
    <template v-if="data.isCurrentId == 3">
      <!-- 详情item -->
      <div class="data-by-date-item" v-for="(item,index) in data.dateArray" :id="item.id">
        <div class="data-line">
          <div>管理津贴</div>
          <div class="data-line-num">+1000U</div>
        </div>
        <div class="data-line">
          <div>累计业绩</div>
          <div>1,000,000U</div>
        </div>
        <div class="data-line">
          <div>发放时间</div>
          <div>2022-04-01</div>
        </div>
      </div>
    </template>
    <template v-if="data.isCurrentId == 4">
      <!-- 详情item -->
      <div class="data-by-date-item" v-for="(item,index) in data.dateArray" :id="item.id">
        <div class="data-line">
          <div>特别贡献奖</div>
          <div class="data-line-num">+1000U</div>
        </div>
        <div class="data-line">
          <div>累计业绩</div>
          <div>1,000,000U</div>
        </div>
        <div class="data-line">
          <div>发放时间</div>
          <div>2022-04-01</div>
        </div>
      </div>
    </template>
	</div>
</template>

<script>
  import { reactive, onMounted } from 'vue';
	import { useRouter,useRoute } from "vue-router";
	export default {
	  name: 'myEarnings',
    components: {
      
    },
		setup(props){
			const route = useRoute();
			const router = useRouter();
			const data = reactive({
				isCurrentId:1,
        dateArray:[
          {
            id:1,
            recordArray:[
              {id:1},{id:2},{id:3}
            ]
          },
          {
            id:2,
            recordArray:[
              {id:1},{id:2},{id:3}
            ]
          },
          {
            id:3,
            recordArray:[
              {id:1},{id:2},{id:3}
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
      const chooseTab = function(e){
        data.isCurrentId = e.currentTarget.id;
      };
      const toGetEarnings = function(){
        router.push('/views/getEarnings')
      };
			return { data,showMenu,hideMenu,toggleShowUp,chooseTab,toGetEarnings };
		},
	}
</script>

<style scoped>
  #myEarnings{
    width: 100%;
    min-height: 100%;
    background-color: #04050E;
    position: relative;
  }
  .total-earnings{
    width: 355px;
    height: 185px;
    background: url(../assets/tu-shouyi.png) no-repeat;
    background-size: 100% 100%;
    border-radius: 20px;
    margin: 0 auto 34px;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
  }
  .total-title,.total-num{
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  .total-num{
    font-weight: bold;
    margin: 0;
  }
  .total-type-box{
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
  .total-type,.total-type1{
    width: 158px;
    height: 60px;
    background: #060709;
    border-radius: 10px;
    color: #FFFFFF;
    box-sizing: border-box;
    padding:0 10px ;
  }
  .total-type-name,.total-type-num{
    font-size: 14px;
    color: #FFFFFF;
    margin-top: 8px;
  }
  .total-type-num{
    font-weight: bold;
  }
  .total-type1{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon-gd{
    width: 13px;
    height: 13px;
    margin-right: 6px;
  }
  .tab-menu{
    width: 355px;
    height: 45px;
    background-color: #171725;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    border-radius: 10px;
  }
  .tab-item{
    width: 90px;
    height: 35px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 35px;
    color: #777A86;
    border-radius: 10px;
    text-align: center;
  }
  .tab-item.active{
    background: linear-gradient(90deg, #15202E 0%, #1D393E 45%, #16232F 100%);
    color: #53FEFD;
  }
  .data-by-date-item{
    width: 355px;
    height: auto;
    overflow: hidden;
    background: #171725;
    border-radius: 10px;
    margin: 10px auto 0;
    box-sizing: border-box;
    padding: 15px 10px;
  }
  .data-line{
    width: 100%;
    height: 21px;
    line-height: 21px;
    color: #FFFFFF;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .data-line-num{
    color: #58DB58;
  }
  .data-line-address{
    display: flex;
    align-items: center;
  }
  .icon-fuzhi{
    width: 17px;
    height: 17px;
    margin-left: 10px;
  }
</style>
