<template>
  <div>
    <Alert/>
    <Navbar>
      <slot>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-2">
            <li class="nav-item active">
              <router-link class="nav-link" to="/admin/products">
                <i class="far fa-address-card"></i>
                產品列表
              </router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/admin/orders">
                <i class="far fa-calendar-alt"></i>
                訂單列表
              </router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/admin/coupons">
                <i class="fab fa-affiliatetheme"></i>
                優惠券
              </router-link>
            </li>
          </ul>
          <button class="btn btn-outline-light text-white btn-sm" type="button" @click="signout()">
            <i class="fas fa-user-alt"></i>
            登出
          </button>
        </div>
      </slot>
    </Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Alert from './AlterMessage'

export default {
  components: {
    Navbar,
    Alert
  },

  methods: {
    // 登出帳號
    signout () {
      const vm = this
      const api = `${process.env.API_PATH}/logout`
      this.$http.post(api).then((response) => {
        console.log('登出', response.data)
        if (response.data.success) {
          vm.$router.push('/')
        }
      })
    }
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
