function repeat(n, action) {
  for (let i = 0; i < n; i++){
    action(i);
  }
}
console.log("-----repeat(3, console.log):")
repeat(3, console.log);
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`)
})
console.log("-----labels:");
console.log(labels);

// Higher-order functions take functions as arguments
// or return other functions.
// Abstract over actions, not just values.

// functions can create other functions
function greaterThan(n){
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log("-----greaterThan10(11):");
console.log(greaterThan10(11));

function noisy(f){
  return(...args) => {
    let result = f(...args);
    console.log("-----" + f.name + " called with args ", args,
      "and returned the result", result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);

function unless(test, then) {
  if (!test) then();
}
repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// forEach
console.log(`-----["larry", "monty"].forEach(otter => console.log(otter + " is an otter!"))`);

["larry", "monty"].forEach(otter => console.log(otter + " is an otter!"));

// scripts data
// filtering arrays
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
let living = filter(SCRIPTS, script => script.living);
console.log("-----living[1]:");
console.log(living[1]);

// map
function map(array, transform) {
  let mapped = [];
  for (let element of array){
    mapped.push(transform(element));
  }
  return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
let rtlNames = map(rtlScripts, s => s.name);
console.log("-----rtlNames:");
console.log(rtlNames);

// reduce
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log("-----reduce([1, 2, 3, 4], (a, b) => a + b, 0):");
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
console.log("-----[1, 2, 3, 4].reduce((a, b) => a + b):");
console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function characterCount(script) {
  return script.ranges.reduce( // reduce requires a function and an initial value
    (count, [from, to]) => {   // the function args must be (1) the running result
                               // (2) currentValue (of the element in the array)
      return count + (to - from);
    },
    0                          // the initial value of the running result is 0;
  );
}
console.log("-----characterCount(SCRIPTS[0]):");
console.log(characterCount(SCRIPTS[0]));
let anotherWay = reduce([[125184, 125259], [125264, 125274], [125278, 125280]],
  (count, [from, to]) => count + (to - from),
  0
)
console.log("anotherWay:");
console.log(anotherWay);

let biggestScript = SCRIPTS.reduce(
  (a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  }
);
console.log("-----biggestScript, characterCount(biggestScript):");
console.log(biggestScript, characterCount(biggestScript));

scriptTable = SCRIPTS.map(s => [s.name, characterCount(s)]);
console.log("-----scriptTable.length:");
console.log(scriptTable.length);
console.log("-----scriptTable:");
console.log(scriptTable);
console.log("-----scriptTable samples:");
console.log(scriptTable[0]);
console.log(scriptTable[1]);
console.log(scriptTable[40]);
console.log(scriptTable[41]);
console.log(scriptTable[123]);

// average

function average(array) {
  return array.reduce(
    (a, b) => a + b
  ) / array.length;
}

console.log("-----average([1, 2, 3, 4, 5]):");
console.log(average([1, 2, 3, 4, 5]));

let averageLiving = Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year)));
console.log("-----averageLiving:");
console.log(averageLiving);
let averageDead = Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year)));
console.log("-----averageDead:");
console.log(averageDead);

// strings and character codes
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(
      ([from, to]) => {
        return code < to && code >= from;
      }
    )) {
    return script;
    }
  }
}
console.log("-----characterScript(121):");
console.log(characterScript(121));


let horseShoe = "🐴👟";
console.log("-----horseShoe:");
console.log(horseShoe);
console.log("-----horseShoe.charCodeAt(0):");
console.log(horseShoe.charCodeAt(0));
console.log("-----horseShoe.codePointAt(0):");
console.log(horseShoe.codePointAt(0));

let roseDragon = "🌹🐉";
console.log("-----for...roseDragon:")
for (let char of roseDragon) {
  console.log(char);
}

// recognizing text
function countBy(items, groupName) {
  let counts =  [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1){
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

let items = [1, 2, 3, 4, 5];
let counts = [];
let item = items[0];
let groupName = (n => n > 2);
let name = groupName(item);
let known = counts.findIndex(c => c.name == name);
console.log("countBy(items, groupName)");
console.log(countBy(items, groupName));
let text = '英国的狗说"woof", 俄罗斯的狗说"тяв"';


  // let scripts = countBy(text, char => {
  //   let script = characterScript(char.codePointAt(0));
  //   return script ? script.name : "none";
  // }).filter( ({name}) => != "none");
