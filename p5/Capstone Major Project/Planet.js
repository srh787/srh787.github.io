class Planet {

    constructor(r, d, o, img) {
        this.radius = r;
        this.distance = d;

        this.orbitspeed = o;

        this.texture = img;
    }


    show() {
        push();
        noStroke();


        texture(this.texture);
        sphere(this.radius);
        //ellipse(0, 0, this.radius * 2, this.radius * 2);

        pop();
    }
}



