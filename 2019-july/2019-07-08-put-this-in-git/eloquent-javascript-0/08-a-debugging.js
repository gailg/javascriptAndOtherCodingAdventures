"use strict";
function canYouSpotTheProblem(){
  for(let counter = 0; counter < 10; counter++){
    console.log("happy happy");
  }
}
canYouSpotTheProblem();

function Person(name) {
  this.name = name;
}
// let ferdinand = Person("Ferdinand");
// console.log("-----name");
// console.log(name);
// console.log("-----this.name");
// console.log(this.name);

function numberToString(n, base = 10){
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n /= base;
  } while (n > 0);
  return sign + result;
}
// console.log(numberToString(13, 10));
function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}
// let howManyFingers = promptNumber("How many fingers?");
// console.log("-----howManyFingers")
// console.log(howManyFingers);

function lastElement(array){
  if (array.length == 0) {
    return {failed: true};
  } else {
    return {element: array[array.length - 1]};
  }
}

console.log("----lastElement([])");
console.log(lastElement([]));
console.log("----lastElement([1, 2, 3])");
console.log(lastElement([1, 2, 3]));
