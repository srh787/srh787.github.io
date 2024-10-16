// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points  = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let i = 0; i < POINTS.length; i++) {
    points[i].display();
  }
}

function mouseClicked(){
  points.push(new MiniPoint(mouseX, mouseY));
}

class MiniPoint{
  constructor(x,y){
    this.x = x;
    this.c = c;
  }

  display(){
    fill(this.c);
    
  }
}


