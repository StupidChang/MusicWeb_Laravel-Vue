<template>
  <mainheader></mainheader>
    <StarbackCanvas>
      <div class="container .bg-secondary.bg-gradient bg-opacity-10">
        <div class="row py-3">
          <div class="col-12">
            <TextBox Title="最新消息" secondTitle="" Myli="目前已經開放委託搂，如果有任何問題歡迎透過Email詢問~"></TextBox>
          </div>
        </div>

        <div class="row pb-3">
          <div class="col-12">
            <TextBox2></TextBox2>
          </div>
        </div>

        <div class="row pb-3">
            <h1 class="col-12 d-flex justify-content-center Notofont fadein">參考作品 </h1>
            <div class="col-12 d-flex justify-content-center Notofont pb-2 fadein">│</div>
            <div class="col-12 d-flex justify-content-center fadeleftin">
                <swiper></swiper>
            </div>
        </div>
      </div>

      <Card></Card>
    </StarbackCanvas>
  <mainfooter></mainfooter>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Swiper from './components/Swiper.vue'
import Card from './components/card-1.vue'
import TextBox from './components/TextBox.vue'
import TextBox2 from './components/TextBox2.vue'
import StarbackCanvas from './components/StarbackCanvas.vue'
import mainheader from './components/header.vue'
import mainfooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Card,
    Swiper,
    TextBox,
    TextBox2,
    StarbackCanvas,
    mainheader,
    mainfooter
  }
}

</script>

<style>
    .Notofont {
        font-family: "Noto Sans TC", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        color: rgba(255, 255, 255, 0.829) !important;
    }

    .fadein{
        animation: fade 4s ease-in-out 0s 1 ;
    }

    .fadeleftin{
        animation: leftIn 4s ease-in-out 0s 1 ;
    }

    @keyframes fade {
        from {
        opacity: 0;
        }
        to {
        opacity: 1;
        }
    }

    @keyframes leftIn {
        from {
            transform: translate3d(-5%, 0, 0);
            opacity: 0;
        }
        to {
            transform: none;
            opacity: 1;
        }
    }
</style>
