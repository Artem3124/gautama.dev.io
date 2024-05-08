<template>
    <div class="gradient-sphere">
        <!-- <div class="gradient-sphere--lines">
            <BreathingLines/>
        </div>   -->
        <div class="gradient-sphere--text">Practice</div>
        <div class="gradient-sphere--bg"></div>
        <div class="gradient-sphere--new-lines"></div>
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
        // animation: mainScreenLines 40s linear infinite;

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
        z-index: 300;
        width: 55vw;
        height: 55vw;
        max-width: 312px; // Might delete later
        max-height: 312px; // Might delete later
        border-radius: 50%;
        background-color: #7ba4fc;
        border: 2px solid white;
        box-sizing: border-box;
        // background: linear-gradient(130deg, rgb(255, 255, 255) 10%, rgba(89,136,219,1) 92%);
        // filter: blur(15px);
        // animation: mainScreenSphere 20s linear infinite;
    }

    &--new-lines {
        z-index: 1;
        width: 55vw;
        height: 55vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid white;
        animation: test 5s ease-in infinite;
    }
}

@keyframes mainScreenSphere {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
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

@keyframes test {
    from {
        width: 55vw;
        height: 55vw;
        opacity: 0;
        // background-color: rgb(255,255,255,0.5);
    }
    10% {
        opacity: 1;
    }
    30% {
        width: 90vw;
        height: 90vw;
        opacity: 0;
        filter: blur(3px);
    }
    to {
        width: 55vw;
        height: 55vw;
        opacity: 0;
        // transform: scale(3);
    }
}
</style>
