<template>
    <div
        style="color: white"
        class="content"
    >
        <CardWrapper
            style="height: 300px"
            :theme="theme"
        >
            <p>Card wrapper has wrapped me!</p>
        </CardWrapper>
    </div>
</template>

<script>
import CardWrapper from '@/components/CardWrapper/CardWrapper.vue';

export default {

    components: {
        CardWrapper
    },
    props: {
        theme: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            id: this.theme,
        };
    },
};

</script>

<style>
.base-theme {}

.piece-theme {}

.concentration-theme {}
</style>
