import { createRouter, createWebHistory } from 'vue-router';

// Routes
import PageIndex from '@/views/PageIndex.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: PageIndex,
        },
    ],
});

export default router;
