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
