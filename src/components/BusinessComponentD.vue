/**文件导入 保存 转换 富文本 */
<template>
   <div class="boxD">
      <div class="box_body margin">
        夸游丞相第，偷入常侍门。
        爱君直如发，勿念江湖人。
      </div>
       <div class="box_body margin">
        {{'我叫:' + infoList.name + ',来自:' + infoList.city}}
      </div>
    </div>
</template>
<script>
export default {
  // props可以数任何类型，用于接收父组件数据
  props: {
    infoList: {
      type: Object,
      default: ()=>{}
    }
  },
  data () {
    return {
      }
  },
  watch: {
  },
  created () {
  },
  mounted () {
    console.log(infoList,'infoList')
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.boxD {
  display: block;
  text-align: initial;
  background: blueviolet;
}
</style>
