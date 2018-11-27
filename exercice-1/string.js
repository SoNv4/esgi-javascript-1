/**
 *  @param {string} string
 */
function uc_first(string) {
    if (typeof string !== "string")
        return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 *  @param {string} string
 */
function capitalize(string) {
    if (typeof string !== "string")
        return "";
    return string.toLowerCase()
        .split(' ')
        .map(string => uc_first(string))
        .join(' ');
}

function camel_case(string) {
    if (typeof string !== "string")
        return "";
    return capitalize(string)
        .split(' ')
        .join('');
}

/**
 *  @param {string} string
 */
function snake_case(string) {
    if (typeof string !== "string")
        return "";
    return string.toLowerCase()
        .split(' ')
        .join('_');
}

/**
 *  @param {string} string
 */
function leet(string) {
    if (typeof string !== "string")
        return "";
    return string.split('').map(l => {
            switch (l) {
                case 'A':
                case 'a':
                    return 4;
                case 'E':
                case 'e':
                    return 3;
                case 'I':
                case 'i':
                    return 1;
                case 'O':
                case 'o':
                    return 0;
                case 'U':
                case 'u':
                    return "(_)";
                case 'Y':
                case 'y':
                    return 7;
                default:
                    return l;
            }
        }
    ).join('')
}

/**
 *  @param {string} path
 *  @param {object} object
 */
function prop_access(object, path) {
    if (path == null || path === '' || object == null)
        return object;

    const props = path.split('.');
    let property = object;
    props.forEach(function (prop) {
        if (!property.hasOwnProperty(prop)) {
            console.log(path + ' not exist');
            return;
        }
        property = property[prop];
    });
    return property;
}

/**
 *  @param {string} string
 */
function verlan(string) {
    if (typeof string !== "string")
        return "";
    return string.split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

/**
 *  @param {string} string
 */
function yoda(string) {
    if (typeof string !== "string")
        return "";
    return string.split(' ').reverse().join(' ');
}

/**
 *  @param {string} string
 *  @param {string} key
 */
function vig(string, key) {
    if (typeof string !== "string" || typeof string !== "string")
        return "";
    let cryptedString = "";
    for (let i = 1; i <= string.length; i++) {
        const alphabetPositionString = string.toUpperCase().charCodeAt(i - 1) - 65;
        const alphabetPositionKey = key.toUpperCase().charCodeAt((i - 1) % key.length) - 65;
        cryptedString += String.fromCharCode(65 + (alphabetPositionString + alphabetPositionKey) % 26);
    }
    return cryptedString;
}

// console.log(uc_first("hello"));
// console.log(capitalize("hello world"));
// console.log(camel_case("hello world"));
// console.log(snake_case("hello world"));
// console.log(leet("anaconda"));
//
// const object = {};
// object.type = {};
// object.type.name = "Louis";
// console.log(prop_access(object, "type.name"));
//
// console.log(verlan("Hello World"));
// console.log(yoda("Hello World"));
// console.log(vig("wikipedia", "crypto"));
