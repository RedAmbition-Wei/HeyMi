<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body,html,#app{
  margin: 0;
  padding: 0;
  height: 100%;
}
img{
  display: block;
  margin: 0;
  padding: 0;
}
input,textarea{
  outline: none;
}
.head-func-box{
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .icon-menu{
    width: 17px;
    height: 17px;
  }
  .connect-pocket{
    width: 100px;
    height: 30px;
    background: #1B1A1A;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #53FEFD;
  }
  .icon-qianbao{
    width: 17px;
    height: 17px;
    margin-right: 10px;
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
</style>
