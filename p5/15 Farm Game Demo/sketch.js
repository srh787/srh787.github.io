// Farm Game Demo
// Mr. Scott
// Nov 15th
// Creating a tile-based gameboard w/ block pusher mechanics

let tiles = []; //0→ blank   1→chicken  2→cow
let level = [
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
];
const COLUMNS = 5, ROWS = 5, TILE_SIZE = 100;
let playerX = 3, playerY = 4;

function preload() {
  for (let i = 0; i < 3; i++) {
    tiles.push(loadImage("assets/" + i + ".png"));
  }
}

function setup() {
  createCanvas(COLUMNS * TILE_SIZE, ROWS * TILE_SIZE);
  level[playerY][playerX] = 2; //place the cow
}

function draw() {
  renderBoard();
}

function swap(x1, y1, x2, y2,) {
  //modify the gameboard; switch two items
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed() {
  //this SHOULD have some edge error checking...
  if (keyCode === UP_ARROW) {
    if (level[playerY - 1][playerX] === 0) { //blank
      swap(playerX, playerY, playerX, playerY - 1);
      playerY--;
    }
    else if (level[playerY - 1][playerX] === 1) {//it's a chicken
      if (playerY > 1 && level[playerY - 2][playerX] === 0) {
        //implies there is room to do a push!
        swap(playerX, playerY - 1, playerX, playerY - 2);
        swap(playerX, playerY - 1, playerX, playerY);
        playerY--;
      }
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (level[playerY + 1][playerX] === 0) { //blank
      swap(playerX, playerY, playerX, playerY + 1);
      playerY++;
    }
    else if (level[playerY + 1][playerX] === 1) {//it's a chicken
      if (playerY < 4 && level[playerY + 2][playerX] === 0) {
        //implies there is room to do a push!
        swap(playerX, playerY + 1, playerX, playerY + 2);
        swap(playerX, playerY + 1, playerX, playerY);
        playerY++;
      }
    }
  }
  if (keyCode === LEFT_ARROW) {
    if (level[playerY][playerX - 1] === 0) { //blank
      swap(playerX, playerY, playerX - 1, playerY);
      playerX--;
    }
    else if (level[playerY][playerX - 1] === 1) {//it's a chicken
      if (playerX > 1 && level[playerY][playerX - 2] === 0) {
        //implies there is room to do a push!
        swap(playerX - 1, playerY, playerX - 2, playerY);
        swap(playerX - 1, playerY, playerX, playerY);
        playerX--;
      }
    }
  }
  if (keyCode === RIGHT_ARROW) {
    if (level[playerY][playerX + 1] === 0) { //blank
      swap(playerX, playerY, playerX + 1, playerY);
      playerX++;
    }
    else if (level[playerY][playerX + 1] === 1) {//it's a chicken
      if (playerX < 4 && level[playerY][playerX + 2] === 0) {
        //implies there is room to do a push!
        swap(playerX + 1, playerY, playerX + 2, playerY);
        swap(playerX + 1, playerY, playerX, playerY);
        playerX++;
      }
    }
  }



}

function renderBoard() {
  //interpret data in 2D array, place images on canvas
  for (let x = 0; x < COLUMNS; x++) {
    for (let y = 0; y < ROWS; y++) {
      let pos = level[y][x];
      let currentImage = tiles[pos];
      image(currentImage, x * TILE_SIZE, y * TILE_SIZE);
    }
  }
}