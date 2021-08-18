import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

const Layout = () => import('@/views/Layout.vue');
const Index = () => import('@/views/Index.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        component: Index
      }
    ]
  }, {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
