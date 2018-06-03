<template>
    <div class="notice-index">
      <tabs :data="tabs" :active="0" @change="changeTab"></tabs>
      <scroller class="notice-block" v-show="current == 0"
                :pullupConfig="{content:'', downContent:'', upContent:''}" ref="SEU"
                lock-x use-pulldown use-pullup @on-pulldown-loading="onRefresh" @on-pullup-loading="onLoadMore">
        <notice-items :data="items.unread" ></notice-items>
      </scroller>
      <scroller class="notice-block" v-show="current == 1"
                :pullupConfig="{content:'', downContent:'', upContent:''}" ref="SER"
                lock-x use-pulldown use-pullup @on-pulldown-loading="onRefresh" @on-pullup-loading="onLoadMore">
        <notice-items :data="items.readed" ></notice-items>
      </scroller>
    </div>
</template>

<script>
    import { Scroller } from 'vux';
    import NoticeItems from 'components/notice/NoticeItems';
    import Tabs from 'components/Tabs';

    export default {
      components: {
        Scroller,
        NoticeItems,
        Tabs,
      },
      props: {},
      data() {
        return {
          load_data:{
            unread:{start:0, count:10, loadFlag: true},
            readed:{start:0, count:10, loadFlag: true}
          },
          type:'notice',//article公告
          tabs: [
            {title: '未读', badge:3},
            {title: '已读', badge:0},
          ],
          current: 0,
          items: {
            unread:[
              {
                id: 1,
                img: require('assets/images/temp/1.jpg'),
                title: '文章标题1',
                department: '部门',
                from: '发件人',
                time: '12-16 32:31',
              },
              {
                id: 2,
                img: require('assets/images/temp/1.jpg'),
                title: '文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2文章标题2',
                department: '部门',
                from: '发件人',
                time: '12-16 32:31',
              },
              {
                id: 3,
                img: require('assets/images/temp/1.jpg'),
                title: '文章标题3文章标题3文章标题3文章标题3文章标题3',
                department: '部门',
                from: '发件人',
                time: '12-16 32:31',
              },
              {
                id: 4,
                img: require('assets/images/temp/1.jpg'),
                title: '文章标题4',
                department: '部门',
                from: '发件人',
                time: '12-16 32:31',
              }
            ],
            readed:[
              {
                id: 3,
                img: require('assets/images/temp/1.jpg'),
                title: '文章标题3文章标题3文章标题3文章标题3文章标题3',
                department: '部门',
                from: '发件人',
                time: '12-16 32:31',
              },
              {
                id: 4,
                img: require('assets/images/temp/1.jpg'),
                title: '文章标题4',
                department: '部门',
                from: '发件人',
                time: '12-16 32:31',
              }
            ]
          }
        }
      },

      mounted(){
        this.type = this.$route.params.type;
        if(this.type == 'notice'){
          document.title = '公告'
        }else if(this.type == 'article'){
          document.title = '发文'
        }
        this.refresh(0);
        this.refresh(1);

        this.$nextTick(() => {
          this.$refs.SEU.reset({top: 0});
          this.$refs.SER.reset({top: 0});
        })
      },
      methods: {
        changeTab(detail){
          this.current = detail.current
        },
        onRefresh(){
          console.log('refresh')
          this.refresh(this.current);
        },
        onLoadMore(){
          console.log('load more')
          this.getData(this.current);
        },
        refresh(current){
          let data = current == 0 ? this.load_data.unread : this.load_data.readed;
          current == 0 ? this.items.unread.splice(0) : this.items.readed.splice(0);
          data.start = 0;
          data.loadFlag = true;
          this.getData(current);
        },
        getData(current){
          let data = current == 0 ? this.load_data.unread : this.load_data.readed;
          let items = current == 0 ? this.items.unread : this.items.readed;
          setTimeout(()=>{
            items.push({
              id: Date.now(),
              img: require('assets/images/temp/1.jpg'),
              title: '文章标题'+Date.now(),
              department: '部门',
              from: '发件人',
              time: '12-16 32:31',
            });
            this.$nextTick(() => {
              current == 0 ?
                (data.start == 0 ? this.$refs.SEU.donePulldown() : this.$refs.SEU.donePullup()) :
                (data.start == 0 ? this.$refs.SER.donePulldown() : this.$refs.SER.donePullup())
              data.start++;
            })
          }, 1000)
        }
      }
    }
</script>

<style lang="less">
  .notice-index{
    .notice-block{
      margin: .6rem 0;
    }
  }
</style>
