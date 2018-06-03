<template>
    <div class="cells-group">

      <cell-card v-for="item in getItems" :data="item" @onCellClick="onCellClick"></cell-card>

    </div>
</template>

<script>
  import CellCard from './CellCard';
  export default {
    components: {
      CellCard,
    },
    props: {
      data: Array,
    },
    data() {
      return {}
    },
    computed:{
      getItems(){
        let datas = this.data, items = [];
        for (let i = 0; i<datas.length; i++) {
          items.push(datas[i]);
          items[i].isline = true;
        }
        items[items.length - 1] && (items[items.length - 1].isline = false);
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
  @import "../assets/less/theme.less";
  .cells-group{
    border-top: 1px solid @colorBorderColor;
    border-bottom: 1px solid @colorBorderColor;
  }
</style>
