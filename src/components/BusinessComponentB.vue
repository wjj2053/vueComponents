/**文件包含：1.布局 2.顶部菜单切换 3.表单及其表单提交 基于vant element */
<template>
    <div class="box">
      <div class="box_header margin">
        大江东去，浪淘尽，千古风流人物。
        故垒西边，人道是，三国周郎赤壁。
        乱石穿空，惊涛拍岸，卷起千堆雪。
      </div>
      <div class="box_body margin">
        羽扇纶巾，谈笑间，樯橹灰飞烟灭。
        故国神游，多情应笑我，早生华发。
        人生如梦，一尊还酹江月。这是中间区域
      </div>
      <div class="box_bottom margin">
       <van-tabs>
        <van-tab v-for="index in 8"  :key="index" :title="'标签 ' + index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      </div>
      </div>
</template>
<script>
// import xx from 'xx'
export default {
  data () {
    return {
    }
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
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
