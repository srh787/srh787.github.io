class Star {
  constructor() {
    // Set a random position in 3D space, scaled to be far from the center
    this.position = p5.Vector.random3D();
    this.position.mult(random(500, 1500));

    // Randomize the size and brightness of the star
    this.size = random(0.5, 1);
    this.brightness = random(150, 255);
  }

  show() {
    push();
    noStroke(); // No border around the star
    fill(this.brightness); // Set the star's brightness
    translate(this.position.x, this.position.y, this.position.z); // Move to the star's position
    sphere(this.size); // Draw the star as a small sphere
    pop();
  }
}