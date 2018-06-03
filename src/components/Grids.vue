<template>
    <div class="grids">
      <div class="grids-item" v-for="item in data" :class="{'alone': !item.title}" @click="onItemClick(item.to)">
        <i class="iconfont " :class="item.icon" ></i>
        <div v-if="item.title" class="title" v-text="item.title"></div>
        <i v-if="item.badge" class="badge" v-text="item.badge"></i>
      </div>
    </div>
</template>

<script>
    export default {
      components: {},
      props: {
          data: Array,
      },
      data() {
          return {}
      },
      methods:{
        onItemClick(to){
          to && this.$router.push(to);
        }
      }
    }
</script>

<style lang="less">
  @import "../assets/less/theme.less";
  .grids{
    position: relative;
    overflow: hidden;
    background: @colorWhite;
    &::before{
      content:'';
      position: absolute;
      top:0;
      left:0;
      right:0;
      height:1px;
      background: @colorBorderColor;
      border-top: 1px solid @colorBorderColor;
      color: @colorBorderColor;
      transform-origin: 0 0;
      transform: scaleY(.5);
    }
    &::after{
      content:'';
      position: absolute;
      left:0;
      top:0;
      bottom:0;
      width:1px;
      background: @colorBorderColor;
      border-right: 1px solid @colorBorderColor;
      color: @colorBorderColor;
      transform-origin: 0 0;
      transform: scaleX(.5);
    }
    .grids-item{
      position: relative;
      float: left;
      width: 33.33333333%;
      text-align: center;
      padding: .9rem .6rem;
      height: 3.5rem;
      box-sizing: border-box;
      .badge{
        top: .5rem;
        right: 1.5rem;
      }
      .iconfont{
        font-size: 1rem;
        line-height: 1rem;
      }
      &.alone{
        .iconfont{
          font-size: 1.5rem;
          line-height: 1.8rem;
          color: @colorIconGray;
        }
      }
      .title{
        padding-top: .1rem;
        font-size: @fontsize28;
      }
      &::before{
        content:'';
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        height:1px;
        background: @colorBorderColor;
        border-top: 1px solid @colorBorderColor;
        color: @colorBorderColor;
        transform-origin: 0 100%;
        transform: scaleY(.5);
      }
      &::after{
        content:'';
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        width:1px;
        background: @colorBorderColor;
        border-right: 1px solid @colorBorderColor;
        color: @colorBorderColor;
        transform-origin: 100% 0;
        transform: scaleX(.5);
      }
    }
    .grids-item:nth-child(1){
      .iconfont{
        color: @colorIconBlue
      }
    }
    .grids-item:nth-child(2){
      .iconfont{
        color: @colorIconOrange
      }
    }
    .grids-item:nth-child(3){
      .iconfont{
        color: @colorIconRed
      }
    }
    .grids-item:nth-child(4){
      .iconfont{
        color: @colorIconGreen
      }
    }
    .grids-item:nth-child(5){
      .iconfont{
        color: @colorIconBlue
      }
    }
    .grids-item:nth-child(6){
      .iconfont{
        color: @colorIconOrange
      }
    }
    .grids-item:nth-child(7){
      .iconfont{
        color: @colorIconRed
      }
    }
  }
</style>
