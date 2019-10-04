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
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css' // vue-loading-overlay CSS 套件

import currency from './filters/currency' // 千分位與$設定 filters.js
import './bus' // eventBus

Vue.use(vueAxios, axios)
Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh-TW', zhTW) // 啟用語言包
Vue.component('Loading', Loading) // 執行 vue-loading-overlay 套件，使用 Vue.use(Loading) 也可

Vue.filter('currency', currency) // 啟用 filters.js

Vue.config.productionTip = false
axios.defaults.withCredentials = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 導航守衛 (切換頁面時觸發: 判斷是否需要驗證，才能跳轉頁面，常用在檢查用戶是否仍在登入狀態)
router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next)
  if (to.meta.requiresAuth) {
    // 檢查用戶是否仍持續登入 /api/user/check
    const api = `${process.env.API_PATH}/api/user/check`
    axios.post(api).then((response) => {
      console.log('檢查登入狀態', response.data)
      if (response.data.success) {
        next()
      } else {
        next('/login') // 留在 login 頁面
      }
    })
  } else {
    next()
  }
})
