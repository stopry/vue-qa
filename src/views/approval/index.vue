<template>
    <scroller class="approval-index" v-title="'审批'" ref="scrollEvent"
              lock-x use-pulldown @on-pulldown-loading="onRefresh" >
      <div class="top-tab flex text-center">
        <router-link class="flex-item" tag="div" to="/approval/list/waitme">
          <i class="iconfont icon-edit"></i>
          <div>待我审核</div>
          <i class="badge">3</i>
        </router-link>
        <div class="flex-line"></div>
        <router-link class="flex-item" tag="div" to="/approval/mysubmit">
          <i class="iconfont icon-edit1"></i>
          <div>我发起的</div>
          <i class="badge">5</i>
        </router-link>
      </div>
      <grids :data="grids"></grids>
    </scroller>
</template>

<script>
  import { Scroller } from 'vux';
  import Grids from 'components/Grids';

  export default {
    components: {
      Scroller,
      Grids,
    },
    props: {},
    data() {
      return {
        grids:[
          {icon:'icon-shijian', title:'请假', to:{name: 'approval/list', params:{type: 'qingjia'}}, badge:5},
          {icon:'icon-money', title:'报销', to:{name: 'approval/list', params:{type: 'baoxiao'}}},
          {icon:'icon-plane', title:'出差', to:{name: 'approval/list', params:{type: 'chuchai'}}},
          {icon:'icon-car', title:'外出', to:{name: 'approval/list', params:{type: 'waichu'}}, badge:13},
          {icon:'icon-lingyong', title:'物品领用', to:{name: 'approval/list', params:{type: 'wuping'}}},
          {icon:'icon-jiaban', title:'加班', to:{name: 'approval/list', params:{type: 'jiaban'}}},
          {icon:'icon-wenjian', title:'通用审批', to:{name: 'approval/list', params:{type: 'tongyong'}}},
          {icon:'icon-add', title:'', to:''},
        ]
      }
    },
    methods: {
      onRefresh(){
        console.log('refresh')
        this.refresh();
      },
      refresh(){
        setTimeout(()=>{
          this.$nextTick(() => {
            this.$refs.scrollEvent.donePulldown();
          })
        }, 1000)
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .approval-index{
    .top-tab{
      color: @colorFontPurple;
      border-bottom: 1px solid @colorBorderColor;
      background: @colorWhite;
      .flex-item{
        padding: .8rem 0;
      }
      .iconfont{
        font-size: 1.8rem;
        line-height: 2rem;
      }
      .badge{
        top: .8rem;
        right: 2.8rem;
      }
      .flex-line{
        width: 1px;
        height: 2.6rem;
        background: @colorBorderColor;
      }
    }
    .grids{
      margin-top: .6rem;
    }
  }
</style>
