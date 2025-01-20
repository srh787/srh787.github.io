class Planet {
  constructor(r, d, o, img) {
    this.v = createVector(0, 0, 0);
    this.radius = r;
    this.distance = d;
    this.angle = random(360);
    this.orbitspeed = o;
    this.texture = img;
    this.moons = [];
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
      let moon = new Moon(properties.radius,properties.distance,properties.orbitspeed,properties.texture,this.v);
      this.moons.push(moon);
    }
  }

  show() {
    push();
    translate(this.v.x, this.v.y, this.v.z);
    noStroke();
    texture(this.texture);
    sphere(this.radius);

    for (let moon of this.moons) {
      moon.show();
    }

    pop();
  }
  toggleVisibility() {
    this.visible = !this.visible;
    if (!this.visible) {
      toggleAnimation(this.v);
    }
    else {
      toggleAnimation(this.v);
    }
  }
}

class ToggleAnimation {
  constructor(x, y, z) {
    this.position = createVector(x, y, z);
    this.particles = [];
    for (let i = 0; i < 20; i++) {
      this.particles.push(new Particle(this.position.x + random(-20, 20),this.position.y + random(-20, 20),this.position.z + random(-20, 20),50));
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
    this.particles = this.particles.filter(particle => !particle.isDead());
  }

  show() {
    for (let particle of this.particles) {
      push();
      translate(particle.position.x, particle.position.y, particle.position.z);
      noStroke();
      fill(255, particle.lifespan * 5); // White particles with fading effect
      sphere(particle.size);
      pop();
    }
  }

  isFinished() {
    return this.particles.length === 0;
  }
}

let toggleAnimations = [];

function toggleAnimation(position) {
  toggleAnimations.push(new ToggleAnimation(position.x, position.y, position.z));
}
