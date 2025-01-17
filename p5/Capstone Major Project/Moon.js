class Moon {
    constructor(r, d, o, img) {
        this.radius = r;
        this.distance = d;
        this.angle = random(TWO_PI);
        this.orbitspeed = o;
        this.texture = img;
        this.visible = true;

        this.v = createVector(cos(this.angle) * this.distance, 0, sin(this.angle) * this.distance);
        this.particles = []; // Array to hold emitted particles
    }

    orbit() {
        if (this.visible) {
            this.angle += this.orbitspeed;

            // Update position to stay on the horizontal axis (XZ plane)
            this.v.x = cos(this.angle) * this.distance;
            this.v.z = sin(this.angle) * this.distance;

            // Emit a new particle at the moon's current position
            this.particles.push(new Particle(this.v.x, this.v.y, this.v.z, 100));

            // Update particles and remove those that are "dead"
            this.particles = this.particles.filter(particle => {
                particle.update();
                return !particle.isDead();
            });
        }
    }

    show(parentPosition) {
        if (this.visible) {
            // Draw orbit ring
            push();
            translate(parentPosition.x, parentPosition.y, parentPosition.z);
            noFill();
            stroke(150);
            rotateX(HALF_PI); // Rotate the plane to align the orbit ring horizontally
            ellipse(0, 0, this.distance * 2, this.distance * 2); // Orbit ring on XZ plane
            pop();

            // Draw moon
            push();
            translate(
                parentPosition.x + this.v.x,
                parentPosition.y + this.v.y,
                parentPosition.z + this.v.z
            );
            noStroke();
            if (this.texture) {
                texture(this.texture);
            } else {
                fill(255);
            }
            sphere(this.radius);
            pop();

            // Render particles
            for (let particle of this.particles) {
                push();
                translate(parentPosition.x, parentPosition.y, parentPosition.z);
                particle.show();
                pop();
            }
        }
    }

    toggleVisibility(state) {
        this.visible = state;
    }
}

class Particle {
    constructor(x, y, z, lifespan) {
        this.position = createVector(x, y, z);
        this.lifespan = lifespan; // Lifespan of the particle
        this.size = random(8, 12); // Increase particle size for better visibility
    }

    update() {
        this.lifespan -= 3; // Decrease lifespan (adjust to control fade-out speed)
    }

    show() {
        if (this.lifespan > 0) {
            push();
            translate(this.position.x, this.position.y, this.position.z);
            noStroke();
            fill(170, 160, 255, this.lifespan*2); // Bright reddish-white color with fade effect
            sphere(this.size); // Draw particle as a larger sphere
            pop();
        }
    }

    isDead() {
        return this.lifespan <= 0; // Check if particle should disappear
    }
}

class OrbitRing {
    constructor(distance) {
        this.distance = distance;
        this.particles = [];

        // Generate particles along the orbit
        for (let i = 0; i < 100; i++) {
            let angle = (TWO_PI / 100) * i;
            let x = cos(angle) * this.distance;
            let z = sin(angle) * this.distance;
            this.particles.push(new Particle(x, 0, z, 0.01));
        }
    }

    update() {
        for (let particle of this.particles) {
            particle.update(0, this.distance);
        }
    }

    show() {
        // Draw the orbit ring
        noFill();
        stroke(100);
        ellipse(0, 0, this.distance * 2, this.distance * 2);

        // Render particles
        for (let particle of this.particles) {
            particle.show();
        }
    }
}