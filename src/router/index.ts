import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Layout = () => import('@/views/Layout.vue');
const Index = () => import('@/views/Index.vue');
const About = () => import('@/views/About.vue');
const NotFound = () => import('@/views/NotFound.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'index',
        component: Index
      }, {
        path: 'about',
        name: 'about',
        component: About
      }
    ]
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
