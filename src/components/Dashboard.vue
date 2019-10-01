<template>
  <div>
    <Navbar/>
    <Banner/>
    商品列表、麵包屑分頁、分頁
    <Footer/>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'

export default {
  components: {
    Navbar,
    Banner,
    Footer
  }
}
</script>
