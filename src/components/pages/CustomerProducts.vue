<template>
  <div class="container-fulid mt-4">
    <div class="row mb-5">
      <div class="col-md-10">
        <router-view></router-view>
      </div>
      <div class="col-md-2">
        <p>優惠券區</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTemplate from '../ProductTemplate'

export default {
  components: {
    ProductTemplate
  }
}
</script>
