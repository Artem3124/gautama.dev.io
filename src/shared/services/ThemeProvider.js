import * as core from '@/shared/services/Core.js';

const is = core.is;

const backgrounds = { 
    "base": "/src/assets/svg/backgrounds/base-bg.svg",
    "peace": "/src/assets/svg/backgrounds/peace-bg.svg",
    "concentration": "/src/assets/svg/backgrounds/concentration-bg.svg",
    "sleep": "/src/assets/svg/backgrounds/sleep-bg.svg",
}

export const getBackgroundByTheme = (backgroundTheme) => {
    if (!is.string(backgroundTheme) || !backgrounds[backgroundTheme]) {
        return backgrounds["base"];
    }

    return backgrounds[backgroundTheme];
}

