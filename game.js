const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
   

// Game Loop
function draw(){
    // circle
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

// Game Loop Interval with FPS
setInterval(draw, 1000 / 60);


// rectangle
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();



//unfilled rectangle
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();

