let movementDisplay;
let ctx;
let game;
let heroine;
let rabbit;
let hunter;
// Crawler Constructor function
function Crawler(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
  this.render = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
const detectHit = () => {
  // check for collision on x axis
  // if the hero's bottom value is > rabbit's top value
  if (
    hero.x + hero.width > rabbit.x &&
    hero.x < rabbit.x + rabbit.width &&
    hero.y + hero.height > rabbit.y &&
    hero.y < rabbit.y + rabbit.height
  ) {
    rabbit.alive = false;
  }
  if (
    hero.x + hero.width > hunter.x &&
    hero.x < hunter.x + hunter.width &&
    hero.y + hero.height > hunter.y &&
    hero.y < hunter.y + hunter.height
  ) {
    hunter.alive = false;
  }
};
const gameLoop = () => {
  // console.log('looping in 💩')
  // clear the cavas
  ctx.clearRect(0, 0, game.width, game.height);
  // display the x, y coordinates of our hero onto the DOM
  movementDisplay.textContent = `X:${hero.x}\nY:${hero.y}`;
  // check if the rabbit is alive and
  // render the hero
  hero.render();
  if (rabbit.alive) {
    // render the rabbit
    rabbit.render();
    // check for collision
    detectHit();
  }
  if (hunter.alive) {
    // render the hunter
    hunter.render();
    // checck for collision
    detectHit();
  }
};
const movementHandler = (e) => {
  // w: 87, a:65, s:83, d:68
  switch (e.keyCode) {
    case 87: // w up
      if (hero.y > 0) hero.y -= 20;
      break;
    case 83: // s down
      if (hero.y + hero.height < game.height) hero.y += 20;
      break;
    case 65: // a left
      if (hero.x > 0) hero.x -= 20;
      break;
    case 68: // d right
      if (hero.x + hero.width < game.width) hero.x += 20;
      break;
    default:
      console.log("invalid keystroke");
  }
};
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  // DOM REFS
  movementDisplay = document.getElementById("movement");
  game = document.getElementById("game");
  // CANVAS CONFIG
  game.setAttribute("height", 500);
  game.setAttribute("width", 800);
  ctx = game.getContext("2d");
  // CHARACTER REFS
  hero = new Crawler(200, 100, 50, 50, "red");
  rabbit = new Crawler(300, 100, 60, 60, "white");
  hunter = new Crawler(480, 280, 70, 70, "black");
  document.addEventListener("keydown", movementHandler);
  let runGame = setInterval(gameLoop, 60);
});

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
