const is = {
    number: (n) => typeof n === "number",
    string: (s) => typeof s === "string",
    object: (o) => typeof o === "object",
    array: (a) => Array.isArray(a),
    function: (f) => typeof f === "function",
    undefined: (u) => typeof u === "undefined",
    null: (n) => n === null,
    boolean: (b) => typeof b === "boolean",
};

const enumProcessor = {
    keyByValueToString: (source, key) =>
        Object.keys(source).find((k) => source[k] === key),
};

const array = {
    sum: (arr) => arr.reduce((a, b) => a + b, 0),
};

// extractFromString.number("1234fdasfd") => 1234
// extractFromString.number("fdasfd") => fdasfd
const extractFromString = {
    number: (s) =>
        parseInt(
            Object.values(s)
                .map((c) => (!isNaN(parseInt(c)) ? c : undefined))
                .join(""),
        ),
    string: (s) =>
        Object.values(s)
            .map((c) => (!isNaN(parseInt(c)) ? undefined : c))
            .join(""),
};

const wait = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { is, enumProcessor, array, extractFromString, wait };
