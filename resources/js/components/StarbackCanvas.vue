<template>
    <div ref="canvasContainer" class="canvas-container1">
        <canvas ref="starCanvas"></canvas>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'StarbackCanvas-1'
    }
</script>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

// 假設 Starback 是您提供的或第三方的類
// 如果 Starback 是外部引入的，需要確保正確地引入
import Starback from '../../../node_modules/starback';

const starCanvas = ref(null);
const canvasContainer = ref(null);
let starbackInstance = null;

const initStarback = () => {
    if (!starCanvas.value || !canvasContainer.value) return;

    const { clientWidth, clientHeight } = canvasContainer.value;
    starbackInstance = new Starback(starCanvas.value, {
        type: 'line',
        width: clientWidth,
        height: clientHeight,
        speed: 4, // 考慮進一步降低速度
        frequency: 5, // 降低頻率
        slope: { x: 5, y: 3 },
        directionX: 0.7,
        spread: .1,
        quantity: 10,
        backgroundColor: ["#0F2027", "#203A43", "#2C5364"]
    });
    starbackInstance.generateStar(30);
};

onMounted(() => {
    initStarback();
    window.addEventListener('resize', initStarback);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', initStarback);
});

// 監覽畫布容器尺寸變化，重新初始化 Starback
watch(() => canvasContainer.value?.clientWidth, initStarback);
watch(() => canvasContainer.value?.clientHeight, initStarback);
</script>

<style scoped>
    .canvas-container1 {
        width: 100%;
        height: 100%; /* 設定高度視您的需求而定 */
        overflow: hidden;
        position: relative; /* 確保容器為相對定位以正確放置 canvas */
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../assets/S__9633799_0.jpg'); /* 插入您的背景圖片 URL */
        background-size: cover; /* 覆蓋整個容器 */
        background-position:top; /* 中心對齊背景圖 */
        background-repeat: no-repeat; /* 不重複背景圖 */
        z-index: 0;
    }

    canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.4; /* 設定背景透明度為 50% */
        z-index: -1; /* 確保 canvas 在底層 */
        pointer-events: none; /* 確保 canvas 不會阻擋下方元素的事件 */
    }
</style>

