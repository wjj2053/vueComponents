<template>
  <div class="todo-box">
    <div class="todo-title">
      当日统计
      <div class="todo-title-time">
        {{info.date}} 00:00-23:59
      </div>
    </div>
    <div class="todo-item">
        <div class="todo-left">
          <div class="todo-item-title">
            新增线索数
          </div>
          <div class="todo-item-num">
            <span>{{info.newAddDsp || 0}}</span>条
          </div>
          <div class="todo-item-count">
            48小时内联系<span>{{info.timeNewAddDsp || 0}}</span>条
          </div>
        </div>
        <div class="todo-right">
          <div class="todo-item-title">
            新增收款农户数
          </div>
          <div class="todo-item-num">
            <span>{{info.farmerCollection || 0}}</span>人
          </div>
          <div class="todo-item-count">
            线上<span>{{info.onlineFarmerCollection || 0}}</span>人
          </div>
        </div>
    </div>
    <div class="todo-item">
        <div class="todo-left">
          <div class="todo-item-title">
            拜访农户数
          </div>
          <div class="todo-item-num">
            <span>{{info.visitFarmerCollection || 0}}</span>人
          </div>
          <div class="todo-item-count">
            线上<span>{{info.onlineVisitFarmerCollection || 0}}</span>人
          </div>
        </div>
        <div class="todo-right">
          <div class="todo-item-title">
            新增做销农户数
          </div>
          <div class="todo-item-num">
            <span>{{info.marketingFarmerCollection || 0}}</span>人
          </div>
          <div class="todo-item-count">
            线上<span>{{info.onlineMarketingFarmerCollection || 0}}</span>人
          </div>
        </div>
    </div>
    <div class="todo-item">
        <div class="todo-left">
          <div class="todo-item-title">
            总收款农户数
          </div>
          <div class="todo-item-num">
            <span>{{info.totalTransactionFarmer	 || 0}}</span>人
          </div>
          <div class="todo-item-count">
            线上<span>{{info.onlineTotalTransactionFarmer || 0}}</span>人
          </div>
        </div>
        <div class="todo-right">
          <div class="todo-item-title">
            总做销农户数
          </div>
          <div class="todo-item-num">
            <span>{{info.totalNumberFarmer || 0}}</span>人
          </div>
          <div class="todo-item-count">
            线上<span>{{info.onlineTotalNumberFarmer || 0}}</span>人
          </div>
        </div>
    </div>
    <div class="todo-item">
        <div class="todo-left">
          <div class="todo-item-title">
            总收款金额
          </div>
          <div class="todo-item-num">
            <span>{{info.totalCollectionAmount || 0}}</span>元
          </div>
          <div class="todo-item-count">
            线上<span>{{info.onlineTotalCollectionAmount || 0}}</span>元
          </div>
        </div>
        <div class="todo-right">
          <div class="todo-item-title">
            总做销金额
          </div>
          <div class="todo-item-num">
            <span>{{info.totalSalesAmount || 0}}</span>元
          </div>
          <div class="todo-item-count">
            线上<span>{{info.onlineTotalSalesAmount || 0}}</span>元
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  created () {
    console.log(info,'info')
  },
  watch: {
    info (res) {
      // console.log(res + '----')
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
    display: block;
    text-align: initial
  }
  .todo-title{
    width: 345px;
    height: 45px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #1D2C51;
    line-height: 45px;
    position:relative;
    border-bottom:1px solid #F3F4F6;
    /* display:flex; */
  }
  .todo-title-time{
    width: auto;
    height: 45px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #6C768E;
    line-height: 45px;
    position:absolute;
    right:0;
    top:0;
    /* margin-left:auto; */
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
  }
  .todo-item{
    width:345px;
    height:91px;
    border-bottom:1px solid #F3F4F6;
    display:flex;
    flex-wrap:wrap;
    margin:0 auto;
  }
  .todo-left{
    width:190px;
    height:auto;
    margin-left:9px;
  }
  .todo-right{
    width:auto;
    height:auto
  }
  .todo-item-title{
    width: 100%;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #6C768E;
    line-height: 17px;
    margin-top:15px;
  }
  .todo-item-num{
    width: 100%;
    height: 22px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #1D2C51;
    line-height: 22px;
    margin-top:6px;
    margin-bottom:6px;
  }
  .todo-item-num span{
    font-size:16px;
    margin-right:3px;
  }
  .todo-item-count{
    width: 100%;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #6C768E;
    line-height: 17px;
  }
  .todo-item-count span{
    color:black;
    font-weight:800;
    margin:0 2px;
  }
</style>
