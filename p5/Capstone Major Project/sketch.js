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
  bg_space = loadImage('assets/space.jpg');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  // Disable the context menu on the canvas so the camera can use the right mouse button
  canvas.elt.oncontextmenu = () => false;

  image(bg_space, -width, -height, width*2, height*2);
  cam = createEasyCam({ distance: 1500 });


  earth = new Planet(200, 0, 0, earth_tex);


  
}

function draw() {
  background(0);


  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 0);
  earth.show();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}