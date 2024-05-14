<template>
    <div style="color: white" class="content end-page">
        <h1 class="end-page__header">Stay tuned</h1>
        <div class="end-page__karma-counter">
            <KarmaIcon /> + 40
        </div>
        <CardWrapper class="end-page__card" :theme="theme">
            <h2 class="end-page__card--content">Motivation stupid bullshit makes you stronger</h2>
            <button :class="`end-page__card--button base-btn ${theme}`">Share</button>
        </CardWrapper>
    </div>
</template>

<script>
import CardWrapper from '@/components/CardWrapper/CardWrapper.vue';
import KarmaIcon from '@/assets/svg/icons/KarmaCoin.svg';

export default {
    props: {
        theme: {
            type: String,
            required: true,
            default: "base",
        },
    },

    components: {
        KarmaIcon,
        CardWrapper,
    },

    data() {
        return {
            id: this.theme,
        };
    },
};

</script>

<style lang="scss">
.end-page {
    text-align: center;
    background: url('/src/assets/svg/mainBaseBackground.svg');
    background-size: auto auto;
    background-position: center;
    height: 100vh;

    &__header {
        padding-top: 3em;
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
        margin-top: 1em;
        font-size: 1.5em;

        svg {
            width: 30px;
            height: 30px;
        }
    }
}
</style>
