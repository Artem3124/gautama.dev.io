<template>
    <!-- Provide global themes for block-themes -->
    <div class="card-wrapper" :style="cssProperties" :class="`block-theme-${theme}`">
        <slot></slot>
    </div>
</template>

<script>
import { getRandomImagePathByTheme } from '@/shared/services/ImageRandomizer.js';

const dimOnTheme = (theme) => {
    const result = {
        base: 'rgba(187,188,208, 0.57), rgba(187,188,208, 0.57)',
        peace: 'rgba(55, 181, 165, .35), rgba(55, 181, 165, .35)',
        sleep: 'rgba(177, 121, 198, 0.41), rgba(177, 121, 198, 0.41)',
        concentration: 'rgba(215, 124, 170, .43), rgba(215, 124, 170, .43)',
    };

    if (!result[theme]) {
        throw new Error(`Unknown theme: ${theme}`);
    }

    return result[theme];
}

export default {
    props: {
        theme: {
            type: String,
            required: true,
        },
        backgroundImagePath: {
            type: String,
            required: false,
            default: null,
        },
    },

    computed: {
        cssProperties() {
            const imagePath = this.backgroundImagePath ? this.backgroundImagePath : getRandomImagePathByTheme(this.theme);
            return {
               backgroundImage: `linear-gradient(${dimOnTheme(this.theme)}), url('${imagePath}')`,
            }
        },
    },
}

</script>

<style>
.card-wrapper {
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
}
</style>
