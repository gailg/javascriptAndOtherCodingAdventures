let rabbit = {};
rabbit.speak = function(openMouth){
  console.log(`The rabbit says "${openMouth}"`);
}
rabbit.speak("I am alive.")

function speak(openMouth) {
  console.log(`The ${this.type} rabbit says "${openMouth}"`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");
speak.call(hungryRabbit, "Burp!");

function normalize() {
  console.log(this.coordinates.map(n => n / this.length));
}
console.log("-----normalize.call({coordinates: [0, 2, 3], length: 5})")
normalize.call({coordinates: [0, 2, 3], length: 5});

let protoRabbit = {
  speak(openMouth){
    console.log(`The ${this.type} rabbit says "${openMouth}"`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

let larryRabbit = makeRabbit("otter");
larryRabbit.speak("Squeeeeeek.....");

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(openMouth) {
    console.log(`The ${this.type} rabbit says "${openMouth}"`);
  }
}
Rabbit.prototype.teeth = "small";
Rabbit.prototype.toString = function(){
  return `a ${this.type} rabbit`;
}
let montyRabbit = new Rabbit("monty");
let sangeaRabbit = new Rabbit("sangea");
montyRabbit.speak("I want clams");
console.log("-----montyRabbit.teeth");
console.log(montyRabbit.teeth);
sangeaRabbit.teeth = "pretty";
console.log("-----sangeaRabbit.teeth");
console.log(sangeaRabbit.teeth);
console.log("-----sangeaRabbit.toString()");
console.log(sangeaRabbit.toString());

console.log("-----String(montyRabbit)");
console.log(String(montyRabbit));
console.log("-------------------------object created as expression using class");
let objectCreatedAsExpressionUsingClass = new class {
  getWord() {
    return "hello from objectCreatedAsExpressionUsingClass";
  }
}
console.log(objectCreatedAsExpressionUsingClass.getWord());
console.log("-------------------------------------------------------------maps");
let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 63
}
console.log("-----ages");
console.log(ages);
console.log(`Julia is ${ages["Julia"]} years old.`);
console.log(`Is Jack's age known?  ${"Jack" in ages}`);
console.log(`Is toString's age known?  ${"toString" in ages}`);
console.log('-----ages.hasOwnProperty("toString")')
console.log(ages.hasOwnProperty("toString"));

let anos = new Map();
anos.set("Boris", 39);
anos.set("Liang", 22);
anos.set("Julia", 63);
console.log("-----anos");
console.log(anos);
console.log(`Julia is ${anos.get("Julia")} years old.`);
console.log(`Is Jack's age known?  ${anos.has("Jack")}`);
console.log(`Is toString's age known?  ${anos.has("toString")}`);

console.log("----------------------------------------------------------symbols");
let symbol = Symbol("name");
console.log('-----symbol == Symbol("name")');
console.log(symbol == Symbol("name"));
Rabbit.prototype[symbol] = 55;
console.log("montyRabbit[symbol]");
console.log(montyRabbit[symbol]);
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
}
console.log("-----[1, 2].toString()");
console.log([1, 2].toString());
console.log("-----[1, 2][toStringSymbol]()");
console.log([1, 2][toStringSymbol]());
let stringObject = {
  [toStringSymbol]() {
    return "a jute rope"}
}
console.log("-----stringObject[toStringSymbol]()");
console.log(stringObject[toStringSymbol]());

console.log("-----------------------------------------------iterator interface");
let roseDragonIterator = "🌹🐉"[Symbol.iterator]();
console.log("-----roseDragonIterator.next()");
console.log(roseDragonIterator.next());
console.log("-----roseDragonIterator.next()");
console.log(roseDragonIterator.next());
console.log("-----roseDragonIterator.next()");
console.log(roseDragonIterator.next());
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.height) return {done: true};
    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}
