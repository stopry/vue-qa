<template>
    <div v-title="'详情'" class="notice-detail content">
      <div class="top">
        <div class="title" v-text="data.title"></div>
        <div class="float-fixed label">
          <div class="fl">{{data.department}}:{{data.from}}</div>
          <div class="fr">{{data.time}}</div>
        </div>
      </div>

      <div class="cnt" v-html="data.content"></div>

    </div>
</template>

<script>
    export default {
      components: {},
      props: {},
      data() {
        return {
          id:'',
          data:{
            title: '文章标题',
            department: '部门',
            from: '发件人',
            time: '01-12 12:35',
            content:' 文体活动有利于引导职工观念的转变。文化活动开展可以提升职工之间的感情，逐步提升团队之间的凝聚力、向心力，令彼此交流更为默契。企业开展的文体活动，一定程度上满足了职工的精神需求，同时也丰富了职工的业余生活。这就促进了广大企业职工热爱企业、关心企业、爱岗敬业，干劲十足的进入工作状态 , 从而为企业打造了一支实现企业增效、职工增收、共同发展的和谐团队。目前，随着市场经济体制的逐步完善，企业所面临的问题就逐步加剧，绝大多数企业也正处于发展时期，怎样看待并且处理好这些问题，是摆在企业职工中一个十分现实的问题，丰富的文体活动有利于及时掌握和了解职工的思想动态，促进企业内部和谐发展 , 共创工作和谐环境，另外，从某种角度上，职工自身逐步建立了企业归属感，在个人利益之间和企业利益之间能更好的划分职责义务，使他们树立正确的社会主义荣辱现、价值观、人生观等，这些都为构建和谐企业起了促进作用。'
          }
        }
      },
      mounted(){
        this.id = this.$route.params.id;
        console.log(this.id)
      },
    }
</script>

<style lang="less">
  @import "../../assets/less/theme.less";
  .notice-detail.content{
    background: @colorWhite;
    .top{
      border-bottom: 1px solid @colorBorderColor;
      .title{
        color: @colorFontBlack;
        font-size: @fontsize40;
        padding: .3rem 0;
      }
      .label{
        padding: .5rem 0;
      }
    }
    .cnt{
      padding: .6rem 0;
    }
  }
</style>
