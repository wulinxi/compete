import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home/HomeView.vue'
import About from '../views/Home/AboutView.vue'
import Page404 from '../views/404.vue'

Vue.use(VueRouter)

// 與 if-elseif 功能類似
const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    // 加載 layout 組件
    component: Layout,
    // layout 組件裏面的路由
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'about',
        component: About,
      },
    ],
  },
  {
    path: '*',
    component: Page404,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
