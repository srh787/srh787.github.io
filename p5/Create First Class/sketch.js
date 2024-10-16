// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let racer1, racer2, racer3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  racer1 = new RoundRacer(height/4, color(255,0,0));
  racer2 = new RoundRacer(height/2, color(0,255,0));
  racer3 = new RoundRacer(height*3/4, color(0,0,255));
}

function draw() {
  background(0);
  noStroke();

  racer1.move();
  racer1.display();

  racer2.move();
  racer2.display();

  racer3.move();
  racer3.display();
}

class RoundRacer {
  constructor(posY, c) {
    this.posX = 0;
    this.posY = posY;
    this.speed = random(3, 15);
    this.colour = c;
  }

  move() {
    this.posX += this.speed;

    if (this.posX > width) {
      this.posX = 0;
    }
  }

  display() {
    fill(this.colour);
    circle(this.posX, this.posY, 50);
  }
}