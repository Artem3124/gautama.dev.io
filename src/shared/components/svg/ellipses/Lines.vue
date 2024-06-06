<template>
    <svg
        :width="size"
        :style="svgStyles"
        viewBox="0 0 664 664"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_f_545_10)">
            <circle
                cx="332.19"
                cy="332.19"
                r="321.5"
                transform="rotate(26.9079 332.19 332.19)"
                stroke="white"
                stroke-width="10"
                stroke-miterlimit="2.3662"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="400 300"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_545_10"
                x="0.686523"
                y="0.686035"
                width="663.008"
                height="663.008"
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
                    stdDeviation="2.5"
                    result="effect1_foregroundBlur_545_10"
                />
            </filter>
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
