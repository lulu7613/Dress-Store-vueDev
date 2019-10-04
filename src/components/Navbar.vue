<template>
  <div>
    <header class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-dark">
        <router-link class="navbar-brand font-weight-bolder logo-name" to="/customer_products/all" style="border:0">翠絲服飾</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <slot>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link class="nav-link font-weight-bold" to="/main_products">主題商品</router-link>
              </li>
              <li class="nav-item active">
                <a class="nav-link font-weight-bold" href="#">
                  人氣精選
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link font-weight-bold" href="#">
                  清倉55折
                  <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0" name="search">
              <input
                class="form-control mr-sm-2"
                id="search"
                type="text"
                placeholder="輸入產品關鍵字"
                aria-label="Search"
              />
              <button type="button" class="btn btn-success my-2 my-sm-0" id="btn-search">搜尋</button>
            </form>
          </div>
        </slot>
      </nav>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style>
header {
  background-image: url(../assets/images/header4.jpg);
}

.logo-name {
  font-size: 2rem;
}
</style>
