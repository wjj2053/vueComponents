<template>
  <div>
      <van-button type="primary" @click="reportBtn()" class="updateBtn" :disabled="updateDisableFlag">
          <span v-if="updateDisableFlag">打卡</span>
          <span v-else>打卡成功</span>
      </van-button>
      <van-button type="info">
          <span>当前时间为:{{dataTime}}</span>
      </van-button>
       <van-button type="warning">
          <van-count-down :time="time" />
      </van-button>
      <van-tabbar
        v-model="active"
        active-color="#13C26B"
        inactive-color="#C6CAD3"
        @change="onChange"
        fixed
      >
        <van-tabbar-item >
          <img :src="active == '0' ? require('@/assets/icon/punchActive.png') : require('@/assets/icon/punch.png')" width="40%"/>
          <div>打卡</div>
        </van-tabbar-item>
        <van-tabbar-item>
          <img :src="active == '1' ? require('@/assets/icon/recordActive.png') : require('@/assets/icon/record_no.png')" width="40%"/>
          <div>记录</div>
        </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import moment from 'moment' // 引入moment时间格式化组件
export default {
  data () {
    return {
      updateDisableFlag: false,
      settimer: 11,
      time: 30 * 1000,
      active: 0,
      dataTime: ''
    }
  },
  methods: {
    reportBtn () {
      let that = this
      if (that.settimer === 1) {
        that.updateDisableFlag = false
        that.settimer = 11
        return false
      } else {
        that.updateDisableFlag = true
        that.settimer--
      }
      setTimeout(function () {
        that.reportBtn()
      }, 3000)
    },
    getUserInfo () {
      // 调取接口,get  host方法
      let parmas = {
        adress: this.addRess,
        longitude: this.longitude,
        latitude: this.latitude,
        clockType: this.clockType, // 常规打卡
        createTime: this.time // 时分秒
      }
      // get,采用？拼接参数以及添加请求头的情况,如果参数需要转为字符串对象，则用this.$qs.stringify转一下，否则不用
      // this.$http.post(this.$APIS.SIMULATION_LOGIN+'?'+this.$qs.stringify(query))
      // post，采用,连接参数和请求头
      // this.$http.post(this.$APIS.SIMULATION_LOGIN, parmas, {Headers:{'resource': this.GetQueryString('resource'),'Content-Type': 'application/x-www-form-urlencoded'}})
      this.$http.post(this.$APIS.saveClockInRecord, parmas)
        .then((res) => {
          // 路由带参数跳转页面二种写法
          // this.$router.push({ path: '/contract/online/preview', query: { id: this.id,type:this.contractType,nav:this.nav } })
          // this.$router.push(`/addGrowersInfo/result?bdMeetingId=${_this.bdMeetingId}&znId=${_this.paramFarmerId}&userName=${_this.userName}&mobile=${_this.mobile}&result=1&fromWhere=${_this.fromWhere}`)
          console.log(res, 'res')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    console.log('created')
    this.dataTime = moment().format('YYYY-MM-DD HH:mm:ss') // 年月日时分秒
  },
  mounted () {
    this.getUserInfo()
    console.log('mounted')
  }
}
</script>

<style>
.updateBtn {
}
</style>
