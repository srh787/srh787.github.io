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
    mercury: { radius: 20, distance: 160, orbitspeed: 0.03, texture: earth_tex },
    venus: { radius: 40, distance: 240, orbitspeed: 0.02, texture: earth_tex },
    mars: { radius: 30, distance: 300, orbitspeed: 0.02, texture: earth_tex },
    jupiter: { radius: 60, distance: 400, orbitspeed: 0.01, texture: earth_tex },
    saturn: { radius: 50, distance: 500, orbitspeed: 0.008, texture: earth_tex },
    uranus: { radius: 44, distance: 600, orbitspeed: 0.007, texture: earth_tex },
    neptune: { radius: 40, distance: 700, orbitspeed: 0.006, texture: earth_tex },
    pluto: { radius: 16, distance: 800, orbitspeed: 0.005, texture: earth_tex },
  };

  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  
  canvas.elt.oncontextmenu = () => false;

  for (let i = 0; i < 300; i++) {
    stars.push(new Star());
  }


  cam = createEasyCam({ distance: 1500 });

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