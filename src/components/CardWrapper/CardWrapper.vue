
<template>
    <!-- Provide global themes for block-themes -->
    <div class="card-wrapper" :class="`block-theme-${theme}`">
        <h1>Current theme is {{ theme }}</h1>
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
        backgroundImage: { 
            type: String, 
            required: false,
        },
    },

    data() {
        return {
            imagePath: getRandomImagePathByTheme(this.theme),
        }
    },
}
</script>

<style>
.card-wrapper {
    background: url(this.imagePath);
    background-color: red;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
