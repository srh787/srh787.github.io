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
  randomSeed(1);

  drawTree(width / 2, height * 0.8, 90, 6);
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

    stroke(0,0,0);
    drawTree(x2, y2, angle - 20, depth - 1);
    drawTree(x2, y2, angle + 20, depth - 1);
    drawTree(x2, y2, angle, depth - 1);

    if (depth < 4){
      drawLeaf(x2,y2,depth);
    }
  }



}

function drawLeaf(x, y, depth) {
  fill(color(random(0, 255), random(0, 255), random(0, 255)));
  noStroke();
  circle(x, y, random(5, 10) * (7 - depth));
}