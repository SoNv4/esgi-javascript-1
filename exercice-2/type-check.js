function type_check_v1(value, type) {
    return typeof value === type;

}

/**
 *  @param {object} value
 *  @param {object} check
 */
function type_check_v2(value, check) {
    let valid = true;
    if (typeof check !== "object")
        return false;
    if (check.type != null && typeof value !== check.type)
        valid = false;
    if (check.value != null && value !== check.value)
        valid = false;
    if (check.enum != null && value !== check.enum.length)
        valid = false;
    return valid;
}

console.log(type_check_v1(1, "number"));


console.log(type_check_v2({prop1:1}, {type:"object"}));
console.log(type_check_v2("foo", {type:"string", value:"foo"}));
console.log(type_check_v2("bar", {type:"string", value:"foo"}));
console.log(type_check_v2(3, {enum:["foo", "bar", 3]}));
