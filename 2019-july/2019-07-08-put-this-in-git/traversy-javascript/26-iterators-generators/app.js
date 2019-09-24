console.log(`----------------------------------iterator example`);

const namesArray = ["Charles", "Larry", "Monty"];
console.log(`----------------------------------------namesArray`);
console.log(namesArray);

const names = nameIterator(namesArray);
console.log(`----------------------------------------------names`);
console.log(names);
console.log(`---------------------------------------names.next()`);
console.log(names.next());
console.log(`---------------------------------------names.next()`);
console.log(names.next());
console.log(`---------------------------------------names.next()`);
console.log(names.next());
console.log(`---------------------------------------names.next()`);
console.log(names.next());
console.log(`---------------------------------------names.next()`);
console.log(names.next());

function nameIterator(names) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < names.length ? 
        {
          value: names[nextIndex++],
          done: false } : 
        {
          done: true }
    }
  }
}

console.log(`----------------------------------generator example`);

function* sayNames() {
  yield "Sangea";
  yield "Star";
  yield "Seaweed";
}
const sayName = sayNames();

console.log(`---------------------------------------sayName.next()`);
console.log(sayName.next());
console.log(`---------------------------------------sayName.next()`);
console.log(sayName.next());
console.log(`---------------------------------------sayName.next()`);
console.log(sayName.next());
console.log(`---------------------------------------sayName.next()`);
console.log(sayName.next());

console.log(`-------------------------------------------id creator`);
function* createIds() {
  let index = 0;
  while(true) {
    yield index++;
  }
}
const generateId = createIds();
console.log(`-------------------------------------generateId.next()`);
console.log(generateId.next());
console.log(`-------------------------------------generateId.next()`);
console.log(generateId.next());
console.log(`-------------------------------------generateId.next()`);
console.log(generateId.next());
console.log(`-------------------------------------generateId.next()`);
console.log(generateId.next());
console.log(`-------------------------------------generateId.next()`);
console.log(generateId.next());
