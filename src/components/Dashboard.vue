<template>
  <div>
    <Alert />
    <Navbar/>
    <Banner v-if="this.$route.name !=='CustomerProduct'"/>
    <router-view></router-view>
    <Footer />
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
