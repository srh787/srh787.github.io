class Moon {
    constructor(r, d, o, img, planetPosition) {
        this.radius = r;
        this.distance = d;
        this.angle = random(360);
        this.orbitspeed = o;
        this.texture = img;
        this.visible = true;
        this.planetPosition = planetPosition;
        this.particles = [];
    }

    orbit() {
        if (this.visible) {
            this.angle += this.orbitspeed;
            const x = cos(this.angle) * this.distance;
            const z = sin(this.angle) * this.distance;
            this.absolutePosition = createVector(
                this.planetPosition.x + x,
                this.planetPosition.y,
                this.planetPosition.z + z
            );
            this.particles.push(new Particle(this.absolutePosition.x, this.absolutePosition.y, this.absolutePosition.z, 80));
            this.particles = this.particles.filter(particle => {
                particle.update();
                return !particle.isDead();
            });
        }
    }

    show() {
        if (this.visible) {
            push();
            translate(this.planetPosition.x, this.planetPosition.y, this.planetPosition.z);
            noFill();
            stroke(100, 150);
            strokeWeight(1.5);
            rotateX(HALF_PI);
            ellipse(0, 0, this.distance * 2, this.distance * 2);
            pop();

            push();
            translate(this.absolutePosition.x, this.absolutePosition.y, this.absolutePosition.z);
            noStroke();
            if (this.texture) {
                texture(this.texture);
            } else {
                fill(255);
            }
            sphere(this.radius);
            pop();

            for (let particle of this.particles) {
                push();
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
        this.lifespan = lifespan;
        this.size = random(6, 10);
    }

    update() {
        this.lifespan -= 2;
    }

    show() {
        if (this.lifespan > 0) {
            push();
            translate(this.position.x, this.position.y, this.position.z);
            noStroke();
            fill(200, 150, 255, this.lifespan * 2);
            sphere(this.size);
            pop();
        }
    }

    isDead() {
        return this.lifespan <= 0;
    }
}