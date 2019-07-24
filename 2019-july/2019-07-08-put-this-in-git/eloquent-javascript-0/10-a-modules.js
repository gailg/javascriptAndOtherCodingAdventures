const weekDay = function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"];
  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name);
    }
  }
}();

console.log("-----weekDay.name(5)");
console.log(weekDay.name(5));
console.log(`-----weekDay.number("Sunday")`);
console.log(weekDay.number("Sunday"));

const x = 1;
function evalAndReturnX(code){
  eval(code);
  return x;
}
let larry = evalAndReturnX("var x = 2");
let monty = evalAndReturnX("let x = 2");
console.log(`-----let larry = evalAndReturnX("var x = 2")`);
console.log(`-----larry`);
console.log(larry);
console.log(`-----let monty = evalAndReturnX("var x = 2")`);
console.log(`-----monty`);
console.log(monty);

let plusOne = Function("n", "return n + 1;");
console.log(`-----plusOne(4)`);
console.log(plusOne(4));

// require.cache = Object.create(null);
// function require(name) {
//   if (!(name in require.cache)) {
//     let code = readFile(name);
//     let module = {exports: {}};
//     require.cache[name] = module;
//     let wrapper = Function("require, exports, module", code);
//     wrapper(require, module.exports, module);
//   }
//   return require.cache[name].exports;
// }
// const ordinal = require("ordinal");

let sangea = Object.create(null);
// let dog.cache = Object.create(null);
