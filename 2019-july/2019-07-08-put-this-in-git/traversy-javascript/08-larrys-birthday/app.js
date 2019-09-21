function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.age = function() {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return ageDate.getUTCFullYear() - 1970;
  }
  
}

const larry = new Person("Larry", "October 12, 1998");
console.log(larry.age());

const name1 = "Jeff";
const name2 = new String("Jeff");
name2.foo = "bar"
// console.log(name2);

console.log(`typeof name1: ${typeof name}`);
console.log(`typeof name2 ${typeof name2}`);

const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function(
  "x", "y",
  "return x + y"
)




