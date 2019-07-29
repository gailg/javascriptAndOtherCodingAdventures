console.log(`------------------------------------------------------------arrayToList`);
//https://www.codementor.io/avijitgupta/deep-copying-in-js-7x6q8vh5d
function copy(o) {
    var output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
        v = o[key];
        output[key] = (typeof v === "object") ? copy(v) : v;
    }
    return output;
 }
function arrayToList(array){
    if(array.length == 0){
      return null;
    } else {
        let look = array.shift();
        let a;
        if (Array.isArray(look)){
            a = arrayToList(look);
        } else {
            a = look;
        }
        return {a: a, b: arrayToList(array)};
    }
  }
let sangea = [1, 2, [3, 4], 5];
sangea = [1, 2, 3, 4];
let useThisOne = copy(sangea);
let result = arrayToList(useThisOne);
console.log(`-----console.log(result)`);
console.log(result);
console.log(`----------------------------------------------------------print out list`);
function isList(list){
    return (typeof list === "object" && list !== null && list.hasOwnProperty("a") && list.hasOwnProperty("b"));
}
let list = result;
function pretty(list){
    let aPart = isList(list.a) ? pretty(list.a) : list.a;
    let firstPart = "{a: " + aPart + ", ";
    let secondPart = list.b === null ? null : pretty(list.b);
    return firstPart + "b: " + secondPart + "}";
}
console.log(`-----console.log(pretty(result))`);
console.log(pretty(result));

function listToArray(list, beginning){
    let aPart = isList(list.a) ? listToArray(list.a, true) : list.a;
    if (list.b === null) {
        if (beginning){
            return [aPart];
        } else {
            return aPart;
        }
    } else {
        let bPart = listToArray(list.b, false);
        let array;
        if (beginning){
            array = [aPart];
        } else {
            array = aPart;
        }
        array.push(bPart);
        return array;
    }
}


// console.log(`-----console.log(listToArray(result, true))`);
// console.log(listToArray(result, true));

console.log(`--------------------------------------------------------------last line`);
let bobby = {a: {a: 3, b: {a: 4, b: null}}, b: {a: 5, b: null}};