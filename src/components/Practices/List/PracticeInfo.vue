<template>
    <div class="practice-info">
        <div class="practice-info__card" :style="bgStyle">
            <BackToPage
                @click="togglePopup()"
                class="practice-info__card__back"
            />
            <div class="practice-info__card__content">
                <div class="practice-info__card__content__name">
                    <slot
                        name="practice-name"
                        class="practice-info__card__content__name-slot"
                    ></slot>
                </div>
                <div class="practice-info__card__content__description">
                    <slot
                        name="practice-description"
                        class="practice-info__card__content__description-slot"
                    ></slot>
                </div>
                <div class="practice-info__card__content__block">
                    <ClockIcon
                        class="practice-info__card__content__block__icon"
                    />

                    <div class="practice-info__card__content__block-wrap">
                        <slot
                            name="practice-duration"
                            class="practice-info__card__content__block-slot"
                        ></slot>
                    </div>
                </div>
                <div class="practice-info__card__content__block">
                    <ClockIcon
                        class="practice-info__card__content__block__icon"
                    />
                    <slot
                        name="practice-rewards"
                        class="practice-info__card__content__rewards-slot"
                    ></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { appearance } from "@/shared/services/Computed";
import BackToPage from "@/assets/svg/icons/BackToPage.svg";
import ClockIcon from "@/assets/icons/Clock.svg";

export default {
    props: {
        practice: {
            type: Object,
            required: true,
        },
        imagePath: {
            tyep: String,
            required: true,
        },
        togglePopup: {
            type: Function,
            required: true,
        },
    },

    components: {
        BackToPage,
        ClockIcon,
    },

    computed: {
        bgStyle() {
            return appearance.bgStyleByPath({
                theme: this.practice.theme,
                imagePath: this.imagePath,
            });
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
    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    &__card {
        padding: 1em 2em;
        border-radius: 15px;
        max-width: 408px;
        color: #fffcf0;

        &__back {
            cursor: pointer;
            svg {
                height: 24px;
            }
        }

        &__content {
            margin-top: 1em;
            display: flex;
            flex-direction: column;

            &__name {
                font-size: 48px;
                font-weight: 400;
                text-align: left;
            }

            &__description {
                font-size: 16px;
                margin-top: 1em;
                font-weight: 100;
                text-align: left;
                margin-bottom: 5em;
            }

            &__block {
                font-size: 16px;
                font-weight: 400;
                text-align: center;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                background: rgb(255, 255, 255, 0.2);
                backdrop-filter: blur(0.5em);
                border-radius: 1em;
                margin-bottom: 1em;
                padding: 0.5em 1em;

                &-wrap {
                    font-size: 2em;
                    height: fit-content;
                    width: fit-content;
                }

                &__icon {
                    width: 4em;
                    height: auto;
                }
            }

            &__rewards {
                margin-top: 1em;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                &-main {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                &-description {
                    margin-top: 0.5em;
                    font-size: 16px;
                    font-weight: 400;
                    text-align: center;
                }
            }
        }
    }
}
</style>
