<template>
    <div class="approval-opinion">
      <div class="text">
        <textarea placeholder="请输入审批意见" v-model="opinion" rows="8" />
      </div>
      <div class="float-fixed">
        <div class="title fl">图片</div>
        <div class="label fr">
          <i class="iconfont icon-camera"></i>
        </div>
      </div>
      <div class="float-fixed">
        <div class="title fl">附件</div>
        <div class="label fr">
          <i class="iconfont icon-file"></i>
        </div>
      </div>

      <btn-group :data="btns" @btnClick="onBtnClick" :fixed="true"></btn-group>

    </div>
</template>

<script>
  import BtnGroup from 'components/BtnGroup';

  export default {
    components: {
      BtnGroup,
    },
    props: {},
    data() {
      return {
        opinion: '',
        btns:[
          {title: '取消', id:1},
          {title: '通过', id:2}
        ]
      }
    },
    methods: {
      onBtnClick(detail){
        console.log('click btn id is:'+detail.id)
        if(detail.id == 1){
            this.$router.back();
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .approval-opinion{
    textarea{
      width:100%;
      border: 0;
      font-size: @fontsize32;
      color: @colorFontBlackShallow;
      border-bottom: 1px solid @colorBorderColor;
      box-sizing: border-box;
      padding: .6rem;
    }
    .float-fixed{
      border-top: 1px solid @colorBorderColor;
      border-bottom: 1px solid @colorBorderColor;
      background: @colorWhite;
      padding: .3rem .6rem;
      margin-top: .6rem;
      line-height: 0;
      .title{
        line-height: 1rem;
      }
      .label{
        .iconfont{
          font-size: 1rem;
          line-height: 1rem;
          color: @colorIconGray;
        }
      }
    }
  }
</style>
