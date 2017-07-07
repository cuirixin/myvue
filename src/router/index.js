import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Echarts from '@/views/Echarts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {
        title:'首页'
      },
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        title:'测试'
      },
      component: Test
    },
    {
      path: '/echarts',
      name: 'echarts',
      meta: {
        title:'图表'
      },
      component: Echarts
    }
  ]
})
