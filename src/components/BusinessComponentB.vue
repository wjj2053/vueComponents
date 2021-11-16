/**文件包含：1.布局 2.顶部菜单切换 3.表单及其表单提交 基于vant element */
<template>
    <div class="box">
      <div class="box_header margin">
        <layout-top :laylist = "tabList"></layout-top>
        故垒西边，人道是，三国周郎赤壁。
        乱石穿空，惊涛拍岸，卷起千堆雪。
      </div>
      <div class="box_body margin">
        故国神游，多情应笑我，早生华发。
        人生如梦，一尊还酹江月。这是中间区域
      </div>
      <!-- 自定义变量tabList用于接收本页面接口获取到的数据或者自定义mock数据，使用一个变量infoList绑定接收，封装出去的组件采用props接收infoList即可直接获取对象内属性 -->
      <business-component-d :infoList = 'tabList'></business-component-d>
      </div>
</template>
<script>
// import xx from 'xx'
import BusinessComponentD from './BusinessComponentD.vue' // 外部封装组件，引入，传值1号props
import LayoutLeft from '@/components/LayoutLeft'
import LayoutTop from '@/components/LayoutTop'
export default {
  components:{BusinessComponentD,LayoutLeft,LayoutTop}, // 注册组件
  data () {
    return {
      tabList:
        {
        avatar: "mapHelperH5/IMG_CMP_20211116_09155871.jpeg",
        code: "1576476184427",
        createTime: 1576476184000,
        description: "MAP现代农业服务平台是中化农业提出的崭新发展战略，为农户提供线下线上一体化的综合解决方案。MAP技术服务中心提供选中、配肥、植保、检测服务、农机服务、技术培训、智慧农业服务、粮食烘干仓储及销售、农业金融等7 3服务",
        email: "v-zhupenghu@sinochem.com",
        id: 249,
        jiguangId: "1507bfd3f7197d9e664",
        lastPwd: "APxpiQW5uPRdkxjl3frLBBvgCIILmto2t+qO/p06Q3M=",
        lastSalt: "fbdf969c93c91e4c3127bfe207be4400",
        mobile: "17611680012",
        opId: "00e3e364-0554-4060-b2c5-de20bf8ee9b9",
        openid: "1177g39963trtddgvqtn8qx7svde91vm",
        page: 1,
        pageSize: 10,
        photo: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F003bba6c74ce151d3ce31aaa6cb7c6ecb72683e917605-ekncjt_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639621487&t=c8cddf895f6c96b4957a171bfca94d5a",
        pwdUpdateRemainDay: 117,
        pwdUpdateTime: 1631501563000,
        realname: "许洋萍",
        searchType: "E",
        updateTime: 1637026638000,
        znMobile: "13568236518",
        znWorkStation: "APP测试1"
        },
    }
  },
  watch: {
  },
  created () {
  },
  mounted () {
    // this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      this.$http.get(XXX).then(res => {
        this.tabList = res.data // 获取到接口返回值this.tabList
      })
    },
    goToNext () {
      // 路由跳转几种方式,带参不带参
      // this.$router.push('./card.vue')
      // this.$router.replace('/login') // 不带参直接跳转指定页面
      // this.$router.push({ path: '/contract/online/preview', query: { id: this.id,type:this.contractType,nav:this.nav } })
      // this.$router.push(`/addGrowersInfo/result?bdMeetingId=${_this.bdMeetingId}&znId=${_this.paramFarmerId}`)
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
  background:rgb(235, 210, 172);
}
.box_body {
  background: rgb(188, 224, 188);
}
.box_bottom {
  background: rgb(170, 245, 84);
}
.margin {
  margin: 20px 0px;
}
</style>
