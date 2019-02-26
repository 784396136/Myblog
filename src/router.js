import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        // 首页面
        path: '/',
        name: '',
        component: () => import('./views/Index/Index.vue'),
        children: [
          {
            // 首页
            path: '',
            name: '',
            component: () => import('./views/Index/Home.vue'),
            children: [
              {
                // 测试
                path: 'test',
                name: 'test',
                component: () => import('./views/Index/Home/Test.vue')
              },
              {
                // 首页
                path: '',
                name: 'index',
                component: () => import('./views/Index/Home/Index.vue')
              },
              {
                // 内容页
                path: 'content',
                name: 'content',
                component: () => import('./views/Index/Home/Content.vue')
              },
              {
                // 搜索页
                path: 'search',
                name: 'search',
                component: () => import('./views/Index/Home/Search.vue')
              }
            ]
          }
        ]
    },
    {
      // 登录
      path: '/login',
      name: '',
      component: () => import('./views/Login.vue')
    }
  ]
})
