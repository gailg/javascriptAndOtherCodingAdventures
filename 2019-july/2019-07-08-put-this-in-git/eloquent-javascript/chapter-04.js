let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
  undefinedProperty: undefined,
  imGoingToBeReassigned: "LT Otter",
}
console.log(`day1 ${day1}`);
console.log(day1);
console.log(`Object.keys(day1): ${Object.keys(day1)}`);
delete day1.squirrel;
console.log(`Object.keys(day1) after deleting squirrel:  ${Object.keys(day1)}`);
console.log(`day1.squirrel: ${day1.squirrel}`);
console.log(`day1.undefinedProperty: ${day1.undefinedProperty}`);
console.log(`day1.squirrel == day1.undefinedProperty: ${day1.squirrel == day1.undefinedProperty}`);
console.log(`"squirrel" in day1:  ${"squirrel" in day1}`);
console.log(`"undefinedProperty" in day1:  ${"undefinedProperty" in day1}`);
console.log(`Object.keys:  ${Object.keys(day1)}`);
Object.assign(day1, {otter: true, friends: ["Monty", "Charles", "Sangea"], events: ["swimming"]});
console.log(`day1 has been assigned more/other stuff: ${Object.keys(day1)}`);


let journal = [{
  events: ["work", "touched tree", "pizza", "running", "television"],
  squirrel: false
}, {
  events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
  squirrel: false
}, {
  events: ["weekend", "cycling", "break", "peanuts", "beer"],
  squirrel: true
}, {
  events: ["weekend", "cycling", "break", "peanuts", "beer"],
  squirrel: false
}, {
  events: ["work", "cycling", "break", "peanuts", "beer"],
  squirrel: false
}, {
  events: ["work", "cycling", "break", "peanuts", "beer"],
  squirrel: true
}
];

function journalEvents(journal) {
  let events = [];
  for (let entry of journal){
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}
let events = journalEvents(journal);
console.log(`events: ${events}`);

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index ++;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
console.log("line 64");
console.log(`tableFor("work", journal): ${console.log(tableFor("work", journal))}`);

// function phi(table) {
//   return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt(
//     (table[2] + table[3]) * (table[0] + table[1]) *
//     (table[1] + table[3]) * (table[0] + table[2])
//   );
// }

// using destructuring
function phi([n00, n01, n10, n11]){
  return (n11*n00 - n10*n01) / Math.sqrt(
         (n10 + n11)*(n00 + n01) * (n01 + n11)*(n00+n10)
       );
}


for (let event of events) {
  let correlation = phi(tableFor(event, journal));
  console.log(event + ":", correlation);
}

// further arrayology
array = ["a", "b", "c", "d", "e"];
function remove(array, index){
  return array.slice(0, index).concat(array.slice(index+1));
}

// rest parameters
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(`---------- rest parameters ----------`)
console.log(`max(4, 1, 9, 2): ${max(4, 1, 9, 2)}`);
let words = ["never", "fully"];
console.log(`["will", ...words, "understand"]: ${["will", ...words, "understand"]}`);

// Math
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(`randomPointOnCircle(1):  ${randomPointOnCircle(1)}`);
console.log(randomPointOnCircle(1));
console.log(`Math.floor(Math.random() * 10): ${Math.floor(Math.random() * 10)}`);

// destructuring

// the sum of a range
function range(start, end, increment){
  if(end < start){
    [start, end] = [end, start];
  }
  let result = [];
  for(let i = start; i <= end; i += increment){
    result.push(i);
  }
  return result;
}

function sum(numbers){
  total = 0;
  for(let i = 0; i < numbers.length; i++){
    total += numbers[i];
  }
  return total;
}

console.log(`sum(range(1, 10)): ${sum(range(1, 10))}`);

//reverseArray

function reverseArray(array){
  reversed = [];
  for (let i = 0; i < array.length; i++){
    reversed[i] = array[array.length - i - 1];
  }
  return reversed;
}
console.log(`reverseArray([1, 2, 3, 4, 5]): ${reverseArray([1, 2, 3, 4, 5])}`);
console.log(reverseArray([1, 2, 3, 4, 5]));

larry = range(1, 3);
console.log(larry);
function arrayToList(larry){
  if(larry.length == 0){
    return null;
  } else {
    return {apple: larry.shift(), bowl: arrayToList(larry)}
  }
}


function listToArray(monty, array = []){
  array.push(monty.apple);
  if (monty.bowl === null){
    return array;
  } else {
    return listToArray(monty.bowl, array);
  }
}
monty = arrayToList([1, 2, 3]);
console.log("monty");
console.log(monty);
charles = listToArray(monty);
console.log("charles");
console.log(charles);


// charles.push(monty.value)
// console.log("charles");
// console.log(charles);
// console.log("monty.value");
// console.log(monty.value);
