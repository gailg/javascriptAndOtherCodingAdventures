console.log(`------------------------------------------------filter`);

const users = [
  {name: "larry", premium: false},
  {name: "monty", premium: true},
  {name: "charles", premium: true},
  {name: "sangea", premium: false}
];
const premiumUsers = users.filter(x => x.premium).map(x => x.name);
console.log(`---------------------------premiumUsers`);
console.log(premiumUsers);

console.log(`---------------------------------------------------map`);


const products = [
  {name: "gold star", price: 20},
  {name: "mushroom", price: 40},
  {name: "green shells", price: 30},
  {name: "banana skin", price: 10},
  {name: "red shells", price: 50}
];

const saleProducts = products.map( x => {
  if(x.price > 30) {
    // x.price = x.price / 2;
    const y = {...x};
    y.price = y.price / 2;
    return y;
  } else {
    return x;
  }
});
console.log(`---------------------------------------------products`);
console.log(products);
console.log(`-----------------------------------------saleProducts`);
console.log(saleProducts);


console.log(`------------------------------------------------reduce`);
console.log(`---------------------------how many scores are over 50`);
let scores = [10, 20, 60, 40, 70, 90, 30];
const numberGreaterThan30 = scores.reduce((accumulator, currentValue) => {
  const counter = currentValue > 30 ? 1 : 0;
  return accumulator + counter;
}, 0)
console.log(`-----------------------------------numberGreaterThan30`);
console.log(numberGreaterThan30);

console.log(`------------------------------------------------------`);
console.log(`--------------------------------------mariosTotalScore`);
scores = [
  {player: "mario", score: 50},
  {player: "yoshi", score: 30},
  {player: "mario", score: 70},
  {player: "crystal", score: 60},
];
const mariosTotalScore = scores.reduce( (accumulator, currentValue) => {
  const addend = currentValue.player == "mario" ? currentValue.score : 0;
  return accumulator + addend;
}, 0);
console.log(mariosTotalScore);
console.log(`--------------------------------------------------find`);
scores = [10, 5, 0, 40, 60, 10, 20, 70];
const firstHighScore = scores.find( score => {
  return ( score > 50 ? true : false);
});
console.log(`----------------------------------------firstHighScore`);
console.log(firstHighScore);
console.log(`------------------------------------------------------`);
console.log(`--------------------------------------------------sort`);
const names = ["larry", "monty", "charles", "sangea"];
let sortedOtters = [...names];
sortedOtters.sort();
console.log(`------------------------------------------sortedOtters`);
console.log(sortedOtters);
let sortedScores = [...scores];
sortedScores.sort();
console.log(`------------------------------------------sortedScores`);
console.log(sortedScores);
console.log(`------------------------------------------------------`);
const players = [
  {name: "mario", score: 20},
  {name: "luigi", score: 10},
  {name: "chun-li", score: 50},
  {name: "yoshi", score: 30},
  {name: "shawn", score: 70}
];
let sortedPlayers = [...players];
sortedPlayers.sort( (a, b) => (a.score > b.score ? -1 : (a.score < b.score ? 1 : 0)));
console.log(`----------------------------------------sortedPlayers`);
console.log(sortedPlayers);
console.log(`------------------------------------------------------`);
console.log(`------------------------------------------------------`);
const promos = products
  .filter( x => x.price > 20)
  .map(x => `$The product {x.name} has a sale price of ${x.price/2}`);
console.log(`------------------------------------------------promos`);
console.log(promos);
console.log(`------------------------------------------------------`);