<template>
  <main class="container my-5 main">
    <!-- product 主要商品展示 -->
    <div class="row border-bottom" id="product-main">
      <div class="col-lg-6 text-center product-img mb-5">
        <img src="" alt="1101al.jpg" class="img-fluid" />
      </div>
      <div class="col-lg-5 mb-5" id="product-content-main">
        <div class="d-flex align-items-baseline mb-1">
          <h1 class="h3 font-weight-bolder mr-auto">航海王人物</h1>
          <span class="badge badge-secondary mr-2">主題商品</span>
        </div>
        <p>用我送你的玫瑰，緊緊地綑綁住你的心，希望你不會窒息，因為我愛你。</p>
        <div class="d-flex justify-content-end align-items-end">
          <del>
            <div class="h5">原價 NT$999</div>
          </del>
          <div class="h3 ml-auto text-danger">
            <small class="font-weight-bold">特價 NT$</small>
            <strong>599</strong>
          </div>
          <!-- <div class="h3 ml-auto text-danger">
            <small class="font-weight-bold">售價 $NT</small>
            <strong>599</strong>
          </div>-->
        </div>

        <hr />

        <span class="text-muted mr-1">尺寸 :</span>
        <div class="btn-group btn-group-toggle">
          <label class="btn btn-outline-secondary" :class="{'active': checkbox === 'S'}">
            <input type="radio" name="buy-size" value="S" v-model="checkbox" /> S
          </label>
          <label class="btn btn-outline-secondary" :class="{'active': checkbox === 'M'}">
            <input type="radio" name="buy-size" value="M" v-model="checkbox" /> M
          </label>
          <label class="btn btn-outline-secondary" :class="{'active': checkbox === 'L'}">
            <input type="radio" name="buy-size" value="L" v-model="checkbox" /> L
          </label>
          <label class="btn btn-outline-secondary" :class="{'active': checkbox === 'XL'}">
            <input type="radio" name="buy-size" value="XL" v-model="checkbox" /> XL
          </label>
        </div>

        <div class="input-group mt-3">
          <select class="form-control mr-3">
            <option :value="num" v-for="num in 10" :key="num">選購 {{num}} 件</option>
          </select>
          <button class="btn btn-primary">加入購物車</button>
        </div>
      </div>
    </div>

    <!-- 同類型產品 -->
    <h6 class="my-3 pl-4">其他同款商品</h6>
    <div class="row" id="product-content-other"></div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      checkbox: ''
    }
  }
}
</script>
