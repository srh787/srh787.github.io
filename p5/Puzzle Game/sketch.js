// Puzzle Game
// Steven Huang
// November 4th, 2024
// CS30 P3
// Puzzle game using a 5x4 grid, flipping all blocks on the grid to a single color to win.

// Grid Dimensions Variables
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let currentFlipPattern = "cross";

//Initial Grid Data
let gridData = [[0, 0, 0, 255, 255],
  [255, 0, 255, 0, 255],
  [0, 255, 0, 0, 0],
  [0, 0, 255, 0, 255]];

// P5 Setup, initializes canvas and grid structure
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;

  updateGrid();
}

// Function to randomize Grid data
function updateGrid() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      gridData[y][x] = random([0, 255]);
    }
  }
}

// Function to draw Grid based on gridData values
function drawGrid() {
  // Render a Grid of Squares - fill color set 
  // According to data stored in 2D array.
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

// Function to determine cell under cursor
function determineActiveSquare() {
  //An expression to run each frame and to determine
  //where the mouse is!
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

// Function to handle mouse click events for flips
function mousePressed() {
  if (keyIsPressed && keyCode === SHIFT) {
    flip(currentCol, currentRow); // CHEAT mode
  }
  else {
    // Cross pattern
    if (currentFlipPattern === "cross") {
      flip(currentCol, currentRow);//mouse
      flip(currentCol - 1, currentRow);//left
      flip(currentCol + 1, currentRow);//right
      flip(currentCol, currentRow - 1);//up
      flip(currentCol, currentRow + 1);//down
    }
    else {
      // Square pattern
      for (let y = -1; y < 1; y++) {
        for (let x = -1; x < 1; x++) {
          flip(currentCol - y, currentRow - x);
        }
      }
    }
  }
}

// Function to Flip the color of a specified cell when called
function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row >= 0 && row < NUM_ROWS) {
    if (gridData[row][col] === 0) {
      gridData[row][col] = 255;
    }
    else {
      gridData[row][col] = 0;
    }
  }
}

// Checks if all cells are the same color, then displays "You Win!" Message
function winCondition() {
  let firstColour = gridData[0][0];
  for (let row of gridData) {
    for (let grid of row) {
      if (grid !== firstColour) {
        return false;
      }
    }
  }

  // You Win Message
  fill(255, 0, 0);
  textSize(60);
  textAlign(CENTER);
  text("You Win!", width / 2, height / 2);
}

// Function to draw overlay highlighting affected cells
function drawOverlay() {
  fill(100, 255, 100, 150); // Semi-transparent blue
  strokeWeight(3);

  // Cross Pattern
  if (currentFlipPattern === "cross") {
    rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); // Center
    if (currentCol > 0) {
      rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    }
    if (currentCol < NUM_COLS - 1) {
      rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    }
    if (currentRow > 0) {
      rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight);
    }
    if (currentRow < NUM_ROWS - 1) {
      rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
    }
  }
  else { // Square Pattern
    for (let i = -1; i <= 0; i++) {
      for (let j = -1; j <= 0; j++) {
        let newCol = currentCol - i;
        let newRow = currentRow - j;
        if (newCol >= 0 && newCol < NUM_COLS && newRow >= 0 && newRow < NUM_ROWS) {
          rect(newCol * rectWidth, newRow * rectHeight, rectWidth, rectHeight);
        }
      }
    }
  }
}

// Handles key pressed events for spacebar for switching flip patterns
function keyPressed() {
  if (key === ' ') {
    currentFlipPattern = currentFlipPattern === "cross" ? "square" : "cross";
  }
}

function draw() {
  //frameRate(5);
  background(220);
  determineActiveSquare();
  // Updates Grid Every Frame
  drawGrid();

  // Checks for win
  winCondition();

  // Constant overlay to assist player
  drawOverlay();

  console.log(currentFlipPattern);
}

function windowResized() { // Resize window
  resizeCanvas(windowWidth, windowHeight);
}