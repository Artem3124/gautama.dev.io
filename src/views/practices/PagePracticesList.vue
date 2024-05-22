<template>
    <div class="content practices-list">
        <div class="practices-list-header">
            <h1 style="font-weight: 800; color: white">Select practice</h1>
        </div>
        <div class="practices-list-nav-wrapper">
            <HorizontalNav />
        </div>
        <h2 class="practices-list-subheader" id="Breathing">Breathing</h2>
        <div class="practices-list-container">
            <PracticeBlock
                v-for="(bp, index) in breathingPractices"
                :practice="bp"
                practiceType="breath"
                :id="index"
            />
        </div>
        <h2 class="practices-list-subheader" id="Meditation">Meditation</h2>
        <div class="coming-soon">Coming soon</div>
    </div>
</template>

<script>
import HorizontalNav from "@/components/Practices/List/HorizontalNav.vue";
import PracticeBlock from "@/components/Practices/List/PracticeBlock.vue";
import { breathingPractices } from "@/components/Practices/Breathing/PracticesList";

export default {
    data() {
        return {
            breathingPractices,
        };
    },

    components: {
        HorizontalNav,
        PracticeBlock,
    },
};
</script>

<style lang="scss">
.practices-list {
    background: linear-gradient(
        344deg,
        #cddaf1 0%,
        rgba(111, 159, 252, 1) 22%,
        rgba(192, 214, 251, 1) 50%,
        rgba(184, 207, 249, 1) 72%,
        rgba(139, 174, 240, 1) 92%
    );
    margin-bottom: var(--navbar-height);
}

.practices-list-header {
    width: 100%;
    padding: 18px 24px 10px 24px;
    box-sizing: border-box;
}

.practices-list-container {
    padding: 16px 24px;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
}

.practices-list-subheader {
    margin-left: 24px;
    margin-top: 10px;
    color: white;
    scroll-margin-top: 74px;
    font-weight: 600;
}

.practices-list-nav-wrapper {
    position: sticky;
    top: 10px;
    z-index: 3;
    width: 100%;
    padding: 0 24px 0 24px;
    margin-bottom: 20px;
    box-sizing: border-box;
    transition: 0.5s;

    &--solid-bg {
        background: #7ba4fc;
        padding-bottom: 15px;

        .horizontal-nav__button {
            padding: 6px 12px;
            margin-right: 16px;
            background-color: transparent;
            border: 1px solid rgba(255, 255, 255, 0.397);

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
.coming-soon {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-family: "Cabin";
}
</style>
