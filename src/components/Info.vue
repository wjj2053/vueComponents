<template>
 <!-- 属性为 vantui 定义的属性  -->
 <!-- safe-area-inset-bottom 开启苹果手机底部适配 -->
 <!-- placeholder tabbar固定在底部时，生成一个等高的占位元素 -->
 <!-- active-color 选中时文字颜色 -->
 <!-- fixed 固定在底部 -->
 <!-- 切换底部导航展示不同的页面内容--根据条件动态显示不同组件内容 -->
  <div>
    <business-component-a v-if="condtion == 'A'"></business-component-a>
    <business-component-b v-if="condtion == 'B'"></business-component-b>
    <business-component-c v-if="condtion == 'C'"></business-component-c>
    <business-component-d v-if="condtion == 'D'"></business-component-d>
    <van-tabbar
      v-model="active"
      :safe-area-inset-bottom="true"
      :placeholder="true"
      active-color="#13C26B"
      fixed
      inactive-color="#000"
      @change="onChange"
    >
    <!-- to 点击后跳转的目标路由对象 -->
    <!-- replace 在跳转时替换当前页面历史 -->
      <van-tabbar-item
        v-for="(item, index) in iconList"
        :key="index"
        replace
      >
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import BusinessComponentA from './BusinessComponentA.vue' // 引入外部组件
import BusinessComponentB from './BusinessComponentB.vue' // 引入
import BusinessComponentC from '@/components/BusinessComponentC'
import BusinessComponentD from '@/components/BusinessComponentD'
export default {
  components: {BusinessComponentA, BusinessComponentB, BusinessComponentC, BusinessComponentD}, // 注册组件
  data () {
    return {
      active: 0, // 当前选中标签的名称或索引值
      condtion: 'A', // 设置初始化值数
      iconList: [
        {
          // 图标文字
          title: 'A',
          // 该处图片为本地图片路径
          // 未选中状态
          inactive: require('../../static/img/punch.png'),
          // 选中状态
          active: require('../../static/img/punchActive.png')
        },
        {
          title: 'B',
          inactive: require('../../static/img/record.png'),
          // 选中状态
          active: require('../../static/img/recordActive.png')
        },
        {
          title: 'C',
          inactive: require('../../static/img/punch.png'),
          // 选中状态
          active: require('../../static/img/punchActive.png')
        },
        {
          title: 'D',
          inactive: require('../../static/img/record.png'),
          // 选中状态
          active: require('../../static/img/recordActive.png')
        }
      ]
    }
  },
  mounted () {
    /* 判断当前页面是哪个页面,解决刷新时,tab默认为 1 的bug */
    // const CURRENTHREF = window.location.hash;
    // if (CURRENTHREF.includes("#/punchClick")) {
    //   this.active = 0;
    // } else if (CURRENTHREF.includes("#/record")) {
    //   this.active = 1;
    // }
  },
  methods: {
    // Tabbar Events onChange为切换标签时触发的函数事件
    onChange () {
      if (this.active === 0) {
        this.condtion = 'A'
      } else if (this.active === 1) {
        this.condtion = 'B'
      } else if (this.active === 2) {
        this.condtion = 'C'
      } else {
        this.condtion = 'D'
      }
    }
  }
}
</script>
