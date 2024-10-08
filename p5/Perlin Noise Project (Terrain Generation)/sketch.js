// Perlin Noise Project (Terrain Generation)
// Steven Huang
// October 3rd, 2024
// CS30
// Generating a semi-smooth terrain while allow user inputs for width
// and calculations for the average altitude on the continuously moving terrain.

let rectWidth = 1; // Width of each rectangle (modified by arrow keys)
let noiseOffset = 0; // Initial noise offset for panning
// Initial rectangle colour (grey)
let rectR = 128;
let rectG = 128;
let rectB = 128;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30); // Controls the speed of panning
}

function draw() {
  background(255); // Clear the screen each frame
  strokeWeight(1);
  staircase(); // Generate the terrain

  noiseOffset += 0.05; // Increment the noise offset for continuous panning
}

function staircase() {
  randomSeed(1); // For consistency

  let totalHeight = 0; // Variable for total height
  let rectsAmount = windowWidth / rectWidth; // calculate the number of rectangles

  // Variables for flag coordinates
  let peakY = 0;
  let peakX = 0;
  let peakY1 = 0;

  let noiseLevel = height; // Scale the noise to canvas height
  let noiseInterval = 0.01; // Controls smoothness

  let nx = noiseOffset; // Start noise input at the current offset

  for (let x = 0; x <= windowWidth; x += rectWidth) {
    // Compute the noise value.
    let rectHeight = noiseLevel * noise(nx);
    totalHeight += rectHeight;

    if (rectHeight > peakY) { // Checks for highest point and records the coordinates
      peakX = x;
      peakY = rectHeight;
      peakY1 = windowHeight - rectHeight;
    }

    // Colours
    rectR = Math.random() * (130 - 126) + 126;
    rectG = Math.random() * (130 - 126) + 126;
    rectB = Math.random() * (130 - 126) + 126;

    fill(rectR, rectG, rectB);
    rect(x, height, rectWidth, -rectHeight);

     
    nx += noiseInterval; // Increment noise input
  }

  let avgHeight = totalHeight / rectsAmount; // Calculate average

  // Draw the average line
  fill(255, 0, 0, 255);
  noStroke();
  rect(0, windowHeight - avgHeight, windowWidth, 5)
  stroke(1)

  // Draw Flag
  drawFlag(peakX, peakY1);
}


function keyPressed() {
  if (keyCode === 37) {// Decrease Width
    if (rectWidth === 1) { // Checks for Current Width to prevent server crashing
    } else {
      rectWidth -= 1;
    }
  }
  if (keyCode === 39) { // Increase Width
    rectWidth += 1;
  }
}

function drawFlag(x, y) {// Draw Flag
  fill(255, 0, 0);
  line(x, y, x, y - 50);
  rect(x, y - 50, 30, 20);
}

//constantly updating window for canvas to look natural and fit to scale
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}