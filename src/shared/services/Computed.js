import { getRandomImagePathByTheme } from "@/shared/services/ImageRandomizer";
import { dimOnTheme } from "@/shared/services/ThemeProvider";
import { enumProcessor, is } from "@/shared/services/Core";
import { practiceTheme } from "@/shared/models/practiceTheme";
import { getBackgroundByTheme } from "@/shared/services/ThemeProvider";

/*
 * appearance.bgStyle
 * Default background style builder for appearance functions
 * @param {string} theme - theme value from practiceTheme enum
 * @param {string} imagePath - path to image
 * @param {string} position - background position - follows css background-position property
 * @param {string} size - background size - follows css background-size property
 * @returns {object} - object with backgroundImage, backgroundPosition and backgroundSize properties
 */
const bgImageStyleBuilder = (
    params = {
        theme,
        imagePath,
        position,
        size,
    },
) => {
    const {
        theme,
        imagePath = params.imagePath
            ? params.imagePath
            : getRandomImagePathByTheme(theme),
        position = "top left",
        size = "150%",
    } = params;

    if (is.undefined(theme)) {
        throw new Error("theme is required");
    }

    return {
        backgroundImage: `linear-gradient(${dimOnTheme(theme)}), url(${imagePath})`,
        backgroundPosition: position,
        backgroundSize: size,
    };
};

/* bgStyleBuilder
 * Returns object with backgroundImage, backgroundPosition and backgroundSize properties
 * to use it as computed property in Vue component
 * @param {string} theme - theme value from practiceTheme enum
 * @param {string} bgSize - background size - follows css background-size property
 * @param {string} bgPosition - background position - follows css background-position property
 * @returns {object} - object with backgroundImage, backgroundPosition and backgroundSize properties
 * */
const bgStyleBuilder = (params = { theme, bgSize, bgPosition }) => {
    const {
        theme = practiceTheme.base,
        bgSize = "auto 100vh",
        bgPosition = "top",
    } = params;

    if (is.undefined(theme)) {
        throw new Error("theme is required");
    }

    let bg = getBackgroundByTheme(theme);

    return {
        background: `url('${bg}')`,
        backgroundSize: bgSize,
        backgroundPosition: bgPosition,
    };
};

const appearance = {
    /* appearance.bgStyle
     * Returns object with backgroundImage, backgroundPosition and backgroundSize properties
     * to use it as computed property in Vue component
     *
     * @param {string} themeEnumValue - theme value from practiceTheme enum
     * @returns {object} - object with backgroundImage, backgroundPosition and backgroundSize properties
     */
    bgByEnumTheme: (params = { theme, styleBuilder, builderParams }) => {
        const {
            theme,
            styleBuilder = bgImageStyleBuilder,
            builderParams,
        } = params;

        if (is.undefined(theme)) {
            throw new Error("theme is required");
        }

        // let themeKey = enumProcessor.keyByValueToString(practiceTheme, theme);

        return styleBuilder({
            theme: theme,
            ...builderParams,
        });
    },
    /* appearance.bgStyleByPath
     * Returns object with backgroundImage, backgroundPosition and backgroundSize properties
     * to use it as computed property in Vue component
     * @param {string} theme - theme value from practiceTheme enum
     * @param {string} imagePath - path to image
     * @returns {object} - object with backgroundImage, backgroundPosition and backgroundSize properties
     */
    bgStyleByPath: (params = { theme, imagePath, styleBuilder }) => {
        const { theme, imagePath, styleBuilder = bgImageStyleBuilder } = params;

        if (is.undefined(imagePath)) {
            throw new Error("imagePath is required");
        }

        if (is.undefined(theme)) {
            throw new Error("theme is required");
        }

        return styleBuilder({
            theme: theme,
            imagePath: params.imagePath,
        });
    },
};

export { appearance, bgStyleBuilder, bgImageStyleBuilder };
