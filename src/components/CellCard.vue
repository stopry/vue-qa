<template>
  <div class="cell-card flex" :class="{'isline': data.isline, 'small':data.size=='small'}" @click="onCellClick">
    <img v-if="data.headimg" :src="data.headimg" class="headimg" />
    <div v-if="data.icon" class="icon text-center">
      <i class="iconfont" :class="data.icon"></i>
    </div>
    <div class="flex-item">
      <div class="float-fixed">
        <div class="title fl text-over" v-text="data.title"></div>
        <div class="tip fr text-over" v-text="data.tip"></div>
      </div>
      <div class="label ">
        <span v-text="data.info" :class="{'col-success': data.status==1, 'col-warning':data.status==2, 'col-error':data.status==-1}"></span>
        <span v-if="data.info2" >({{data.info2}})</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: {
      data: Object,
      /*data:{
        isline: Boolean,
        headimg: String,
        icon: String,
        title: String,
        info: String,
        tip: String,
        size: String,
        status: Number,
      }*/
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
  @import "../assets/less/theme.less";
  .cell-card{
    position: relative;
    height: 2.6rem;
    background: @colorWhite;
    .headimg{
      margin-left: .6rem;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;
      box-shadow: 0 0 2px 0 rgba(0,0,0,.3);
    }
    .icon{
      margin-left: .6rem;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      color: @colorWhite;
      background: @colorBgPurpleDeep;
      box-shadow: 0 0 2px 0 rgba(0,0,0,.3);
      .iconfont{
        font-size: .9rem;
        line-height: 1.4rem;
      }
    }
    .flex-item{
      padding: 0 .5rem;
      .title{
        max-width:70%;
      }
      .tip{
        max-width: 50%;
      }
    }
    &.isline::after{
      content:'';
      position: absolute;
      bottom:0;
      right:0;
      height: 1px;
      width: 14.4rem;
      background: @colorBorderColor;
    }
    &.small{
      .icon{
        width: 1.4rem;q
        height: 1.4rem;
      }
      .title{
        font-size: @fontsize26;
      }
    }
  }
</style>
