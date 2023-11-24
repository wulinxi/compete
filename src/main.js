import Vue from 'vue'
// 添加全局樣式
import '@/styles/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI);

Vue.config.productionTip = false

//  創建一個 vue 項目實例
new Vue({
  // 引入路由配置
  router,
  store,
  // 渲染 App 組件
  render: h => h(App)
  // 挂載到 #app 節點
}).$mount('#app')
