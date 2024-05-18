<template>
    <router-link class="router-link-no-style" :to="{ name: practiceType, params: { id }}">
        <div class="practice-list-block" :style="`background-image: url(/images/${practice.image})`">
            <div class="practice-list-block__content">
                <div class="practice-list-block__name">
                    {{ practice.name }}
                </div>
                <div class="practice-list-block__info">
                    <div>
                        <div>{{ practice.category }}</div>
                        <div class="practice-list-block__duration">
                            <div><ClockIcon class="practice-list-block__clock-icon" /></div>
                            <div>{{ practice.duration }}</div>
                        </div>
                    </div>
                    <div><PlayButton class="practice-list-block__play-icon" /></div>
                </div>
                <!-- <div class="practice-list-block__delimiter"></div> -->
            </div>
        </div>
    </router-link>
</template>

<script>
import PlayButton from '@/assets/icons/PlayButton.svg';
import ClockIcon from '@/assets/icons/Clock.svg';

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
        }
    },

    components: {
        PlayButton,
        ClockIcon,
    }
}
</script>

<style lang="scss">
.practice-list-block {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.055);
    background-repeat: no-repeat;
    background-position: 50% center;
    border-radius: 15px;
    color: white;
    overflow: hidden;
    user-select: none;
    background-size: 100%;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-size: 105%;
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

    &__name {
        box-sizing: border-box;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Cabin';
        flex-grow: 1;
    }

    &__info {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 4px;
        align-items: end;
    }

    &__duration {
        margin-top: 2px;
        display: flex;
    }

    &__clock-icon {
        margin-right: 2px;
        width: 18px;
        height: auto;
    }

    &__play-icon {
        width: 18px;
        height: auto;
        margin-bottom: 2px;
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