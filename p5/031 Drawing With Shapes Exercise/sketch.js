// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(301);
  fill(170, 255, 170);
  noStroke();

  circle(width / 2, height / 2, 500);
  rect(width / 2 - 250, height / 2, 500, 250);
  rect(width / 2 - 250, height / 2 + 250, 35, 100);
  rect(width / 2 + 215, height / 2 + 250, 35, 100);

  fill(0, 0, 0);
  circle(width / 2 - 150, height / 2, 50);
  circle(width / 2 + 150, height / 2, 50);
  rect(width / 2 - 100, height / 2 + 100, 200, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
