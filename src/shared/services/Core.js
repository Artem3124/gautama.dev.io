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

export { is, enumProcessor, array };
