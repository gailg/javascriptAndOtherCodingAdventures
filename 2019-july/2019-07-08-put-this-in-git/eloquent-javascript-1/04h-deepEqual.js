let larry = {a: 1, b: 2, c: 42};
let monty = {a: 1, b: 2, c: 42};
let sangea = {a: 1, b: 3, c: 42};
let charles = {a: 1, b: 2};
let star = {x: "bobby", y: larry};
let moon = {x: "bobby", y: larry};
let planet = {x: "bobby", y: {a: 1, b: 2, c: 43}};

function deepEqual(larry, monty){
    let entries = Object.entries(larry);
    for (const [key, value] of entries){
        if (! monty.hasOwnProperty(key) ) {
            return false;
        } else if (typeof value !== "object"  || value == null) {
            if (value !== monty[key]) return false;
        } else {
            if ( !deepEqual(value, monty[key]) ) return false;
        }
    }
    return true;
}
console.log(`-----deepEqual(larry, monty)`);
console.log(deepEqual(larry, monty));
console.log(`-----deepEqual(larry, sangea)`);
console.log(deepEqual(larry, sangea));
console.log(`-----deepEqual(star, moon)`);
console.log(deepEqual(star, moon));
console.log(`-----deepEqual(star, planet)`);
console.log(deepEqual(star, planet));



