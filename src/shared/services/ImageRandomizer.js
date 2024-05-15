const images = {
    "base": [ "/src/assets/img/end-base1.png", "/src/assets/img/end-base.jpeg"],
    "peace": [ "/src/assets/img/end-peace.png", "/src/assets/img/end-peace.png" ],
    "concentration": [ "/src/assets/img/end-concentration.png", "/src/assets/img/end-concentration1.png" ],
    "sleep": [ "/src/assets/img/end-sleep.png", "/src/assets/img/end-sleep1.png" ],
}

export const getRandomImagePathByTheme = (imageTheme) => { 
    const min = 0;
    const max = images[imageTheme].length - 1;
    return images[imageTheme][Math.floor(Math.random() * (max - min + 1)) + min]; 
};

