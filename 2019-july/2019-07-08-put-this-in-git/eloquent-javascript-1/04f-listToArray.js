
console.log(`------------------------------------------------------------listToArray`);
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
let amy = [1, 2, [3, 4], 5];
// amy = [1, 2, 3, 4];
let useThisOne = copy(amy);
let lawrence = arrayToList(useThisOne);
console.log(`-----console.log(amy)`);
console.log(amy);
console.log(`-----console.log(lawrence)`);
console.log(lawrence);


function isList(list){
    return (typeof list === "object" && list !== null && list.hasOwnProperty("a") && list.hasOwnProperty("b"));
}
function pretty(list){
    let aPart = isList(list.a) ? pretty(list.a) : list.a;
    let firstPart = "{a: " + aPart + ", ";
    let secondPart = list.b === null ? null : pretty(list.b);
    return firstPart + "b: " + secondPart + "}";
}
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
console.log(`-----console.log(pretty(lawrence))`);
console.log(pretty(lawrence));

let america = listToArray(lawrence);
console.log(`-----america`);
console.log(america);