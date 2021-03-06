// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'
import axios from 'axios'
import api, { domain } from './js/api.js'
import App from './App'//App后面不能带/，否则报错
import router from './router'
import './less/index.less'
import '../assets/css/style.css'

import Vuex from 'vuex'
import storeCart from './store/cart.js'

//使用插件
Vue.use(ElementUI)
Vue.use(Vuex)//
//配置默认域名，这样请求的时候就不用在url里每次手动加域名
axios.defaults.baseURL = domain;
axios.defaults.withCredentials = true;
//为了方便，把axios和api添加到Vue原型，将来vue组件就可以直接使用
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: new Vuex.Store(storeCart)
})


