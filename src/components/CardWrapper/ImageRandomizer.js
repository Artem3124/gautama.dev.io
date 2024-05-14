const images = {
    "base": [ "/src/assets/img/image.png", "/src/assets/img/end-base.jpeg"],
    "piece": [ "" ],
    "concentation": [ "" ],
}

export const getRandomImagePathByTheme = (imageTheme) => { 
    const min = 0;
    const max = images[imageTheme].length - 1;
    return images[imageTheme][Math.floor(Math.random() * (max - min + 1)) + min]; 
};

