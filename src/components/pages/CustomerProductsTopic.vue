<template>
  <div class="container-fulid">
    <loading :active.sync="isLoading"></loading>
    <Banner class="mb-4" />
    <div class="row mb-5 mr-0">
      <div class="col-md-9">
        <Breadcrumb class="pl-0 mb-4" :propsData="Breadcrumb"/>
        <ProductTemplate :propsData="propsData" />
      </div>
      <div class="col-md-3">
        <p>優惠券區</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../Banner'
import Breadcrumb from '../Breadcrumb'
import ProductTemplate from '../ProductTemplate'

export default {
  components: {
    Banner,
    Breadcrumb,
    ProductTemplate
  },

  data () {
    return {
      Breadcrumb: {
        category: '主題商品'
      },
      propsData: [],
      isLoading: false

    }
  },

  methods: {
    // 取得分類為 '主題商品' 的商品列表
    getProdects () {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.API_PATH}/api/${process.env.API_ADMIN}/products/all`
      vm.$http.get(api).then((response) => {
        console.log('主題商品', response.data)
        if (response.data.success) {
          response.data.products.forEach((item) => {
            if (item.category === '主題商品') {
              vm.propsData.push(item)
            }
          })
          vm.isLoading = false
        }
      })
    }
  },

  created () {
    this.getProdects()
  }
}
</script>
