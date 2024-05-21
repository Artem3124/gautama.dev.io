<template>
    <div class="main-bg">
        <GradientSphere />
    </div>
</template>

<script>
import GradientSphere from "./GradientSphere.vue";

export default {
    components: {
        GradientSphere,
    },
};
</script>

<style lang="scss">
.main-screen-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>
