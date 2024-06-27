const images = {
    base: [
        new URL("@/assets/img/end-base1.png", import.meta.url).href,
        new URL("@/assets/img/end-base.jpeg", import.meta.url).href,
    ],
    peace: [
        new URL("@/assets/img/end-peace.png", import.meta.url).href,
        new URL("@/assets/img/end-peace.png", import.meta.url).href,
    ],
    concentration: [
        new URL("@/assets/img/end-concentration.png", import.meta.url).href,
        new URL("@/assets/img/end-concentration1.png", import.meta.url).href,
    ],
    sleep: [
        new URL("@/assets/img/end-sleep.png", import.meta.url).href,
        new URL("@/assets/img/end-sleep1.png", import.meta.url).href,
    ],
};

export const getRandomImagePathByTheme = (imageTheme) => {
    const min = 0;
    const max = images[imageTheme].length - 1;
    return images[imageTheme][
        Math.floor(Math.random() * (max - min + 1)) + min
    ];
};
