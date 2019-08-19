let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// context.beginPath();
// context.rect(20, 40, 50, 50);
// context.fillStyle = "#FF0000";
// context.fill();
// context.closePath();

// context.beginPath();
// context.arc(240, 160, 20, 0, Math.PI*2, false);
// context.fillStyle = "green";
// context.fill();
// context.closePath();

// context.beginPath();
// context.rect(300, 300, 100, 100);
// context.strokeStyle = "black";
// context.stroke();
// context.closePath();

context.beginPath();
context.arc(50, 50, 10, 0, Math.PI*2, false);
context.fillStyle = "red";
context.fill();
context.closePath();