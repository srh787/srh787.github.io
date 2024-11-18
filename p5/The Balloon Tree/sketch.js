// The Balloon Tree
// Steven Huang
// November 18, 2024
// CS30 P3
// A Tree of balloons generated using recursive functions

// Define the scale and leafDepth
let scale = 15;
let leafDepth = 5;
const MAXDEPTH = 6;

// Basic Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  background(255);
  frameRate(1000);
  randomSeed(0); // Fixed random colors and sizes
  // User choose branch width according to the mouseX
  let branchAngle = map(mouseX, 0, width, 10, 45);
  drawTree(width / 2, height * 0.8, 90, MAXDEPTH, branchAngle);
}

function drawLine(x1, y1, x2, y2, depth) {
  // Simulates a thicker branch the closer it is to the root
  strokeWeight(depth * depth / 5);
  // draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth, branchAngle) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale; //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle)) * depth * scale; //using trig ratios. Get shorter based on depth

    stroke(0);
    // Root
    drawLine(x1, y1, x2, y2, depth);
    // For Three Branches:
    drawTree(x2, y2, angle - branchAngle, depth - 1, branchAngle);
    drawTree(x2, y2, angle + branchAngle, depth - 1, branchAngle);
    drawTree(x2, y2, angle, depth - 1);

    if (depth < leafDepth) { // Draws leaf on branches that are further out than the defined depth
      drawLeaf(x2, y2, depth);
    }
  }
}

function drawLeaf(x, y, depth) {
  // Fill random Colour
  fill(color(random(0, 255), random(0, 255), random(0, 255)));
  noStroke();
  // Random Leaf size based on depth
  circle(x, y, random(5, 10) * (7 - depth));
}

function keyPressed() { // User choose leaf depth
  if (key === 'x') { // Increase leaf depth
    if (leafDepth <= MAXDEPTH) {
      leafDepth += 1;
    }
  }
  if (key === 'z') { //  Decrease leaf depth
    if (leafDepth > 1) {
      leafDepth -= 1;
    }
  }
}