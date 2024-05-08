import { createRouter, createWebHistory } from 'vue-router';

// Routes
import PageIndex from '@/views/PageIndex.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/PageIndex.vue'),
        },
        {
            path: '/breath/:id',
            name: 'breath',
            component: () => import('@/views/PageBreathPractice.vue'), // Lazy loading
            props: true,
        },
    ],
});

export default router;
