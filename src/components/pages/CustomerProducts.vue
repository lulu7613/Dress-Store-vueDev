<template>
  <div class="container-fulid mt-4">
    <div class="row mb-5">
      <div class="col-md-10">
        <div class="row pl-4">
          <div
            class="col-12 col-md-6 col-lg-3 mb-5"
            v-for="item in propsData.products"
            :key="item.id"
          >
            <div class="card">
              <img :src="item.imageUrl" class="card-img-top pt-3 px-3" :alt="item.title" />
              <div class="card-body">
                <span
                  class="badge badge-secondary float-right ml-2"
                  v-if="item.category === '主題商品'"
                >{{ item.category }}</span>
                <span
                  class="badge badge-warning float-right ml-2"
                  v-if="item.category === '人氣精選'"
                >{{ item.category }}</span>
                <span
                  class="badge badge-success float-right ml-2"
                  v-if="item.category === '清倉55折'"
                >{{ item.category }}</span>

                <h5 class="card-title">
                  <a href="#" class="text-dark">{{item.title}}</a>
                </h5>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div
                    class="h6 font-weight-bold"
                    v-if="!item.price"
                  >NT{{item.origin_price | currency}}</div>
                  <del v-if="item.price">
                    <small>原價 NT{{item.origin_price | currency}}</small>
                  </del>
                  <div
                    class="h6 text-danger font-weight-bold"
                    v-if="item.price"
                  >特價 NT{{item.price | currency}}</div>
                </div>
              </div>
              <div class="card-footer d-flex bg-white">
                <button type="button" class="btn btn-light btn-sm">查看更多</button>
                <button type="button" class="btn btn-primary btn-sm ml-auto">
                  <i class="fas fa-spinner fa-spin"></i>
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2">優惠券區</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['propsData']
}
</script>
