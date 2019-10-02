<template>
  <div>
    <div class="container col-12 col-md-8 col-xl-4 mt-3 mt-md-5 p-5 border-warning border">
      <h1 class="h3 text-center font-weight-bold member-title mb-4">管理員登入</h1>
      <div class="form-group">
        <label for="user-account">帳號</label>
        <input
          type="text"
          name="user-account"
          class="form-control"
          id="user-account"
          aria-describedby="emailHelp"
          placeholder="輸入 Email"
        />
      </div>
      <div class="form-group">
        <label for="user-password">密碼</label>
        <input
          type="password"
          name="user-password"
          class="form-control"
          id="user-password"
          placeholder="輸入密碼"
        />
        <small id="passwordHelpBlock" class="form-text text-danger"></small>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">記住我</label>
      </div>
      <button type="button" class="btn btn-warning btn-block">Sign in</button>
      <router-link class="btn btn-light btn-block" to="/">回購物網</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.border {
  border-top: 5px solid #fd7e14 !important;
}

.member-title {
  color: #333;
  letter-spacing: 0.2em;
}
</style>
