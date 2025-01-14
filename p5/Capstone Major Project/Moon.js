class Moon {
    constructor(r, d, o, img) {
        this.radius = r;
        this.distance = d;
        this.angle = random(TWO_PI);
        this.orbitspeed = o;
        this.texture = img;

        this.visible = true;


        this.v = createVector(cos(this.angle) * this.distance, 0, sin(this.angle) * this.distance);
    }

    orbit() {
        if (this.visible) {
            this.angle += this.orbitspeed;


            this.v.x = cos(this.angle) * this.distance;
            this.v.z = sin(this.angle) * this.distance;
        }
    }

    show(parentPosition) {
        if (this.visible) {
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
        }
    }

    toggleVisibility(state) {
        this.visible = state;
    }
}