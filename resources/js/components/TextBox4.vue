<template>
    <div class="Text justify-content-start">
        <div class="row justify-content-start">
            <div class="col-1"></div>
            <h1 class="offset-md-2 col-4 Notofont">委託流程 │ <a href="col-4"><img src="" alt=""></a></h1>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="row left1">
                    <div class="col-12 d-md-flex justify-content-md-end">
                        <div class="step-item col-5 d-flex align-items-center">
                            <span class="step-number">1</span>
                            <div class="step-content d-flex align-self-center">
                                <p class="Notofont text-center">發送表單告知委託類型，並等待電子郵件回覆報價。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-md-flex justify-content-md-end">
                        <div class="step-item col-5 d-flex align-items-center">
                            <span class="step-number">2</span>
                            <div class="step-content d-flex align-self-center">
                                <p class="Notofont text-center">討論內容及交稿時間。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-md-flex justify-content-md-end">
                        <div class="step-item col-5 d-flex align-items-center">
                            <span class="step-number">3</span>
                            <div class="step-content d-flex align-self-center">
                                <p class="Notofont text-center">給予報價並支付報價之25%訂金。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 pt-md-5">
                <div class="row d-flex align-items-end left2">
                    <div class="col-12">
                        <div class="step-item2 col-5 d-flex align-items-center">
                            <span class="step-number">4</span>
                            <div class="step-content d-flex align-self-center">
                                <p class="Notofont text-center">開始製作委託以及修改。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="step-item2 col-5 d-flex align-items-center">
                            <span class="step-number">5</span>
                            <div class="step-content d-flex align-self-center">
                                <p class="Notofont text-center">確認完稿無異議後支付尾款。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="step-item2 col-5 d-flex align-items-center">
                            <span class="step-number">6</span>
                            <div class="step-content d-flex align-self-center">
                                <p class="Notofont text-center">交付創作檔案。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-start">
            <div class="col-1"></div>
            <h1 class="offset-md-2 col-4 Notofont mt-4">委託須知 │ <a href="col-4"><img src="" alt=""></a></h1>
        </div>
        <div class="row justify-content-center">
            <ol class="offset-3 Notofont left2 col-12 col-md-8">
                <li class="mt-2">為保障雙方權益，討論完設計內容及交件時間後請先完成訂金匯款（50％），完成匯款後才會開始製作喔！</li>
                <li class="mt-2">目前排程皆採預約制，討論階段以電子郵件聯繫，以雲端交件並將檔案保留一年。</li>
                <li class="mt-2">作品完成後會公開展示，如另有安排公開時程或不想公開，請提前告知。</li>
                <li class="mt-2">如果因為特殊緣故無法於訂金與尾款階段之10日內付款，請提前約定具體付款日期。</li>
                <li class="mt-2">急件需酌收加急費用。</li>
                <li class="mt-2">製作期間如需取消製作，恕無法退還訂金。<br>
                請於傳提案的兩日內提出修改部分，逾期視同無需修改。
                如超過15天以上無法聯繫，視同自動取消委託，不得退還訂金。
                </li>
            </ol>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'TextBox4',
        components: {},
        methods: {
            onButtonClick() {
                console.log('Button clicked!');
                // 在這裡添加更多的邏輯處理，例如導航到另一個視圖等
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');

    .left1{
        animation: leftIn 2s ease-in-out 0s 1;
    }

    .left2{
        animation: leftIn 3s ease-in-out 0s 1;
    }

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
        background-color: rgba(5, 5, 5, 0.685);
        font-size: 15px;
        font-family: "Microsoft JhengHei", "微軟雅黑", "generic-family";
        font-style: normal;
        color: #ffffff;
        font-weight: bold;
        animation: fade 2s ease-in 0s 1;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .step-item {
        margin: 20px 0;
        position: relative;
        align-items: center;
    }

    .step-item2 {
        margin: 20px 0;
        position: relative;
        align-items: center;
    }

    .step-number {
        width: 30px;
        height: 30px;
        background-color: #FFD204;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: relative;
        z-index: 1;
    }

    .step-content {
        margin-left: 10px;
        padding: 10px;
        background-color: #a7f2ff86;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        width: 100%;
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

    @media (min-width: 768px) {
        .step-item::after {
            content: '';
            position: absolute;
            height: 120%;
            width: 4px;
            background-color: #FFD204;
            top: calc(100% - 15px);
            left: 13px;
        }

        .step-item2::after {
            content: '';
            position: absolute;
            height: 120%;
            width: 4px;
            background-color: #FFD204;
            bottom: calc(100% - 15px);
            left: 13px;
        }
    }

</style>
