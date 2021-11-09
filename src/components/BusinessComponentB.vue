/**文件包含：1.布局 2.顶部菜单切换 3.表单及其表单提交 基于vant element */
<template>
    <div class="box">
      <van-button type="primary" @click="goToNext">主要按钮</van-button>
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
      <!-- 自定义变量tabList用于接收本页面接口获取到的数据或者自定义mock数据，使用一个变量infoList绑定接收，封装出去的组件采用props接收infoList即可直接获取对象内属性 -->
      <business-component-d :infoList = 'tabList'></business-component-d>
      </div>
</template>
<script>
// import xx from 'xx'
import BusinessComponentD from './BusinessComponentD.vue' // 外部封装组件，引入，传值1号props
export default {
  components:{BusinessComponentD}, // 注册组件
  data () {
    return {
      tabList:
        {
          name: '韩梅梅',
          city: '北京',
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
