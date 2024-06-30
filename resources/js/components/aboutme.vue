<template>
    <v-card class="cardStyle Text" subtitle="Jun-12．24 🍵" title="關於">
        <template v-slot:prepend>
          <v-icon color="primary" icon="mdi-account"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon color="red-lighten-2" icon="mdi-open-in-new"></v-icon>
        </template>

        <v-card-text>
            一個資工系畢業的音樂工作者<br>
            正在樂團的路上努力中<br><br>
            歡迎來信詢問製作各類曲子<br>
            像是Loop BGM、鋼琴曲、歌曲Cover ... 等任何風格<br>
            收費標準請參考委託專案頁面<br>
            包含基本混音，歡迎Email詢問<br><br>
        </v-card-text>
    </v-card>
</template>

<script>
  export default {
    name: 'TransparentCard'
  }
</script>

<style scoped>
    .title{
        font-size: 25px;
        font-weight: bold; /* 粗體 */
    }

    .cardStyle {
        backdrop-filter: blur(30px);
        box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
        /*border: 2px solid rgba(255, 255, 255, 0.18);*/
        background-color: rgba(255, 255, 255, 0.01); /* 使背景也有些透明感 */
        padding: 20px; /* 增加一些內間距以提升視覺效果 */
        border-radius: 25px; /* 增加圓角以更美觀 */
        color: rgba(255, 255, 255, 0.85);
        width: 35vmin;
    }

    .Text {
        color: rgba(255, 255, 255, 0.85);
        font-size: 15px;
        font-family: "Microsoft JhengHei", "微軟雅黑", "generic-family";
        font-style: normal;
        color: #ffffff;
        animation: leftIn 3s ease-in-out 0s 1;
    }
</style>
