<template>
    <div class="polygon-image-container">
        <div class="image-wrapper">
        <video ref="videoPlayer" class="video-content" autoplay loop muted :style="{clipPath: `url(#roundedPolygon)`}">
            <source src="../../assets/FDownloader.net-366239529314160-(1080p).mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <svg class="svg-overlay" xmlns="">
            <defs>
            <clipPath id="roundedPolygon">
                <path :d="pathData" />
            </clipPath>
            </defs>
        </svg>
        </div>
        <div class="text-container">
            <p class="Text">準備好製作屬於自己的音樂?</p>

            <router-link class="router-link " to="/Project">
                現在委託
                <span class="arrow">📜</span>
            </router-link>

        </div>
        <aboutme class=""></aboutme>
    </div>
</template>

<script>
import aboutme from './aboutme.vue';

export default {
  name: 'PolygonImage',
  components:{
    aboutme
  },
  computed: {
    pathData() {
      return `M -1 68 C 0 20 20 0 49 0 L 991 0 C 1055 2 1069 27 1070 71 C 1072 129 1100 156 1167 158 C 1219 159 1236 193 1236 227 V 568 C 1237 709 1123 620 1066 710 L 348 708 C 316 708 301 697 300 679 C 300 545 241 538 47 535 C 20 536 -1 515 0 487 z`;
    }
  }
}
</script>

<style scoped>
.me {
  position: absolute;
  top: 2vh; /* 使用相對單位 */
  left: 1.5vw; /* 使用相對單位 */
  z-index: 100; /* 確保卡片顯示在前方 */
  width: 18vw; /* 使用相對單位 */
  animation: leftIn 2s ease-in-out 0s 1;
}

.polygon-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

}

.image-wrapper {
  position: relative;
  display: inline-block;
  width: 100%; /* 使用百分比 */
  height: 100%; /* 使用百分比 */
}

.video-content {
  display: block;
  width: 100%;
  height: auto;
  clip-path: url(#roundedPolygon); /* 使用 SVG 定義的 clipPath */
  animation: rippleFadeIn 3s ease-in-out 0s 1; /* 添加水波紋效果的 fade-in 動畫 */
}

.svg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* 確保 SVG 不會阻擋鼠標事件 */
  z-index: 50;
}

.text-container {
    position: absolute;
    bottom: 3vh;
    left: 3vh;
    color: white;
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    border-radius: 50px; /* 增加圓角以更美觀 */
}

.router-link {
    font-weight: bold; /* 粗體 */
    font-size: 25px;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    animation: leftIn 4s ease-in-out 0s 1;
    background-color: rgba(255, 255, 255, 0.01); /* 使背景也有些透明感 */
    padding: 20px; /* 增加一些內間距以提升視覺效果 */
    border-radius: 50px; /* 增加圓角以更美觀 */
    color: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
}

.arrow {
    margin-left: 8px;
    transition: transform 0.3s ease;
}

.router-link:hover .arrow {
    transform: translateX(5px);
}

.Text {
    color: rgba(255, 255, 255, 0.85);
    font-weight: bold; /* 粗體 */
    font-size: 15px;
    font-family: "Microsoft JhengHei", "微軟雅黑", "generic-family";
    font-style: normal;
    color: #ffffff;
    font-weight: bold;
    animation: leftIn 3s ease-in-out 0s 1;
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
        transform: translate3d(-15%, 0, 0);
        opacity: 0;
    }
    to {
        transform: none;
        opacity: 1;
    }
}

@keyframes rippleFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}


/* 媒體查詢 */
@media (max-width: 768px) {
  .me {
    width: 50vw; /* 調整卡片寬度 */
  }

  .text-container {
    font-size: 4vw; /* 調整文字大小 */
  }

  .router-link {
    font-size: 4vw; /* 調整連結文字大小 */
  }

  .Text {
    font-size: 3.5vw; /* 調整文字大小 */
  }
}
</style>
