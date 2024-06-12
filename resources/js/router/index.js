// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Main from '../Main.vue';  // 确保路径正确
import App from '../App.vue';  // 确保路径正确
import Project from '../Project.vue';  // 确保路径正确
import Contact from '../Contact.vue';  // 确保路径正确

const routes = [
  {
    path: '/',
    component: Main,  // 主结构组件作为根路径组件
    children: [
      { path: 'Home', name: 'Home', component: App },
      { path: 'Project', name: 'Project', component: Project },
      { path: 'Contact', name: 'Contact', component: Contact }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;  // 此处导出路由配置
