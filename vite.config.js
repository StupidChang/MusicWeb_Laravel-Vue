import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/js/app.js'], // 根據您的項目需要調整
            refresh: true,
        }),
    ],
    server: {
        cors: {
            origin: 'http://127.0.0.1:8000',  // 允許來自 Laravel 伺服器的跨源請求
            methods: ['GET', 'POST'],  // 允許的 HTTP 方法
        }
    }
});
