import { getRandomImagePathByTheme } from "@/shared/services/ImageRandomizer";
import { dimOnTheme } from "@/shared/services/ThemeProvider";
import { enumProcessor, is } from "@/shared/services/Core";
import { practiceTheme } from "@/shared/models/practiceTheme";

/*
 * appearance.bgStyle
 * Default background style builder for appearance functions
 * @param {string} themeKey - theme value from practiceTheme enum
 * @param {string} imagePath - path to image
 * @param {string} position - background position - follows css background-position property
 * @param {string} size - background size - follows css background-size property
 * @returns {object} - object with backgroundImage, backgroundPosition and backgroundSize properties
 */
const bgStyle = (
    params = {
        themeKey,
        imagePath,
        position,
        size,
    },
) => {
    const {
        themeKey,
        imagePath = params.imagePath
            ? params.imagePath
            : getRandomImagePathByTheme(themeKey),
        position = "top left",
        size = "150%",
    } = params;

    if (is.undefined(themeKey)) {
        throw new Error("themeKey is required");
    }

    return {
        backgroundImage: `linear-gradient(${dimOnTheme(themeKey)}), url(${imagePath})`,
        backgroundPosition: position,
        backgroundSize: size,
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
    bgStyleByEnumTheme: (params = { theme, bgBuilder }) => {
        const { theme, bgBuilder = bgStyle } = params;

        if (is.undefined(theme)) {
            throw new Error("theme is required");
        }

        let themeKey = enumProcessor.keyByValueToString(practiceTheme, theme);

        return bgBuilder({
            themeKey: themeKey,
        });
    },
    /* appearance.bgStyleByPath
     * Returns object with backgroundImage, backgroundPosition and backgroundSize properties
     * to use it as computed property in Vue component
     * @param {string} theme - theme value from practiceTheme enum
     * @param {string} imagePath - path to image
     * @returns {object} - object with backgroundImage, backgroundPosition and backgroundSize properties
     */
    bgStyleByPath: (params = { theme, imagePath, bgBuilder }) => {
        const { theme, imagePath, bgBuilder = bgStyle } = params;

        if (is.undefined(imagePath)) {
            throw new Error("imagePath is required");
        }

        if (is.undefined(theme)) {
            throw new Error("theme is required");
        }

        let themeKey = enumProcessor.keyByValueToString(
            practiceTheme,
            params.theme,
        );

        return bgBuilder({
            themeKey: themeKey,
            imagePath: params.imagePath,
        });
    },
};

export { appearance };
