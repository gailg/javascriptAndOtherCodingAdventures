let a, b;
[a, b] = [100, 200];
console.log(`------------------------------------------------------------------[a, b]`);
console.log(`-----------------------------------------------------------------------b`);
console.log(b);
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(`-----------------------------[a, b, ...rest] = [100, 200, 300, 400, 500]`);
console.log(`--------------------------------------------------------------------rest`);
console.log(rest);
({a, b} = {a: 1, b: 2, c: 3, d: 4, e: 5});
console.log(`He says he is using parentheses to make the following into an expression`);
console.log(`-------------------------------({a, b} = {a: 1, b: 2, c: 3, d: 4, e: 5})`);
console.log(`--------------------------------------------------------------------a, b`);
console.log(a, b);
({a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4, e: 5});
console.log(`----------------------({a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4, e: 5})`);
console.log(`--------------------------------------------------------------------rest`);
console.log(rest);

const critters = ["Larry", "Monty", "Charles", "Star"];
const [critter1, critter2, ...others] = critters;
console.log(`------------------------critters = ["Larry", "Monty", "Charles", "Star"]`);
console.log(`------------------------------[critter1, critter2, ...others] = critters`);

console.log(`----------------------------------------------critter1, critter2, others`);
console.log(critter1, critter2, others);

const otter = {
  name: "Larry",
  age: 32,
  city: "Monterey",
  gender: "male",
  sayHello: function(){
    console.log(`${name} says hello`);
  }
}
const {name, gender, sayHello} = otter;
console.log(`---------------------------------------- {name, gender, sayHello} = otter`);
console.log(`-------------------------------------------------------------name, gender`);
console.log(name, gender);
console.log(`---------------------------------------------------------------sayHello()`);
sayHello();

