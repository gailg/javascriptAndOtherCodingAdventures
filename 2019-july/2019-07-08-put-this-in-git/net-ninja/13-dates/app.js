const before = new Date("October 1 2019 0:00:00");
const now = new Date();
console.log(`------now`);
console.log(now)
console.log(`------typeof now`);
console.log(typeof now)
console.log(`------now.getFullYear()`);
console.log(now.getFullYear())
console.log(`------now.getMonth()`);
console.log(now.getMonth())
console.log(`------now.getDate()`);
console.log(now.getDate())
console.log(`------now.getDay()`);
console.log(now.getDay())
console.log(`------now.getHours()`);
console.log(now.getHours())
console.log(`------now.getMinutes()`);
console.log(now.getMinutes())
console.log(`------now.getSeconds()`);
console.log(now.getSeconds());
console.log(`------now.getTime()`); // since 1970;
console.log(now.getTime());
console.log(`------now.toDateString()`);
console.log(now.toDateString());
console.log(`------now.toTimeString()`);
console.log(now.toTimeString());
console.log(`------now.toLocaleString()`);
console.log(now.toLocaleString());

console.log(`------------------------------------------before`);
console.log(before);
const difference = now.getTime() - before.getTime();

const days = difference / 1000 / 60 / 60 / 24; // milliseconds seconds minutes hours
console.log(`--------------------------------------------days`);
console.log(days);
console.log(`-------------------------------------------new Date(timestamp)`);
const timestamp = 167593847499;
console.log(new Date(timestamp));