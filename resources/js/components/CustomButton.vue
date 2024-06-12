<template>
    <router-link class="router-link rounded-2 btn" :to="to" @click="onClick">{{ Text }}</router-link>
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
  methods: {
    onClick() {
      this.$emit('click');  // Emit an event when the link is clicked //<span>{{ Text }}</span>
    }
  }
}
</script>


<style scoped>
.btn {
    display: inline-block; /* Ensures the router-link behaves like a button */
    position: relative;
    min-width: 200px;
    border: 3px solid #a596ff;
    border-radius: 5px;
    background: transparent;
    color: #d3b7f7; /* 初始文字顏色 */
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: border 0.5s, color 0.5s ease-out; /* Consolidated transitions */
    overflow: hidden;
    padding: 10px 20px;
    z-index: 1000;
    pointer-events: auto;
}

.btn::before,
.btn::after {
    content: '';
    position: absolute;
    top: -2.5em;;
    left: -5.5em; /* Adjusted for the changed structure */
    width: 22em;
    height: 22em;
    border-radius: 50%;
    display: block;
    transition: box-shadow 0.5s ease-out;
    z-index: -1; /* Under the text */
}

.btn::after {
    transition-delay: 0.25s;
}

.btn:hover {
    color: #ffffff; /* 懸停時的文字顏色 */
    border-color: #8460af;
}

.btn:hover::before {
    box-shadow: inset 0 0 0 10vh #b657e5;
    transition-delay: 0.05s;
}

.btn:hover::after {
    box-shadow: inset 0 0 0 10vh #8460af;
    transition-delay: 0.5s;
}

.btn span {
    position: relative;
    z-index: 1;
    color: inherit; /* 確保文字顏色繼承父元素 */
}

</style>
