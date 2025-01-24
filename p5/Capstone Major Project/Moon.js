class Moon {
  constructor(r, d, o, img, planetPosition) {
    this.radius = r; // Moon size
    this.distance = d; // Distance from the planet
    this.angle = random(360); // Start angle for orbit
    this.orbitspeed = o; // How fast it moves
    this.texture = img; // Moon's texture
    this.visible = true; // Whether it's shown or not
    this.planetPosition = planetPosition; // Where the planet is
    this.particles = []; // Holds the moon's trail effect
  }

  orbit() {
    if (this.visible) {
      this.angle += this.orbitspeed; // Move the moon around
      const x = cos(this.angle) * this.distance; // Find x position
      const z = sin(this.angle) * this.distance; // Find z position

      // Update the moon's position in 3D space
      this.absolutePosition = createVector(
        this.planetPosition.x + x,
        this.planetPosition.y,
        this.planetPosition.z + z
      );

      // Add a particle at the moon's current spot
      this.particles.push(
        new Particle(this.absolutePosition.x, this.absolutePosition.y, this.absolutePosition.z, 80)
      );

      // Update particles, remove the ones that are "dead"
      this.particles = this.particles.filter((particle) => {
        particle.update();
        return !particle.isDead();
      });
    }
  }

  show() {
    if (this.visible) {
      // Draw the moon's orbit (a circle around the planet)
      push();
      translate(this.planetPosition.x, this.planetPosition.y, this.planetPosition.z);
      noFill();
      stroke(100, 150);
      strokeWeight(1.5);
      rotateX(HALF_PI);
      ellipse(0, 0, this.distance * 2, this.distance * 2);
      pop();

      // Draw the moon itself
      push();
      translate(this.absolutePosition.x, this.absolutePosition.y, this.absolutePosition.z);
      noStroke();
      this.texture ? texture(this.texture) : fill(255); // Use texture or white
      sphere(this.radius); // Draw the moon as a sphere
      pop();

      // Show the trail particles
      for (let particle of this.particles) {
        particle.show();
      }
    }
  }

  toggleVisibility(state) {
    this.visible = state; // Turn visibility on or off
  }
}

class Particle {
  constructor(x, y, z, lifespan) {
    this.position = createVector(x, y, z); // Position of the particle
    this.lifespan = lifespan; // How long it sticks around
    this.size = random(6, 10); // Random size for variety
  }

  update() {
    this.lifespan -= 2; // Gradually fade out
  }

  show() {
    if (this.lifespan > 0) {
      // Draw the particle as a small, glowing sphere
      push();
      translate(this.position.x, this.position.y, this.position.z);
      noStroke();
      fill(200, 150, 255, this.lifespan * 2); // Purple-ish fade effect
      sphere(this.size);
      pop();
    }
  }

  isDead() {
    return this.lifespan <= 0; // Check if it's done
  }
}