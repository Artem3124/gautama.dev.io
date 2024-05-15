<template>
    <div class="content activities-page main-bg">
        <div class="activities-page--header">Earn Karma</div>
        <KarmaCounter 
            :content="'374'" 
            :formerIcon="true" 
            :height="'70px'" 
            :distance="'0.5em'"
            class="activities-page--counter"
        />
        <div class="activities-page__body">
            <div class="activities-page__body--list-heading">Daily Tasks</div>
            <div class="activities-page__body--list-heading">Daily Tasks</div>
        </div>
    </div>
</template>

<script>
import KarmaCounter from '@/shared/components/KarmaCounter.vue';

export default {
    components: {
        KarmaCounter
    }
}

</script>

<style lang="scss">
.activities-page {
    height: 300vh;
    color: #FFFCF0;

    &--header {
        padding-top: 1em;
        font-weight: 600;
        text-align: center;
        font-size: 2em;
    }

    &__body {
        padding: 0em 2em;

        &--list-heading {
            padding-top: 1em;
            font-weight: 600;
            font-size: 1.5em;
        }
    }

    &--counter {
        color: white;
        padding-top: 1.5em;
    }
}
</style>
