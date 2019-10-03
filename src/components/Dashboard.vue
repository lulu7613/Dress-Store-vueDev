<template>
  <div>
    <Alert/>
    <Navbar/>
    <Banner/>
    未完成: 麵包屑分頁元件、商品列表卡片元件、分頁元件
    <Footer/>
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
  }
}
</script>
