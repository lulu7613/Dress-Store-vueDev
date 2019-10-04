<template>
  <div class="position-relative">
    <carousel :per-page="1" :paginationEnabled="false" :mouse-drag="false" :autoplay="true" :loop="true">
      <slide>
          <img src="../assets/images/banner01.jpg" class="d-block w-100" alt="banner01.jpg" />
      </slide>
      <slide>
          <img src="../assets/images/banner02.png" class="d-block w-100" alt="banner02.jpg" />
      </slide>
      <slide>
          <img src="../assets/images/banner03.png" class="d-block w-100" alt="banner03.jpg" />
      </slide>
  </carousel>

    <!-- <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" style="max-height: 269px">
        <div class="carousel-item active">
          <img src="../assets/images/banner01.jpg" class="d-block w-100" alt="banner01.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h2 class="text-dark text-left font-weight-bolder">潮流之尚，無限可能</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/images/banner02.jpg" class="d-block w-100" alt="banner02.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <h2 class="font-weight-bolder">清倉 55 折，限量特賣</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/images/banner03.jpg" class="d-block w-100" alt="banner03.jpg" />
          <div class="carousel-caption d-none d-md-block">
            <div class="bg-lighter p-3">
              <h2 class="text-right font-weight-bolder">應有盡有，買到吃手手</h2>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },

  data () {
    return {

    }
  }
}
</script>

<style scoped>
.bg-lighter {
  background-color:rgba(0, 0, 0, 0.3)
}

.slider {
  position: relative;
}
</style>
