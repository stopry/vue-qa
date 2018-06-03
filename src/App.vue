<template>
  <div id="pp">
    <router-view></router-view>
  </div>
</template>

<script>
  function resize(){
    //设置rem单位的值
    let width = window.screen.availWidth;
    let rem = width/15;//750px设计稿宽度1:50
    document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:'+rem+'px');
  }
  window.onresize = resize;
  export default {
    beforeCreate(){
      resize()
    }
  }
</script>

<style lang="less">
  @import 'assets/less/reset.less';
  @import 'assets/less/main.less';
</style>
