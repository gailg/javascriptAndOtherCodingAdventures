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
// let sangea = [1, [2, 3], 4];
let sangea = [1, 2];
console.log(`-----console.log(sangea)`);
console.log(sangea);
// let useThisOne = Array.from(sangea);
let useThisOne = copy(sangea);
console.log(`-----console.log(useThisOne)`);
console.log(useThisOne);
// console.log(`-----sangea[1][0] = "larry"`);
// sangea[1][0] = "larry";
console.log(`-----console.log(sangea)`);
console.log(sangea);
console.log(`-----console.log(useThisOne)`);
console.log(useThisOne);
let result = arrayToList(useThisOne);
console.log(`-----console.log(result)`);
console.log(result);
console.log(`-----console.log(sangea)`);
console.log(sangea);
console.log(`-----useThisOne`);
console.log(useThisOne);
console.log(`--------------------------------after all the clunking around look here`);
console.log(`-----console.log(sangea)`);
console.log(sangea);
console.log(`-----console.log(result)`);
console.log(result);
console.log(`----------------------------------------------------------print out list`);
function isList(list){
    return (typeof list === "object" && list !== null && list.hasOwnProperty("a") && list.hasOwnProperty("b"));
}
let list = result;
function writeList(list){
    let aPart = isList(list.a) ? writeList(list.a) : list.a;
    let firstPart = "{a: " + aPart + ", ";
    let secondPart = list.b === null ? null : writeList(list.b);
    return firstPart + "b: " + secondPart + "}";
}
console.log(`-----console.log(writeList(result))`);
console.log(writeList(result));





console.log(`-----console.log(writeList(arrayToList([1, [2, 3], 4])))`);
console.log(writeList(arrayToList([1, [2, 3], 4])));
console.log(`--------------------------------------------------------------last line`);
