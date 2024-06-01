<template>
    <div class="breath-ellipse">
        <svg
            :width="size"
            viewBox="0 0 791 791"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_0_1)">
                <circle
                    cx="395.5"
                    cy="395.5"
                    r="281.5"
                    fill="url(#paint0_linear_0_1)"
                />
            </g>
            <g filter="url(#filter1_f_0_1)">
                <circle
                    cx="395.189"
                    cy="395.19"
                    r="321.5"
                    transform="rotate(26.9079 395.189 395.19)"
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
                    id="filter0_f_0_1"
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
                        stdDeviation="57"
                        result="effect1_foregroundBlur_0_1"
                    />
                </filter>
                <filter
                    id="filter1_f_0_1"
                    x="63.6855"
                    y="63.6865"
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
                        result="effect1_foregroundBlur_0_1"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_0_1"
                    x1="114"
                    y1="379.5"
                    x2="421.5"
                    y2="677"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#FBFAFF" />
                    <stop offset="1" stop-color="#5988DB" />
                </linearGradient>
            </defs>
        </svg>
        <div class="breath-ellipse__slot">
            <slot class="breath-ellipse__slot" name="content"> </slot>
        </div>
        <svg
            width="792"
            height="792"
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
                        stdDeviation="57"
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
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: "100px",
        },
    },
};
</script>

<style lang="scss">
.breath-ellipse {
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2;

    &__slot {
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
        font-weight: 800;
        color: var(--bg-color);
    }
}
</style>
