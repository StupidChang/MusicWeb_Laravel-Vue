<template>
  <router-view></router-view>
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
