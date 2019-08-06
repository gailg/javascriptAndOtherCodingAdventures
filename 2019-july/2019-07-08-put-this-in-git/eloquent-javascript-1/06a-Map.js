console.log(`----------------------------------------------------Map example from MDN`)
let myMap = new Map();

let keyString = "a string";
let keyObj = {};
let keyFunc = function() {};

myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");
console.log(`-----myMap.size`);
console.log(myMap.size);
console.log(`-----myMap.get(keyString)`)
console.log(myMap.get(keyString));
console.log(`-----myMap.get(keyObj)`)
console.log(myMap.get(keyObj));
console.log(`-----myMap.get(keyFunc)`)
console.log(myMap.get(keyFunc));
console.log(`-----myMap.get({})`);
console.log(myMap.get({}));
console.log(`-----myMap.get(function() {})`);
console.log(myMap.get(function() {}));

let larry = new Map();
larry.set(0, "zero");
larry.set(1, "one");
larry.set(2, "two");
console.log(`-----for let [key, value] of larry... key = value`);
for (let [key, value] of larry) {
    console.log(`${key} = ${value}`);
}
console.log(`-----for let key of larry.keys()`);
for (let key of larry.keys()){
    console.log(key);
}
console.log(`-----for let value of larry.values()`);
for (let value of larry.values()) {
    console.log(value);
}
console.log(`-----larry.forEach( (key, value) => console.log(key = value) )`);
larry.forEach( (key, value) => console.log(`${key} = ${value}`) );

let kvArray = [[1, "a"], [2, "b"]];
let monty = new Map(kvArray);
console.log(`-----monty.forEach( (key, value) => console.log(key = value) )`);
monty.forEach( (key, value) => console.log(`${key} = ${value}`) );

console.log(`-----for let [key, value] of monty... key = value`);
for (let [key, value] of monty) {
    console.log(`${key} = ${value}`);
}






monty;
for (let [x, y] of monty){ console.log(x + ": " + y); }
monty.forEach( (x, y) => console.log(x + ": " + y) );

monty.forEach( (x, y) => {
    console.log(x + ": " + y);
})