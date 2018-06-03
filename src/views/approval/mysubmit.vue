<template>
    <scroller class="approva-mysubmit" v-title="'我发起的'"
              :pullupConfig="{content:'', downContent:'', upContent:''}" ref="scrollEvent"
              lock-x use-pulldown use-pullup @on-pulldown-loading="onRefresh" @on-pullup-loading="onLoadMore">

      <cells-group :data="items"></cells-group>

    </scroller>
</template>

<script>
  import { Scroller } from 'vux';
  import CellsGroup from 'components/CellsGroup';

  export default {
    components: {
      Scroller,
      CellsGroup,
    },
    props: {},
    data() {
        return {
          load:{start:0, count:10, loadFlag:true},
          items:[
            {
              isline: true,
              icon: 'icon-clock',
              title:'测试1',
              tip:'128513',
              info:'88513',
              size:'small',
              status:2
            },
          ],
        }
    },
    mounted(){
      this.refresh();
      this.$nextTick(() => {
        this.$refs.scrollEvent.reset({top: 0});
      })
    },
    methods: {
      onRefresh(){
        console.log('refresh');
        this.refresh();
      },
      onLoadMore(){
        console.log('loading more')
        this.getData();
      },
      refresh(){
        this.items.splice(0);
        this.load.start = 0;
        this.load.loadFlag = true;
        this.getData();
      },
      getData(){
        setTimeout(()=>{
            for(let i=0; i<10; i++){
              this.items.push({
                isline: true,
                icon: 'icon-clock',
                title:'测试'+Date.now(),
                tip:'12:53',
                info:'待审核',
                size:'small',
                status:2
              },);
            }
          this.$nextTick(() => {
            this.load.start == 0 ? this.$refs.scrollEvent.donePulldown() : this.$refs.scrollEvent.donePullup()
            this.load.start++;
          })
        }, 1000)
      }
    }
  }
</script>

<style lang="less">
</style>
