let ctx;
let game;
let hero;
let rabbit;
let hunter;
let hx = 6;
let hy = 6;
let rx = 6;
let ry = 6;
let num = 1;
let killcounter = 0;
let keysPressed = [];
let heroImage;
let rabbitImage;
let hunterImage;

// screen set ups
const startScreen = document.querySelector(".start-screen");
const infoScreen = document.querySelector(".info-screen");
const wonScreen = document.querySelector(".won-screen");
const gameoverScreen = document.querySelector(".gameover-screen");
const startButton = document.querySelector("#startButton");
const infoButton = document.querySelector("#infoButton");
const infoClose = document.querySelector("#info-close");
const menu = document.querySelector("#menu");
const resetButton = document.querySelector("#resetButton");
const menu2 = document.querySelector("#menu2");
const resetButton2 = document.querySelector("#resetButton2");

// musica
var bgmusic = document.getElementById("bgm");
bgmusic.volume = 0.2;

// Crawler Constructor function
function Crawler(x, y, width, height, color, type) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.type = type;
  this.alive = true;
  this.evolved = false;
  this.movementState = "idle";
  this.movementStep = 1;
  this.render = function () {
    if (this.type === "hero") {
      ctx.drawImage(
        heroImage,
        16,
        26,
        60,
        80,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
    if (this.type === "rabbit") {
      ctx.drawImage(
        rabbitImage,
        0,
        258,
        38,
        53,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
    if (this.type === "hunter") {
      ctx.drawImage(
        hunterImage,
        22,
        52,
        62,
        53,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  };
}
const detectHit = () => {
  // check for collision on x axis
  // if the hero's bottom value is > rabbit's top value
  if (
    hero.x + hero.width > rabbit.x &&
    hero.x < rabbit.x + rabbit.width &&
    hero.y + hero.height > rabbit.y &&
    hero.y < rabbit.y + rabbit.height &&
    rabbit.alive === true
  ) {
    rabbit.alive = false;
    // add killcounter
    killcounter++;
    console.log(killcounter);
    // when killcounter = 10 then evolve
    if (killcounter >= 10) {
      hero.evolved = true;
      heroImage.src = "./images/EVOBeastForm-2.png";
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
      clearInterval(runGame);
      game.style.display = "none";
      wonScreen.style.display = "block";
    } else {
      hero.alive = false;
      clearInterval(runGame);
      game.style.display = "none";
      gameoverScreen.style.display = "block";
    }
  }
};
const gameLoop = () => {
  // console.log('looping in 💩')
  // clear the cavas
  ctx.clearRect(0, 0, game.width, game.height);
  // move rabbit and hunter around map randomly
  hunterRabbitMovement();
  movementHandler();
  animationHandler();
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
  if (keysPressed[87]) {
    if (hero.y > 0) hero.y -= 6;
    if (hero.movementState != "moveUp") {
      hero.movementState = "moveUp";
    }
  }
  if (keysPressed[83]) {
    if (hero.y + hero.height < game.height) hero.y += 6;
    if (hero.movementState != "moveDown") {
      hero.movementState = "moveDown";
    }
  }
  if (keysPressed[65]) {
    if (hero.x > 0) hero.x -= 6;
    if (hero.movementState != "moveLeft") {
      hero.movementState = "moveLeft";
    }
  }
  if (keysPressed[68]) {
    if (hero.x + hero.width < game.width) hero.x += 6;
    if (hero.movementState != "moveRight") {
      hero.movementState = "moveRight";
    }
  }
  if (
    !keysPressed[87] &&
    !keysPressed[83] &&
    !keysPressed[65] &&
    !keysPressed[68]
  ) {
    hero.movementState = "idle";
  }
};
const animationHandler = () => {
  switch (hero.movementState) {
    case "moveUp":
      console.log("we are moving up");
      break;
    case "moveDown":
      console.log("move down");
      break;
    case "moveLeft":
      console.log("move left");
      break;
    case "moveRight":
      console.log("move right");
      break;
    case "idle":
      console.log("idle");
      break;
  }
};
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  // DOM REFS
  game = document.getElementById("game");
  // CANVAS CONFIG
  game.setAttribute("height", 600);
  game.setAttribute("width", 960);
  ctx = game.getContext("2d");
  heroImage = new Image();
  heroImage.src = "./images/EVOBeastForm-1.png";
  rabbitImage = new Image();
  rabbitImage.src = "./images/rabbit.png";
  hunterImage = new Image();
  hunterImage.src = "./images/Hunter.png";
  document.addEventListener("keydown", (e) => {
    keysPressed[e.keyCode] = true;
  });
  document.addEventListener("keyup", (e) => {
    keysPressed[e.keyCode] = false;
  });
  let runGame = setInterval(gameLoop, 30);
  clearInterval(runGame);
  startScreen.style.display = "block";
  startButton.addEventListener("click", startGame);
  infoButton.addEventListener("click", infoContent);
  infoClose.addEventListener("click", backStartScreen);
  menu.addEventListener("click", backStartScreen);
  resetButton.addEventListener("click", startGame);
  menu2.addEventListener("click", backStartScreen);
  resetButton2.addEventListener("click", startGame);
});
// make start button function
const startGame = () => {
  hero = new Crawler(200, 100, 50, 50, "red", "hero");
  rabbit = new Crawler(300, 100, 60, 60, "white", "rabbit");
  hunter = new Crawler(480, 280, 70, 70, "black", "hunter");
  startScreen.style.display = "none";
  wonScreen.style.display = "none";
  gameoverScreen.style.display = "none";
  game.style.display = "block";
  killcounter = 0;
  heroImage.src = "./images/EVOBeastForm-1.png";
  runGame = setInterval(gameLoop, 30);
  bgmusic.play();
};
// make info content window appear
const infoContent = () => {
  startScreen.style.display = "none";
  infoScreen.style.display = "block";
};
// go back to start screen from info screen
const backStartScreen = () => {
  infoScreen.style.display = "none";
  wonScreen.style.display = "none";
  gameoverScreen.style.display = "none";
  startScreen.style.display = "block";
  bgmusic.pause();
  bgmusic.currentTime = 0;
};

// window.addEventListener("resize", function () {
//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;
// });

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
