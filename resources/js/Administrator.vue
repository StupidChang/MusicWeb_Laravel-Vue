    <template>
        <mainheader></mainheader>

        <StarbackCanvas>
            <div class="container">
                <div class="row my-3">
                    <div class="col-12 data-display rounded rounded-3 my-2 p-2">
                        <h1 class="Notofont my-2">📊 委託資料圖</h1>

                        <div class="row justify-content-center">
                                <canvas class="" ref="canvas"></canvas>
                        </div>

                    </div>

                    <div class="col-12 data-display rounded rounded-3 my-2 p-2">
                        <h1 class="Notofont my-2">📧 接收到的委託資料</h1>
                        <div class="table-responsive rounded rounded-3" v-if="submissions && submissions.length">
                            <table class="table align-middle table-striped table-dark table-hover">
                                <thead >
                                    <tr>
                                        <th scope="col">#</th>
                                        <th class="text-nowrap">稱呼</th>
                                        <th class="text-nowrap">電子郵件</th>
                                        <th class="text-nowrap">委託類型</th>
                                        <th class="text-nowrap">預算金額</th>
                                        <th class="text-nowrap">詳細內容</th>
                                        <th class="text-nowrap">預計交件時間</th>
                                        <th class="text-nowrap">狀態</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(submission, index) in submissions" :key="index">
                                        <th scope="row">{{ index }}</th>
                                        <td class="text-nowrap">{{ submission.name }}</td>
                                        <td class="text-nowrap">{{ submission.email }}</td>
                                        <td class="text-nowrap">{{ getCommissionType(submission.commission_type) }}</td>
                                        <td class="text-nowrap">{{ submission.money }}</td>
                                        <td class="">{{ submission.details }}</td>
                                        <td class="text-nowrap">{{ submission.end_date }}</td>
                                        <td class="text-nowrap">{{ submission.state }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-else>
                            <p>目前沒有任何資料。</p>
                        </div>
                    </div>

                </div>
            </div>
        </StarbackCanvas>

        <mainfooter></mainfooter>
    </template>

    <script>
        import mainheader from './components/header.vue'
        import mainfooter from './components/footer.vue'
        import StarbackCanvas from './components/StarbackCanvas.vue'
        import axios from 'axios';
        import xcircle from '../assets/x-circle.svg';
        import checkcircle from '../assets/check-circle.svg';
        import { Chart, registerables } from 'chart.js';
        Chart.register(...registerables);

        export default {
            name: 'Administrator',
            components: {
                mainheader,
                mainfooter,
                StarbackCanvas,
                xcircle,
                checkcircle
            },
            data() {
                return{
                    submissions: null,
                }
            },
            methods: {
                getCommissionType(type) {
                    switch (type) {
                        case '1': return '原創樂器編曲';
                        case '2': return 'Cover製作';
                        case '3': return 'LOOP背景音樂';
                        case '4': return '場景背景音樂';
                        default: return '未知類型';
                    }
                },
                isDone(state) {
                    return state == "未完成" ? xcircle : checkcircle;
                },
                countStatus() {
                    let completed = 0;
                    let notCompleted = 0;
                    this.submissions.forEach(submission => {
                        if (submission.state === "已完成") {
                            completed++;
                        } else {
                            notCompleted++;
                        }
                    });
                    return [completed, notCompleted];
                },
                async loadChartData() {
                    try {
                        const response = await axios.get('/submissions-get');
                        this.submissions = response.data;
                        console.log("獲取資料成功: ", this.submissions);
                        const [completed, notCompleted] = this.countStatus();
                        const maxValue = Math.max(completed, notCompleted); // 獲取最大值
                        const upperLimit = maxValue + 2; // 設定上限高於最大值一點，例如增加5

                        const ctx = this.$refs.canvas.getContext('2d');
                        new Chart(ctx, {
                            type: 'bar', // 或 'line'
                            data: {
                                labels: ['未完成', '已完成'],
                                datasets: [{
                                    label: '案件完成數量',
                                    data: [completed, notCompleted],
                                    backgroundColor: [
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(75, 192, 192, 1)'
                                    ],
                                    borderColor: [
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(75, 192, 192, 0.2)'
                                    ],
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        max: upperLimit,
                                        ticks: {
                                            fontColor: 'white' // Y軸文字顏色設置為白色
                                        }
                                    },
                                    x: {
                                        ticks: {
                                            fontColor: 'white' // X軸文字顏色設置為白色
                                        }
                                    }
                                },
                                plugins: {
                                    legend: {
                                        display: true,
                                        labels: {
                                            fontColor: 'white' // 圖例文字顏色設置為白色
                                        }
                                    }
                                }
                            },
                            border: {
                                // 框線繪製
                                display: true,
                                // 框線顏色
                                color: 'rgba(255, 255, 0, 0.8)',
                                // 框線寬度
                                width: 5,
                                // 格線虛線，10為線，5為空格
                                dash: [10, 5],
                                // 虛線偏移
                                dashOffset: 5,
                                // 軸線 Z-index
                                z: 1,
                            },
                        });
                    } catch (error) {
                        console.log("獲取資料發生錯誤: ", error);
                    }
                },
            },
            mounted() {
                // 當元件被掛載到 DOM 後執行 submitForm
                this.loadChartData();
            }
        }
</script>

<style scoped>
    .data-display {
        background-color: #333;
    }
    .Notofont {
        font-family: "Noto Sans TC", sans-serif;
        font-optical-sizing: auto;
        font-size: 30px;
        font-weight: 600;
        font-style: normal;
        color: rgba(255, 255, 255, 0.829) !important;
    }
</style>
