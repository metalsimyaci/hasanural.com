import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('/src/views/Home.vue'),
        meta: {
            title: 'Ana Sayfa',
        },
    }
];

const baseUrl = '/';
const router = createRouter({
    history: createWebHistory(baseUrl),
    routes,
    linkActiveClass: 'active',
});

export default router;