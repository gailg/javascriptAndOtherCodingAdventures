"use strict";
const magic = () => Date();
const myConcat = (array1, array2) => array1.concat(array2);
console.log(`------------------------------------------------------arrow function in filter and map`);
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  const squaredIntegers = arr
    .filter(number => Number.isInteger(number) && number > 0);
    .map(positive => positive * positive);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
console.log(`------------------------------------------------------default parameters`);
const increment = (function() {
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); 
  console.log(increment(5)); 
console.log(`-------------------------------------------------------rest operator in function parameter`);
const sum = (function() {
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3));

function larry(...args) {
    return args.reduce((a, b) => a + b, 0);
};
console.log(`-------------------------------------------------------copy array using spread`);
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1]; // change this line
  arr1[0] = 'potato'
})();
console.log(arr2);
console.log(`--------------------------------------------------------destructuring objects`);
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow: tempOfTomorrow} = avgTemperatures;
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
console.log(`---------------------------------------------------------destructuring nested objects`);
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
  
    const {tomorrow: {max: maxOfTomorrow}} = forecast;
  
    return maxOfTomorrow;
  }
  
console.log(getMaxOfTmrw(LOCAL_FORECAST));
console.log(`----------------------------------------------------------destructuring arrays`)

// [z1, x1, , y1] = [1, 2, 3, 4, 5, 6];
// console.log(z1, x1, y1);


let apple = 8, banana = 6;
(() => {
  "use strict";
  [apple, banana] = [banana, apple];

})();
console.log("apple: " + apple); 
console.log("banana: " + banana); 
console.log(`----------------------------------------------------------destructuring and rest to reassign array elements`)
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

  const [, , ...arr] = list; 

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); 
console.log(source);