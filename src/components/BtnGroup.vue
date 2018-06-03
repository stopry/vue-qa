<template>
    <div class="btn-group flex" :class="{'fixed':fixed}">
      <template v-for="(item, index) in data" >
        <div class="flex-item text-center" v-text="item.title" @click="onItemClick(item.id, item.title)"></div>
        <div class="flex-line" v-if="index != data.length-1"></div>
      </template>
    </div>
</template>

<script>
  export default {
    components: {},
    props: {
      fixed: Boolean,
      data: Array,
    },
    data() {
        return {}
    },
    methods: {
      onItemClick(id, title){
        let detail = {
          id,title
        }
        this.$emit('btnClick', detail)
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/less/theme.less";
  .btn-fix-bar{
    padding-bottom: 2rem;
  }
  .btn-group{
    position: relative;
    width: 100%;
    height: 1.7rem;
    background: @colorWhite;
    border-top: 1px solid @colorBorderColor;
    z-index: 99;
    &.fixed{
      position: fixed;
      left: 0;
      bottom: 0;
    }
    .flex-item{
      font-size: @fontsize32;
      color: @colorButPurple;
      line-height: .8rem;
    }
    .flex-line{
      width:1px;
      height: .8rem;
      background: @colorBorderColor;
    }
  }
</style>
