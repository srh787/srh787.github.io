// Capstone Major Project
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg_space;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg_space = loadImage('assets/space.jpg');
}

function draw() {
  background(220);
  image(bg_space, 0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

class Planet{
  constructor(r, d, v, ) {
    
  }

}
