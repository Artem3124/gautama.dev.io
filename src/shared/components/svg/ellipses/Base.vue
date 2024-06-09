<template>
    <svg
        :width="size"
        :style="svgStyles"
        viewBox="0 0 791 791"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_f_542_4)">
            <circle
                cx="395.501"
                cy="395.503"
                r="281.5"
                fill="url(#paint0_linear_542_4)"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_542_4"
                x="0.000976562"
                y="0.00292969"
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
                    result="effect1_foregroundBlur_542_4"
                />
            </filter>
            <linearGradient
                id="paint0_linear_542_4"
                x1="114.001"
                y1="379.503"
                x2="421.501"
                y2="677.003"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FBFAFF" />
                <stop offset="1" stop-color="#5988DB" />
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
            required: true,
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
