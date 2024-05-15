const is = {
    number: (n) => typeof n === 'number',
    string: (s) => typeof s === 'string',
    object: (o) => typeof o === 'object',
    array: (a) => Array.isArray(a),
    function: (f) => typeof f === 'function',
    undefined: (u) => typeof u === 'undefined',
    null: (n) => n === null,
    boolean: (b) => typeof b === 'boolean',
}

const extractFromString = { 
    number: (s) => parseInt(Object.values(s).map(c => !isNaN(parseInt(c)) ? c : undefined).join('')), 
    string: (s) => Object.values(s).map(c => !isNaN(parseInt(c)) ? undefined : c).join(''),
}

export { 
    is,
    extractFromString,
}
