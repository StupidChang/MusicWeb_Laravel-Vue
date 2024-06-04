<template>
    <div class="app-container ">
        <swiper
            :cssMode="true"
            :navigation="true"
            :mousewheel="true"
            :keyboard="true"
            :modules="modules"

            :centeredSlides="true"
            :pagination="{clickable: true}"
            :slides-per-view="1"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
            @slideChange="onSlideChange"
            class="swiper justify-content-center align-items-center"
        >
            <swiper-slide v-for="(video, index) in videos" :key="index">
                <iframe
                    width="2543"
                    height="1118"
                    :src="video.url"
                    :title="video.title"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    //import MyBlock from './MyBlock.vue'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/keyboard';
    import 'swiper/css/mousewheel';

    export default {
        name: 'Swiper-1',
        components: {
        Swiper,
        SwiperSlide
        },
        setup() {
            const videos = [
                { url: 'https://www.youtube.com/embed/7xN_43oqaK0', title: "🐈iDAKU - 不言論/BAK (Instrument Version Cover)"},
                { url: 'https://www.youtube.com/embed/fr8e8ANuwx4', title: "🐈iDAKU BGM-1"},
            ];
            const images = [
                { src: new URL('../../assets/1.jpg', import.meta.url).href, alt: '' },
                { src: new URL('../../assets/2.jpeg', import.meta.url).href, alt: '' },
                { src: new URL('../../assets/3.jpg', import.meta.url).href, alt: '' },
                { src: new URL('../../assets/4.jpg', import.meta.url).href, alt: '' },
                { src: new URL('../../assets/5.jpg', import.meta.url).href, alt: '' },
                { src: new URL('../../assets/6.jpg', import.meta.url).href, alt: '' },
                { src: new URL('../../assets/7.jpg', import.meta.url).href, alt: '' },
            ];
            return {
                images,
                videos,
                modules: [Navigation, Pagination, Mousewheel, Keyboard],
            };
        }
    }
</script>

<style scoped>
.body {
    background-color: rgba(167, 167, 167, 0.781);
}

.app-container {
    width: 100%; /* 如果沒有設定，請加上 */
    height: 50vh; /* 限制高度為50vh */
    overflow: hidden; /* 防止內容超出容器 */
    position: relative; /* 確保導航按鈕可以相對於此容器定位 */
    animation: fade 2s ease-in-out 0s 1;
}

.swiper-pagination {
    z-index: 5;  /* 確保指示器在影片上方 */
}

.swiper{
    width: 100%; /* 如果沒有設定，請加上 */
    height: 100%;
}

.swiper-slide iframe {
    z-index: 10;  /* 確保影片在指示器上方 */
    position: relative;
}

.swiper-slide img {
    width: 100%;
	height: 100%;
    object-fit: contain; /* 確保圖片完整顯示並保持原始比例 */
    object-position: center; /* 圖片在幻燈片中居中 */
}

.swiper-slide iframe {
    width: 100%;
	height: 100%;
    object-fit: contain; /* 確保圖片完整顯示並保持原始比例 */
    object-position: center; /* 圖片在幻燈片中居中 */
}

.Notofont {
        font-family: "Noto Sans TC", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        color: rgba(255, 255, 255, 0.829) !important;
}

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

</style>


