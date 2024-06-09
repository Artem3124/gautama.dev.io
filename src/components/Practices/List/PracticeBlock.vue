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
                    <div>{{ themeMap[practice.theme] }}</div>
                    <div class="practice-list-block__duration">
                        <div class="practice-list-block__icon-wrap">
                            <ClockIcon
                                class="practice-list-block__icon--clock"
                            />
                        </div>
                        <div>{{ duration }} min.</div>
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
        :imagePath="practice.imagePath"
        :togglePopup="() => togglePopup('buttonTrigger')"
    >
        <template #practice-name>
            {{ practice.name }}
        </template>
        <template #practice-description>
            {{ practice.description }}
        </template>
        <template #practice-duration> {{ duration }} m. </template>
        <template #practice-rewards>
            {{ practice.reward }}
        </template>
    </PracticeInfo>
</template>

<script>
import PlayButton from "@/assets/icons/PlayButton.svg";
import ClockIcon from "@/assets/icons/Clock.svg";
import PracticeInfo from "@/components/Practices/List/PracticeInfo.vue";
import { array } from "@/shared/services/Core";
import { ref } from "vue";
import { appearance } from "@/shared/services/Computed";

const getDuration = (pattern, reps) => {
    return ((array.sum(pattern) * reps) / 60).toFixed(1);
};

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
            return appearance.bgStyleByPath({
                theme: this.practice.theme,
                imagePath: this.practice.imagePath,
            });
        },
        duration() {
            return getDuration(this.practice.pattern, this.practice.reps);
        },

        themeMap() {
            return {
                base: "Base",
                concentration: "Concentration",
                peace: "Peace",
                sleep: "Sleep",
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
    transition: all 0.2s ease-in-out;

    &:hover {
        background-size: 160% !important;
    }

    &:active {
        transform: scale(0.97);
    }

    &__content {
        padding: 20px 20px 10px 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }

    &__link {
        display: inline-block;
        position: absolute;
        bottom: 20px;
        right: 20px;
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
        font-size: 1.2em;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 4px;
        align-items: end;
        font-weight: 300;
    }

    &__duration {
        width: 119%;
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
