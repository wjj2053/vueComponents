/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div class="agronomist  font-24">
    <div class="c-box">
      <div class="toTitle">
        <!-- <div class="" @click="lastMonth">左</div> -->
        <div class="titleLeft">{{ date.years }}年{{ date.month }}月</div>
        <!-- <div class="" @click="nextMonth">右</div> -->
        <div class="titleRight"><span @click="backToday">回到今天</span>/{{checkDay}}</div>
      </div>
      <weekItem></weekItem>
      <van-swipe @change="onChange" :initial-swipe="1" :show-indicators="false">
        <van-swipe-item><calendarBox @getNowDate="getNowDate" :date="lastDate"></calendarBox></van-swipe-item>
        <van-swipe-item><calendarBox @getNowDate="getNowDate" :date="nowDate"></calendarBox></van-swipe-item>
        <van-swipe-item><calendarBox @getNowDate="getNowDate" :date="nextDate"></calendarBox></van-swipe-item>
        <template #indicator>
          <!-- <div class="custom-indicator">{{ current + 1 }}/4</div> -->
        </template>
      </van-swipe>
    </div>
    <div class="empty-box" v-if="false">
      <img src="../../assets/icon/icon-noWait.png" class="noList" />
      <div class="no-tips">还没有待办事项</div>
      <div class="no-title">下拉刷新</div>
      <img src="../../assets/icon/down-wait.png" class="no-icon" />
    </div>
    <div class="todo-box">
      <todoItem v-for="(item,index) in  doList" :listItem="item" :key="index"></todoItem>
      <todoCount :info="todayCount"></todoCount>
      <todoNews></todoNews>
    </div>
  </div>
</template>

<script>
import weekItem from './weekItem.vue' // 日历星期几部分
import calendarBox from './calendar.vue' // 日历组件
import todoItem from './todo.vue' // 代办事项提交列表部分
import todoCount from './todoCount.vue' // 当日统计部分
import todoNews from './todoNews.vue' // 日报简讯部分
export default {
  name: 'BusinessComponentsA',
  components: { calendarBox, weekItem, todoItem, todoCount, todoNews },
  data () {
    return {
      date: {},
      lastDate: {},
      nextDate: {},
      nuit: '360',
      calendarIndex: 0,
      current: 1,
      checkDay: '今天',
      doList: [],
      todayCount: {}
    }
  },
  created () {
    this.intNowDate()
    this.todayDate = this.date
    this.nowDate = this.date
    this.lastDate = this.getOtherDate(this.date, -1)
    this.nextDate = this.getOtherDate(this.date, 1)
    this.getList(this.checkDay)
    this.getQueryData(this.checkDay)
  },
  mounted () {
    // this.getDays(this.years,this.month)
    // this.getUserInfo()
    // this.getCommentDetail()
    // this.createCard()
  },
  methods: {
    getNowDate (date) {
      this.checkDay = date
      this.getList(this.checkDay)
      this.getQueryData(this.checkDay)
    },
    intNowDate () {
      this.date.years = new Date().getFullYear()
      this.date.month = new Date().getMonth() + 1
      this.date.day = new Date().getDate()
      this.checkDay = this.date.years + '-' + this.isTen(this.date.month) + '-' + this.isTen(this.date.day)
    },
    getList (date) {
      this.$http.get(this.$APIS.queryPendingRecords + '?pengdingTime=' + date).then(res => {
        this.doList = res
        this.doList.map((item, index) => {
          console.log(item)
        })
        console.log(this.doList)
      })
    },
    getQueryData (date) {
      this.$http.get(this.$APIS.queryDataTotal + '?beginTime=' + date + '00:00:00' + '&endTime=' + date + '23:59:59').then(res => {
        res.date = date
        this.todayCount = res
      })
    },
    backToday () {
      this.intNowDate()
      this.checkDay = this.date.years + '-' + this.isTen(this.date.month) + '-' + this.isTen(this.date.day)
      let current = this.current
      if (current === 0) {
        this.lastDate = this.getOtherDate(this.date, 0)
        this.nowDate = this.getOtherDate(this.date, 1)
        this.nextDate = this.getOtherDate(this.date, -1)
      }
      if (current === 1) {
        this.nowDate = this.getOtherDate(this.date, 0)
        this.lastDate = this.getOtherDate(this.date, -1)
        this.nextDate = this.getOtherDate(this.date, 1)
      }
      if (current === 2) {
        this.nextDate = this.getOtherDate(this.date, 0)
        this.nowDate = this.getOtherDate(this.date, -1)
        this.lastDate = this.getOtherDate(this.date, 1)
      }
      console.log(this.lastDate, this.nowDate, this.nextDate)
    },
    inteDate (index, arrow) {
      console.log(index)
      if (arrow === 'left') {
        if (index === 0) {
          this.date = this.lastDate
          this.nowDate = this.getOtherDate(this.date, 1)
        }
        if (index === 1) {
          this.date = this.nowDate
          this.nextDate = this.getOtherDate(this.date, 1)
        }
        if (index === 2) {
          this.date = this.nextDate
          this.lastDate = this.getOtherDate(this.date, 1)
        }
      } else {
        if (index === 0) {
          this.date = this.lastDate
          this.nextDate = this.getOtherDate(this.date, -1)
        }
        if (index === 1) {
          this.date = this.nowDate
          this.lastDate = this.getOtherDate(this.date, -1)
        }
        if (index === 2) {
          this.date = this.nextDate
          this.nowDate = this.getOtherDate(this.date, -1)
        }
      }
    },
    onChange (index) {
      if (this.current - index === 1 || this.current - index === -2) {
        this.calendarIndex = this.calendarIndex - 1
        console.log('右滑', this.calendarIndex)
        this.inteDate(index, 'right')
      } else {
        this.calendarIndex = this.calendarIndex + 1
        console.log('左滑', this.calendarIndex)
        this.inteDate(index, 'left')
      }
      this.current = index
      // this.inteDate(index)
      // let that = this
      // setTimeout(()=>{
      //   that.current = 1
      // },300)
    },
    isTen (num) {
      return num < 10 ? '0' + num : num + ''
    },
    lastMonth () {
      this.date = this.getOtherDate(this.date, -1)
    },
    nextMonth () {
      this.date = this.getOtherDate(this.date, 1)
    },
    swiperleft () {
      console.log('左滑')
      this.date = this.getOtherDate(this.date, 1)
      console.log(this.date)
    },
    swiperright () {
      console.log('右滑')
      this.date = this.getOtherDate(this.date, -1)
      console.log(this.date)
    },
    touchStart (e) {
      console.log(e)
      this.startX = e.pageX
      console.log(this.startX + 'start')
    },
    touchMove (e) {
      console.log(e)
      this.endX = this.startX - e.pageY
      console.log(this.endX)
    },
    getOtherDate (date, index) {
      let obj = {}
      let todayDate = this.todayDate
      obj.years = date.month + index > 12 ? date.years + 1 : date.month + index < 1 ? date.years - 1 : date.years
      obj.month = date.month + index > 12 ? 1 : date.month + index < 1 ? 12 : date.month + index
      obj.day = (todayDate.years === obj.years && todayDate.month === obj.month) ? todayDate.day : ''
      return obj
    },
    getUserInfo () {
      this.$Bridge.default.callhandler('mpWebviewHeader', { title: '待办事项', buttonType: 4 }, data => {})
      // this.$Bridge.default.registerhandler("agroEditHandler", (data, responseCallback) => {
      //     // data是原生app传递给h5的参数
      //     this.$router.push({path:'/agronomist/editInfo'})
      // });
      // this.$http.get(this.$APIS.SIMULATION_GET_USER)
      //     .then((res)=>{
      //         this.params = res.User||{}
      //     })
      //     .catch((err)=>{})
    },
    goDownLoad () {
      // this.$router.push({path:'/agronomist/commentList'})
    },
    handleView (index, url) {
      // if(this.params.photo!=''&&this.params.photo!=null){
      //     this.$Bridge.default.callhandler('showImages', { imageArr: [this.params.photo], index: 0 }, function (prams) {})
      // }
    }
  }
}
</script>
<style lang="less" scoped>
.agronomist {
  overflow: auto;
  height: 100vh;
  background: #f7f7f7;
}
.c-box {
  padding-top: 15px;
  background: #fff;
}
.toTitle {
  width: 100%;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #1d2c51;
  line-height: 22px;
  display: flex;
  // margin-top: 15px;
  background: #fff;
}
.titleLeft {
  margin-left: 15px;
}
.titleRight {
  margin-left: auto;
  margin-right: 15px;
}
.noList {
  width: 80px;
  height: 72px;
  display: block;
  margin: 114px auto 0;
}
.no-tips {
  width: 100%;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #c6cad3;
  line-height: 17px;
  text-align: center;
  margin: 4px auto 96px;
}
.no-title {
  width: 100%;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #13c26b;
  line-height: 20px;
  text-align: center;
}
.no-icon {
  width: 10px;
  height: 10px;
  display: block;
  margin: 4px auto 0;
}
.todo-box {
  margin-top: 10px;
  background: #ffffff;
  // border-bottom: 1px solid #F3F4F6;
}
.nowDate {
  width: 100%;
  height: auto;
  overflow: auto;
}
.dateBox {
  width: 300%;
  height: auto;
  display: flex;
  transform: translate(-720px);
}

</style>
