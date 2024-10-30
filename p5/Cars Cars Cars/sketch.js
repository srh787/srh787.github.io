// Cars Cars Cars
// Steven Huang
// October 28th, 2024
// CS30 P3
// An interactive Scene of two-way traffic, with user inputs for traffic flow and density

// Declare value holders for classes
let eastbound = [];
let westbound = [];
let trafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let cc;

  // Initialize eastbound cars
  for (i = 0; i < 20; i++) {
    let y = random(height / 2 + 15, height / 2 + 170);
    cc = color(random(255), random(255), random(255));
    eastbound.push(new Cars(round(random()), random(width), y, 0, round(random(1, 5), 0), cc));
  }

  // Initialize westbound cars
  for (i = 0; i < 20; i++) {
    let y = random(height / 2 - 35, height / 2 - 195);
    cc = color(random(255), random(255), random(255));
    westbound.push(new Cars(round(random()), random(width), y, 1, round(random(-1, -5), 0), cc));
  }

  // Initialize the traffic light
  trafficLight = new TrafficLight();
}

function draw() {
  frameRate(60);
  background(220);

  drawRoad(); // Draws road

  // Update each car in frame
  for (let Cars of eastbound) {
    Cars.action();
  }

  for (let Cars of westbound) {
    Cars.action();
  }

  // Update and display traffic light
  trafficLight.update();
  trafficLight.display();
}

// Add new cars dynamically with mouse click
function mousePressed() {
  if (mouseButton === LEFT) {
    if (keyIsPressed && keyCode === SHIFT) {
      let y = random(height / 2 - 35, height / 2 - 195);
      westbound.push(new Cars(round(random()), random(width), y, 1, round(random(-1, -5), 0), color(random(255), random(255), random(255))));
    }
    else {
      let y = random(height / 2 + 15, height / 2 + 170);
      eastbound.push(new Cars(round(random()), random(width), y, 0, round(random(1, 5), 0), color(random(255), random(255), random(255))));
    }
  }
}

// Toggle traffic light with spacebar
function keyPressed() {
  if (key === ' ') {
    trafficLight.changeLight();
  }
}

class Cars {
  constructor(t, x, y, d, nx, c) {
    // Car properties
    this.xPos = x;
    this.yPos = y;
    this.speed = nx;
    this.direction = d;
    this.color = c;
    this.type = t;
  }

  display() { // Display shapes for specific car types
    fill(this.color);
    strokeWeight(0.5);
    stroke(255);
    if (this.type === 0) {
      rect(this.xPos, this.yPos, 40, 20);
      rect(this.xPos + 3, this.yPos - 1, 8, 1);
      rect(this.xPos + 3, this.yPos + 20, 8, 1);
      rect(this.xPos + 29, this.yPos - 1, 8, 1);
      rect(this.xPos + 29, this.yPos + 20, 8, 1);
    }
    if (this.type === 1) {
      rect(this.xPos, this.yPos, 30, 25);
      strokeWeight(2);
      stroke(0);
      line(this.xPos + 20, this.yPos, this.xPos + 20, this.yPos + 25);
    }
  }

  move() { // Move car horizontally, wrapping the screen
    this.xPos += this.speed;
    if (this.xPos > width) {
      this.xPos = -50;
    }
    else if (this.xPos < -50) {
      this.xPos = width;
    }
  }

  speedUp() { // Chance to increase speed
    if (this.speed < 15 && this.direction === 0) {
      this.speed += 0.5;
    }
    if (this.speed > -15 && this.direction === 1) {
      this.speed -= 0.5;
    }
  }

  speedDown() { // Chance to decrease speed
    if (this.speed > 0 && this.direction === 0) {
      this.speed -= 0.5;
    }
    if (this.speed < 0 && this.direction === 1) {
      this.speed += 0.5;
    }
  }

  changeColor() { // Chance to change colour
    let cc = color(random(255), random(255), random(255));
    this.color = cc;
  }

  action() { // Update action, move, display, and occasional property changes
    this.move();
    this.display();

    if (random(100) < 1) {
      this.speedUp();
    }
    if (random(100) < 1) {
      this.speedDown();
    }
    if (random(100) < 1) {
      this.changeColor();
    }
  }
}

class TrafficLight {
  constructor() {
    // Traffic light properties
    this.state = 0;
    this.timer = 0;
  }

  display() { // Display traffic light based on state
    if (this.state === 1) {
      fill(255, 0, 0);
    }
    else {
      fill(0, 255, 0);
    }
    rect(width / 2, height / 2 - 300, 40, 40);
  }

  update() { // Update traffic light timer when red
    if (this.state === 1) {
      this.timer--;
      for (let vehicle of eastbound) {
        vehicle.speed = 0;
      }
      for (let vehicle of westbound) {
        vehicle.speed = 0;
      }
      if (this.timer <= 0) {
        this.state = 0;
      }
    }
  }

  stopTraffic() { // To stop traffic depending on state
    for (let vehicle of eastbound) {
      vehicle.speed = 0;
    }
    for (let vehicle of westbound) {
      vehicle.speed = 0;
    }
  }

  changeLight() { // Change light
    if (this.state === 0) {
      this.state = 1;
      this.timer = 120;
      this.stopTraffic();
    }
  }
}

function drawRoad() { // Draws road with 2 lanes going different directions
  background(200);
  noStroke();
  fill(0);
  rect(0, height / 2 - 200, width, 400);


  stroke(255);
  strokeWeight(5);

  for (let i = 0; i < width; i += 40) {
    line(i, height / 2, i + 20, height / 2);
  }
}

function windowResized() { // Resize window
  resizeCanvas(windowWidth, windowHeight);
}