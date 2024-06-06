<template>
    <svg
        :width="size"
        viewBox="0 0 793 793"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_f_546_114)">
            <circle
                cx="396.5"
                cy="396.5"
                r="281.5"
                transform="rotate(101.545 396.5 396.5)"
                fill="url(#paint0_linear_546_114)"
            />
            <circle
                cx="396.5"
                cy="396.5"
                r="281.5"
                transform="rotate(101.545 396.5 396.5)"
                fill="url(#paint1_linear_546_114)"
                fill-opacity="0.5"
            />
            <circle
                cx="396.5"
                cy="396.5"
                r="281.5"
                transform="rotate(101.545 396.5 396.5)"
                fill="url(#paint2_linear_546_114)"
                fill-opacity="0.2"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_546_114"
                x="0.944336"
                y="0.944336"
                width="791.111"
                height="791.111"
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
                    result="effect1_foregroundBlur_546_114"
                />
            </filter>
            <linearGradient
                id="paint0_linear_546_114"
                x1="576.5"
                y1="302.5"
                x2="145"
                y2="476.5"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#13D902" />
                <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_546_114"
                x1="583.5"
                y1="232.5"
                x2="263.5"
                y2="594.5"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#0B4983" />
                <stop offset="1" stop-color="white" />
            </linearGradient>
            <linearGradient
                id="paint2_linear_546_114"
                x1="482.5"
                y1="678"
                x2="475.5"
                y2="187.5"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#2956F7" />
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
    },
};
</script>
<style lang="scss"></style>
