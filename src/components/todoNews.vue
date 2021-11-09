<template>
  <div class="news-box">
    <div class="news-title">
      日报简讯
    </div>
    <div class="news-content">
      <div class="news-info">
        {{info}}
      </div>
      <div class="news-copy" @click="copy">
        点我复制
      </div>
    </div>
  </div>
</template>
<script>
// import Clipboard from 'clipboard'
export default{
  data () {
    return {
      info: '2021年8月17日日报，农艺师：陈志宇' +
        '\n' + '新增线索 9 条，48小时内已联系 5 条；' +
        '\n' + '新增收款农户数 4 人，其中线上 2 人；' +
        '\n' + '拜访农户 9 人，其中线上 4 人；' +
        '\n' + '做销农户数 4 人，其中线上 2 人；' +
        '\n' + '完成总收款：3,123,123.00元，' +
        '\n' + '其中线上：1,123,123.00 元；' +
        '\n' + '完成总做销：3,123,123.00元，' +
        '\n' + '其中线上：1,123,123.00 元。' +
        '\n' + '- DONE -'
    }
  },
  methods: {
    copy () {
      this.$Bridge.default.callhandler(
        'clipboardManager',
        this.info,
        (data) => {
          this.$toast({ message: '复制成功' })
        }
      )
    }
  }
}
</script>

<style scoped>
  .news-box{
    width:326px;
    height:auto;
    margin:0 auto;
    padding-bottom:25px;
    text-align: initial;
  }
  .news-title{
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #6C768E;
    line-height: 20px;
    margin:15px 0 7px 0
  }
  .news-content{
    width: 100%;
    min-height: 210px;
    background: #FCFDFE;
    border-radius: 6px;
    border: 1px solid #F1F2F5;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #1D2C51;
    line-height: 18px;
    position:relative;
  }
  .news-info{
    width:100%;
    padding:0 10px 32px 10px;
    height:auto;
    white-space:pre-line;
  }
  .news-copy{
    width: 85px;
    height: 32px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 32px;
    text-align:center;
    background: #13C26B;
    border-radius: 6px 0px 6px 0px;
    position:absolute;
    right:0;
    bottom:0;
  }
</style>
