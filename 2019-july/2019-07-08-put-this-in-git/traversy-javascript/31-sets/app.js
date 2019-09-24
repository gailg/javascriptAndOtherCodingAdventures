const charles = new Set();
charles.add(42);
charles.add("Larry");
charles.add({name: "Monty", what: "otter"})
console.log(charles);

const sangea = new Set([
  42, "Seawead", {a:1, b:2}
])
console.log(sangea);
console.log(sangea.size);
console.log(sangea.has(42));
console.log(sangea.has(40 + 2));
console.log(sangea.has({a:1, b:2}));

charles.delete("Larry");
console.log(charles);
console.log(`---------------------for (let x of sangea) console.log(x) `);
for(let x of sangea){
  console.log(x);
}
console.log(`----------------------sangea.forEach( x => console.log(x))`);
sangea.forEach( x => console.log(x))
console.log(`-------------------------arrayFromSet = Array.from(sangea)`);
const arrayFromSet = Array.from(sangea);
console.log(arrayFromSet);