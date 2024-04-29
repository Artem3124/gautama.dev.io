<template>
    <div class="gradient-sphere">
        <div class="gradient-sphere--lines">
            <BreathingLines/>
        </div>  
        <div class="gradient-sphere--text">Practice</div>
        <div class="gradient-sphere--bg"></div>
    </div>
</template>

<script>
import BreathingLines from '@/assets/img/breathing-lines.svg';

export default {
    components: {
        BreathingLines,
    }
}
</script>

<style lang="scss">
.gradient-sphere {
    position: relative;

    &--lines {
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: mainScreenLines 40s linear infinite;

        svg {
            width: 68vw;
            max-width: 345px; // Might delete later
            height: auto;
        }
    }

    &--text {
        color: var(--bg-color);
        font-size: 28px;
        font-weight: 800;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

    &--bg {
        z-index: 1;
        width: 60vw;
        height: 60vw;
        max-width: 312px; // Might delete later
        max-height: 312px; // Might delete later
        border-radius: 50%;
        background: linear-gradient(130deg, rgb(255, 255, 255) 10%, rgba(89,136,219,1) 92%);
        box-sizing: border-box;
        filter: blur(10px);
    }
}

@keyframes mainScreenLines {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>