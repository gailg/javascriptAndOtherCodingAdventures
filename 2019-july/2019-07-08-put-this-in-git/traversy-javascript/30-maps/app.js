const map1 = new Map();
const key1 = "some string",
      key2 = {},
      key3 = function(){};
map1.set(key1, "value of key1");
map1.set(key2, "value of key2");
map1.set(key3, "value of key3");

console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));
console.log(map1.size);

for(let [key, value] of map1){
  console.log(`${key}: ${value}`);
}

console.log(`-----------------for(let key of map1.keys()){ console.log( key )}`);
for(let key of map1.keys()) {
  console.log(`${key}`)
}
console.log(`--------------for(let key of map1.values()){ console.log( value )}`);
for(let value of map1.values()) {
  console.log(`${value}`)
}
console.log(`--------map1.forEach( (value, key) => console.log( key:  value ))`);
map1.forEach( (value, key) => console.log(`${key}:  ${value}`));
console.log(`---------------------------------keyValueArray = Array.from(map1)`);
const keyValueArray = Array.from(map1);
console.log(keyValueArray);
console.log(`----------------------------valueArray = Array.from(map1.values()`);
const valueArray = Array.from(map1.values());
