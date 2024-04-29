<template>
    <main class="content">
        <MainScreen />
        <div class="index-page-container">
            <!-- <div class="index-page-container--shtorka"></div> -->
            <ActivitiesSelector />
        </div>
    </main>
</template>

<script>
import MainScreen from '../components/MainScreen.vue';
import ActivitiesSelector from '../components/ActivitiesSelector.vue';

export default {
    components: {
        MainScreen,
        ActivitiesSelector,
    }
}
</script>

<style lang="scss">
.index-page-container {
    border-radius: 15px 15px 0 0;
    background-color: var(--bg-color);
    margin-top: -15px;
    padding: 30px 12px 20px 12px;
    box-sizing: border-box;

    &--shtorka {
        width: 65px;
        height: 5px;
        border-radius: 5px;
        content: '';
        background-color: rgb(231, 231, 231);
        display: flex;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 4px;
        margin-bottom: 15px;
    }
}
</style>