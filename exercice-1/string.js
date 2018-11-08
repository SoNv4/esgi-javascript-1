function uc_first(string) {
    if (string == null)
        return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string){
    if (string == null)
        return "";
    return string.toLowerCase()
        .split(' ')
        .map(string => uc_first(string))
        .join(' ');
}

function camel_case(string) {
    if (string == null)
        return "";
    return capitalize(string)
        .split(' ')
        .join('');
}

function snake_case(string) {
    if (string == null)
        return "";
    return string.toLowerCase()
        .split(' ')
        .join('_');
}

function leet(string) {
    if (string == null)
        return "";
    return string.split('').map(l =>
        {
            switch (l) {
                case 'A':
                case 'a':
                    return 4;
                    break;
                case 'E':
                case 'e':
                    return 3;
                    break;
                case 'I':
                case 'i':
                    return 1;
                    break;
                case 'O':
                case 'o':
                    return 0;
                    break;
                case 'U':
                case 'u':
                    return "(_)";
                    break;
                case 'Y':
                case 'y':
                    return 7;
                    break;
                default:
                    return l;
                    break;
            }
        }
    ).join('')
}

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

function verlan(string) {
    if (string == null)
        return "";
    return string.split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

function yoda(string) {
    if (string == null)
        return "";
    return string.split(' ').reverse().join(' ');
}

function vig(string, key) {
    if (string == null || key == null)
        return "";
    var cryptedString = "";
    for (var i=1; i <= string.length; i++) {
        var alphabetPositionString = string.toUpperCase().charCodeAt(i-1) - 65;
        var alphabetPositionKey = key.toUpperCase().charCodeAt((i-1) % key.length) - 65;
        cryptedString += String.fromCharCode(65+ (alphabetPositionString + alphabetPositionKey) % 26);
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
