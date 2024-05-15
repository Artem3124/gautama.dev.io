<template>
    // background, underLine, itemDistance are the props that can be passed to the component
    // insert logic varies here
    <div class="">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: { 
        background: {
            type: Boolean,
            required: false,
            default: false,
        },
        underLine: {
            type: Boolean,
            required: false,
            default: false,
        },
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
