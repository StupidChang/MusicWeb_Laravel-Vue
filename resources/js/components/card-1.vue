<template>

        <!-- 圓形按鈕，用於切換卡片顯示 -->
        <v-col cols="auto">
            <v-btn
                class="ma-2 infoButton"
                color="indigo"
                icon="mdi-information"
                @click="toggleCard"
                >
            </v-btn>
        </v-col>

        <v-card
            v-show="isOpen"
            :key="key"
            :class="['fixed-card', 'fw-bold', isOpen ? 'fade-in' : 'fade-out']"
            prepend-icon="mdi-account"
            :append-avatar="avatar"
            :image="backgroundImage"
            title="歡迎參觀貓咪小窩！"
            subtitle="最後編輯時間 5/23．2024 ⭐"
            text="歡迎來到我的網站，此網站由我製作，目前除了製作音樂外也接程式設計的案子，網站前後端，Discord機器人或是其他小程式...等等，如果有什麼需求的話可以直接連絡我~">
            <v-card-actions class="">
                <v-btn
                    @click="toggleCard"
                    prepend-icon="mdi-check-circle"
                    rounded="lg"
                    size="x-large"
                    color="deep-purple accent-4"
                    dark
                    elevation="2"
                    outlined
                    class="btnsty"
                    >
                    <template v-slot:prepend>
                        <v-icon color="success"></v-icon>
                    </template>

                    我知道了
                </v-btn>
            </v-card-actions>
        </v-card>


</template>

<script>
import avatarImage from '../../assets/S__12181506.jpg';
import backgroundImage from '../../assets/sky-6811874_1920.jpg';

export default {
data() {
    return {
        isOpen: false,
        key: 0,  // 用於控制元素重渲染的鍵
        avatar: avatarImage,
        backgroundImage: backgroundImage,
    };
},
onMounted:{

},
methods: {
    toggleCard() {
    if (this.isOpen) {
        this.isOpen = false;
    }
    else {
        this.isOpen = true;
        this.key++;  // 触发重新渲染以确保动画可以播放  每次切換時增加 key 的值
    }
    },
},
}
</script>

<style scoped>
    .fade-in {
        animation: fadein 3s ease-in-out;
    }

    .fade-out {
        animation: fadeout 2s linear 0s infinite;
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    .btnsty {
        color: rgb(158, 77, 77);  /* 字体颜色 */
        border: 1px solid rgba(255, 255, 255, 0.1);  /* 轻微的白色边框 */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  /* 添加轻微的阴影 */
        padding: 10px 15px;  /* 内边距 */
        width: 35%;
    }

    .infoButton{
        position: fixed;
        bottom: 5vh;
        right: 3vh;
        transition: transform 0.3s ease-in-out;
        height: 30px;
        width: 30px;
        background-color: rgb(37, 218, 218);
        color: rgb(255, 255, 255);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);  /* 增加阴影以增强按钮的立体感 */
    }

    .fixed-card {
        position: fixed;
        bottom: 10px;
        right: 10px;
        transition: transform 0.3s ease-in-out;
        height: 20vh;
        width: 40vh;
        z-index: 5;
        color: rgb(192, 170, 248);
    }

</style>
