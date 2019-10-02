<template>
  <div>
    <header class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-dark">
        <a class="navbar-brand font-weight-bolder logo-name" href="index.html">翠絲服飾</a>
        <button
          class="navbar-toggler bg-info"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown active">
              <a
                class="font-weight-bold nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >主題館</a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <a class="dropdown-item" href="#">全部</a>
                <a class="dropdown-item" href="#">文字</a>
                <a class="dropdown-item" href="#">圖騰</a>
                <a class="dropdown-item" href="#">搞怪</a>
                <a class="dropdown-item" href="#">人物</a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link font-weight-bold" href="#">
                人氣精選
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link font-weight-bold" href="#">
                清倉特賣
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
  background-image:url(../assets/images/header4.jpg);
}

.logo-name {
  font-size: 2.0rem;
}

</style>
