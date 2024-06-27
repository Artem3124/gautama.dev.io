import * as core from "@/shared/services/Core.js";

const is = core.is;

const backgrounds = {
    base: new URL("@/assets/svg/backgrounds/base-bg.svg", import.meta.url).href,
    peace: new URL("@/assets/svg/backgrounds/peace-bg.svg", import.meta.url)
        .href,
    concentration: new URL(
        "@/assets/svg/backgrounds/concentration-bg.svg",
        import.meta.url,
    ).href,
    sleep: new URL("@/assets/svg/backgrounds/sleep-bg.svg", import.meta.url)
        .href,
};

const dim = {
    base: "rgba(187,188,208, 0.57), rgba(187,188,208, 0.57)",
    peace: "rgba(55, 181, 165, .35), rgba(55, 181, 165, .35)",
    sleep: "rgba(177, 121, 198, 0.41), rgba(177, 121, 198, 0.41)",
    concentration: "rgba(215, 124, 170, .43), rgba(215, 124, 170, .43)",
};

const getBackgroundByTheme = (backgroundTheme) => {
    if (!is.string(backgroundTheme) || !backgrounds[backgroundTheme]) {
        return backgrounds["base"];
    }

    return backgrounds[backgroundTheme];
};
/*
    * dimOnTheme
    returns value to insert in linear-gradient

    * @param {string} theme
    * @returns {string} */
const dimOnTheme = (theme) => {
    if (!dim[theme]) {
        throw new Error(`Unknown theme: ${theme}`);
    }

    return dim[theme];
};

export { getBackgroundByTheme, dimOnTheme };
