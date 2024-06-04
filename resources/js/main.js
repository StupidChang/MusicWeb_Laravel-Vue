import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'  // 確保引入 Vuetify CSS
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'swiper/swiper-bundle.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // 引入 Bootstrap 5 的 CSS 文件
import 'bootstrap'; // 引入 Bootstrap 5 的 JavaScript 文件

// 創建 Vuetify 插件實例
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light'
        // 這裡可以配置更多主題選項
      },
    components,
    directives,
})
  

createApp(Main).use(router).use(vuetify).mount('#app')