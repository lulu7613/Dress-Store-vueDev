import Vue from 'vue'
import Router from 'vue-router'

// 客戶端頁面
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'

// 管理者頁面
import DashboardRoot from '@/components/DashboardRoot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    { // 客戶端頁面
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { // 管理者頁面
      path: '/admin',
      name: 'DashboardRoot',
      component: DashboardRoot
    }
  ]
})
