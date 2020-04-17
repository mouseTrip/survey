import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/remixicon.css'

import { Icon, NavBar, Tabbar, TabbarItem } from 'vant'
;[Icon, NavBar, Tabbar, TabbarItem].forEach(c => {
  Vue.use(c)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
