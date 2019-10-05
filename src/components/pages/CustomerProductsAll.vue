<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <ProductTemplate :propsData="propsData" />
  </div>
</template>

<script>
import ProductTemplate from '../ProductTemplate'

export default {
  components: {
    ProductTemplate
  },

  props: ['props'],

  data () {
    return {
      propsData: [],
      isLoading: false
    }
  },

  created () {
    const vm = this
    vm.isLoading = true
    const api = `${process.env.API_PATH}/api/${process.env.API_ADMIN}/products/all`
    vm.$http.get(api).then((response) => {
      console.log('全部商品', response.data)
      vm.$emit('emit', '全部商品')
      if (response.data.success) {
        vm.propsData = response.data.products
        vm.isLoading = false
      }
    })
  }
}
</script>
