class Planet {
  constructor(r, d, o, img) {
    this.v = createVector(0, 0, 0); // Position of the planet
    this.radius = r; // Planet's size
    this.distance = d; // Distance from the center (or "sun")
    this.angle = random(360); // Start angle for orbit
    this.orbitspeed = o; // How fast the planet moves around
    this.texture = img; // Planet texture (image)
    this.moons = []; // List of moons orbiting this planet
  }

  orbit() {
    this.angle += this.orbitspeed; // Update the planet's position in orbit
    for (let moon of this.moons) {
      moon.orbit(); // Make sure all the moons orbit too
    }
  }

  addMoon(name) {
    // Check if the moon exists in the presets
    if (moonPresets[name]) {
      let properties = moonPresets[name]; // Grab moon details
      let moon = new Moon(
        properties.radius,
        properties.distance,
        properties.orbitspeed,
        properties.texture,
        this.v // Pass the planet's position to the moon
      );
      this.moons.push(moon); // Add the moon to the planet's list
    }
  }

  show() {
    push();
    translate(this.v.x, this.v.y, this.v.z); // Move to the planet's position
    noStroke();
    texture(this.texture); // Add the texture (image) to the planet
    sphere(this.radius); // Draw the planet as a sphere

    for (let moon of this.moons) {
      moon.show(); // Draw all the moons
    }

    pop();
  }

  toggleVisibility() {
    // Toggle whether the planet is visible
    this.visible = !this.visible;
    toggleAnimation(this.v); // Play an animation whenever visibility changes
  }
}

class ToggleAnimation {
  constructor(x, y, z) {
    this.position = createVector(x, y, z); // Starting position of the animation
    this.particles = []; // List of particles for the animation

    // Create some particles at random positions around the center
    for (let i = 0; i < 20; i++) {
      this.particles.push(
        new Particle(
          this.position.x + random(-20, 20),
          this.position.y + random(-20, 20),
          this.position.z + random(-20, 20),
          50 // Lifespan for each particle
        )
      );
    }
  }

  update() {
    // Update each particle and remove dead ones
    for (let particle of this.particles) {
      particle.update();
    }
    this.particles = this.particles.filter((particle) => !particle.isDead());
  }

  show() {
    // Draw all the particles
    for (let particle of this.particles) {
      push();
      translate(particle.position.x, particle.position.y, particle.position.z);
      noStroke();
      fill(255, particle.lifespan * 5); // Fading white particles
      sphere(particle.size); // Small spheres for particles
      pop();
    }
  }

  isFinished() {
    return this.particles.length === 0; // Check if there are no particles left
  }
}

let toggleAnimations = [];

function toggleAnimation(position) {
  // Start a new toggle animation at the given position
  toggleAnimations.push(new ToggleAnimation(position.x, position.y, position.z));
}