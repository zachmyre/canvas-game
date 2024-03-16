const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const playerMenuModal = document.getElementById("playerMenu");
const playerMenuForm = document.getElementById("playerMenuForm");

playerMenuModal.showModal();
playerMenuForm.addEventListener("submit", handlePlayerMenuSubmit);

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 20;
let dy = -20;

let playerName = "";
let playerColor = "";

function handlePlayerMenuSubmit(event) {
  event.preventDefault();

  const nameValue = event.target[0].value;
  const colorValue = event.target[1].value;

  if (!nameValue || !colorValue) {
    return;
  }

  playerName = nameValue;
  playerColor = colorValue;

  playerMenuForm.removeEventListener("submit", handlePlayerMenuSubmit);
  playerMenuModal.close();

  // Game Loop Interval with FPS
  setInterval(draw, 1000 / 60);
  document.addEventListener("keydown", handleKeyInput);
}

function handleKeyInput(event) {
  const keyName = event.key;
  if (keyName == "a") {
    console.log(x);
    if (x <= canvas.width && x >= window.innerWidth - canvas.width + 2 + dx) {
      x -= dx;
    }
  }
  if (keyName == "d") {
    console.log(canvas.width);
    console.log(window.innerWidth);
    console.log(x);
    if (
      x <= canvas.width + 2 + dx &&
      x >= window.innerWidth - canvas.width - 2 - dx
    ) {
      x += dx;
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = playerColor;
  ctx.fill();
  ctx.closePath();
}

// Game Loop
function draw() {
  // circle
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
}

// // rectangle
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// //unfilled rectangle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgb(0 0 255 / 50%)";
// ctx.stroke();
// ctx.closePath();
