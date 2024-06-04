<template>
  <mainheader></mainheader>
    <StarbackCanvas>
      <div class="container-fuild .bg-secondary.bg-gradient bg-opacity-10">
        <TextBox4></TextBox4>
        <div class="row justify-content-center py-5">
          <div class="col-10">
            <TextBox3></TextBox3>
          </div>
        </div>
      </div>

    </StarbackCanvas>
  <mainfooter></mainfooter>
</template>

<script>
import TextBox3 from './components/TextBox3.vue'
import StarbackCanvas from './components/StarbackCanvas.vue'
import mainheader from './components/header.vue'
import mainfooter from './components/footer.vue'
import TextBox4 from './components/TextBox4.vue';

export default {
  name: 'Project-1',
  components: {
    StarbackCanvas,
    TextBox3,
    mainfooter,
    mainheader,
    TextBox4
  }
}
</script>

<style>

</style>
