function promptDirection(question){
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if(result.toLowerCase() == "right") return "R";
  throw new Error("I was expecting \"left\" or \"right\" and you typed: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L"){
    return "a house";
  } else {
    return "two angry bears";
  }
}
try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
