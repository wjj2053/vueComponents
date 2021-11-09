<template>
  <div class="todo-box">
    <div class="todo-title">
      {{listItem.date}}
    </div>
    <div class="todo-item" v-for="(item,index) in listItem.pendingVoList" :key="index" >
      <img :src="assets/icon/punch.png" class="todo-icon">
      <div class="todo-info">
        {{item.pendingMsg}}
      </div>
      <div class="todo-time">
        {{item.createTime}}
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props: {
    listItem: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  watch: {
    listItem (res) {
      console.log(res + '----')
    }
  }
}
</script>

<style scoped>
  .todo-box{
    width:100%;
    height:auto;
    padding:0 15px;
    background:#ffffff;
    border-bottom: 1px solid #F3F4F6;
  }
  .todo-title{
    width: 100%;
    height: 45px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #1D2C51;
    line-height: 45px;
  }
  .todo-title:before{
    display:inline-block;
    content:'';
    width: 4px;
    height: 14px;
    background: #13C26B;
    border-radius: 2px;
    vertical-align: top;
    margin-top:15px;
    margin-right:5px;
  }
  .todo-item{
    width:100%;
    min-height:45px;
    padding:13px 0 10px;
    border-bottom:1px solid #F3F4F6;
    display:flex;
    align-items: center;
    flex-wrap:wrap;
  }
  .todo-icon{
    width:12px;
    height:12px;
    margin-right:5px
  }
  .todo-info{
    max-width:314px;
    height: auto;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #1D2C51;
    line-height: 22px;
  }
  .todo-time{
    width: auto;
    height: 17px;;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #C6CAD3;
    line-height: 17px;
    text-align:right;
    margin-left:auto;
  }
</style>
