import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home/HomeView.vue'
import About from '../views/Home/AboutView.vue'
import Page404 from '../views/404.vue'
import Fixed from '../views/Fixed-carbon-emissions.vue'
import Login from '@/views/Login.vue'
Vue.use(VueRouter)

// 與 if-elseif 功能類似
const routes = [
  {
    name: 'layout',
    // if 链接上匹配到 '/' 路径
    path: '/',
    // 则 <router-view> 显示为 Layout 組件
    component: Layout,
    // 重定向，链接变更为 '/home'
    redirect: '/login',
    // Layout 組件裏面的路由
    children: [
      {
        // if 匹配到 '/home' 路径
        path: 'home',
        // 则 Layout 组件里的 <router-view> 显示为 Home 組件
        component: Home,
      },
      {
        // else-if 匹配到 '/about' 路径
        path: 'about',
        // 则 Layout 组件里的 <router-view> 显示为 About 組件
        component: About,
      },
      {
        path: '/fix',
        component: Fixed,
      },
    ],

  },
  {
    path: "/login",
    component: Login,
  },
  {
    // else 匹配所有路径
    path: '*',
    component: Page404,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
