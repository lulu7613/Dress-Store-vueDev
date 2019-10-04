<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Alert />
    <Navbar :propsData="data" @emit="changeName" />
    <Banner v-if="this.$route.name ==='CustomerProducts'"/>
    <router-view :propsData="filterData"></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import Alert from './AlterMessage'

export default {
  components: {
    Navbar,
    Banner,
    Footer,
    Alert
  },

  data () {
    return {
      name: '',
      data: [],
      filterData: [],

      isLoading: false
    }
  },

  methods: {
    // 取得商品列表 /api/:api_path/products?page=:page
    getProducts (name = 'all') {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.API_PATH}/api/${process.env.API_ADMIN}/products/all`
      vm.$http.get(api).then((response) => {
        console.log('客戶端 getProducts()', response.data)
        vm.data = response.data.products
        vm.filterData = response.data.products
      })
      vm.isLoading = false
    },

    // 更換 ProductTemplate 內容 (主題商品、人氣精選、清倉55折)
    changeName (name) {
      const vm = this
      vm.name = name
      vm.filterData = []
      if (name === 'all') {
        vm.filterData = vm.data
      } else {
        vm.data.forEach((item) => {
          if (item.category === vm.name) {
            vm.filterData.push(item)
          }
        })
      }
    }
  },

  created () {
    this.getProducts()
  }
}
</script>
