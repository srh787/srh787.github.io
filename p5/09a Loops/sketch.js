// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Exercise
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //TOP LINE
  for(let x = 0; x < width; x+=40){
    circle(x, 0, 20);
    line(x,0,mouseX,mouseY);
  }
}