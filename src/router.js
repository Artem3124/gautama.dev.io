import { createRouter, createWebHistory } from 'vue-router';

const PageIndex = () => import('@/views/PageIndex.vue');
const PagePracticeIndex = () => import('@/views/practices/PageIndex.vue');
const PageBreathPractice = () => import('@/views/practices/PageBreathingPractice.vue');
const PageMediationPractice = () => import('@/views/practices/PageMeditationPractice.vue');
const PageActivities = () => import('@/views/PageActivities.vue');
const PageReferrals = () => import('@/views/PageReferrals.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: PageIndex,
        },
        {
            path: '/practices',
            name: 'practices',
            component: PagePracticeIndex,
        },
        {
            path: '/practices/breath/:id',
            name: 'breath',
            component: PageBreathPractice,
            props: true,
        },
        {
            path: '/practices/meditation/:id',
            name: 'meditation',
            component: PageMediationPractice,
        },
        {
            path: '/activities',
            name: 'activites',
            component: PageActivities,
        },
        {
            path: '/referrals',
            name: 'referrals',
            component: PageReferrals,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: 'index' },
        },
    ],
});

export default router;
