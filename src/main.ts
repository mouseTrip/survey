import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/iconfont/remixicon.css'

import {
  Icon,
  Image,
  NavBar,
  Tabbar,
  TabbarItem,
  Button,
  Cell,
  CellGroup,
  Popup,
  Field,
  Form,
} from 'vant'
;[
  Icon,
  NavBar,
  Image,
  Button,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Popup,
  Field,
  Form,
].forEach(c => {
  Vue.use(c)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
