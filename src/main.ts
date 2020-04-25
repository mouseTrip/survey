/*
 * @Author: Terry Zhang
 * @Date: 2020-04-05 10:29:04
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-04-24 22:36:06
 * @Description: 入口文件
 */
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
  Switch,
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
  Switch,
].forEach(c => {
  Vue.use(c)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
