let total = 0;
let count = 0;
while (count <= 10) {
  total += count;
  count ++;
}
console.log(`the sum of the positive integers up to 10 equals ${total}`);
larry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// The following does NOT work because we do not yet have sum or range
// console.log(`do it the fancy way: ${sum(range(1, 10))}`);

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
// Looping a triangle
const hash = "#";
let soFar = "";
for (let i = 0; i < 10; i++){
  soFar = soFar + hash;
  console.log(soFar);
}
// Fizzbuzz
for (let i = 1; i <= 100; i++){
  let output = `${i}: `;
  if(i % 3 == 0 ){
    output += "Fizz";
  }
  if(i % 5 == 0){
    output += "Buzz";
  }
  console.log(output);
}
// Chessboard
let size = 16;
let firstLineChunk = " #";
let secondLineChunk = "# ";
firstLine = "";
secondLine = "";
for (i = 0; i < size/2; i++){
  firstLine += firstLineChunk;
  secondLine += secondLineChunk;
}
for (i = 0; i < size/2; i++){
  console.log(firstLine);
  console.log(secondLine);
}
