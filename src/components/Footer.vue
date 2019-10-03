<template>
  <div>
    <footer class="container-fluid fixed-bottom" style="background-color: #f8f9fa">
      <div class="row">
        <div class="col-3">
          <button
            type="button"
            class="btn btn-cart"
            data-toggle="dropdown"
            aria-expanded="false"
            @click="getCart()"
          >
            <i class="fas fa-shopping-cart text-dark fa-2x"></i>
            <span class="badge badge-pill badge-danger bage-num">0</span>
          </button>

          <!-- 購物車 Dropdown -->
          <div class="dropdown-menu">
            <div class="px-4 py-3">
              <h6>購買物品</h6>
              <table class="table">
                <tbody>
                  <tr>
                    <td class="align-middle p-0">
                      <button type="button" class="btn btn-sm p-0 text-danger">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td class="align-middle">很好看襯衫</td>
                    <td class="align-middle">1件</td>
                    <td class="align-middle text-right">$600元</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="3" class="text-right">總計</td>
                    <td class="text-right">$1,200元</td>
                  </tr>
                </tfoot>
              </table>
              <button type="button" class="btn btn-primary btn-block">結帳去</button>
            </div>
          </div>
        </div>
        <div class="footer-text col-9 text-right align-self-center">
          <router-link to="login">管理者模式</router-link>
          <br />蔡昀芷製作 / 圖片素材均來自網路
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      carts: []

    }
  },

  methods: {
    // 取得購物車列表 /api/:api_path/cart
    getCart () {
      // 開關
      $('.dropdown-toggle').dropdown()
    }
  }
}
</script>

<style scoped>
.footer-text {
  font-size: 12px;
  letter-spacing: 0.2em;
  color: #333;
}

/* 帳戶及購物車 */
.btn-cart {
  position: relative;
}

.bage-num {
  position: absolute;
  top: 2px;
  right: 0;
}

.bage-text {
  position: absolute;
  top: -15px;
  left: 25%;
  font-size: 0.8rem;
}
</style>
