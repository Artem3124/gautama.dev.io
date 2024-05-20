<template>
    <div class="practice-info">
        <div class="practice-info__card">
            <div class="practice-info__card__content">
                <slot
                    name="practice-name"
                    class="practice-info__card__content__name"
                    >{{ practice.name }}</slot
                >
                <slot
                    name="practice-description"
                    class="practice-info__card__content__description"
                    >{{ practice.description }}</slot
                >
                <div class="practice-info__card__content__duration"></div>
                <slot
                    name="practice-duration"
                    class="practice-info__card__content__"
                    >{{ practice.name }}</slot
                >
                <div class="practice-info__card--statisctics">
                    <div>
                        <slot
                            name="practice-statistics-number"
                            class="practice-info__name"
                            >{{ practice.name }}</slot
                        >
                        <slot
                            name="practice-statistics-cu"
                            class="practice-info__name"
                            >{{ practice.name }}</slot
                        >
                    </div>
                    <div>
                        <slot
                            name="practice-statistics-name"
                            class="practice-info__name"
                            >{{ practice.name }}</slot
                        >
                        <slot
                            name="practice-statistics-description"
                            class="practice-info__name"
                            >{{ practice.name }}</slot
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="practice-info-content">
            <slot />
            <button class="popup-close" @click="togglePopup()">
                Close Popup
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        practice: {
            type: Object,
            required: true,
        },
        togglePopup: {
            type: Function,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.practice-info {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    .practice-info {
        background: #fff;
        padding: 32px;
    }
}
</style>
