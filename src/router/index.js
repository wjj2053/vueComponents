/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Info from '@/components/Info'
import card from '@/components/card'
import record from '@/components/record'
import upload from '@/components/elupLoad'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 默认页面/即info页面 ，其他页面后边加后缀路径即可
      name: 'info',
      component: Info
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    }
  ]
})
