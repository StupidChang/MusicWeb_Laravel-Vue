<template>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    >
        <router-view></router-view>
    </transition>
</template>

<script>
export default {
  name: 'Main',
  components: {

  },
  methods: {
    loadHome: function(){
      this.$router.push('/Home')
    }
  },
  mounted: function(){
    this.loadHome()
  }
}
</script>

<style>
    /* 定義過渡效果樣式 */
    .fade-enter-active, .fade-leave-active {
        transition: opacity 3s;
    }
    .fade-enter-from, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0;
    }
    .fade-enter-to, .fade-leave-from /* .fade-leave-active in <2.1.8 */ {
        opacity: 1;
    }
</style>

