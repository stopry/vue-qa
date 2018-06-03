<template>
    <div class="notice-items">
      <notice-item v-for="item in data" :data="item"></notice-item>
    </div>
</template>

<script>
  import NoticeItem from './NoticeItem';
    export default {
        components: {
          NoticeItem
        },
        props: {
            data: Array,
        },
        data() {
            return {}
        }
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .notice-items{
    border-top: 1px solid @colorBorderColor;
  }
</style>
