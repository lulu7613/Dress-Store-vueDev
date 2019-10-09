<template>
  <div>
    <Alert />
    <Navbar/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Footer from './Footer'
import Alert from './AlterMessage'

export default {
  components: {
    Navbar,
    Footer,
    Alert
  }
}
</script>
