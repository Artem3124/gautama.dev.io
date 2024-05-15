<template>
    <div>

    </div>
</template>

<script>
export default {
    props: { 
        // items: The items that will be displayed
        items: {
            type: Array,
            required: true,
            default: [],
        },
        // itemHeight: The height of the items
        itemHeight: {
            type: String,
            required: false,
            default: "55px",
        },
        // itemWidth: The width of the items
        itemWidth: {
            type: String,
            required: false,
            default: "55px",
        },
        // itemDistance: The distance between the items
        itemDistance: {
            type: String,
            required: false,
            default: "0em",
        },
    },
}
</script>

<style>

</style>
