<template>
    <main class="content main-bg">
        <div class="main-screen">
            <div class="main-screen__karma-counter">
                <KarmaCounter
                    :content="`${karma}`"
                    :formerIcon="true"
                    :height="'70px'"
                    :distance="'0.5em'"
                    class="karma-counter"
                />
            </div>
            <div class="main-screen__gradient-sphere">
                <GradientSphere
                    :blur="20"
                    :size="'20em'"
                    :theme="practiceTheme.base"
                    @click="openPractice"
                    class="main-screen__sphere"
                >
                    Base Practice
                </GradientSphere>
            </div>
        </div>
    </main>
</template>

<script>
import GradientSphere from "@/shared/components/GradientSphere.vue";
import KarmaCounter from "@/shared/components/KarmaCounter.vue";
import { practiceTheme } from "@/shared/models/practiceTheme";

export default {
    components: {
        KarmaCounter,
        GradientSphere,
    },
    data() {
        return {
            practiceTheme,
            karma: 100,
        };
    },
    methods: {
        openPractice() {
            this.$router.push({ name: "breath", params: { id: 0 } });
        },
    },
};
</script>

<style lang="scss">
.main-screen {
    width: 100%;
    height: 100vh;

    &__gradient-sphere {
        display: flex;
        align-items: center;
        margin-top: 17em;
        justify-content: center;

        &__sphere {
            cursor: pointer;
        }
    }

    &__karma-counter {
        padding-top: 2em;
        color: white;
    }
}

.index-page-container {
    border-radius: 15px 15px 0 0;
    margin-top: -15px;
    padding: 30px 12px 20px 12px;
    box-sizing: border-box;
    height: 100vh;

    &--shtorka {
        width: 65px;
        height: 5px;
        border-radius: 5px;
        content: "";
        background-color: rgb(231, 231, 231);
        display: flex;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 4px;
        margin-bottom: 15px;
    }
}
</style>
