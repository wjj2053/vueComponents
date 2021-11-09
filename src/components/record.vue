<template>
  <div class="business-container">
    dhsfjkkjdskjfks
    <!-- 🚀 component 标签已经代表当前这个是一个组件 🚀 -->
    <!-- 🚀 只需要加载computed里计算出来的组件即可 🚀 -->
    <component v-bind:is="currentBizComponent"></component>
  </div>
</template>

<script>
import BusinessComponentA from './BusinessComponentA.vue'
import BusinessComponentB from './BusinessComponentB.vue'
import BusinessComponentC from './BusinessComponentC.vue'

export default {
  components: { BusinessComponentA, BusinessComponentB, BusinessComponentC },
  data: function () {
    return {
    }
  },
  mounted () {
    console.log('98909000')
  },
  computed: {
    // 业务类型
    condition: function () {
      // 当前页面数据 bizDoc
      return this.$store.state.bizDoc.type // should return A || B || C
    },
    // 🚀 当前应该加载的组件
    currentBizComponent: function () {
      return 'BusinessComponent' + this.condition
    }
  }
}
</script>
<style>
.business-container {
  font-size: 20px;
  padding: 50px;
  height: 1000px;
  background-color: rgb(92, 216, 61);
  text-align: center;
}
</style>
