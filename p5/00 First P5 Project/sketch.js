// First Day Demo
// Steven Huang
// Sept 10, 2024
//
// 2D primitives, color, animation, mouse/keyboard events


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  
  fill(150,255,90)
  
  circle(0,0,50);

  circle(windowWidth/2, windowHeight/2, 50);

  circle(windowWidth, windowHeight, 50)

  circle(0, windowHeight, 50)

  circle(windowWidth, 0, 50)

  circle(windowWidth*2/3, windowHeight/2, 50)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
