// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let tSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

//  if(mouseIsPressed) tSize = random(20,80);

  textSize(tSize);
  text(str(str(mouseX) + " " + str(mouseY)), mouseX, mouseY)
}

function mousePressed(){
  tSize = random(20,80);
}
