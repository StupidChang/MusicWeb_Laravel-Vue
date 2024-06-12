import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import cspPlugin from 'vite-plugin-csp';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/js/app.js'], // 根據您的項目需要調整
            refresh: true,
        }),
        cspPlugin({
            policy: {
              'default-src': "'self'",
              'img-src': ["'self'", "data:", "https://*.ngrok.io"],
              'script-src': ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"]
            }
        })
    ],
    server: {
        host: 'localhost',
        // host: true,
        cors: true,
        // port: 8000,
        //cors: {
        //    origin: '*', // 或更具體的來源地址
        //    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // 允許的 HTTP 方法
        //    credentials: true // 如果需要 cookies 或授權標頭
        //}, // 啟用 CORS
        proxy: {
            '/api': {
                target: 'http://localhost:8000',  // Laravel API 的本地地址
                changeOrigin: true,
                secure: false,
            }
        },
        https: {
            key: fs.readFileSync('./certs/localhost+2-key.pem'),
            cert: fs.readFileSync('./certs/localhost+2.pem')
        }
    }
});
