<template>
  <div class="approval-detail" v-title="'审批'">
    <cell-card :data="top"></cell-card>

    <ul class="content">
      <li v-for="item in info">
        <span v-text="item.label" class="label"></span> :
        <span v-text="item.value"></span>
      </li>
    </ul>

    <ul class="list">
      <li v-for="item in list" class="flex">
        <div class="list-icon">
          <i class="iconfont text-center" :class="{'icon-success': item.status==1, 'icon-error':item.status == 0}"></i>
        </div>
        <div class="flex-item">
          <cell-card :data="item"></cell-card>
        </div>
      </li>
    </ul>

    <img class="sta-png" v-if="app_sta!=-1" :src="app_sta==1?status.success:status.fail" />

    <btn-group :data="btns" @btnClick="onBtnClick" :fixed="true"></btn-group>

  </div>
</template>

<script>
  import CellCard from 'components/CellCard';
  import BtnGroup from 'components/BtnGroup';
  export default {
    components: {
      CellCard,
      BtnGroup,
    },
    props: {},
    data() {
      return {
        app_sta: 0,
        status:{
          success: require('assets/images/approval/png_success.png'),
          fail: require('assets/images/approval/png_fail.png'),
        },
        top: {
          isline: true,
          headimg: require('assets/images/temp/1.jpg'),
          title: '马思纯的请假',
          info: '等待我的审批',
          status: 1
        },
        info:[
          {label: '所在部门', value: '研发一部'},
          {label: '请假类型', value: '事假'},
          {label: '开始时间', value: '2016-11-15 15:25'},
          {label: '结束时间', value: '2016-11-16 15:25'},
          {label: '请假天数', value: '8小时'},
          {label: '请假事由', value: '参加国际金融会议'},
        ],
        list:[
          {
            headimg: require('assets/images/temp/1.jpg'),
            title: '姓名1',
            info: '发起申请',
            status: 1,
            tip: '12.11 12:30'
          },
          {
            headimg: require('assets/images/temp/1.jpg'),
            title: '姓名2',
            info: '发起申请',
            info2: '来回注意安全',
            status: 1,
            tip: '12.11 12:30'
          },
          {
            headimg: require('assets/images/temp/1.jpg'),
            title: '姓名3',
            info: '已拒绝',
            status: 0,
            tip: '12.11 12:30'
          },
        ],
        btns:[
          {title: '评论', id:1}
        ]
      }
    },
    methods: {
      onBtnClick(detail){
        console.log('click btn id is:'+detail.id)

        detail && this.$router.push({name: 'approval/opinion', params:{id: detail.id}});
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .approval-detail{
    .content{
      background: @colorWhite;
      padding-top: .2rem;
      padding-bottom: .2rem;
      li{
        padding: .1rem 0;
      }
    }
    .list{
      padding: 0 1.8rem .3rem 1rem;
      li{
        position: relative;
        padding: .3rem 0;
        align-items: flex-start;
        .list-icon{
          position: relative;
          width: 1.3rem;
          padding-top: .5rem;
          z-index: 2;
          .iconfont{
            display: inline-block;
            width: .7rem;
            height: .7rem;
            font-size: .2rem;
            line-height: .75rem;
            color: @colorWhite;
            border: .2rem solid @colorBgMain;
            border-radius: 50%;
            &.icon-success{
              background: @colorBgGreen;
            }
            &.icon-error{
              background: @colorBgError;
            }
          }
        }
        &::before{
          content:'';
          position: absolute;
          left:.55rem;
          top:0;
          bottom:0;
          width:1px;
          background: @colorLine;
        }
        &:first-child{
          padding-top: .6rem;
        }
        &:last-child::before{
          height: 1rem;
        }
        .flex-item{
          position: relative;
          &::before{
            content:'';
            position: absolute;
            left:-.15rem;
            top:.85rem;
            width:.3rem;
            height:.3rem;
            z-index: 3;
            background: @colorWhite;
            border-left: 1px solid @colorBorderColor;
            border-top: 1px solid @colorBorderColor;
            transform: rotate(-45deg);
          }
          .cell-card{
            border: 1px solid @colorBorderColor;
            border-radius: 3px;
          }
        }
      }
    }
    .sta-png{
      position: absolute;
      right:.5rem;
      top:.3rem;
      width:5rem;
    }
  }
</style>
