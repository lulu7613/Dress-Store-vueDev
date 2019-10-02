import Vue from 'vue'

Vue.prototype.$bus = new Vue()

// AlterMessage
// this.$bus.$emit('messsage:push', message, status)
// message(string): 訊息內容
// status(string): bootstrap Alert 樣式
// 元件: AlertMessage.vue
