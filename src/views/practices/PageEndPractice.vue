<template>
    <div :style="background" class="content end-page">
        <div class="end-page__header">Stay tuned</div>
        <CardWrapper class="end-page__card" :theme="theme">
            <p class="end-page__card--content">Motivation stupid bullshit makes you stronger</p>
            <button :class="`end-page__card--button ${theme}-btn `">Share</button>
        </CardWrapper>
        <div class="end-page__karma-counter">
            <Text>+ 30</Text>
            <KarmaIcon />
        </div>
    </div>
</template>

<script>
import CardWrapper from '@/components/CardWrapper/CardWrapper.vue';
import KarmaIcon from '@/assets/svg/icons/KarmaCoin.svg';
import { getBackgroundByTheme } from '@/shared/services/ThemeProvider';
import { Text } from 'vue';

export default {
    props: {
        theme: {
            type: String,
            required: true,
            default: "base",
        },
    },

    components: {
        CardWrapper,
        KarmaIcon,
    },

    computed: {
        background() {
            const bg = getBackgroundByTheme(this.theme);
            return {
                background: `url('${bg}')`,
                backgroundSize: 'auto auto',
                backgroundPosition: 'top',
            }
        },
    },
};
</script>

<style lang="scss">
.end-page {
    text-align: center;
    color: white;
    height: 100vh;

    &__header {
        padding-top: 1.5em;
        font-size: 2em;
        font-weight: 500;
        text-align: --webkit-center;
        text-align: -moz-center;
    }

    &__card {
        height: 450px;
        margin: 3em 2.5em;

        &--content {
            margin-top: 4.5em;
            padding: 0px 2em;
            font-size: 1.8em;
        }

        &--button {
            margin-top: auto;
        }
    }

    &__karma-counter {
        margin-top: -0.5em;
        font-size: 2em;
        display: flex;
        align-items: center;
        justify-content: center;


        svg {
            width: 55px;
            height: 55px;
        }
    }
}
</style>
