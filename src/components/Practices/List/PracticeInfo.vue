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
                <div class="practice-info__card__content__stats">
                    <div class="practice-info__card__content__stats__block">
                        <ClockIcon
                            class="practice-info__card__content__stats__block__icon"
                        />

                        <div
                            class="practice-info__card__content__stats__block-wrap"
                        >
                            <slot
                                name="practice-duration"
                                class="practice-info__card__content__stats__block-slot"
                            ></slot>
                        </div>
                    </div>
                    <div class="practice-info__card__content__stats__block">
                        <KarmaIconNoBg
                            class="practice-info__card__content__stats__block__icon"
                        />
                        <div
                            class="practice-info__card__content__stats__block-wrap"
                        >
                            <slot
                                name="practice-rewards"
                                class="practice-info__card__content__stats__block-slot"
                            ></slot>
                        </div>
                    </div>
                </div>
                <router-link
                    @click="togglePopup()"
                    :to="{ name: practiceType, params: { id: practice.id } }"
                >
                    <div
                        :class="`practice-info__card__content__button-start ${practice.theme}-btn`"
                    >
                        Start Practice
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { appearance } from "@/shared/services/Computed";
import BackToPage from "@/assets/svg/icons/BackToPage.svg";
import ClockIcon from "@/assets/icons/Clock.svg";
import KarmaIconNoBg from "@/assets/svg/icons/KarmaIconNoBg.svg";

export default {
    props: {
        practice: {
            type: Object,
            required: true,
        },
        practiceType: { 
            type: String,
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
        KarmaIconNoBg,
    },

    data() {
        return {
            id: this.practice.id,
        };
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

            &__stats {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1em;

                &__block {
                    font-size: 16px;
                    font-weight: 400;
                    text-align: center;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(0.5em);
                    border-radius: 0.5em;
                    margin-right: 1em;
                    width: -webkit-fill-available;
                    padding: 0.5em 1em;

                    &:last-child {
                        margin-right: 0;
                    }

                    &-wrap {
                        font-size: 2em;
                        height: fit-content;
                        width: fit-content;
                    }

                    &__icon {
                        width: 2em;
                        height: auto;
                    }
                }
            }

            &__button-start {
                border-radius: 0.5em;
                text-align: center;
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
