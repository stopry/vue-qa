<template>
    <div class="tabs flex">
      <div class="flex-item text-center" v-for="(item, index) in data" :class="{'active':current == index}" @click="onTabItemClick(index)">
        <div>
          <span v-text="item.title"></span>
          <i v-if="item.badge" class="badge" v-text="item.badge"></i>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    components: {},
    props: {
      data: Array,
      active: Number,
    },
    data() {
      return {
        current: 0,
      }
    },
    created(){
      this.current = this.active || 0;
    },
    methods: {
      onTabItemClick(index){
        let detail = {
            last: this.current*1,
            current: index
        }
        this.current = index;
        this.$emit('change', detail)
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/less/theme.less";
  .tabs{
    background: @colorWhite;
    .flex-item{
      div{
        position: relative;
        display: inline-block;
        padding: 0 1rem;
        font-size: @fontsize28;
        line-height: 1.7rem;
        border-bottom: .1rem solid transparent;
        .badge{
          right: .3rem;
          top:.5rem;
        }
      }
      &.active{
        div{
          color: @colorFontPurple;
          border-color: @colorFontPurple;
        }
      }
    }
  }
</style>
