import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/pages/Login'

// 客戶端頁面
import Dashboard from '@/components/Dashboard'
import CustomerProducts from '@/components/pages/CustomerProducts'
import CustomerProduct from '@/components/pages/CustomerProduct'
import CustomerProductsTopic from '@/components/pages/CustomerProductsTopic'
import CustomerProductsHot from '@/components/pages/CustomerProductsHot'
import CustomerProductsDiscount from '@/components/pages/CustomerProductsDiscount'
import CustomerProductsAll from '@/components/pages/CustomerProductsAll'
import CustomerOrders from '@/components/pages/CustomerOrders'

// 管理者頁面
import DashboardRoot from '@/components/DashboardRoot'
import Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '*',
    //   redirect: 'customer_products/'
    // },
    { // 客戶端頁面
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'customer_products', // 商品列表
          name: 'CustomerProducts',
          component: CustomerProducts,
          children: [
            {
              path: '', // 全部商品
              name: 'CustomerProductsAll',
              component: CustomerProductsAll
            },
            {
              path: '主題商品', // 主題商品
              name: 'CustomerProductsTopic',
              component: CustomerProductsTopic
            },
            {
              path: '人氣精選', // 人氣精選
              name: 'CustomerProductsHot',
              component: CustomerProductsHot
            },
            {
              path: '清倉55折', // 清倉55折
              name: 'CustomerProductsDiscount',
              component: CustomerProductsDiscount
            }
          ]
        },
        {
          path: 'customer_product/:id', // 單一商品細節
          name: 'CustomerProduct',
          component: CustomerProduct
        },
        {
          path: 'customer_orders', // 訂單頁面
          name: 'CustomerOrders',
          component: CustomerOrders
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
          path: 'products', // 產品管理
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true } // 導航守衛: 到達這頁面需要授權
        }
      ]
    }
  ]
})
