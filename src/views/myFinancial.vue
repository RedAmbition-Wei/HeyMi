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
    <!-- 理财状态tab -->
    <div class="financial-tab">
      <div :class="data.isClosed?'financial-tab-item active':'financial-tab-item'" @click="showUnclose">未关闭</div>
      <div :class="data.isClosed?'financial-tab-item':'financial-tab-item active'" @click="showClosed">已关闭</div>
    </div>
    <!-- 数据卡片 -->
    <template v-if="data.isClosed">
      <div class="financial-list-item" v-for="(item,index) in data.financialArray" :id="item.id" @click="toDetail">
        <div class="financial-msg">
          <img src="../assets/financial-icon.png" class="financial-icon" alt="理财缩略图"/>
          <div class="financial-words">
            <div class="financial-words-item">
              <div>理财金额</div>
              <div>100U</div>
            </div>
            <div class="financial-words-item">
              <div>已赚收益</div>
              <div>10U</div>
            </div>
            <div class="financial-words-item">
              <div>理财时间</div>
              <div>98天</div>
            </div>
          </div>
        </div>
        <div class="todo-btn" @click.stop="showPopup" :id="item.id">立即赎回</div>
      </div>
    </template>
    <template v-else>
      <div class="financial-list-item" v-for="(item,index) in data.financialArray" :id="item.id" @click="toDetail">
        <div class="financial-msg">
          <img src="../assets/financial-icon.png" class="financial-icon" alt="理财缩略图"/>
          <div class="financial-words" style="height: auto;overflow: hidden;">
            <div class="financial-words-item">
              <div>理财金额</div>
              <div>100U</div>
            </div>
            <div class="financial-words-item">
              <div>已赚收益</div>
              <div>10U</div>
            </div>
            <div class="financial-words-item">
              <div>开始时间</div>
              <div>2022-01-01</div>
            </div>
            <div class="financial-words-item">
              <div>结束时间</div>
              <div>2022-04-01</div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- 赎回弹窗 -->
    <div class="popup-mask" v-if="data.isShowPopup">
        <div class="popup-box">
          <img src="../assets/icon-guanbi.png" class="icon-guanbi" alt="关闭" @click="closePopup"/>
          <template v-if="data.isOutDate">
            <img src="../assets/tishi-icon.png" class="tishi-icon" alt="提示"/>
            <div class="notice-title">温馨提示</div>
            <div class="notice-words">该理财产品,尚未达到最低关闭时长,若现在关闭,将会收取10%手续费,请慎重操作!</div>
            <div class="todo-btn-box">
              <div class="todo-btn-ransom">仍要赎回</div>
              <div class="todo-btn-cancel">取消</div>
            </div>
          </template>
          <template v-else>
            <div class="popup-title">天天赚理财</div>
            <img src="../assets/tu.png" class="finanical-icon" alt="理财图标"/>
            <div class="financial-words-item">
              <div>理财金额</div>
              <div>1,000U起</div>
            </div>
            <div class="financial-words-item">
              <div>月化收益</div>
              <div>10%-15%</div>
            </div>
            <div class="financial-words-item">
              <div>累计收益</div>
              <div>100U</div>
            </div>
            <div class="financial-words-item">
              <div>理财时长</div>
              <div>120天</div>
            </div>
            <div class="financial-notice">
              <img src="../assets/icon-zhuyi.png" class="financial-notice-icon" alt="警告icon"/>
              <div class="financial-notice-words">
                注意:赎回理财之后,将退回本金,无法继续享有收益,请谨慎选择。
              </div>
            </div>
            <div class="cancel-btn">赎回</div>
          </template>
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
	  name: 'myFinancial',
    components: {
      
    },
		setup(props){
			const route = useRoute();
			const router = useRouter();
			const data = reactive({
				isClosed:true,
        financialArray:[
          {id:1,isOutDate:false},{id:2,isOutDate:true},{id:3,isOutDate:false},{id:4,isOutDate:true}
        ],
        isShowPopup:false,
        isOutDate:false
			});
      onMounted(()=>{});
      const showUnclose = function(){
        data.isClosed = true;
      };
      const showClosed = function(){
        data.isClosed = false;
      };
      const closePopup = function(){
        data.isShowPopup = false;
      };
      const showPopup = function(e){
        let { financialArray } = data;
        let currentId = e.currentTarget.id;
        financialArray.forEach((item)=>{
          if(item.id==currentId){
            data.isOutDate = item.isOutDate;
          }
        });
        data.isShowPopup = true;
      };
      const toDetail = function(e){
        let currentId = e.currentTarget.id;
        router.push('/views/financialDetail/'+currentId);
      };
      const showMenu = function(){
        data.isShowMenu = true;
      };
      const hideMenu = function(){
        data.isShowMenu = false;
      };
      const toggleShowUp = function(){
        data.ifShowUp = !data.ifShowUp;
      };
			return { data,showUnclose,showClosed,closePopup,showPopup,toDetail,showMenu,hideMenu,toggleShowUp };
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
  .page-title{
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 24px;
    color: #FFFFFF;
    text-indent: 10px;
  }
  .financial-tab{
    width: 332px;
    height: 42px;
    background: #060709;
    border-radius: 10px;
    margin: 26px auto 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .financial-tab-item{
    width: 163px;
    height: 35px;
    color: #777A86;
    line-height: 35px;
    text-align: center;
    font-family: PingFang SC;
    font-weight: 500;
    border-radius: 10px;
  }
  .financial-tab-item.active{
    background: linear-gradient(90deg, #15202E 0%, #1D3A3F 52%, #15212E 100%);
    color: #53FEFD;
  }
  .financial-list-item{
    width: 355px;
    height: auto;
    overflow: hidden;
    margin: 10px auto 0;
    background-color: #171725;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .financial-msg{
    width: 100%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  .financial-icon{
    width: 83px;
    height: 83px;
  }
  .financial-words{
    width: 227px;
    height: 83px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .financial-words-item{
    width: 100%;
    height: 21px;
    line-height: 21px;
    font-size: 15px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .todo-btn{
    width: 324px;
    height: 45px;
    background: #53FEFD;
    border-radius: 10px;
    line-height: 45px;
    color: #000000;
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    margin: 30px 0 12px;
  }
  .popup-mask{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .popup-box{
    width: 355px;
    height: auto;
    overflow: hidden;
    background-color: #171725;
    position: relative;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 24px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .icon-guanbi{
    position: absolute;
    top: 24px;
    right: 10px;
    width: 16px;
    height: 16px;
  }
  .tishi-icon{
    width: 83px;
    height: 83px;
    margin-top: 22px;
    margin-bottom: 38px;
  }
  .notice-title{
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 17px;
    color: #FFFFFF;
    text-align: center;
  }
  .notice-words{
    width: 100%;
    height: auto;
    overflow: hidden;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 25px;
    color: #53FEFD;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .todo-btn-box{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .todo-btn-cancel,.todo-btn-ransom{
    width: 163px;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    color: #000000;
    background-color: #53FEFD;
    font-weight: bold;
  }
  .todo-btn-cancel{
    color: #53FEFD;
    background-color: #171725;
    border: 1px solid #53FEFD;
    font-weight: 400;
  }
  .financial-notice{
    width: 100%;
    /* min-height: 102px; */
    border-radius: 10px;
    border: 1px solid #FEDB53;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    box-sizing: border-box;
    padding: 18px 0;
    margin-top: 16px;
  }
  .financial-notice-icon{
    width: 14px;
    height: 14px;
    margin-right: 10px;
    align-self: flex-start;
    margin-top: 6px;
  }
  .financial-notice-words{
    width: 278px;
    /* min-height: 69px; */
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 25px;
    color: #FEDB53;
  }
  .popup-title{
    font-size: 17px;
    color: #FFFFFF;
  }
  .cancel-btn{
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    background-color: #53FEFD;
    margin: 44px 0 20px;
  }
</style>
