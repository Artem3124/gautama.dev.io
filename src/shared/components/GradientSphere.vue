<template>
    <div class="gradient-sphere" @click="openPractice">
        <Base :blur="blur" :size="size" v-if="theme == practiceTheme.base" />
        <Peace :blur="blur" :size="size" v-if="theme == practiceTheme.peace" />
        <Concentration
            :blur="blur"
            :size="size"
            v-if="theme == practiceTheme.concentration"
        />
        <Sleep :blur="blur" :size="size" v-if="theme == practiceTheme.sleep" />
        <div class="gradient-sphere__text">
            <slot> </slot>
        </div>

        <Lines :size="size" class="gradient-sphere__lines" />
    </div>
</template>

<script>
import { practiceTheme } from "@/shared/models/practiceTheme";
import Base from "@/shared/components/svg/ellipses/Base.vue";
import Concentration from "@/shared/components/svg/ellipses/Concentration.vue";
import Peace from "@/shared/components/svg/ellipses/Peace.vue";
import Sleep from "@/shared/components/svg/ellipses/Sleep.vue";
import Lines from "@/shared/components/svg/ellipses/Lines.vue";
import userHttpService from "../services/http/userHttp";

export default {
    components: {
        Base,
        Lines,
        Concentration,
        Sleep,
        Peace,
    },
    props: {
        theme: {
            type: String,
            default: practiceTheme.base,
            required: true,
        },
        size: {
            type: String,
            default: "100px",
            required: false,
        },
        blur: { 
            type: Number, 
            default: 40,
            required: true,
        },
    },
    data() {
        return {
            practiceTheme,
        };
    },
    methods: {
        openPractice() {
            userHttpService.getAll().then((response) => {
                console.log(response);
            });
            // this.$router.push({
            //     name: "breath",
            //     params: {
            //         id: 0,
            //     },
            // });
        },
    },
};
</script>

<style lang="scss">
.gradient-sphere {
    position: relative;
    white-space: pre;
    cursor: pointer;

    &__lines {
        position: absolute;
        z-index: 6;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: mainScreenLines 40s linear infinite;

        // svg {
        //     width: 68vw;
        //     max-width: 345px; // Might delete later
        //     height: auto;
        // }
    }

    &__text {
        color: var(--bg-color);
        font-size: 24px;
        font-weight: 800;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 7;
        user-select: none;
    }

    &--bg {
        z-index: 3000;
        width: 55vw;
        height: 55vw;
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

.gradient-sphere-second {
    z-index: 10;
    width: 55vw;
    height: 55vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 50%;
    opacity: 0.2;
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
