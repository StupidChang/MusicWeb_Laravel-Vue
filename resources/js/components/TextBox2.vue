<template>
    <div class="Text justify-content-start">
        <div class="row justify-content-start">
            <div class="col-1"></div>
            <h1 class="col-4 Notofont">關於 │ <a href="col-4"><img src="../assets/icons8-youtube-50.png" alt=""></a></h1>

        </div>
        <div class="row">
            <p class="offset-2 col-10">大家好，我是iDAKU Neko，是一名音樂創作工作者！</p>
            <p class="offset-2 col-10">目前正在累積作品集，如果有想要特別製作曲子的話歡迎來信詢問～</p>
            <p class="offset-2 col-10">收費標準請參考委託專案頁面，可以是Loop BGM、鋼琴曲、歌曲Cover ... 等任何風格，</p>
            <p class="offset-2 col-10">並且會含基本混音，歡迎先寄Email來詢問一下！</p>
            <p class="offset-2 col-10">如果想要委託的話請Email到 dakuneko0211@gmail.com 就好嚕！</p>
        </div>
        <div class="row justify-content-start">
            <CustomButton class="offset-2 col-1" :to="'/project'" :Text="'我要委託'"></CustomButton>
            <CustomButton class="mx-2 col-1" :to="'/Contact'" :Text="'相關資訊'"></CustomButton>
        </div>
    </div>
</template>

<script>
    import CustomButton from './CustomButton.vue'
    export default {
        name: 'TextBox2',
        components:{
            CustomButton,
        },
        methods: {
            onButtonClick() {
                console.log('Button clicked!');
                // 在这里添加更多的逻辑处理，例如导航到另一个视图等
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');

    .Notofont {
        font-family: "Noto Sans TC", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        color: rgba(255, 255, 255, 0.829) !important;
        pointer-events: none;
    }

    .Text {
        padding: 1vh;
        -webkit-box-shadow: 8px 10px 32px -7px rgba(0,0,0,.3);
        box-shadow: 8px 10px 32px -7px rgba(0,0,0,.3);
        background-color: rgba(51, 51, 51, 0.685);
        font-size: 15px;
        font-family: "Microsoft JhengHei", "微軟雅黑", "generic-family";
        font-style: normal;
        color: #ffffff;
        font-weight: bold;
        animation: leftIn 3s ease-in-out 0s 1;
        border-radius: 15px; /* 增加圓角以更美觀 */
    }

    @keyframes leftIn {
    from {
        transform: translate3d(-5%, 0, 0);
        opacity: 0;
    }

    to {
        transform: none;
        opacity: 1;
    }
}
</style>


