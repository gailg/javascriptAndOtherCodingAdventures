console.log(`----------------------------------------------------------------------------flatten`);
let larry = [1, 2, 3, [4, 5], [6], 7];
function flatten(array){
    return larry.reduce((accumulator, current) => accumulator.concat(current), []);
}
console.log(`-----flatten(larry)`);
console.log(flatten(larry));
console.log(`------------------------------------------------------------------------my own loop`);
function loop(value, test, update, body){
    for(let i = value; test(i); i = update(i)){
        body(i);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
console.log(`-------------------------------------------------------------------------everything`);
function everything(array, test){
    for(let element of array){
        if(!test(element)) return false;
    }
    return true;
}
console.log(`-----everything([1, 2, 3, 4, 5], element => element > 0)`);
console.log(everything([1, 2, 3, 4, 5], element => element > 0));
console.log(`-----[1, 2, 3, 4, 5], element => element < 4)`);
console.log(everything([1, 2, 3, 4, 5], element => element < 4));
console.log(`---------------------------------------------------------dominant writing direction`);
function characterScript(code) {
    let scriptsContainingCodeAgain = SCRIPTS.filter(script => 
        script.ranges.some(([from, to]) => from <= code && code < to));
    if(scriptsContainingCodeAgain.length > 0){
        return scriptsContainingCodeAgain[0];
    } else {
        return null;
    }
}
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}
function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    let total = scripts.reduce( (n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    return scripts.map( ({name, count}) => {
        return `${Math.round(count * 100 / total)} percent ${name}`;
    });
}
console.log(`-----textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')`);
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')); 
function writingDirection(text) {
    let directions = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    let total = directions.reduce( (n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
    return directions.map( ({name, count}) => {
        return `${Math.round(count * 100 / total)} percent ${name}`;
    });
}

console.log(`-----writingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"')`);
console.log(writingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"')); 
console.log(`-----SCRIPTS.filter(x => x.name == "Han" || x.name == "Latin" || x.name == "Cyrillic")`);
console.log(SCRIPTS.filter(x => x.name == "Han" || x.name == "Latin" || x.name == "Cyrillic"));

