class Star {
  constructor() {
    this.position = p5.Vector.random3D();
    this.position.mult(random(500, 1500));
    this.size = random(0.5, 1);
    this.brightness = random(150, 255);
  }

  show() {
    push();
    noStroke();
    fill(this.brightness);
    translate(this.position.x, this.position.y, this.position.z);
    sphere(this.size);
    pop();
  }
}
