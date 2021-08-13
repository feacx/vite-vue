import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/Index.vue';
import About from '@/views/About.vue';
import UserDetail from '@/views/User/Detail.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  }, {
    path: '/about',
    name: 'About',
    component: About,
  }, {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail,
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
