<template>
  <div class="container-fulid">
    <div class="row mb-5">
      <div class="col-md-10">
        <Breadcrumb class="pl-0 mb-4" :propsData="nameData"/>
        <router-view @emit="getPageName"></router-view>
      </div>
      <div class="col-md-2">
        <p>優惠券區</p>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../Breadcrumb'

export default {
  components: {
    Breadcrumb
  },

  data () {
    return {
      nameData: {
        category: ''
      }
    }
  },

  methods: {
    getPageName (name) {
      this.nameData.category = name
    }
  }
}
</script>
