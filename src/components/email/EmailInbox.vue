<template>
    <div class="email-inbox flex ">
      <img class="icon" :src="data.headimg" alt="">
      <div class="spot">.</div>
      <div class="cont-item">
        <div class="float-fixed">
          <div class="fl name" v-text="data.name+'('+data.job+')'"></div>
          <i class="iconfont icon-file small"></i>
          <div class="fr date" v-cloak>{{data.date}}<i class="iconfont icon-right small"></i></div>

        </div>
        <div class="vt text-over" v-text="data.works"></div>
        <div class="text text-over" v-text="data.text"></div>
      </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props:{
          data:Object,
        },
        data() {
            return {}
        },
        methods: {
          onCellClick(){
            this.$emit('onCellClick', this.data)
          }
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  @import "../../assets/less/main.less";
  .email-inbox{
    position: relative;
    background: @colorWhite;
    height: 3.32rem;
    .icon{
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
    }
    .spot{
      line-height:1.5rem;
      padding: .14rem;
      height: 100%;
    }
    .cont-item{
      padding: .4rem;
      font-size: @fontsize28;
      color: @colorFontBlackShallow;
      .date{
        font-size: @fontsize24;
        color: @colorFontGrayDeep;
      }
      .vt{
        width:11rem;
      }
      .text{
        color: @colorFontGrayDeep;
        width:11rem;
      }
    }
  .small{
    font-size:.5rem;
    margin-left:.1rem;
  }
  &::after{
     content:'';
     position: absolute;
     bottom:0;
     right:0;
     height: 1px;
     width:12.8rem;
     background: @colorBorderColor;
   }
  }

</style>
