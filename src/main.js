import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'  // 更换主题只需要require不同主题的css文件即可
import App from './App'
import { sync } from 'vuex-router-sync' // 实际就是把router状态存进store中 显示path name  query（查询）等路由信息 （并无大的卵用） 
import router from './router'  // 默认文件下的带index的
import store from './store'    // 默认文件下的带index的
import $ from 'jquery'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueECharts from 'vue-echarts'
var _=  require('lodash'); // 引用lodash 使用js封装库 让原生js使用更加便捷
Vue.use(require('vue-wechat-title'))   // document.title这个黑科技并不能改变某些ios的app的标题 所以用这个控件
// import vueDrapload from 'vue-drapload'
// Vue.use(vueDrapload,config)  // 使用vueDrapload 下拉加载插件 （待研究）
Vue.use(ElementUI)    // 使用 element-ui 组件
Vue.component('chart', VueECharts) // 使用 vue-echarts 组件
Vue.config.productionTip = false  // 其实这里是关闭了生产模式即部署到服务器后给出的提示
sync(store, router)
// 路由的时候使用 进度条
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach(transition => {
   $('.y100').hide();// 白屏动画
   NProgress.done();
});
/* eslint-disable no-new */
new Vue({
  // el: '#app',  // 挂载元素 可以这么写 也可以手动挂载 用$mount('#app')的方法  推荐第二种手动挂载DOM
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')


//this.$router拿到的是整个路由信息 拿单个的当前路由信息 自身带this.$route可以拿到 也可以用上面的vuex-router-sync方法从store拿到(这种方法不能用computed跟watch取 只能用this.$store.state.route取 原因不详)
// 2者的区别是vuex中的带from(即从哪个网页路由过来的 只是单独信息的话 自身的this.$route即可 但为了系统的完整性 还是配置上vuex-router-sync)

// 页面中路由的方法
// 1. import router from '../router'
//     router.push('/test')
// 2. this.$router.push('/test')
