<template>
  <router-link :to="'/notice/detail/'+data.id">
    <div class="notice-item flex">
        <img :src="data.img" />
        <div class="flex-item">
          <div class="title" v-text="data.title"></div>
          <div class="label text-over">
            <span v-text="data.department"></span>
            <span v-text="data.from"></span>
            <span v-text="data.time"></span>
          </div>
        </div>
        <div class="delete" v-if="false">
          <i class="iconfont icon-delete"></i>
        </div>
    </div>
  </router-link>
</template>

<script>
    export default {
      components: {},
      props: {
          data: Object,
      },
      data() {
          return {}
      }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .notice-item{
    border-bottom: 1px solid @colorBorderColor;
    background: @colorWhite;
    height: 3.6rem;
    img{
      height: 2.8rem;
      margin-left: .6rem;
    }
    .flex-item{
      margin-left: .3rem;
      margin-right: .6rem;
      .title{
        font-size: @fontsize28;
        height: 1.8rem;
        margin-bottom: .3rem;
        overflow: hidden;
      }
      .label{
        span{
          margin-right: .5rem;
        }
      }
    }
  }
</style>
