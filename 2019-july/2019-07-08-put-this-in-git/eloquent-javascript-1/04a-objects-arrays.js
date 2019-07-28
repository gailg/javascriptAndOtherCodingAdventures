console.log(`-----------------------------------------------------chapter 4`);
let journal = [];
function addEntry(events, squirrel){
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
console.log(`-----console.log(journal)`)
console.log(journal);
//00 = no squirrel, no pizza
//01 = no squirrel, pizza
//10 = squirrel, no pizza
//11 = squirrel, pizza

//phi = (n11 n00 - n01 n10) / sqrt(n0Dot n1Dot nDot0 nDot1)

function phi([n00, n01, n10, n11]){
    let n0Dot = n00 + n01;
    let n1Dot = n10 + n11;
    let nDot0 = n00 + n10;
    let nDot1 = n01 + n11;
    let numerator = n00 * n11 - n01 * n10;
    let denominator = Math.sqrt(n0Dot * n1Dot * nDot0 * nDot1);
    return(numerator/denominator);
}
let pizza = [76, 9, 4, 1];
console.log(`-----console.log(phi(pizza))`);
console.log(phi(pizza));
function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let entry of journal){
        let index = 0;
        if (entry.events.includes(event)) index ++;
        if (entry.squirrel) index += 2;
        table[index] ++;
    }
    return table;
}
console.log(`-----console.log(tableFor("pizza", JOURNAL))`);
console.log(tableFor("pizza", JOURNAL));
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events){
            if (!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}
console.log(`-----console.log(journalEvents(JOURNAL))`);
console.log(journalEvents(JOURNAL));
console.log(`----------------------------------for each event in JOURNAL, the correlation phi`);
// for (let event of journalEvents(JOURNAL)) {
//     console.log(event + ":", phi(tableFor(event, JOURNAL)));
// }
console.log(`---------------------------------------------------------significant correlations`);
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}
for (let entry of JOURNAL){
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    } 
}
console.log(`-----console.log(phi(tableFor("peanut teeth", JOURNAL)))`);
console.log(phi(tableFor("peanut teeth", JOURNAL)));
console.log(`----------------------------------------------------------------------------remove`);
function remove(array, index){
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(`-----console.log(remove([0, 1, 2, 3, 4, 5], 3))`);
console.log(remove([0, 1, 2, 3, 4, 5], 3));
console.log(`-------------------------------------------------------------------rest parameters`);
function max(...numbers){
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(`-----console.log(max(4, 1, 9, -2))`);
console.log(max(4, 1, 9, -2))
let numbers = [5, 1, 17];
console.log(`-----console.log(numbers)`);
console.log(numbers);
console.log(`-----console.log(max(9, ...numbers, 2))`);
console.log(max(9, ...numbers, 2));
let words = ["never", "fully"];
console.log(`-----console.log(words)`);
console.log(words);
console.log(`-----console.log(["will", ...words, "understand"])`);
console.log(["will", ...words, "understand"]);
console.log(`----------------------------------------------------------------------------remove`);
