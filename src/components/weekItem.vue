<template>
  <div class="weekBox">
    <div class="weekItem" v-for="(item, index) in weekList" :key="index">{{ item }}</div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      weekList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  }
}
</script>

<style scoped>
  .weekBox {
    width: 345px;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #6c768e;
    line-height: 17px;
    display: flex;
    justify-content: space-around;
    margin: 15px 0 10px 15px;
    /* // margin-top:15px; */
    /* // margin-bottom:2px; */
    /* // padding:0 15px; */
  }
  .weekItem {
    width: 32px;
    margin-right: 25px;
    /* // margin-left:15px; */
  }
  .weekItem:last-child {
    margin-right: 0;
  }
</style>
