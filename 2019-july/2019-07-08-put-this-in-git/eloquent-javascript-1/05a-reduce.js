console.log(`----------------------------------the biggest script`)
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}
let theBiggestScript = SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
});
console.log(`-----theBiggestScript`);
console.log(theBiggestScript);
let count = theBiggestScript.ranges.reduce(
    (count, [from, to]) => {
        return count + (to - from);
    }, 0 );
console.log(`-----count`);
console.log(count);


let code = 1536;
code = 128052;
let script = SCRIPTS[3];
console.log(`-----script`);
console.log(script);
script.ranges.some(([from, to]) => from <= code && code < to)

let scriptsContainingCode = SCRIPTS.filter(script => {
    return script.ranges.some(
        ([from, to]) => from <= code && code < to);
});
console.log(`-----scriptsContainingCode`)
console.log(scriptsContainingCode);

let scriptsContainingCodeAgain = SCRIPTS.filter(script => 
    script.ranges.some(([from, to]) => from <= code && code < to));
console.log(`-----scriptsContainingCodeAgain`)
console.log(scriptsContainingCodeAgain);
console.log(`------------------------------------------horse shoe`)
let horseShoe = "🐴👟"; 
console.log(`-----horseShoe.codePointAt(0)`)
console.log(horseShoe.codePointAt(0));

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
console.log(`-----countBy([1, 2, 3, 4, 5, 6], n => n % 3 == 0))`);
console.log(countBy([1, 2, 3, 4, 5, 6], n => n % 3 == 0));

let divisibleByThree = countBy([1, 2, 3, 4, 5, 6], 
    (n) => {
        if(n % 3 == 0){
            return "divisible by 3";
        } else {
            return "not divisible by 3";
        }
    });
console.log(`-----divisibleByThree`);
console.log(divisibleByThree);

function partitionBy(items, groupName) {
    let partition = [];
    for (let item of items) {
        let name = groupName(item);
        let known = partition.findIndex(c => c.name == name);
        if (known == -1) {
            partition.push({name, elements: [item]});
        } else {
            partition[known].elements.push(item);
        }
    }
    return partition;
}

divisibleByThree = partitionBy([1, 2, 3, 4, 5, 6], 
    (n) => {
        if(n % 3 == 0){
            return "divisible by 3";
        } else {
            return "not divisible by 3";
        }
    });
console.log(`-----divisibleByThree`);
console.log(divisibleByThree);

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

function partitionIntoScripts(text) {
    let scripts = partitionBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    return scripts;
}
console.log(`-----partitionIntoScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')`);
console.log(partitionIntoScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')); 