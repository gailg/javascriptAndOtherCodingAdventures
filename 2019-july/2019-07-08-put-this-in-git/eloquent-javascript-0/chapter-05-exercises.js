// flatten
console.log("=============================     flatten=");
let larry = [[1, 2, 3], [4], 5, [6, [7]]];
console.log("-----larry");
console.log(larry);
notDone = true;
while(notDone){
  let gander = [];
  larry.forEach((element) => {
    gander.push(typeof element);
  });
  notDone = gander.some((element) => element == "object");
  larry = larry.reduce(
    (a, b) => {
      if((typeof a) == "object"){
        return a.concat(b);
      } else {
        return [a].concat(b);
      }
    }
  );

}
console.log("-----larry");
console.log(larry);
console.log("===========================     everything");
function everything(array, amITrue){
  let keepTrack = [];
  array.forEach(element => keepTrack.push(amITrue(element)));
  return keepTrack.reduce((a, b) => a && b);
}
console.log("-----everything([1, 2, 3], x => x > 0)");
console.log(everything([1, 2, 3], x => x > 0));
console.log("-----everything([1, 2, 3], x => x % 2 == 0)");
console.log(everything([1, 2, 3], x => x % 2 == 0));

console.log("============     dominant writing direction");
let text = '英国的狗说"woof", 俄罗斯的狗说"тяв"';
function inWhatScriptAreYou(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return from <= code && code < to;
    })) {
      return script;
    }
  }
  return null
}
let scripts = [];
for (let character of text){
  let script = inWhatScriptAreYou(character.codePointAt(0));
  if(script){
    scripts.push(script);
  }
}
// console.log("-----scripts");
// console.log(scripts);

let table = [];
for (let character of text){
  let script = inWhatScriptAreYou(character.codePointAt(0));
  if(script){
    table.push([character, script.name, script.direction]);
  }
}
console.log("-----table");
console.log(table);
let writingDirection = [];
for (let character of text){
  let script = inWhatScriptAreYou(character.codePointAt(0));
  if(script){
    writingDirection.push(script.direction);
  }
}
console.log("-----writingDirection");
console.log(writingDirection);
