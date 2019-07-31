
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
let amy = [1, 2, 3, 4];
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


/*
function listToArray(monty, array = []){
    array.push(monty.apple);
    if (monty.bowl === null){
      return array;
    } else {
      return listToArray(monty.bowl, array);
    }
  }
*/

function listToArray(list, beginning){
    if (isList(list.a)){
        console.log(`list.a`);
        console.log(list.a);
        console.log(pretty(list.a));
        aPart = listToArray(list.a, true);
    } else {
        aPart = list.a;
    }
    console.log(`aPart`);
    console.log(aPart);
    if (list.b === null) {
        console.log(`list.b === null`);
        if (beginning){
            console.log(`list.b === null && beginning`);
            return [aPart];
        } else {
            console.log(`list.b === null && not beginning`);
            return aPart;
        }
    } else {
        console.log(`list.b`);
        console.log(list.b);
        console.log(pretty(list.b));
        let bPart = listToArray(list.b, false);
        console.log(`bPart`);
        console.log(bPart);
        let array;
        if (beginning){
            array = [aPart];
        } else {
            array = aPart;
        }
        array.push(bPart);
        console.log(`array`);
        console.log(array);
        return array;
    }
}
function listToArray(list, beginning){
    if (isList(list.a)){
        console.log(`list.a`);
        console.log(list.a);
        console.log(pretty(list.a));
        aPart = listToArray(list.a, true);
    } else {
        aPart = list.a;
    }
    console.log(`aPart`);
    console.log(aPart);
    if (list.b === null) {
        console.log(`list.b === null`);
        if (beginning){
            console.log(`list.b === null && beginning`);
            return [aPart];
        } else {
            console.log(`list.b === null && not beginning`);
            return aPart;
        }
    } else {
        console.log(`list.b`);
        console.log(list.b);
        console.log(pretty(list.b));
        let bPart = listToArray(list.b, false);
        console.log(`bPart`);
        console.log(bPart);
        let array;
        if (beginning){
            array = [aPart];
        } else {
            array = aPart;
        }
        array.push(bPart);
        console.log(`array`);
        console.log(array);
        return array;
    }
}

console.log(`-----console.log(pretty(lawrence))`);
console.log(pretty(lawrence));

let america = listToArray(lawrence);
console.log(`-----america`);
console.log(america);