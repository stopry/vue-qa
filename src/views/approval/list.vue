<template>
  <div class="approval-list">
    <tabs :data="tabs" :active="0" @change="changeTab"></tabs>

    <scroller class="approval-block" v-show="current == 0"
              :pullupConfig="{content:'', downContent:'', upContent:''}" ref="SEU"
              lock-x use-pulldown use-pullup @on-pulldown-loading="onRefresh" @on-pullup-loading="onLoadMore" >
      <cells-group :data="items.testdata" @onCellClick="onCellClick" ></cells-group>
    </scroller>

    <scroller class="approval-block" v-show="current == 1"
              :pullupConfig="{content:'', downContent:'', upContent:''}" ref="SER"
              lock-x use-pulldown use-pullup @on-pulldown-loading="onRefresh" @on-pullup-loading="onLoadMore" >
      <cells-group :data="items.readed" @onCellClick="onCellClick" ></cells-group>
    </scroller>

  </div>
</template>

<script>
  import { Scroller } from 'vux';
  import CellsGroup from 'components/CellsGroup';
  import Tabs from 'components/Tabs';

  export default {
    components: {
      Scroller,
      CellsGroup,
      Tabs,
    },
    props: {},
    data() {
      return {
        load_data:{
          testdata:{start:0, count:10, loadFlag: true},
          readed:{start:0, count:10, loadFlag: true}
        },
        tabs: [
          {title: '待我审批', badge:0},
          {title: '我已审批', badge:0},
        ],
        current:0,
        items: {
          testdata:[],
          readed:[]
        }
      }
    },
    mounted(){
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
        let data = current == 0 ? this.load_data.testdata : this.load_data.readed;
        current == 0 ? this.items.testdata.splice(0) : this.items.readed.splice(0);
        data.start = 0;
        data.loadFlag = true;
        this.getData(current);
      },
      getData(current){
        let data = current == 0 ? this.load_data.testdata : this.load_data.readed;
        let items = current == 0 ? this.items.testdata : this.items.readed;
        setTimeout(()=>{
          items.push({
            id: Date.now(),
            isline: true,
            headimg: require('../../assets/images/home/icon_approval.png'),
            title:'赵本山的请假',
            tip:'11:24',
            info:'待审批',
            size:'small',
            status:0
          });
          this.$nextTick(() => {
            current == 0 ?
            (data.start == 0 ? this.$refs.SEU.donePulldown() : this.$refs.SEU.donePullup()) :
            (data.start == 0 ? this.$refs.SER.donePulldown() : this.$refs.SER.donePullup())
            data.start++;
          })
        }, 1000)
      },
      onCellClick(data){
        this.$router.push({name: 'approval/detail', params:{id: data.id}});
      }
    }
  }
</script>

<style lang="less">
  .approval-list{
    .approval-block{
      margin: .6rem 0;
    }
  }
</style>
