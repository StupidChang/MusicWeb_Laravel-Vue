<template>
    <div class="Text justify-content-start">
        <div class="row justify-content-start">
            <div class="col-1"></div>
            <h1 class="col-4 Notofont">委託專案 │ <a href="col-4"><img src="../assets/icons8-youtube-50.png" alt=""></a></h1>

        </div>
        <div class="row justify-content-center">
            <div class="col-6 align-self-center">

                <div class="row">
                    <div class="col fade-in-item" data-index="0">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">您的稱呼</label>
                            <input type="text" class="form-control" id="Name" v-model="formData.name" placeholder="您的稱呼 如: 喵喵。">
                        </div>
                    </div>
                    <div class="col fade-in-item" data-index="1">
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">電子郵件</label>
                            <input type="email" class="form-control" id="Email" v-model="formData.email" placeholder="Example@gmail.com">
                        </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <!--<div class="col fade-in-item" data-index="2">
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">預算金額</label>
                            <input type="email" class="form-control" id="Money" v-model="formData.email" placeholder="您所預計花費的預算。">
                        </div>
                    </div>-->
                    <div class="col fade-in-item" data-index="3">
                        <label for="exampleFormControlInput1" class="form-label">委託內容</label>
                        <select class="form-select" v-model="formData.commission_type" aria-label="Default select example"  placeholder="選擇您的委託類型">
                            <option selected>選擇您的委託類型</option>
                            <option value="1">原創樂器編曲</option>
                            <option value="2">Cover製作</option>
                            <option value="3">LOOP背景音樂</option>
                            <option value="3">場景背景音樂</option>
                        </select>
                    </div>
                </div>


                <div class="mb-3 fade-in-item">
                    <label for="exampleFormControlTextarea1" class="form-label">詳細委託內容</label>
                    <textarea class="form-control" id="Textarea1" rows="3" v-model="formData.details" placeholder="可以貼上參考網址、Cover網址等資料，或是想要的感覺...等等"></textarea>
                </div>

                <div class="mb-3 fade-in-item">
                    <label for="exampleFormControlInput2" class="form-label">預計交件時間</label>
                    <input id="end_date" type="date" class="form-control" v-model="formData.end_date">
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-2 align-self-center">

                <div class="text-center">
                    <v-btn prepend-icon="mdi-check" @click="submitForm">
                        <template v-slot:prepend>
                            <v-icon color="success"></v-icon>
                        </template>

                        送出委託
                    </v-btn>
                </div>

            </div>
        </div>
    </div>
    <v-alert
        v-model="alert.show"
        :type="alert.type"
        closable
        @input="alert.show = false"
    >
        {{ alert.message }}
    </v-alert>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'TextBox3',
        components:{
        },
        methods: {
            onButtonClick() {
                console.log('Button clicked!');
                // 在这里添加更多的逻辑处理，例如导航到另一个视图等
            },
            async submitForm() {
                try {
                    const response = await axios.post('/submit-form', this.formData);
                    this.alert.type = 'success';
                    this.alert.message = response.data.message + "　請隨時注意電子郵件，將會在3~5個工作天後回復！";
                    this.alert.show = true;
                } catch (error) {
                    this.alert.type = 'error';
                    if (error.response && error.response.data) {
                        this.alert.message = error.response.data.message || '提交失敗，請重試。';
                    } else {
                        this.alert.message = '提交失敗，請檢查網路連接後重試。';
                    }
                    this.alert.show = true;
                }
            }
        },
        data() {
            return {
                formData:{
                    name: '',
                    email: '',
                    commission_type: '',
                    details: '',
                    endDate: new Date().toISOString().substring(0, 10)  // 以 YYYY-MM-DD 格式存儲日期
                },
                alert: {
                    show: false,
                    message: '',
                    type: 'success'  // 預設為成功的消息類型
                }
            };
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap');
    @import url('https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css');



    .fade-in-item {
        animation: leftIn 4s ease-in-out 0s 1
    }

    .Notofont {
        font-family: "Noto Sans TC", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        color: rgba(255, 255, 255, 0.829) !important;
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

    .v-btn {
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); /* 添加陰影 */
        transition: all 0.3s ease; /* 添加平滑過渡效果 */
    }

    .v-btn:hover {
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); /* 滑鼠懸停時的陰影 */
        transform: translateY(-2px); /* 輕微提升效果 */
    }

</style>


