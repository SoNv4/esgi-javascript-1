String.prototype.ucfirst = function ucfirst() {
    return this.valueOf().charAt(0).toUpperCase() + this.valueOf().slice(1);
};

String.prototype.vig = function vig(key) {
    if (typeof key !== "string")
        return this.valueOf();

    let cryptedString = "";
    let space = 0;
    for (let i = 1; i <= this.valueOf().length; i++) {
        if (this.valueOf()[i - 1] === " ") {
            cryptedString += " ";
            space++;
            continue;
        }
        const alphabetPositionString = this.valueOf().toUpperCase().charCodeAt(i - 1) - 65;
        const alphabetPositionKey = key.toUpperCase().charCodeAt((i - 1 - space) % key.length) - 65;
        cryptedString += String.fromCharCode(65 + (alphabetPositionString + alphabetPositionKey) % 26);
    }
    return cryptedString.toLowerCase();
};

// Object.prototype.prop_acces =  function prop_access(path) {
//     if (path == null || path === '')
//         return this;
//     const props = path.split('.');
//     let property = this;
//     props.forEach(function (prop) {
//         if (!property.hasOwnProperty(prop)) {
//             console.log(path + ' not exist');
//             return;
//         }
//         property = property[prop];
//     });
//     return property;
// };

// console.log("ma chaine".ucfirst());
// console.log("wikipedia".vig("crypto"));

// const object = {};
// object.type = {};
// object.type.name = "Louis";
// console.log(object.prop_access("type.name"));
