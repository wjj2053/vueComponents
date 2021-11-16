/**文件列表展示，包含编辑 查看 添加 修改 删除 拖动排序 点击指标排序 筛选等功能 */
<template>
    <div class="box">
       <div class="box_header margin">
         壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。
         少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。
        于是饮酒乐甚，扣舷而歌之。
      </div>
      <div class="box_body margin">
          歌曰：“桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。”客有吹洞箫者，倚歌而和之。
          其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。
          苏子愀然，正襟危坐而问客曰：“何为其然也？”
      </div>
    </div>
</template>

<script>
export default {
  props: {
  },
   components: { },
   data () {
     return {

     }
   }
}
</script>
<style lang="less" scoped>
.box {
  margin: 10px;
  display: block;
  text-align: initial;
  height: auto;
}
.box_header {
  background:orange;
}
.box_body {
  background: green;
}
.box_bottom {
  background: rgb(170, 245, 84);
}
.margin {
  margin: 20px 0px;
}
</style>
