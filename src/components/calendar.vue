<template>
  <!-- <v-touch @swipeleft="swiperleft" @swiperight="swiperright"> -->
    <div class="calendarBox">
      <div class="dateBox">
        <div
          :class="nowDay == item.id ? 'dateItem dateItem-background' : item.id == today ? 'dateItem dateItem-border' : 'dateItem'"
          v-for="(item, index) in dateList"
          :key="index"
          :data-id="item.id"
          @click="setDate(item.id)"
        >
          <div :class="item.type != 'now' ? 'dateItemNum dateItemNumGray' : 'dateItemNum'">{{ item.id == today ? '今' : item.date }}</div>
          <!-- <div class="dateItemTag"></div> -->
        </div>
      </div>
    </div>
  <!-- </v-touch> -->
</template>

<script>
export default {
  props: {
    date: {
      default: {} //
    }
  },
  data () {
    return {
      // dateList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
      dateList: [],
      years: 2021,
      month: 12,
      nowDay: ''
    }
  },
  watch: {
    date: {
      handler (e) {
        // console.log(e);
        this.date = e
        this.today = this.date.years + this.isTen(this.date.month) + this.isTen(this.date.day)
        // console.log(this.today);
        this.getDays(e.years, e.month)
      },
      immediate: true
    }
  },
  mounted () {
    console.log('000')
  },
  methods: {
    // swiperleft: function() {
    //   console.log('左划');
    //   let date = {}
    //   date.years = this.date.month + 1 > 12 ? this.date.years+1:this.date.years
    //   date.month = this.date.month + 1 > 12 ? 1:this.date.month
    // },
    // swiperright: function() {
    //   console.log('右滑');
    // },
    getDays (years, month) {
      let date = new Date(years, month, 0)
      let { lastYears, lastMonth, nextYears, nextMonth } = this.getYearsMonth(years, month)
      let days = date.getDate()
      let lastDays = new Date(lastYears, lastMonth, 0).getDate()
      // let weekDays = ['周1', '周2', '周3', '周4', '周5', '周6', '周日']
      let week = new Date(month + '/' + '01' + '/' + years).getDay() - 1
      week = week < 0 ? 6 : week
      // console.log(month + '/' + '01' + '/' + years, days, week, weekDays[week])
      let line = Math.ceil((days + week) / 7)
      let dateL = []
      for (let i = 0; i < line * 7; i++) {
        i < week
          ? dateL.push({
            type: 'last',
            date: this.isTen(lastDays + (i - week + 1)),
            id: this.isTen(lastYears) + this.isTen(lastMonth) + this.isTen(lastDays + (i - week + 1))
          })
          : i - week + 1 > days
            ? dateL.push({
              type: 'next',
              date: this.isTen(i - days - week + 1),
              id: this.isTen(nextYears) + this.isTen(nextMonth) + this.isTen(i - days - week + 1)
            })
            : dateL.push({ type: 'now', date: this.isTen(i - week + 1), id: years + this.isTen(month) + this.isTen(i - week + 1) })
        // if(i < week || i-week >= days){
        //   dateL.push(' ')
        // }else{
        //   dateL.push(i-week+1)
        // }
      }
      // console.log(dateL);
      this.dateList = dateL
      // console.log(this.dateList)
    },
    getYearsMonth (years, month) {
      return {
        lastYears: month - 1 === 0 ? years - 1 : years,
        lastMonth: month - 1 === 0 ? 12 : month - 1,
        nextYears: month + 1 > 12 ? years + 1 : years,
        nextMonth: month + 1 > 12 ? 1 : month + 1
      }
    },
    isTen (num) {
      return num < 10 ? '0' + num : num + ''
    },
    intiDate (data) {
      return data.substring(0, 4) + '-' + data.substring(4, 6) + '-' + data.substring(6, 8)
    },
    setDate (date) {
      this.nowDay = date
      // console.log(this.nowDay)
      // console.log(this.intiDate(this.nowDay))
      this.$emit('getNowDate', this.intiDate(this.nowDay))
    }
  }
}
</script>
<style scoped="">
.calendarBox {
  background: #ffffff;
  padding-bottom: 10px;
}

.dateBox {
  /* width: 345px; */
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 14px;
  margin-right: 14px;
  justify-content: space-around;
  /* align-items:center; */
   /* align-content:center; */
}
.dateItem {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 20px;
  /* margin-bottom: 9px; */
  /* // background: #13c26b; */
  /* // border: 1px solid #DDDCDC; */
}
.dateItem-border {
  border: 1px solid #dddcdc;
}
.dateItem-background {
  background: #13c26b;
}
.dateItem:nth-of-type(7n + 1) {
  margin-left: 0;
}
.dateItem-background .dateItemNum {
  color: #fff;
}
.dateItemNum {
  width: 100%;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #1d2c51;
  line-height: 20px;
  text-align: center;
  padding-top: 4px;
}
.dateItemNumGray {
  color: #c6cad3;
}
.dateItemTag {
  width: 4px;
  height: 4px;
  background: #ff4b49;
  border-radius: 50%;
  margin: 4px auto 0;
}
</style>
