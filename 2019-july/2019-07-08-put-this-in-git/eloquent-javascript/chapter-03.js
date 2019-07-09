// Chapter 3 functions

const square = function(x) {
  return x * x;
};

const makeNoise = function() {
  console.log("Plink Plank Plunk!!!!")
};

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(`x + y + z = ${x + y + z}`);
}
console.log(`x + z = ${x + z}`);

//Build a hummus "environment"

const hummus = function(factor){
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
}

//This is a function declaration

function squareFunctionDeclaration(x) {
  return x * x;
}

console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}

const powerUsingArrow = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
const horn = () => {
  console.log("Toot");
};

// closure
// A function that references bindings from local scopes
// around it is called a closure.

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);

// recursion

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
       return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

//growing functions

function zeroPad(number, width){
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory(cows, chickens, otters){
  let width = 3;
  console.log(`${zeroPad(cows, width)} Cows`);
  console.log(`${zeroPad(chickens, width)} Chickens`);
  console.log(`${zeroPad(otters, width)} Otters`);

}
printFarmInventory(14, 13, 42);

// minimum
const minimum = function (a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

// isEven
const isEven = function(x){
  if (x == 0){
    return true;
  } else if (x == 1){
    return false;
  } else if (x < 0){
    return isEven(-1 * x);
  } else {
    return isEven(x - 2);
  }
}

// bean counting

const countChar  = function(string, char){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] == char){
      count++;
    }
  }
  return count;
}
larrysString = "LarryMontySangeaABCDELLLLL";
