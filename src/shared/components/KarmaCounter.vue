<template>
    <div class="karma-counter">
        <KarmaIcon :style="icon" v-if="formerIcon" />
        <div :style="text">{{ this.content }}</div>
        <KarmaIcon :style="icon" v-if="!formerIcon" />
    </div>
</template>

<script>
import KarmaIcon from '@/assets/svg/icons/KarmaCoin.svg';
import { extractFromString } from '@/shared/services/Core';

const fontSizeCoef = 0.6;

const getRelativeSize = (value) => {
    return value * fontSizeCoef;
}

export default {
    props: {
        // content: The content of the counter
        content: {
            type: String,
            required: true,
            default: "inputText",
        },
        // formerIcon: The icon that will be displayed before the content
        formerIcon: {
            type: Boolean,
            required: false,
            default: true,
        },
        // height: The height of the counter
        height: {
            type: String,
            required: false,
            default: "55px",
        },
        // distance: The distance between the icon and the content
        distance: {
            type: String,
            required: false,
            default: "0em",
        },
    },

    components: {
        KarmaIcon,
    },

    computed: {
        icon() {

            let padding = {
                paddingLeft: this.distance,
            }

            if (this.formerIcon) {
                padding = {
                    paddingRight: this.distance,
                }
            }

            return {
                ...padding,
                width: this.height,
                height: this.height,
            }
        },

        text() {

            let elementValue = extractFromString.number(this.height);
            let elementType = extractFromString.string(this.height);

            return {
                fontSize: getRelativeSize(elementValue) + elementType,
            }
        }
    }

}
</script>

<style lang="scss">
.karma-counter {
    margin-top: -0.5em;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
