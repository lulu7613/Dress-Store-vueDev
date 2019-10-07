<template>
  <div class="container-fulid">
    <loading :active.sync="isLoading"></loading>
    <div class="row mb-5">
      <div class="col-md-10">
        <Breadcrumb class="pl-0 mb-4" :propsData="Breadcrumb"/>
        <ProductTemplate :propsData="propsData" />
      </div>
      <div class="col-md-2">
        <p>優惠券區</p>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../Breadcrumb'
import ProductTemplate from '../ProductTemplate'

export default {
  components: {
    Breadcrumb,
    ProductTemplate
  },

  data () {
    return {
      Breadcrumb: {
        category: '全部商品'
      },
      propsData: [],
      isLoading: false

    }
  },

  methods: {
    // 取得分類為 '全部商品' 的商品列表
    getProdects () {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.API_PATH}/api/${process.env.API_ADMIN}/products/all`
      vm.$http.get(api).then((response) => {
        console.log('全部商品', response.data)
        if (response.data.success) {
          vm.propsData = response.data.products
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
