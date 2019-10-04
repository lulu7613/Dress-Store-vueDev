<template>
  <div class="container mt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-transparent h5">
        <li class="breadcrumb-item">
          <router-link to="/customer_prosucts/all">首頁</router-link>
          </li>
        <li class="breadcrumb-item">
          <router-link to="">{{ propsData.category }}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ propsData.title }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['propsData']
}
</script>
