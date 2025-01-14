class Star {
    constructor() {
        this.position = p5.Vector.random3D(); // Random 3D direction
        this.position.mult(random(1000, 3000)); // Distance from the origin (far enough to appear as a background)
        this.size = random(1, 3); // Star size
        this.brightness = random(150, 255); // Star brightness
    }

    show() {
        push();
        noStroke();
        fill(this.brightness);
        translate(this.position.x, this.position.y, this.position.z);
        sphere(this.size); // Draw the star as a small sphere
        pop();
    }
}