<template>
  <div v-title="'我的办公'" class="home-index container btn-fix-bar">
    <router-link v-for="item in items"  :to="item.to">
      <home-item :icon="item.icon" :label="item.label" ></home-item>
    </router-link>
    <btn-group :data="testbtn" @btnClick="onBtnClick" :fixed="true"></btn-group>
  </div>
</template>

<script>
  import HomeItem from 'components/home/HomeItem';
  import BtnGroup from 'components/BtnGroup';

  export default {
    components:{
      HomeItem,
      BtnGroup
    },
    data() {
      return {
        items:[
          {label:'审批', icon: require('../../assets/images/home/icon_approval.png'), to:'/approval'},
          {label:'邮件', icon: require('../../assets/images/home/icon_email.png'), to:''},
          {label:'报表', icon: require('../../assets/images/home/icon_report.png'), to:''},
          {label:'公告', icon: require('../../assets/images/home/icon_message.png'), to:'/notice/notice'},
          {label:'任务', icon: require('../../assets/images/home/icon_task.png'), to:''},
          {label:'发文', icon: require('../../assets/images/home/icon_article.png'), to:'/notice/article'},
          {label:'新增', icon: require('../../assets/images/home/icon_add.png'), to:''},
        ],
        testbtn:[
          {title:'同意', id:1},
          {title:'拒绝', id:2},
          {title:'转交', id:3},
          {title:'评论', id:4},
        ]
      }
    },
    methods: {
      onBtnClick(detail){
        console.log('click btn id is : '+detail.id)
      }
    }
  }
</script>

<style lang="less" >
</style>
