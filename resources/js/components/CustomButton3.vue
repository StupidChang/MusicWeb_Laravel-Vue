<template>
    <div class="Text justify-content-start">
      <div class="row justify-content-start">
        <div class="col-1"></div>
        <h1 class="col-4 Notofont">
          委託流程 │
          <a href="#campaign" class="button button--bubble" @mouseover="onHover" @mouseleave="onLeave">{{ text }}</a>

          <span class="button--bubble__effect-container">
            <span class="circle top-left"></span>
            <span class="circle top-left"></span>
            <span class="circle top-left"></span>
            <span class="button effect-button"></span>
            <span class="circle bottom-right"></span>
            <span class="circle bottom-right"></span>
            <span class="circle bottom-right"></span>
          </span>
        </h1>
      </div>
    </div>
  </template>
  
  
  <script>
    export default {
        name: 'CustomButton',
        props: {
            text: String,
            to: String,
        },
        mounted() {
            this.animateCircles();
        },
        methods: {
            animateCircles() {
            const circlesTopLeft = this.$el.querySelectorAll('.circle.top-left');
            const circlesBottomRight = this.$el.querySelectorAll('.circle.bottom-right');
            const buttonEffect = this.$el.querySelector('.button.effect-button');

            // 假设您已经在项目中包含了 GSAP 库
            const tl = this.$gsap.timeline({ repeat: -1, yoyo: true });
            tl.to(circlesTopLeft, { duration: 1, x: -25, y: -25, scale: 0.5, stagger: 0.2 })
                .to(circlesBottomRight, { duration: 1, x: 25, y: 25, scale: 0.5, stagger: 0.2 });
            
            // 增加的动画效果，例如使 effect-button 在 hover 时变化
            this.$gsap.to(buttonEffect, { duration: 0.5, scale: 1.1, ease: "power1.inOut" });
            },
            onHover() {
                this.$gsap.to(this.$el.querySelector('.button.effect-button'), { scale: 1.2, duration: 0.3 });
            },
            onLeave() {
                this.$gsap.to(this.$el.querySelector('.button.effect-button'), { scale: 1, duration: 0.3 });
            }
        }
    }
</script>

<style scoped lang="scss">
    $dark-blue: #222;
$green: #90feb5;
$action-color: $green;

* {
  box-sizing: border-box;
}

div{
  display: block;
  height: 100%;
  animation: hue-rotate 10s linear infinite;
}

.button {
  -webkit-font-smoothing: antialiased;
  background-color: $dark-blue;
  border: none;
  color: #fff;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 100;
  text-decoration: none;
  user-select: none;
  letter-spacing: 1px;
  color: white;
  padding: 20px 40px;
  text-transform: uppercase;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: $action-color;
    color: #fff;
  }
  
  &:active {
    transform: scale(0.95);
  }

  &--bubble {
    position: relative;
    z-index: 2;
    color: white;
    background: none;

    &:hover {
      background: none;
    }

    &:hover + .button--bubble__effect-container .circle {
      background: darken($action-color, 15%);
    }

    &:hover + .button--bubble__effect-container .button {
      background: darken($action-color, 15%);
    }

    &:active + .button--bubble__effect-container {
      transform: scale(0.95);
    }

    &__container {
      position: relative;
      display: inline-block;

      .effect-button {
        position: absolute;
        width: 50%;
        height: 25%;
        top: 50%;
        left: 25%;
        z-index: 1;
        transform: translateY(-50%);
        background: $dark-blue;
        transition: background 0.1s ease-out;
      }
    }
  }
}

.button--bubble__effect-container {
  position: absolute;
  display: block;
  width: 200%;
  height: 400%;
  top: -150%;
  left: -50%;
  -webkit-filter: url("#goo");
  filter: url("#goo");
  transition: all 0.1s ease-out;
  pointer-events: none;

  .circle {
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background: $dark-blue;
    transition: background 0.1s ease-out;

    &.top-left {
        top: 40%;
        left: 27%;
    }

    &.bottom-right {
        bottom: 40%;
        right: 27%;
    }
  }
}

.goo {
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
}

html, body {
  width: 100%;
  height: 100%;
  text-align: center;
}

.button--bubble__container {
  top: 50%;
  margin-top: -25px;
}

@keyframes hue-rotate {
      from {
        -webkit-filter: hue-rotate(0);
        -moz-filter: hue-rotate(0);
        -ms-filter: hue-rotate(0);
        filter: hue-rotate(0);
      }
      to {
        -webkit-filter: hue-rotate(360deg);
        -moz-filter: hue-rotate(360deg);
        -ms-filter: hue-rotate(360deg);
        filter: hue-rotate(360deg);
      }
}
</style>
