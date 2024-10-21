// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < 20; i++) {
    eastbound.push(new Cars(random(width), random(height / 2 - 15, height / 2 - 185), round(random(1, 15), 0), 0, color(random(255), random(255), random(255)), round(random(1), 0)));
  }

}

function draw() {
  background(220);

  drawRoad();

  for (let Cars of eastbound){
    Cars.execute();
  }
}

class Cars {
  constructor(x, y, nx, d, c, t) {
    this.xPos = x;
    this.yPos = y;
    this.speed = nx;
    this.direction = d;
    this.color = c;
    this.type = t;
  }

  display() {
    fill(this.color);
    if (this.type === 0) {
      rect(this.x, this.y, 40, 20);
      rect(this.x + 3, this.y - 1, 8, 1);
      rect(this.x + 3, this.y + 20, 8, 1);
      rect(this.x + 29, this.y - 1, 8, 1);
      rect(this.x + 29, y + 20, 8, 1);
    }
    if (this.type === 1) {
      rect(this.x, this.y, 30, 25);
      stroke(2);
      line(this.x + 20, this.y, this.x + 20, this.y + 20);
    }
  }

  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = -50;
    }
    else if (this.x < -50) {
      this.x = width;
    }
  }

  speedUp() {
    if (this.speed < 15 && this.speed > -15) {
      if (this.direction === 0) {
        this.speed += 0.5;
      }
      if (this.direction === 1) {
        this.speed -= 0.5;
      }
    }
  }

  speedDown() {
    if (this.speed < 15 && this.speed > -15) {
      if (this.direction === 0) {
        this.speed -= 0.5;
      }
      if (this.direction === 1) {
        this.speed += 0.5;
      }
    }
  }

  updateColor() {
    this.color = color(random(255), random(255), random(255));
  }

  execute() {
    this.move();
    this.display();

    if (random(100) === 0) {
      this.speedUp();
    }
    if (random(100) === 0) {
      this.speedDown();
    }
    if (random(100) === 0) {
      this.updateColor();
    }
  }
}

function drawRoad() {
  background(200);
  noStroke();
  fill(0);
  rect(0, height / 2 - 200, width, 400);

  stroke(255);
  strokeWeight(10);

  for (let i = 0; i < width; i += 40) {
    line(i, height / 2, i + 20, height / 2);
  }


}