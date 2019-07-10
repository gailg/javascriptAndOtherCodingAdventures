class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
killerRabbit.speak("Shoot first");


Rabbit.prototype.teeth = "small";
console.log("-----killerRabbit.teeth");
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log("-----killerRabbit.teeth");
console.log(killerRabbit.teeth);
console.log("-----blackRabbit.teeth");
console.log(blackRabbit.teeth);
console.log("-----blackRabbit.toString()")
console.log(blackRabbit.toString());


let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);
console.log(`Julia is ${ages.get("Julia")}.`);
console.log("Is Jack's age known?", ages.has("Jack"));
console.log("ages.has(toString)", ages.has("toString"));


console.log("-----blackRabbit.toString()");
console.log(blackRabbit.toString());
Rabbit.prototype.toString = function(){
  return `a ${this.type} rabbit`;
}
console.log("-----blackRabbit.toString()");
console.log(blackRabbit.toString());

let symbol = Symbol("name");
console.log(`-----symbol == Symbol("name")`);
console.log(symbol == Symbol("name"));
Rabbit.prototype[symbol] = 55;
console.log("-----blackRabbit[symbol]")
console.log(blackRabbit[symbol]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
  return `${this.length} cm of blue yarn`;
};

console.log("-----[1, 2].toString()");
console.log([1, 2].toString());
console.log("-----[1, 2].toStringSymbol()");
console.log([1, 2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  }
}
console.log("-----stringObject[toStringSymbol]()");
console.log(stringObject[toStringSymbol]());

let okIterator = "OK"[Symbol.iterator]();
console.log("okIterator.next()");
console.log(okIterator.next());
console.log("okIterator.next()");
console.log(okIterator.next());
console.log("okIterator.next()");
console.log(okIterator.next());

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
    this.content[y * this.widht + x] = value;
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
      this.y++
    }
    return {value, done: false};
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}
