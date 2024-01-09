import { createRouter, createWebHistory } from 'vue-router';
import LayoutPageVue from './components/LayoutPage.vue';
import LivePreviewPageVue from './components/LivePreviewPage.vue';

const routes = [
  { path: '/', component: LayoutPageVue },
  { path: '/live', component: LivePreviewPageVue }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});