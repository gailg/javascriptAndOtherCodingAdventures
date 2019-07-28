console.log(`-----------------------------looping a triangle`);
let output = "";
for(let i = 0; i < 7; i++){
    output = output + "#";
    console.log(output);
}


for (let line = "#"; line.length < 8; line += "#")
  console.log(line);


console.log(`---------------------------------------fizzbuzz`);

for(let i = 0; i < 30; i++){
    if( (i+1) % 15 == 0){
        console.log(i+1 +": FizzBuzz");
    } else if( (i+1) % 3 == 0 ){
        console.log(i+1 +":  Fizz");
    } else if( (i+1) % 5 == 0 ){
        console.log(i+1 + ":  Buzz");
    } else {
        console.log(i+1 +":");
    }
}


for (let n = 1; n <= 30; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }


console.log(`----------------------------------------chessboard`);

let size = 10;
let spine = "#";
for (let i = 1; i < size/2; i++){
    spine += "_#"
}
if(size == 1) {
  console.log(spine);
} else {
    for (let i = 0; i < size; i++){
        if(i % 2 == 0){
            console.log("_" + spine);
        } else {
            console.log(spine + "_");
        }
    }
}

