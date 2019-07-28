console.log(`-----------------------------hello from chapter 03`);
console.log(`--------------------------------------------square`);
const square = function(x) {
    return x * x;
};
console.log(`-----console.log(square(14)`);
console.log(square(14));
console.log(`-----------------------------------------makeNoise`);
console.log(`-----console.log("Pling!")`);
console.log("Pling!");
console.log(`---------------------------------------------power`);
function power(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(`------console.log(power(2, 10))`);
console.log(power(2, 10));
console.log(`---------------------------------------------scope`);
let x = "larry ";
if (true) {
    let y = "monty ";
    var z = "sangea ";
    console.log(`-----inside code block console.log(x + y + z)`);
    console.log(x + y + z);
}
console.log(`----- outside code block console.log(x)`);
console.log(x);
// console.log(`----- outside code block console.log(y)`);
// console.log(y);
console.log(`-----I had to comment out console.log(y) because it gives me an error--undefined`);
console.log(`----- outside code block console.log(z)`);
console.log(z);
const halve = function(n) {
    return n/2;
};
let n = 10;
console.log(`-----console.log(halve(100))`);
console.log(halve(100));
console.log(`-----console.log(n)`)
console.log(n);
console.log(`--------------------------------------------hummus`);
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let useThisAmount = amount * factor;
        if (useThisAmount > 1){
            unit += "s";
        }
        console.log(`${useThisAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
console.log(`-----console.log(hummus(2))`);
console.log(hummus(2));

console.log(`------------------------------------------closure`);
function wrapValue(n) {
    return () => n;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(`-----console.log(wrap1())`);
console.log(wrap1());
console.log(`-----console.log(wrap2())`);
console.log(wrap2());
function multiplier(factor){
    return number => number * factor;
}
let twice = multiplier(2);
console.log(`-----console.log(twice(5))`);
console.log(twice(5));
console.log(`-----------------------------------------recursion`);
function powerRecursive(base, exponent) {
    if (exponent == 0){
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(`-----console.log(powerRecursive(2, 3))`);
console.log(powerRecursive(2, 3));
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
console.log(`-----console.log(findSolution(24))`);
console.log(findSolution(24));
console.log(`---------------------------------Cows and Chickens`);
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}
function printFarmInventory(cows, chickens, pigs){
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
console.log(`-----printFarmInventory(7, 11, 3)`);
printFarmInventory(7, 11, 3);
console.log(`-------------------------------------------minimum`);
function min(x, y){
    if(x <= y){
        return x;
    } else {
        return y;
    }
}
console.log(`-----console.log(min(3, 7))`);
console.log(min(3, 7));
console.log(`-----console.log(min(42, 7))`);
console.log(min(42, 7));
console.log(`-----console.log(min(42, 42))`);
console.log(min(42, 42));
console.log(`-----------------------------------------recursion`);
function evenOrOdd(x){
    if(x == 0){
        return("even");
    } else if(x == 1){
        return ("odd");
    } else return evenOrOdd(x-2);
}
console.log(`-----console.log(evenOrOdd(4))`);
console.log(evenOrOdd(4))
console.log(`-----console.log(evenOrOdd(7))`);
console.log(evenOrOdd(7))

console.log(`-------------------------------------bean counting`);
function countBs(string){
    let Bs = 0;
    for(let n = 0; n < string.length; n++){
        if( string[n] == "B"){
            Bs ++;
        }
    }
    return Bs
}
console.log(`-----console.log(countBs("Bananas Bug BarnaBy"))`);
console.log(countBs("Bananas Bug BarnaBy"));
console.log(`-------------------------------functions as values`);
