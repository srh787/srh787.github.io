// Capstone Major Project
// Steven Huang
// January 24th, 2024
// CS30 P3
// Interactive Solar System Simulation

let bg_space;
let earth_tex;
let earth;
let moonPresets;
let buttons = {};
let stars = [];
let resetButton;

function preload() {
  // Load textures for planets and the background space image
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

let sliders = {};

function setup() {
  // Define presets for moons (radius, orbit distance, speed, and texture)
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

  // Create the canvas and prevent context menu on right-click
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.elt.oncontextmenu = () => false;

  // Create stars for the background
  for (let i = 0; i < 300; i++) {
    stars.push(new Star());
  }

  // Set up the camera
  cam = createEasyCam({ distance: 1000 });

  // Initialize Earth as the central planet
  earth = new Planet(50, 0, 0, earth_tex);

  // Generate toggle buttons and sliders for each moon
  let yOffset = 10; // Start y-position for controls
  for (let moonName in moonPresets) {
    earth.addMoon(moonName);

    // Create a button to toggle moon visibility
    let button = createButton(`Toggle ${moonName}`);
    button.position(10, yOffset);
    button.mousePressed(() => toggleMoonVisibility(moonName));
    buttons[moonName] = button;

    // Create a slider to adjust the moon's orbit speed
    let slider = createSlider(0.001, 0.1, moonPresets[moonName].orbitspeed, 0.001);
    slider.position(150, yOffset);
    slider.input(() => updateMoonSpeed(moonName, slider.value()));
    sliders[moonName] = slider;

    yOffset += 40; // Move controls down for the next moon
  }

  // Create a reset button for the camera
  resetButton = createButton("Reset Camera");
  resetButton.position(10, yOffset + 20);
  resetButton.mousePressed(resetCamera);

  resetCamera(); // Start with default camera settings
}

function updateMoonSpeed(moonName, speed) {
  // Find the index of the moon and update its orbit speed
  let moonIndex = Object.keys(moonPresets).indexOf(moonName);
  if (moonIndex >= 0) {
    earth.moons[moonIndex].orbitspeed = speed;
  }
}

function draw() {
  background(0); // Black background for space

  // Draw the stars in the background
  for (let star of stars) {
    star.show();
  }

  // Set up lighting for the 3D scene
  ambientLight(255, 255, 255);
  pointLight(255, 255, 255, 0, 0, 0);

  // Update and display Earth and its moons
  earth.orbit();
  earth.show();

  // Handle toggle animations for visibility changes
  for (let animation of toggleAnimations) {
    animation.update();
    animation.show();
  }
  toggleAnimations = toggleAnimations.filter(animation => !animation.isFinished());
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas when the window size changes
}

function toggleMoonVisibility(moonName) {
  // Find the moon by name and toggle its visibility
  let moonIndex = Object.keys(moonPresets).indexOf(moonName);
  if (moonIndex >= 0) {
    let moon = earth.moons[moonIndex];
    moon.toggleVisibility(!moon.visible);
    toggleAnimation(moon.absolutePosition); // Play an animation for the toggle
  }
}

function resetCamera() {
  // Reset the camera to its default position and angle
  cam.setState({
    distance: 1000, // Default distance from the center
    center: [0, 0, 0], // Focus on the center of the scene
    rotation: [-1.5, 0.35, -0.15, 0.05], // Slightly tilted rotation (quaternion)
    eye: [500, 300, 750], // Position of the camera eye
  });
}