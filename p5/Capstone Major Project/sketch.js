// Capstone Major Project
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg_space;

let earth_tex;
let moon_tex;
let mars_tex;

let earth;

function preload() {
  earth_tex = loadImage('assets/earth.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  bg_space = loadImage('assets/space.jpg');
}

function draw() {
  background(220);
  image(bg_space, -width, -height, width*2, height*2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}