class Planet {
    constructor(r, d, o, img) {
        this.v = p5.Vector.random3D();

        this.radius = r;
        this.distance = d;
        this.v.mult(this.distance);
        this.angle = random(TWO_PI);
        this.orbitspeed = o;

        this.moons = []; // Array to hold Moon objects

        this.texture = img;
    }

    orbit() {
        this.angle += this.orbitspeed;
        for (let moon of this.moons) {
            moon.orbit();
        }
    }

    addMoon(name) {
        if (moonPresets[name]) {
            let properties = moonPresets[name];
            let moon = new Moon(
                properties.radius,
                properties.distance,
                properties.orbitspeed,
                properties.texture
            );
            this.moons.push(moon);
        }
    }

    show() {
        push();
        noStroke();
        let v2 = createVector(1, 0, 1);
        let p = this.v.cross(v2);
        if (p.x != 0 || p.y != 0 || p.z != 0) {
            rotate(this.angle, p);
        }
        translate(this.v.x, this.v.y, this.v.z);
        noStroke();
        fill(255);
        texture(this.texture);
        sphere(this.radius);

        for (let moon of this.moons) {
            moon.show(this.v); // Pass the planet's position
        }

        pop();
    }
}


