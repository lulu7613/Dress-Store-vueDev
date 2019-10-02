<template>
  <div>
    <Navbar/>
    <Banner/>
    未完成: 麵包屑分頁元件、商品列表卡片元件、分頁元件、管理者模式
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
