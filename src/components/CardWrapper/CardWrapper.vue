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
                backgroundImage: `url('${this.imagePath}')`,
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
    background-image: url('../../assets/img/image.png');
    background-size: cover;
    background-position: center;
}
</style>
