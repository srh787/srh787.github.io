// Capstone Major Project
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg_space;
let earth_tex;
let earth;
let moonPresets;
let buttons = {};
let stars = [];
let resetButton;

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
    mercury: { radius: 10, distance: 120, orbitspeed: 0.03, texture: mercury_tex },
    venus: { radius: 20, distance: 180, orbitspeed: 0.02, texture: venus_tex },
    mars: { radius: 15, distance: 225, orbitspeed: 0.02, texture: mars_tex },
    jupiter: { radius: 30, distance: 300, orbitspeed: 0.01, texture: jupiter_tex },
    saturn: { radius: 25, distance: 375, orbitspeed: 0.008, texture: saturn_tex },
    uranus: { radius: 22, distance: 450, orbitspeed: 0.007, texture: uranus_tex },
    neptune: { radius: 20, distance: 525, orbitspeed: 0.006, texture: neptune_tex },
    pluto: { radius: 8, distance: 600, orbitspeed: 0.005, texture: pluto_tex }
  };

  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.elt.oncontextmenu = () => false;

  for (let i = 0; i < 300; i++) {
    stars.push(new Star());
  }

  cam = createEasyCam({ distance: 1000 });
  earth = new Planet(50, 0, 0, earth_tex);

  for (let moonName in moonPresets) {
    earth.addMoon(moonName);
    let button = createButton(`Toggle ${moonName}`);
    button.position(10, 10 + Object.keys(buttons).length * 30);
    button.mousePressed(() => toggleMoonVisibility(moonName));
    buttons[moonName] = button;
  }

  resetButton = createButton("Reset Camera");
  resetButton.position(10, 10 + Object.keys(buttons).length * 30 + 50);
  resetButton.mousePressed(resetCamera);
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

  for (let animation of toggleAnimations) {
    animation.update();
    animation.show();
  }

  toggleAnimations = toggleAnimations.filter(animation => !animation.isFinished());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleMoonVisibility(moonName) {
  let moonIndex = Object.keys(moonPresets).indexOf(moonName);
  if (moonIndex >= 0) {
    let moon = earth.moons[moonIndex];
    if (moon.visible) {
      moon.toggleVisibility(false);
    }
    else {
      moon.toggleVisibility(true);
    }
    toggleAnimation(moon.absolutePosition);
  }
}

function resetCamera() {
  cam.setState({
    distance: 1000,
    center: [0, 0, 0],
    rotation: [1, 0, 0, 0],
    eye: [0, 0, 750],
  });
}