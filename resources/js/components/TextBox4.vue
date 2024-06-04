<template>
    <div class="Text justify-content-start">
        <div class="row justify-content-start">
            <div class="col-1"></div>
            <h1 class="offset-2 col-4 Notofont">委託流程 │ <a href="col-4"><img src="" alt=""></a></h1>
            
        </div>
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-12 d-flex justify-content-end">
                        <div class="step-item col-5 d-flex align-items-center">
                            <span class="step-number">1</span>
                            <div class="step-content d-flex align-self-center">
                                <p class="Notofont ">發送表單告知委託類型，並等待電子郵件回覆報價。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-end">
                        <div class="step-item col-5 d-flex align-items-center">
                            <span class="step-number">2</span>
                            <div class="step-content d-flex align-self-center">
                                <p class="Notofont ">討論內容及交稿時間。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 d-flex justify-content-end">
                        <div class="step-item col-5 d-flex align-items-center">
                            <span class="step-number">3</span>
                            <div class="step-content">
                                <p class="Notofont">給予報價並支付報價之25%訂金。</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>

            <div class="col-6 pt-5">
                <div class="row d-flex align-items-end">
                    <div class="col-12">
                        <div class="step-item2 col-5 d-flex align-items-center">
                            <span class="step-number">4</span>
                            <div class="step-content ">
                                <p class="Notofont">開始製作委託以及修改。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="step-item2 col-5 d-flex align-items-center">
                            <span class="step-number">5</span>
                            <div class="step-content">
                                <p class="Notofont">確認完稿無異議後支付尾款。</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="step-item2 col-5 d-flex align-items-center">
                            <span class="step-number">6</span>
                            <div class="step-content">
                                <p class="Notofont">交付創作檔案。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
</template>
  
<script>
    export default {
        name: 'TextBox4',
        components:{
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

    .step-item {
        margin: 20px 0;
        position: relative;
        align-items: center;
        animation: leftIn 3s ease-in-out 0s 1;
    }

    .step-item2 {
        margin: 20px 0;
        position: relative;
        align-items: center;
        animation: leftIn 5s ease-in-out 0s 1;
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

    .step-item::after {
        content: '';
        position: absolute;
        height: 120%;
        width: 4px; /* 調整至適當寬度 */
        background-color: #FFD204;
        top: calc(100% - 15px);
        left: 13px; /* 根據需要調整 */
    }

    .step-item2::after {
        content: '';
        position: absolute;
        height: 120%;
        width: 4px; /* 調整至適當寬度 */
        background-color: #FFD204;
        bottom: calc(100% - 15px);
        left: 13px; /* 根據需要調整 */
    }

    .step-content {
        margin-left: 10px;
        padding: 10px;
        background-color: #a7f2ff86;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        width: 80%;
    }

</style>
  
  
  