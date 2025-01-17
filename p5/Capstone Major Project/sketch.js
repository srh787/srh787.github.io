// Capstone Major Project
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg_space;

let earth_tex;
let moon_tex;
//let mars_tex;

let earth;

let moonPresets;
let buttons = {};
let stars = [];

function preload() {
  earth_tex = loadImage('assets/earth.jpg');
  mercury_tex = loadImage('assets/mercury.jpg');
  venus_tex = loadImage('assets/venus.jpg');
  mars_tex = loadImage('assets/mars.jpg');
  jupiter_tex = loadImage('assets/jupiter.jpg');
  saturn_tex = loadImage('assets/saturn.jpg');
  uranus_tex = loadImage('assets/uranus.jpg');
  neptune_tex = loadImage('assets/neptune.jpg');
  pluto_tex = loadImage('assets/pluto.jpg');
  bg_space = loadImage('assets/space.jpg');
}



function setup() {
  moonPresets = {
    mercury: { radius: 20, distance: 240, orbitspeed: 0.03, texture: mercury_tex },
    venus: { radius: 40, distance: 360, orbitspeed: 0.02, texture: venus_tex },
    mars: { radius: 30, distance: 450, orbitspeed: 0.02, texture: mars_tex },
    jupiter: { radius: 60, distance: 600, orbitspeed: 0.01, texture: jupiter_tex },
    saturn: { radius: 50, distance: 750, orbitspeed: 0.008, texture: saturn_tex },
    uranus: { radius: 44, distance: 900, orbitspeed: 0.007, texture: uranus_tex },
    neptune: { radius: 40, distance: 1050, orbitspeed: 0.006, texture: neptune_tex },
    pluto: { radius: 16, distance: 1200, orbitspeed: 0.005, texture: pluto_tex }
  };

  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);

  canvas.elt.oncontextmenu = () => false;

  for (let i = 0; i < 300; i++) {
    stars.push(new Star());
  }


  cam = createEasyCam({ distance: 2000 });

  earth = new Planet(100, 0, 0, earth_tex);

  for (let moonName in moonPresets) {
    earth.addMoon(moonName);

    // Create a button for each moon
    let button = createButton(`Toggle ${moonName}`);
    button.position(10, 10 + Object.keys(buttons).length * 30); // Position buttons dynamically
    button.mousePressed(() => toggleMoonVisibility(moonName));
    buttons[moonName] = button;
  }

  earth.moons[0].toggleVisibility(true);
}

function draw() {
  background(0);

  for (let star of stars) {
    star.show();
  }

  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 0);

  earth.orbit();
  earth.show();


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleMoonVisibility(moonName) {
  let moonIndex = Object.keys(moonPresets).indexOf(moonName);
  if (moonIndex >= 0) {
    let moon = earth.moons[moonIndex];
    moon.toggleVisibility(!moon.visible); // Toggle visibility
  }
}