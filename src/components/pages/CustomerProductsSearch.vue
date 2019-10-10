<template>
  <div>
    <Banner class="mb-4" />
    <div class="container-fluid">
      <loading :active.sync="isLoading"></loading>
      <div class="row mb-5">
        <div class="col-lg-3 mt-md-5">
          <CouponAd />
        </div>
        <div class="col-lg-9">
          <Breadcrumb class="mb-4" :propsData="Breadcrumb" />
          <ProductTemplate :propsData="propsData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../Banner'
import Breadcrumb from '../Breadcrumb'
import ProductTemplate from '../ProductTemplate'
import CouponAd from '../CouponAd'

export default {
  components: {
    Banner,
    Breadcrumb,
    ProductTemplate,
    CouponAd
  },

  data () {
    return {
      Breadcrumb: {
        category: ''
      },
      propsData: [],
      isLoading: false

    }
  },

  methods: {
    getSearch () {
      const vm = this
      vm.isLoading = true
      const keyword = vm.$route.params.keyword
      const api = `${process.env.API_PATH}/api/${process.env.API_ADMIN}/products/all`
      vm.$http.get(api).then((response) => {
        console.log(`搜尋頁面`, response.data)
        if (response.data.success) {
          response.data.products.forEach((item) => {
            if (item.title.match(keyword) || item.category.match(keyword)) {
              vm.Breadcrumb.category = `搜尋: ${keyword}`
              vm.propsData.push(item)
            }
          })
          vm.isLoading = false
          console.log(`關鍵字1: ${keyword}`, vm.propsData)
        }
      })
    }
  },

  created () {
    const vm = this
    vm.getSearch()
    vm.$bus.$on('search:array', (keyword) => {
      vm.propsData = []
      vm.isLoading = true
      const api = `${process.env.API_PATH}/api/${process.env.API_ADMIN}/products/all`
      vm.$http.get(api).then((response) => {
        console.log(`搜尋頁面`, response.data)
        if (response.data.success) {
          response.data.products.forEach((item) => {
            if (item.title.match(keyword) || item.category.match(keyword)) {
              vm.Breadcrumb.category = `搜尋: ${keyword}`
              vm.propsData.push(item)
            }
          })
          vm.isLoading = false
          console.log(`關鍵字2: ${keyword}`, vm.propsData)
        }
      })
    })
  }
}
</script>
