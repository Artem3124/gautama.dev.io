<template>
    <!-- Provide global themes for block-themes -->
    <div class="card-wrapper" :style="cssProperties" :class="`block-theme-${theme}`">
        <h1>Current theme is {{ theme }}</h1>
        <h1>{{this.imagePath}}</h1>
    <slot></slot>
    </div>
</template>

<script>
import { getRandomImagePathByTheme } from './ImageRandomizer';

const dimOnTheme = (theme) => { 
    const result = {
        base: 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)',
        piece: 'darkTheme',
        concentation: 'lightTheme',
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
        imagePath() {
            return this.backgroundImagePath ? this.backgroundImagePath : getRandomImagePathByTheme(this.theme);
        },
        cssProperties() {
            return {
                backgroundImage: `linear-gradient(${dimOnTheme(this.theme)}), url('${this.imagePath}')`,
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
