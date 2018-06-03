<template>
  <div class="home-item text-center">
    <img :src="icon" />
    <div v-text="label"></div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props:{
      icon: String,
      label: String,
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .home-item{
    display: inline-block;
    width: 7.5rem;
    height: 7.5rem;
    box-sizing: border-box;
    padding-top: 2.8rem;
    background-image: linear-gradient(45deg, #ffffff 0, #ffffff 50%, #fafbfd 50%,  #fafbfd 100%);
    background-size: 7.5rem 7.5rem;

    img{
      width: 2rem;
      height: 2rem;
    }
    div{
      font-size: @fontsize30;
      color: #666;
      padding-top: .5rem;
    }
  }
</style>
