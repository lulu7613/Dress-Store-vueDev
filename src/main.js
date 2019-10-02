// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import axios from 'axios'
import vueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW' // 語言包

import currency from './filters/currency' // 千分位與$設定 filters.js
import './bus' // eventBus

Vue.use(vueAxios, axios)
Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh-TW', zhTW) // 啟用語言包

Vue.filter('currency', currency) // 啟用 filters.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
