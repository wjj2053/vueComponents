// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 注册及引入需要的插件和UI及其样式
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 注册组件
import 'element-ui/lib/theme-chalk/index.css' // 注册组件
// import { Tabbar, TabbarItem } from 'vant'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vant)
// Vue.use(Tabbar)
// Vue.use(TabbarItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
