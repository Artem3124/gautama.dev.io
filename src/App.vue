<template>
    <RouterView />
    <transition name="navbar-hide">
        <AppNavbar v-if="!['breath'].includes($route.name)" />
    </transition>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';

export default {
    components: {
        AppNavbar,
    }
};
</script>

<style></style>
