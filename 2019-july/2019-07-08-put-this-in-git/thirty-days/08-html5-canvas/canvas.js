const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "#bada55";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 1;
context.globalCompositeOperation = "overlay";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
    if(!isDrawing){
        return;
    }
    context.strokeStyle =  `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];
    hue++;
    if(hue >= 360){
        hue = 0;
    }
    console.log(hue);
    
    if (context.lineWidth >= 20 || context.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction){
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }
}
canvas.addEventListener("mousedown", () => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
})
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
