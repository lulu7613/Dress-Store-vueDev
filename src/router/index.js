import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/pages/Login'

// 客戶端頁面
import Dashboard from '@/components/Dashboard'
import CustomerProducts from '@/components/pages/CustomerProducts'

// 管理者頁面
import DashboardRoot from '@/components/DashboardRoot'
import Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'customer_products'
    },
    { // 客戶端頁面
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'customer_products',
          name: 'CustomerProducts',
          component: CustomerProducts
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { // 管理者頁面
      path: '/admin',
      name: 'DashboardRoot',
      component: DashboardRoot,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true } // 導航守衛: 到達這頁面需要授權
        }
      ]
    }
  ]
})
