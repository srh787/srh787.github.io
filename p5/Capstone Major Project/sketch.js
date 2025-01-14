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
  bg_space = loadImage('assets/space.jpg');
}



function setup() {
  moonPresets = {
    mercury: { radius: 100, distance: 800, orbitspeed: 0.03, texture: earth_tex },
    venus: { radius: 200, distance: 1200, orbitspeed: 0.02, texture: null },
    mars: { radius: 150, distance: 1500, orbitspeed: 0.02, texture: null },
    jupiter: { radius: 300, distance: 2000, orbitspeed: 0.01, texture: null },
    saturn: { radius: 250, distance: 2500, orbitspeed: 0.008, texture: null },
    uranus: { radius: 220, distance: 3000, orbitspeed: 0.007, texture: null },
    neptune: { radius: 200, distance: 3500, orbitspeed: 0.006, texture: null },
    pluto: { radius: 80, distance: 4000, orbitspeed: 0.005, texture: null },
  };

  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  
  canvas.elt.oncontextmenu = () => false;

  for (let i = 0; i < 300; i++) {
    stars.push(new Star());
  }


  cam = createEasyCam({ distance: 1500 });

  earth = new Planet(200, 0, 0, earth_tex);

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