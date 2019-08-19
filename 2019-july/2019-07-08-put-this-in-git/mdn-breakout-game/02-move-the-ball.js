let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height - 30;
let ballRadius = 10;
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 150;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let score = 0;

let bricks = [];

for (let c = 0; c < brickColumnCount; c++){
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++){
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1){
                let brickX = ( c * (brickWidth + brickPadding) ) + brickOffsetLeft;
                let brickY = ( r * (brickHeight + brickPadding) ) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight);
                context.fillStyle = "#0095dd";
                context.fill();
                context.closePath();
            }
        }
    }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if(0 < relativeX && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status == 1){
                if (b.x < x && x < b.x + brickWidth && b.y < y && y < b.y + brickHeight) {
                    dy = - dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount * brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                        clearInterval(interval);
                    }
                }
            }

        }
    }
}

function drawScore() {
    context.font = "16px Arial";
    context.fillStyle = "#0095dd";
    context.fillText("Score: " + score, 8, 20);
}
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2, false);
    context.fillStyle = "0095dd";
    context.fill();
    context.closePath();
}

function drawPaddle() {
    context.beginPath();
    context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = "0095dd";
    context.fill();
    context.closePath();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height - ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        } else{
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }

    }
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 3;
    } else if(leftPressed && paddleX > 0) {
        paddleX -= 3;
    }
    x += dx;
    y += dy;
}

let interval = setInterval(draw, 10);