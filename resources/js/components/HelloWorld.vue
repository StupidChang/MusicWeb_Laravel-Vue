<template>
  <div class="body">
    <div class="app-container">
      <swiper
        :navigation="true"
        :modules="modules"
        :pagination="{ clickable: true }"
        :slides-per-view="2"
        :space-between="10"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        @slideChange="onSlideChange"
        class="mySwiper"
      >
        <swiper-slide><img src="../assets/1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/2.jpeg" alt=""></swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
    <img src="../assets/1.jpg" alt="">
  </div>
</template>

<script>
//import MyBlock from './MyBlock.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'HelloWorld',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      images: [
        '../assets/1.jpg',
        '../assets/2.jpeg',
        '../assets/3.jpg'
      ],
      swiperOptions: {
        direction: "horizontal",
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 1500, // 自动播放的时长
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  }
}
</script>

<style scoped>
.body {
  background-color: black;
}
</style>


