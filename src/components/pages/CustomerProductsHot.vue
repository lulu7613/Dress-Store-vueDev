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
      console.log('人氣精選', response.data)
      if (response.data.success) {
        response.data.products.forEach((item) => {
          if (item.category === '人氣精選') {
            vm.propsData.push(item)
          }
        })
        vm.isLoading = false
      }
    })
  }
}
</script>
