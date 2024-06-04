<template>
    <div class="shape-ex1">{{ Text }}</div>
</template>
  
<script>
export default {
  name: 'CustomButton',
  props: {
    Text: String,
    to: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
  .shape-ex1{
    width: 150px;
    height: 40px;
    display: block;
    text-align: center;
    cursor: pointer;
    line-height: 40px;
    color: #000;
    background-color: transparent;
    border: 1px solid #000;
    transition: all .3s linear;
}
.shape-ex1:hover{
    background-color: #000;
    color: #fff;
}

</style>
