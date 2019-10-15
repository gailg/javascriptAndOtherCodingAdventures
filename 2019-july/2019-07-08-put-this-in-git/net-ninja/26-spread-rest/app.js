// rest parameter

const double = (...numbers) => {
  return numbers.map(number => 2 * number);
}
const result = double(1, 3, 7, 14);
console.log(result);

// spread

let otters = ["larry", "monty", "sangea"];
console.log(...otters);
const members = ["charles", "seaweed", ...otters];
console.log(members);

// spread syntax objects

const person = {name: "shaun", age: 30, job: "net ninja"};
const personClone = {...person, location: "manchester"};
console.log(personClone);

// sets
console.log(`--------------------------------------------------------namesArray`);
const namesArray = ["larry", "chun-li", "larry", "monty"];
console.log(namesArray);
console.log(`----------------------------------------------------------namesSet`);
const namesSet = new Set(namesArray);
console.log(namesSet);
console.log(`--------------------------------------------------------uniqueNames`);
const uniqueNames = [...namesSet];
console.log(uniqueNames);
console.log(`---------------------------------------------------------anotherWay`);
const anotherWay = [...new Set(namesArray)];
console.log(anotherWay);

console.log(`---------------------------------------------------------------ages`);
const ages = new Set();
ages.add(20).add(30).add(20).add(42);
ages.delete(20);
console.log(ages);
console.log(`-------------------------------------------------------ages.has(42)`);
console.log(ages.has(42));

console.log(`---------------------------------------------ages.clear() then ages`);
ages.clear();
console.log(ages);


otters = new Set ([
  {name: "larry", otter: true},
  {name: "charles", otter: false},
  {name: "monty", otter: true},
])
otters.forEach(otter => {
  console.log(`${otter.name} is ${otter.otter? "" : "not "}an otter`);
})


const symbolOne = Symbol();
const symbolTwo = Symbol();
console.log(`---------------------------------------symbolOne, typeof symbolOne`);
console.log(symbolOne, typeof symbolOne);
console.log(`----------------------------------symbolTwo, symbolOne == symbolTwo`);
console.log(symbolTwo, symbolOne == symbolTwo);