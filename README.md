# y
此项目为自己自学项目
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
# all module 
1.移动端底部导航自定义图片(img + title)的2种方式
card.vue---三元运算判断  info.vue--图片定义数组进行循环  demo.html--使用getAttribute进行切换菜单展示不同的内容
2.移动端页面显示不显示v-if v-else
3.移动端底部导航一直存在，点击切换上方展示不同的内容
info.vue--根据业务条件动态去匹配应该加载的业务组件
record.vue采用绑定is组件方法--有问题--还需要研究
4.关于使用el-upLoad中的一些问题解析 -elupLoad.vue
https://juejin.cn/post/6958762366561419277
5.关于vue中methods几种事件写法 第一种可以直接return出结果 第二种只能进行渲染判断获取值
 1）add: function(val) {
     if () {
         return val
     }
 }
 2) add (val) {
     if() {

     }
 }
6.业务场景实现

```