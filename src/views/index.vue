<template>
	<div id="index">
    <!-- 头部功能区 -->
    <div class="head-func-box">
      <img src="../assets/icon-menu.png" class="icon-menu" alt="菜单" @click="showMenu"/>
      <div class="connect-pocket">
        <img src="../assets/icon-qianbao.png" class="icon-qianbao" alt="钱包"/>
        链接钱包
      </div>
    </div>
    <!-- 欢迎话术 -->
    <div class="welcome-wrods-box">
      <div class="welcome-wrods">欢迎来到</div>
      <div class="welcome-wrods">天天赚理财</div>
    </div>
    <!-- 数据模块 -->
    <div class="data-item-box">
      <img src="../assets/icon-qw.png" class="data-item-icon" alt="数据icon"/>
      <div class="data-words-box">
        <div class="data-name">全网入金</div>
        <div class="data-words">100,000&nbsp;USDT</div>
      </div>
      <img src="../assets/tu-hong.png" class="data-item-icona" alt="数据icon"/>
    </div>
    <div class="data-item-box" @click="toMyFinancial">
      <img src="../assets/icon-licai.png" class="data-item-icon" alt="数据icon"/>
      <div class="data-words-box">
        <div class="data-name">我的理财</div>
        <div class="data-words" style="color: #53FEFD;">2,000&nbsp;USDT</div>
      </div>
      <img src="../assets/tu-lu.png" class="data-item-icona" alt="数据icon"/>
    </div>
    <div class="data-item-box" @click="toEarnings">
      <img src="../assets/icon-shouyi.png" class="data-item-icon" alt="数据icon"/>
      <div class="data-words-box">
        <div class="data-name">我的收益</div>
        <div class="data-words" style="color: #1766FF;">100&nbsp;USDT</div>
      </div>
      <img src="../assets/tu-lan.png" class="data-item-icona" alt="数据icon"/>
    </div>
    <!-- 天天理财赚钱 -->
    <div class="brife-intro-box">
      <div class="box-title">天天理财赚钱</div>
      <img src="../assets/tu.png" class="brife-icon" alt="理财icon"/>
      <div class="brife-words-box">
        <div>理财规格</div>
        <div>1,000U起</div>
      </div>
      <div class="brife-words-box">
        <div>月化收益</div>
        <div>10%-15%</div>
      </div>
      <div class="brife-words-box">
        <div>参与人数</div>
        <div>999人</div>
      </div>
      <div class="next-btn" @click="showFinancial">马上理财</div>
    </div>
    <!-- Q&A -->
    <div class="brife-intro-box" style="min-height: 150px;">
      <div class="box-title">Q&A</div>
      <div class="question-item">
        <div class="question-words">常见理财问题</div>
        <div class="question-words">&gt;</div>
      </div>
      <div class="question-item">
        <div class="question-words">理财小技巧</div>
        <div class="question-words">&gt;</div>
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
    <!-- 天天赚理财弹窗 -->
    <div class="financial-mask" v-if="data.isShowFinancial">
      <div class="financial-box">
        <div class="financial-close-btn-box">
          天天赚理财
          <img class="financial-close-btn" src="../assets/icon-guanbi.png" alt="关闭" @click="hideFinancial"/>
        </div>
        <div class="financial-tab">
          <div :class="data.isLicai?'financial-tab-item active':'financial-tab-item'" @click="showLicai">理财单</div>
          <div :class="data.isLicai?'financial-tab-item':'financial-tab-item active'" @click="showTiyan">体验单</div>
        </div>
        <img src="../assets/tu.png" class="financial-icon" alt="理财icon"/>
        <template v-if="data.isLicai">
          <div class="brife-words-box">
            <div>理财规格</div>
            <div>1,000U起</div>
          </div>
          <div class="brife-words-box">
            <div>月化收益</div>
            <div>10%-15%</div>
          </div>
          <div class="brife-words-box">
            <div>参与人数</div>
            <div>999人</div>
          </div>
          <div class="financial-notice">
            <img src="../assets/icon-zhuyi.png" class="financial-notice-icon" alt="警告icon"/>
            <div class="financial-notice-words">
              注意:理财金额1000U起,参与金额需为1000的倍数。理财周期100天起,随进随出,未到期提前关闭理财,需支付10%违约金。
            </div>
          </div>
        </template>
        <template v-else>
          <div class="brife-words-box">
            <div>理财规格</div>
            <div>200U或500U</div>
          </div>
          <div class="brife-words-box">
            <div>月化收益</div>
            <div>10%</div>
          </div>
          <div class="brife-words-box">
            <div>体验周期</div>
            <div>10天</div>
          </div>
          <div class="financial-notice">
            <img src="../assets/icon-zhuyi.png" class="financial-notice-icon" alt="警告icon"/>
            <div class="financial-notice-words">
              体验单金额可选200U或500U，不可重复体验。
            </div>
          </div>
        </template>
        <div class="financial-input-box">
          <div class="financial-input"><input type="text" placeholder="请输入理财金额"/></div>
          <div class="author-btn">授权</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import { reactive, onMounted } from 'vue';
	import { useRouter,useRoute } from "vue-router";
	export default {
	  name: 'index',
	  props: {
	    
	  },
    components: {
      
    },
		setup(props){
			const router = useRouter();
			const data = reactive({
				ifShowUp:false,
        isShowMenu:false,
        isShowFinancial:false,
        isLicai:true
			});
      onMounted(()=>{});
      const toggleShowUp = function(){
        data.ifShowUp = !data.ifShowUp;
      };
      const showMenu = function(){
        data.isShowMenu = true;
      };
      const hideMenu = function(){
        data.isShowMenu = false;
      };
      const showFinancial = function(){
        data.isShowFinancial = true;
      };
      const hideFinancial = function(){
        data.isShowFinancial = false;
      };
      const showLicai = function(){
        data.isLicai = true;
      };
      const showTiyan = function(){
        data.isLicai = false;
      };
      const toMyFinancial = function(){
        router.push('/views/myFinancial');
      };
      const toEarnings = function(){
        router.push('/views/myEarnings');
      };
			return { data,toggleShowUp,showMenu,hideMenu,showFinancial,hideFinancial,showLicai,showTiyan,toMyFinancial,toEarnings };
		},
	}
</script>

<style scoped>
  #index{
    width: 100%;
    min-height: 100%;
    background-color: #04050E;
    background-image: url(../assets/index-head-bg.png);
    background-size: contain;
    background-position: top left;
    background-repeat: no-repeat;
    position: relative;
  }
  .welcome-wrods-box{
    width: 100%;
    height: 173px;
    box-sizing: border-box;
    padding: 26px 10px 0;
  }
  .welcome-wrods{
    font-size: 23px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 40px;
    color: #FFFFFF;
  }
  .data-item-box{
    width: 100%;
    height: 100px;
    background-color: #171725;
    border-radius: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    box-sizing: border-box;
    padding: 15px;
  }
  .data-item-icon{
    width: 43px;
    height: 43px;
  }
  .data-item-icona{
    width: 98px;
    height: 65px;
  }
  .data-words-box{
    width: 186px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .data-name{
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    margin-bottom: 6px;
  }
  .data-words{
    font-size: 20px;
    font-family: DIN;
    font-weight: 400;
    color: #E2095E;
  }
  .brife-intro-box{
    width: 100%;
    min-height: 450px;
    height: auto;
    overflow: hidden;
    background: #171725;
    border-radius: 15px;
    box-sizing: border-box;
    padding: 20px 15px;
    margin-bottom: 10px;
  }
  .box-title{
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #FFFFFF;
  }
  .brife-icon{
    width: 195px;
    height: 195px;
    margin: 10px auto;
  }
  .brife-words-box{
    width: 100%;
    height: 21px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 21px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .next-btn{
    width: 345px;
    height: 45px;
    background: #53FEFD;
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 45px;
    color: #212835;
    text-align: center;
    border-radius: 10px;
    margin: 24px auto 10px;
  }
  .question-item{
    width: 100%;
    height: 51px;
    line-height: 51px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #2B2626;
  }
  .question-words{
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
  }
  .question-item:nth-last-of-type(1){
    border: 0;
  }
  .menu-content{
    width: 100%;
    height: auto;
    overflow: hidden;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #171725;
    box-sizing: border-box;
    padding: 24px 10px;
  }
  .close-btn-box{
    width: 100%;
    height: 16px;
    display: flex;
    justify-content: flex-end;
  }
  .close-btn{
    width: 16px;
    height: 16px;
  }
  .menu-item{
    width: 100%;
    height: 62px;
    border-bottom: 1px solid #212835;
    line-height: 62px;
    font-size: 15px;
    color: #FFFFFF;
  }
  .language-change{
    width: 100%;
    height: auto;
    min-height: 62px;
    line-height: 62px;
    font-size: 15px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .icon-shouqi{
    width: 12px;
    height: 12px;
  }
  .language-content{
    position: absolute;
    top: 56px;
    left: 0;
  }
  .language-item{
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #777A86;
    margin-bottom: 16px;
    line-height: 20px;
  }
  .financial-mask{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .financial-box{
    width: 355px;
    height: auto;
    overflow: hidden;
    background-color: #171725;
    box-sizing: border-box;
    padding: 20px 10px;
  }
  .financial-close-btn-box{
    width: 100%;
    height: 24px;
    position: relative;
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
  }
  .financial-close-btn{
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 0;
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
  .financial-icon{
    width: 129px;
    height: 129px;
    margin: 0 auto 14px;
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
  .financial-input-box{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0 28px;
  }
  .financial-input{
    width: 215px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(270deg, #00E5BC 0%, #4DA1FF 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .financial-input input{
    width: 213px;
    display: block;
    height: 48px;
    margin: 0;
    padding: 0;
    background-color: #171725;
    border-radius: 10px;
    overflow: hidden;
    outline: none;
    border: 0;
    color: #777A86;
    text-indent: 10px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
  }
  .author-btn{
    width: 110px;
    height: 50px;
    background: #53FEFD;
    border-radius: 10px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 50px;
    color: #212835;
    text-align: center;
  }
</style>
