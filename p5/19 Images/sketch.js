// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pilot;

function preload(){
  pilot = loadImage('assets/aviator.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(pilot, 0, 0);
  loadPixels(); // allows us to access pixels on canvas


  updatePixels();
}

function setPixelColor(pos, r, g, b){
  pixels[]
}