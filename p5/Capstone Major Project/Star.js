class Star {
    constructor() {
        this.position = p5.Vector.random3D();
        this.position.mult(random(1000, 3000));
        this.size = random(1, 3);
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