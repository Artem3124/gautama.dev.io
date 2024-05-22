<template>
    <main class="content">
        <div class="main-bg main-screen">
            <MainScreen />
        </div>
    </main>
</template>

<script>
import MainScreen from "@/components/MainScreen/MainScreen.vue";

export default {
    components: {
        MainScreen,
    },
};
</script>

<style lang="scss">
.main-screen {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
