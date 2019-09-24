const sym1 = Symbol();
const sym2 = Symbol("sym2");

console.log(`----------------------------------unique object keys`);

const KEY1 = Symbol();
const KEY2 = Symbol("sym2");
console.log(`------------------------------------------------KEY1`);
console.log(KEY1);
console.log(`------------------------------------------------KEY2`);
console.log(KEY2);
const myObject = {};
myObject[KEY1] = "Property 1";
myObject[KEY2] = "Property 2";
myObject.key3 = "Property 3";
myObject.key4 = "Property 4";
console.log(`--------------------------------------myObject[KEY1]`);
console.log(myObject[KEY1]);
console.log(`--------------------------------------myObject[KEY2]`);
console.log(myObject[KEY2]);
console.log(`-------------------------for in of stuff in myObject`);
for(let i in myObject) {
  console.log(`${i}: ${myObject[i]}`)
}

console.log(`--------------------JSON.stringify({key: "property"})`);
console.log(JSON.stringify({key: "property"}));
console.log(`-------JSON.stringify({[Symbol("sym1")]: "property"})`);
console.log(JSON.stringify({[Symbol("sym1")]: "property"}));

