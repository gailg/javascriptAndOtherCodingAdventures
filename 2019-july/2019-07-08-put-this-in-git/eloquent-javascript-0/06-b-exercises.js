console.log("---------------------------------------------------a Vector type");
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get length(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  plus(other){
    return [this.x + other.x, this.y + other.y];
  }
  minus(other){
    return [this.x - other.x, this.y - other.y];
  }
}
let a = new Vector(3, 4);
let b = new Vector(6, 7);
console.log("-----a");
console.log(a);
console.log("-----b");
console.log(b);
console.log("-----a.plus(b)");
console.log(a.plus(b));
console.log("-----a.minus(b)");
console.log(a.minus(b));
console.log("-----a.length");
console.log(a.length);

console.log("----------------------------------------------------a Group type");
class Group {
  constructor(elements = []){
    this.elements = [];
    for (let element of elements){
      let elementOk = true;
      for (let thisElement of this.elements){
        if(element === thisElement){
          elementOk = false;
          break;
        }
      }
      if(elementOk){
        this.elements.push(element);
      }
    }
  }
  add(x){
    if(!this.has(x)){
      this.elements.push(x);
    }
  }
  delete(x){
    this.elements.splice(this.elements.indexOf(x), 1);
  }
  has(x){
    for (let element of this.elements){
      if (x === element) {
        return true;
      }
    }
    return false;
  }
}

let group = new Group([1, 2, 3, 2]);
console.log("-----group.elements");
console.log(group.elements);
console.log("-----group.has(4)");
console.log(group.has(4));
console.log("-----group.has(1)");
console.log(group.has(1));
group.add(14);
console.log("-----group.elements");
console.log(group.elements);
console.log("-----group.delete(2)");
console.log(group.delete(2));
console.log("-----group.elements");
console.log(group.elements);
