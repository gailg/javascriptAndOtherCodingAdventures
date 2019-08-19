console.log(`-----"larrry rrrrrr".replace(/rrr/g, "rr")`);
console.log("larrry rrrrrr".replace(/rrr/g, "rr"));
console.log(`-----"John Smith".replace(/(\w+)\s(\w+)/,  "$2, $1")`);
console.log("John Smith".replace(/(\w+)\s(\w+)/,  "$2, $1"))
console.log(`-----In the following the square bracktes in the regex should show escaped`)
console.log(`-----"[{()}]".replace(  /(\[)(.*)(\])/ , "$3$2$1" )`);
console.log("[{()}]".replace(  /(\[)(.*)(\])/ , "$3$2$1" ));
let theNumber = Number(prompt("Pick a number"));
if(!Number.isNaN(theNumber)){
    console.log("Your number is the square root of " + theNumber * theNumber);
}