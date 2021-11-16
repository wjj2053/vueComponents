<template>
    <div class="laytop">
      羽扇纶巾，谈笑间，樯橹灰飞烟灭。
      故国神游，多情应笑我，早生华发。
      人生如梦，一尊还酹江月。这是中间区域
      <img :src="laylist.photo" alt="">
    </div>
</template>
<script>
export default {
  props:{
    laylist: {
      type:Object,
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
    console.log(this.laylist,'laylist')
  },
  methods: {
  }
}
</script>
<style>
.laytop {
  color: orange;
}
img {
 width: 100%;
}
</style>
