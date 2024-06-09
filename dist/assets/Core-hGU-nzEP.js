const s = {
        number: (e) => typeof e == "number",
        string: (e) => typeof e == "string",
        object: (e) => typeof e == "object",
        array: (e) => Array.isArray(e),
        function: (e) => typeof e == "function",
        undefined: (e) => typeof e > "u",
        null: (e) => e === null,
        boolean: (e) => typeof e == "boolean",
    },
    a = {
        keyByValueToString: (e, n) => Object.keys(e).find((t) => e[t] === n),
    },
    o = { sum: (e) => e.reduce((n, t) => n + t, 0) },
    r = {
        number: (e) =>
            parseInt(
                Object.values(e)
                    .map((n) => (isNaN(parseInt(n)) ? void 0 : n))
                    .join(""),
            ),
        string: (e) =>
            Object.values(e)
                .map((n) => (isNaN(parseInt(n)) ? n : void 0))
                .join(""),
    },
    i = async (e) => new Promise((n) => setTimeout(n, e));
export { o as a, r as b, a as e, s as i, i as w };
