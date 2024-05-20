<template>
    <div class="practice-list-block" :style="cardBgStyle">
        <div class="practice-list-block__content">
            <div
                class="practice-list-block__name"
                @click="() => togglePopup('buttonTrigger')"
            >
                {{ practice.name }}
            </div>
            <div class="practice-list-block__info">
                <div>
                    <div>{{ practice.theme }}</div>
                    <div class="practice-list-block__duration">
                        <div class="practice-list-block__icon-wrap">
                            <ClockIcon
                                class="practice-list-block__icon--clock"
                            />
                        </div>
                        <div>{{ practice.duration }}</div>
                    </div>
                </div>
                <router-link
                    class="router-link-no-style practice-list-block__link"
                    :to="{ name: practiceType, params: { id } }"
                >
                    <div class="practice-list-block__icon-wrap">
                        <PlayButton class="practice-list-block__icon--play" />
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <PracticeInfo
        v-if="popupTriggers.buttonTrigger"
        :practice="practice"
        :togglePopup="() => togglePopup('buttonTrigger')"
    >
        <h2>My Button PracticeInfo</h2>
    </PracticeInfo>
</template>

<script>
import PlayButton from "@/assets/icons/PlayButton.svg";
import ClockIcon from "@/assets/icons/Clock.svg";
import PracticeInfo from "@/components/Practices/List/PracticeInfo.vue";
import { getRandomImagePathByTheme } from "@/shared/services/ImageRandomizer";
import { practiceTheme } from "@/shared/models/practiceTheme";
import { enumProcessor } from "@/shared/services/Core";
import { ref } from "vue";

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
        id: {
            type: Number,
            required: true,
        },
    },

    components: {
        PlayButton,
        ClockIcon,
        PracticeInfo,
    },

    computed: {
        cardBgStyle() {
            return {
                backgroundImage: `url(${getRandomImagePathByTheme(enumProcessor.keyByValueToString(practiceTheme, this.practice.theme))})`,
            };
        },
    },

    setup() {
        const popupTriggers = ref({
            buttonTrigger: false,
            timedTrigger: false,
        });

        const togglePopup = (trigger) => {
            popupTriggers.value[trigger] = !popupTriggers.value[trigger];
        };

        return {
            PracticeInfo,
            popupTriggers,
            togglePopup,
        };
    },
};
</script>

<style lang="scss">
.practice-list-block {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.055);
    background-repeat: no-repeat;
    border-radius: 15px;
    color: white;
    overflow: hidden;
    user-select: none;
    background-position: top left;
    background-size: 150%;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-size: 160%;
    }

    &:active {
        transform: scale(0.97);
    }

    &__content {
        padding: 20px 20px 10px 20px;
        // background-color: #00000020;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }

    &__link {
        display: inline-block;
        position: relative;
        z-index: 1;
        padding: 2em 0em 0 2em;
    }

    &__name {
        box-sizing: border-box;
        font-size: 1.5em;
        font-weight: 600;
        font-family: "Cabin";
        flex-grow: 1;
    }

    &__info {
        font-size: 1.6em;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 4px;
        align-items: end;
        font-weight: 300;
    }

    &__duration {
        width: 119%;
        justify-content: space-between;
        margin-top: 2px;
        display: flex;
    }

    &__icon-wrap {
        display: flex;
        align-items: center;
    }

    &__icon {
        width: 1em;
        height: auto;

        &--clock {
            @extend .practice-list-block__icon;
            margin-right: 2px;
        }

        &--play {
            @extend .practice-list-block__icon;
            margin-bottom: 2px;
        }
    }

    &__delimiter {
        width: 100%;
        height: 2px;
        border-radius: 5px;
        content: "";
        background-color: white;
    }
}
</style>
