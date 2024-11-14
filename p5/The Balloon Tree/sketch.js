// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scale = 15;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}
function draw() {
  frameRate(1000);

  drawTree(width / 4, height * 0.8, 90, 10);
}
function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + cos(radians(angle)) * depth * scale; //calculate endpoints of current branch
    let y2 = y1 - sin(radians(angle)) * depth * scale; //using trig ratios. Get shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    //for a 2-branch tree:
    stroke(color(random(0, 255), random(0, 255), random(0, 255)))
    drawTree(x2, y2, angle - 45, depth - 1);
    stroke(color(random(0, 255), random(0, 255), random(0, 255)))
    drawTree(x2, y2, angle - 30, depth - 1);
    stroke(color(random(0, 255), random(0, 255), random(0, 255)))
    drawTree(x2, y2, angle - 15, depth - 1);
  }
}

function drawBalloon(x, y, depth) {

}