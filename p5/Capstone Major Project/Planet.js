class Planet {
    /*constructor(r, d, vo, vr, img) {
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

        if (v2.x != 0 || v2.y != 0 || v2.z != 0) {
            rotate(this.angle, p);
          }

        fill(255);
        texture(this.texture);
        sphere(this.radius, width/2, height/2);
    }*/

    constructor(r, d, o, img) {
        this.v = p5.Vector.random3D();

        this.radius = r;
        this.distance = d;
        this.v.mult(this.distance);
        this.angle = random(TWO_PI);
        this.orbitspeed = o;

        this.planets = null;

        // Since there is no direct equivalent of PShape in p5.js, we have
        // to save the texture for later use instead of creating a globe.
        this.texture = img;
    }





    show() {
        push();
        noStroke();
        let v2 = createVector(1, 0, 1);
        let p = this.v.cross(v2);
        
        // Rotation around a 0-length axis doesn't work in p5.js, so don't do that.
        if (p.x !== 0 || p.y !== 0 || p.z !== 0) {
            rotate(this.angle, p);
        }
        stroke(255);
        //line(0, 0, 0, this.v.x, this.v.y, this.v.z);
        //line(0, 0, 0, p.x, p.y, p.z);

        translate(this.v.x, this.v.y, this.v.z);
        noStroke();
        fill(255);
        // Since we don't have a PShape, we draw a textured sphere instead.
        texture(this.texture);
        sphere(this.radius);
        //ellipse(0, 0, this.radius * 2, this.radius * 2);
        if (this.planets !== null) {
            for (let i = 0; i < this.planets.length; i++) {
                this.planets[i].show();
            }
        }
        pop();
    }
}



