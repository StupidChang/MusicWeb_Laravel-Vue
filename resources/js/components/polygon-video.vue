<template>
    <div class="row polygon-image-container">
        <div class="col-12">
            <video ref="videoPlayer" class="video-content" autoplay loop muted >
                <source src="../../assets/FDownloader.net-366239529314160-(1080p).mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <svg class="svg-overlay" xmlns="" preserveAspectRatio="xMidYMid none" viewBox="0 0 1920 1080">
                <defs>
                <clipPath id="roundedPolygon" clipPathUnits="objectBoundingBox">
                    <path :d="pathData" />
                </clipPath>
                </defs>
            </svg>
        </div>

        <aboutme class="me d-none d-xl-block"></aboutme>

        <div class="text-container d-none d-xl-block">
            <p class="Text">準備好製作屬於自己的音樂?</p>

            <router-link class="router-link " to="/Project">
                現在委託
                <span class="arrow">📜</span>
            </router-link>
        </div>

        <div class="col-12 d-xl-none d-sm-block">
            <div class="row align-items-center ">
                <div class="col-6 d-flex justify-content-center">
                    <div class="">
                        <p class="Text">準備好製作屬於自己的音樂?</p>

                        <router-link class="router-link " to="/Project">
                            現在委託
                            <span class="arrow">📜</span>
                        </router-link>
                    </div>
                </div>
                <div class="col-6">
                    <aboutme class=""></aboutme>
                </div>
            </div>
        </div>
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
        return'M -0.000772 0.093278 C 0.000000 0.027435 0.015432 0.000000 0.037809 0.000000 L 0.764660 0.000000 C 0.814043 0.002743 0.824846 0.037037 0.825617 0.097394 C 0.827160 0.176955 0.848765 0.213992 0.925154 0.216735 C 0.940586 0.218107 0.980710 0.240055 0.977623 0.314129 V 0.779150 C 0.954475 0.972565 0.871142 0.809328 0.822531 0.973937 L 0.268519 0.971193 C 0.243827 0.971193 0.232253 0.956104 0.231481 0.931413 C 0.231481 0.747599 0.185957 0.737997 0.036265 0.733882 C 0.015432 0.735254 -0.000772 0.706447 0.000000 0.668038 z';
        //return `M -1 68 C 0 20 20 0 49 0 L 991 0 C 1055 2 1069 27 1070 71 C 1072 129 1100 156 1199 158 C 1219 159 1271 175 1267 229 V 568 C 1237 709 1129 590 1066 710 L 348 708 C 316 708 301 697 300 679 C 300 545 241 538 47 535 C 20 536 -1 515 0 487 z`;
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
  /*width: 18vmin; /* 使用相對單位 */
  animation: leftIn 2s ease-in-out 0s 1;
}

.polygon-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  pointer-events: none; /* 確保 SVG 不會阻擋鼠標事件 */
  z-index: 50;
  background-color: rgba(0, 255, 255, 0);
}

.text-container {
    position: absolute;
    bottom: 3vmin;
    left: 3vmin;
    color: white;
    font-family: 'Arial', sans-serif;
    border-radius: 50px; /* 增加圓角以更美觀 */
}

.router-link {
    font-weight: bold; /* 粗體 */
    font-size: 1.6vmin;
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
    font-size: 1.4vmin;
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

@media (max-width: 1200px) {
  .text-container {
    position: relative; /* 在小屏幕上使用相对定位 */
    width: 100%; /* 使容器充满整个列宽 */
    text-align: center; /* 文字居中显示 */
    margin: 10px 0; /* 添加上下边距 */
  }

  .router-link {
    font-size: 4vw; /* 调整链接文字大小 */
    padding: 10px; /* 减少内边距 */
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
