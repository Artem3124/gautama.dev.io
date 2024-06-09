<template>
    <svg
        :width="size"
        :style="svgStyles"
        viewBox="0 0 792 792"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_f_546_33)">
            <circle
                cx="395.979"
                cy="395.979"
                r="281.5"
                fill="url(#paint0_linear_546_33)"
            />
            <circle
                cx="395.979"
                cy="395.979"
                r="281.5"
                fill="url(#paint1_linear_546_33)"
                fill-opacity="0.5"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_546_33"
                x="0.479492"
                y="0.479492"
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
                    result="effect1_foregroundBlur_546_33"
                />
            </filter>
            <linearGradient
                id="paint0_linear_546_33"
                x1="535.98"
                y1="266.98"
                x2="206.979"
                y2="570.979"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#8000AD" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_546_33"
                x1="433.98"
                y1="647.48"
                x2="425.48"
                y2="181.979"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FFBC0F" />
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

