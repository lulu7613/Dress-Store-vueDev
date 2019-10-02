<template>
  <div>
    <Navbar/>
    <Sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style>

body {
  font-size: 0.875rem;
}

/* .feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
} */

/*
 * Content
 */

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}
</style>
