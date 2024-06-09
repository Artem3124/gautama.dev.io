<template>
    <svg
        :width="size"
        :style="svgStyles"
        viewBox="0 0 791 791"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_f_545_9)">
            <circle
                cx="395.5"
                cy="395.5"
                r="281.5"
                fill="url(#paint0_linear_545_9)"
            />
            <circle
                cx="395.5"
                cy="395.5"
                r="281.5"
                fill="url(#paint1_linear_545_9)"
                fill-opacity="0.5"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_545_9"
                x="0"
                y="0"
                width="791"
                height="791"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feGaussianBlur
                    :stdDeviation="blur"
                    result="effect1_foregroundBlur_545_9"
                />
            </filter>
            <linearGradient
                id="paint0_linear_545_9"
                x1="535.5"
                y1="266.5"
                x2="206.5"
                y2="570.5"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#5F0E85" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_545_9"
                x1="433.5"
                y1="647"
                x2="425"
                y2="181.5"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#280F71" />
                <stop offset="1" stop-color="white" />
            </linearGradient>
        </defs>
    </svg>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: "100px",
        },
        blur: {
            type: Number,
            default: 30,
            required: true,
        },
        svgStyles: {
            type: Object,
            default: () => ({
                transition: "width 2s, height 2s"
            }),
            required: false,
        },
    },
};
</script>
<style lang="scss"></style>
