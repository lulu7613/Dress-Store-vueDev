<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Alert />
    <Navbar />
    <Banner v-if="this.$route.name ==='CustomerProducts'"/>
    <router-view :propsData="data"></router-view>
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
      data: [],

      isLoading: false
    }
  },

  methods: {
    // 取得商品列表 /api/:api_path/products?page=:page
    getProducts (page = 1) {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.API_PATH}/api/${process.env.API_ADMIN}/products/all`
      vm.$http.get(api).then((response) => {
        console.log('客戶端 getProducts()', response.data)
        vm.data = response.data
        vm.isLoading = false
      })
    }
  },

  created () {
    this.getProducts()
    console.log(this.$route)
  }
}
</script>
