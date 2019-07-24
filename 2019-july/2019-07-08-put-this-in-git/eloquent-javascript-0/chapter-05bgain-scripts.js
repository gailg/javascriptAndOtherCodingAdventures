let small = SCRIPTS.slice(0, 4);
console.log("-----small:")
console.log(small);
let names = small.map(script => script.name);
console.log("-----names");
console.log(names);

let oneScript = small[0];
console.log("-----oneScript");
console.log(oneScript);
//arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

function nCharacters(script){
  return script.ranges.reduce(
    (accumulator, [begin, end]) => {
      return accumulator + (end - begin);
    }, 0);
}

oneScriptNCharacters = nCharacters(oneScript);
console.log("-----oneScriptNCharacters");
console.log(oneScriptNCharacters);
console.log("-----check");
console.log(125259 - 125184 + 125274 - 125264 + 125280 - 125278);

let biggestScript = SCRIPTS.reduce(
  (scriptA, scriptB) => {
    return nCharacters(scriptA) > nCharacters(scriptB) ? scriptA : scriptB;
  }
);
console.log("The " + biggestScript.name +
  " script with " + nCharacters(biggestScript) +
  " characters is the biggest script");

function average(array){
  return array.reduce((itemA, itemB) => itemA + itemB)/array.length;
}
console.log("-----larry")
let larry = [1, 2, 3, 4, 5];
console.log(larry);
console.log("------average(larry)");
console.log(average(larry));

let living = small.filter(script => script.living);
averageLiving = average(living.map(script => script.year));
console.log("-----living");
console.log(living);
console.log("-----averageLiving");
console.log(averageLiving);
let dead = small.filter(script => !script.living);
averageDead = average(dead.map(script => script.year));
console.log("-----dead");
console.log(dead);
console.log("-----averageDead");
console.log(averageDead);

function inWhatScriptAreYou(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return from <= code && code < to;
    })) {
      return script;
    }
  }
  return null
}
console.log("-----inWhatScriptAreYou(71472)");
console.log(inWhatScriptAreYou(71472));

let horseShoe = "🐴👟";
console.log("horseshoe");
console.log(horseShoe);
console.log("horseShoe.codePointAt(0)");
console.log(horseShoe.codePointAt(0));
let roseDragon = "🌹🐉";
console.log("roseDragon");
console.log(roseDragon);
console.log("for (let char of rose Dragon){console.log(char);}")
for (let char of roseDragon) {
  console.log(char); }

let text = '英国的狗说"woof", 俄罗斯的狗说"тяв"';
scriptName = function(character){
  let script = inWhatScriptAreYou(character.codePointAt(0));
  return script ? script.name : "none";
}
function characterScriptTable(text){
  let table = [];
  for (let character of text){
    table.push([character, scriptName(character)])
  }
  return table;
}
console.log("-----characterScriptTable(text)");
console.log(characterScriptTable(text));

function tabulate(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let iFoundIt = counts.findIndex(count => count.name == name);
    if (iFoundIt == -1) {
      counts.push({name, count: 1})
    } else {
      counts[iFoundIt].count++;
    }
  }
  return counts;
}
let tabulateTest = tabulate([1, 2, 3, 5, 7],
  n => n % 2 == 0 ? "even" : "odd")
console.log("-----tabulateTest");
console.log(tabulateTest);

let scripts = tabulate(text,
  character => {
    let script = inWhatScriptAreYou(character.codePointAt(0));
    return script ? script.name : "none"
  }
).filter(script => script.name != "none");
console.log("-----scripts");
console.log(scripts);

let total = scripts.reduce(
  (runningTotal, {count}) => runningTotal + count,
  0
)
console.log("-----total");
console.log(total);
let relativeFrequency = scripts.map(
  ({name, count}) => {
    return [name, Math.round(100 * count/total)];
  }
);
console.log("-----relativeFrequency");
console.log(relativeFrequency);
