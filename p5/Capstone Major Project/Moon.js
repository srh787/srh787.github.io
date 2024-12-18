class Moon extends Planet {

    constructor(r, d, vo, vr, img) {
        this.v = p5.Vector.random3D();

        this.radius = r;
        this.ring = d;
        this.orbitSpeed = vo;
        this.rotationSpeed = vr;

        this.planets = [];
    }

    spawnMoons(total, level) {

        for (let i = 0; i < total; i++) {
            let r = this.radius / (level * 2);
            let d = random(this.radius + r, (this.radius + r) * 2);
            let o = random(-0.1, 0.1);
            //let index = int(random(0, textures.length));
            this.planets[i] = new Planet(r, d, o, earth_tex);
            if (level < 2) {
                let num = int(random(0, 3));
                this.planets[i].spawnMoons(num, level + 1);
            }
        }
    }

    orbit() {
        this.angle = this.angle + this.orbitspeed;
        if (this.planets.length === 0) {
            for (let i = 0; i < this.planets.length; i++) {
                this.planets[i].orbit();
            }
        } 
    }

    show(){
        super.show();

    }
}