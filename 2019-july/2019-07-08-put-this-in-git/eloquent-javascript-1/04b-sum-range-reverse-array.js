console.log(`-----------------------------------------------------the sum of a range`)
function range(begin, end, increment = 1){
    let result = [];
    if(increment > 0){
        for (let i = begin; i <= end; i = i + increment){
            result.push(i);
        }
    } else {
        for (let i = begin; i >= end; i = i + increment){
            result.push(i);
        }
    }

    return result;
}
console.log(`-----console.log(range(13, 27, 2))`);
console.log(range(13, 27, 2));

function sum(array){
    let total = 0;
    for (let element of array){
        total += element;
    }
    return total;
}
console.log(`-----console.log(sum(range(1, 10)))`);
console.log(sum(range(1, 10)));

console.log(`-----console.log(range(5, 2, -1))`);
console.log(range(5, 2, -1));
console.log(`-----------------------------------------------------reversing an array`);
function reverseArray(x){
    let y = [];
    while (x.length > 0){
        y.push(x.pop());
    }
    return y;
}
console.log(`-----console.log(reverseArray([1, 2, 3, 4, 5]))`)
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(`-----------------------------------------------------------------------`)

function plunk(array, index){
    let item = array[index];
    let plunkered = array.slice(0, index).concat(array.slice(index + 1))
    plunkered.push(item);
    return plunkered;
}
let array = [0, 1, 2, 3, 4];
let index = 2;
console.log(`-----array`);
console.log(array);
console.log(`-----index`);
console.log(index);
console.log(`-----console.log(plunk(array, index))`)
console.log(plunk(array, index));
// let larry = plunk(array, index);
// console.log(larry);
console.log(`--------------------------------------------reversing an array take two`);
function reverseArrayTakeTwo(x){
    let n = x.length;
    for (let i = 0; i < n/2; i++){
        let keep = x[i];
        x[i] = x[n - i];
        x[n - i] = keep;
    }
    return x;
}
console.log(`-----console.log(reverseArrayTakeTwo([1, 2, 3, 4, 5]))`)
console.log(reverseArrayTakeTwo([1, 2, 3, 4, 5]))
console.log(`-----------------------------------------------------------------a list`);
let original = {
    a: 1,
    b: {
        a: 2,
        b: {
            a: 3,
            b: null
        }
    }
};

let firstOne = {a: 0, b: original};
let secondOne = {a: -1, b: original};
original.a = {
    a: "larry",
    b: {
        a: "monty",
        b: null
    }
};
console.log(`-----console.log(original)`);
console.log(original);
console.log(`-----console.log(firstOne)`);
console.log(firstOne);
console.log(`-----console.log(secondOne)`);
console.log(secondOne);
console.log(`------------------------------------------------------------arrayToList`);
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

let sangea = [1, [2, 3], 4];
let useThisOne = sangea.slice(0);
console.log(`-----sangea`);
console.log(sangea);
let wentIntoFunction = arrayToList(useThisOne);
console.log(`-----console.log(sangea)`);
console.log(sangea);
console.log(`-----console.log(wentIntoFunction)`);
console.log(wentIntoFunction);

console.log(`--------------------------------------------------------------last line`);
