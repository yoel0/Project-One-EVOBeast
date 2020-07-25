const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// load images
const images = {};
images.player = new Image();
images.player.src = "character.png";

const playerWidth = "333.333333";
const playerHeight = "204.8";
let playerFrameX = 2;
let playerFrameY = 2;
let playerX = 0;
let playerY = 0;
const playerSpeed = 6;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage;
}
