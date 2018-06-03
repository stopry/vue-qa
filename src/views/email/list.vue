<template>
    <div v-title="'收件箱'" class="inbox">
      <email-inbox v-for="item in getItems" :data="item"></email-inbox>
    </div>
</template>

<script>
  import EmailInbox from 'components/email/EmailInbox';

  export default {
    components: {
      EmailInbox,
    },
    props: {
      data: Array,
    },
    data() {
      return {
        arr:[1,2,3]
      }
    },
    computed:{
      getItems(){
        let items = [
          {
            headimg:require('../../assets/images/home/icon_approval.png'),
            name:'赵美玲',
            job:"经理",
            date:'11月20号',
            works:'森辰招商联盟手册',
            text:'招商手册优化一下，另外根据文件添加一些新招商手册优化一下，另外根据文件添加一些新',
          },
          {
            headimg:require('../../assets/images/home/icon_approval.png'),
            name:'赵美玲',
            job:"经理",
            date:'11月20号',
            works:'森辰招商联盟手册',
            text:'招商手册优化一下，另外根据文件添加一些新招商手册优化一下，另外根据文件添加一些新',
          }
        ];

        return items
      }
    },
    methods: {
      onCellClick(data){
        this.$emit('onCellClick', data)
      }
    }
  }
</script>

<style lang="less">
  /*@import "../../assets/less/theme.less";*/
  /*.inbox{*/
    /*border-top: 1px solid @colorBorderColor;*/
    /*border-bottom: 1px solid @colorBorderColor;*/
  /*}*/
</style>
