let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function random(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, velocityX, velocityY, color, size) {
  this.x = x;
  this.y = y;
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  this.color = color;
  this.size = size;
}

Ball.prototype.draw = function() {
  context.beginPath();
  context.fillStyle = this.color;
  context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  context.fill();
}

Ball.prototype.update = function() {
  if ( ((this.x -this.size) <= 0) || ((this.x + this.size) >= width) ) {
    this.velocityX = -(this.velocityX);
  }
  if ( ((this.y -this.size) <= 0) || ((this.y + this.size) >= height) ) {
    this.velocityY = -(this.velocityY);
  }
  this.x += this.velocityX;
  this.y += this.velocityY;
}

Ball.prototype.collisionDetect = function(){
  for (let j = 0; j < balls.length; j++) {
    if ( !(this === balls[j]) ) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) +")";
      }
    }
  }
}
let balls = [];
while (balls.length < 25) {
  let size = random(10, 30);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-10, 10),
    random(-10, 10),
    "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) +")",
    size
  );
  balls.push(ball);
}

function loop() {
  context.fillStyle = "rgb(255, 255, 255, 0.2)";
  context.fillRect(0, 0, width, height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
  requestAnimationFrame(loop);
}
loop();
