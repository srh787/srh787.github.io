class Planet {
    constructor(r, d, vo, vr, img) {
        this.v = p5.Vector.random3D();

        this.radius = r;
        this.ring = d;
        this.v.mult(this.ring);
        this.orbitSpeed = vo;
        this.rotationSpeed = vr;
        this.texture = img;
    }

    display(){
        push();
        noStroke();
        let v1 = createVector(1,0,1);
        let v2 = this.v.cross(this.v1);
        texture(this.texture);
        sphere(this.radius);
    }
}