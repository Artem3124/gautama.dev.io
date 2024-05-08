<template>
    <div class="main-screen-bg">
        <GradientSphere />
    </div>
</template>

<script>
import GradientSphere from './GradientSphere.vue';

export default {
    components: {
        GradientSphere,
    }
}
</script>

<style lang="scss">
.main-screen-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    background: #7ba4fc;
    // background: linear-gradient(344deg, rgb(52, 101, 165) 0%, rgba(111,159,252,1) 22%, rgba(192,214,251,1) 50%, rgba(184,207,249,1) 72%, rgba(139,174,240,1) 92%);
}
</style>