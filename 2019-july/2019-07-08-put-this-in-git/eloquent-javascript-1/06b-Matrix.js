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
        if (this.y == this.matrix.height) {
            return {done: true};
        }
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        this.x++;
        if (this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
for (let {x, y, value} of matrix){
    console.log(x, y, value);
}

//https://javascript.info/iterable
let range = {
    from: 1,
    to: 5
  };
  
// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {
  
// ...it returns the iterator object:
// 2. Onward, for..of works only with this iterator, asking it for next values
    return {
        current: this.from,
        last: this.to,
  
        // 3. next() is called on each iteration by the for..of loop
        next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};
  
// now it works!
for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}

console.log(`--------------------------------------------setters, getters,  static`);
console.log(`----------------------------------------------------------varyingSize`);
  let varyingSize = {
      get size() {
          return Math.floor(Math.random() * 100);
      }
  };
  console.log(`-----varyingSize.size`);
  console.log(varyingSize.size);
  console.log(`-----varyingSize.size`);
  console.log(varyingSize.size);
  console.log(`--------------------------------------------------------Temperature`);
  class Temperature {
      constructor(celsius) {
          this.celsius = celsius;
      }
      get fahrenheit() {
          return this.celsius * 1.8 + 32;
      }
      set fahrenheit(value) {
          this.cesius = (value - 32) / 1.8;
      }
      static fromFahrenheit(value) {
          return new Temperature((value = 32) / 1.8);
      }
  }
  let temperature = new Temperature(22);
  console.log(`-----temperature.fahrenheit`);
  console.log(temperature.fahrenheit);
  temperature.fahrenheit = 95;
  console.log(`-----temperature.celsius`);
  console.log(temperature.celsius);


