const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const html = `
    <span>${hour}</span> : 
    <span>${minute}</span> : 
    <span>${second}</span>
    `
  clock.innerHTML = html;


}
setInterval(tick, 1000);

const now = new Date();
console.log(`-----dateFns.isToday(now)`);
console.log(dateFns.isToday(now));
console.log(`-----dateFns.format(now, "YYYY")`);
console.log(dateFns.format(now, "YYYY"));
console.log(`-----dateFns.format(now, "MMM")`);
console.log(dateFns.format(now, "MMM"));
console.log(`-----dateFns.format(now, "dddd")`);
console.log(dateFns.format(now, "dddd"));
console.log(`-----dateFns.format(now, "Do")`);
console.log(dateFns.format(now, "Do"));
console.log(`-----dateFns.format(now, "dddd Do MMMM YYYY")`);
console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

const before = new Date("August 15 2019 12:00:00");
console.log(`-----dateFns.distanceInWords(now, before, {addSuffix: true})`)
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
