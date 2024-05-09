<template>
    <div class="gradient-sphere">
        <div class="gradient-sphere--lines">
            <BreathingLines/>
        </div>  
        <div class="gradient-sphere--text">Practice</div>
        <div class="gradient-sphere--bg"></div>
    </div>
</template>

<script>
export default {
    props: {
        intervals: {
            type: Array,
            required: true,
        },
    },

    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>

</style>