// Get canvas element and declare it in const variable called canvas.
const canvas = document.getElementById("canvas");
// ctx shortcut for context this will give access to built in draw in api
// and now I can call in the ctx variable which holds many built in canvas methods used for drawing text, shapes, images and other objects.
const ctx = canvas.getContext("2d");
// I set our canvas to the inner height and width of the browser window.
// at this point we are saying we are going to define the whole window as our draw space because tiny windows kind of suck.
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// load images
// an empty array to hold our images.
const images = {};
// this will add player images in to our images array.
images.player = new Image();
// setting the images source to pull from our sprite sheet.
images.player.src = "images/character.png";

// declare a couple variables that will help us navigate and find the characters within the sprite sheet.
// get the width of one frame in our sprite sheet.
const playerWidth = "333.333333";
// get height of one frame in our sprite sheet.
const playerHeight = "204.8";
// we will go frame to frame by using X, Y coordinates.
let playerFrameX = 1;
let playerFrameY = 1;
// these will determine at what point we draw our characters on the canvas.
let playerX = 0;
let playerY = 0;
// we will also declare our player speed for now it will be 6 (come back later to change).
const playerSpeed = 6;
// now we want to take our sprite sheet choose coordinates of a frame and draw that frame on canvas. To make it RE-useable for other sprite sheets in the game and to customize if needed, I will wrap it in a function called drawSprite.
// this functions will need 9 attributes, the first one is the image we want to draw in this case our sprite sheet, the next 4 attributes specify area from the src image we want to draw width and height the next 4 attributes will specify where on the canvas we want to draw "Destination" Y and X show where Height and Width define sizing.
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSprite(
    images.player,
    playerWidth * playerFrameX,
    playerHeight * playerFrameY,
    playerWidth,
    playerHeight,
    playerX,
    playerY,
    playerWidth,
    playerHeight
  );
}

window.onload = setInterval(animate, 1000 / 30);

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
