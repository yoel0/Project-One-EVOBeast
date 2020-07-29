let movementDisplay;
let ctx;
let game;
let heroine;
let rabbit;
let hunter;
let hx = 6;
let hy = 6;
let rx = 6;
let ry = 6;
let num = 1;
let killcounter = 0;

// Crawler Constructor function
function Crawler(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
  this.evolved = false;
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
    // add killcounter
    killcounter++;
    // when killcounter = 5 then evolve
    if (killcounter >= 5) {
      hero.evolved = true;
    }
  }
  if (
    hero.x + hero.width > hunter.x &&
    hero.x < hunter.x + hunter.width &&
    hero.y + hero.height > hunter.y &&
    hero.y < hunter.y + hunter.height
  ) {
    if (hero.evolved === true) {
      hunter.alive = false;
    } else {
      hero.alive = false;
    }
  }
};
const gameLoop = () => {
  // console.log('looping in 💩')
  // clear the cavas
  ctx.clearRect(0, 0, game.width, game.height);
  // move rabbit and hunter around map randomly
  hunterRabbitMovement();
  // display the x, y coordinates of our hero onto the DOM
  movementDisplay.textContent = `X:${hero.x}\nY:${hero.y}`;
  // check if the rabbit is alive and
  // render the hero
  if (hero.alive) {
    hero.render();
  }
  if (rabbit.alive) {
    // render the rabbit
    rabbit.render();
    // check for collision
    detectHit();
    // make new rabbit
  } else {
    makeNewRabbit();
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

// function made to make new rabbits
function makeNewRabbit() {
  let random = Math.random();
  let colors = ["blue", "green", "purple", "orange", "pink"];

  rabbit.x = random * 500;
  rabbit.y = random * 300;
  rabbit.color = colors[Math.floor(Math.random() * 5)];
  rabbit.alive = true;
}

// function to make rabbit and hunter move around randomly
function hunterRabbitMovement() {
  num++;
  if (Math.floor((num * Math.random()) % 40) == 0) {
    rx = -1 * rx;
  }
  if (Math.floor((num * Math.random()) % 20) == 0) {
    ry = -1 * ry;
  }
  if (Math.floor((num * Math.random()) % 40) == 0) {
    hx = -1 * hx;
  }
  if (Math.floor((num * Math.random()) % 20) == 0) {
    hy = -1 * hy;
  }
  rabbit.x += Math.random() * rx;
  rabbit.y += Math.random() * ry;
  hunter.x += Math.random() * hx;
  hunter.y += Math.random() * hy;
  if (rabbit.x <= 0 || rabbit.x + rabbit.width >= game.width) {
    rx = -1 * rx;
  }
  if (rabbit.y <= 0 || rabbit.y + rabbit.height >= game.height) {
    ry = -1 * ry;
  }
  if (hunter.x <= 0 || hunter.x + hunter.width >= game.width) {
    hx = -1 * hx;
  }
  if (hunter.y <= 0 || hunter.y + hunter.height >= game.height) {
    hy = -1 * hy;
  }
}

// TODO:
// That heroine can be killed by hunter until its evolved - Kill counter that defines when the heroine evolves -DONE
// ADD condtional that heroine cant kill hunter until its evolved -DONE
// Get the Hunter and Rabbits to move around the map randomly. -DONE
// -- Once this is Done ill have a MVP. --

// TODO 2:
// Work on game Menu Start Game, How to Play, You won screen, Game over screen.
// Add Sprites.
// Add sounds.
