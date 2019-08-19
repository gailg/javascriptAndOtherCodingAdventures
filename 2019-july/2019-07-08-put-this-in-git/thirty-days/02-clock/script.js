const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");



function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = 90 + (seconds / 60) * 360;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = 90 + (minutes / 60) * 360;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours() + 1;
    const hoursDegrees = 90 + (hours / 12) * 360;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(seconds);
}
setInterval(setDate, 1000);