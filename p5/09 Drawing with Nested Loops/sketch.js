// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Global Variables
let gridSpacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //loopReview();
}

function loopReview() {
  //quick nested loop practice (x,y)
  for (let x = 0; x < 4; x++) {  //x: 0, 1, 2, 3
    for (let y = 0; y < 4; y++) { //y: 0, 1, 2, 3
      print(x, y);
    }
  }
}

function draw() {
  background(220);
  renderGrid();
}

function circleDistance(x1, y1, x2, y2) {
  // takes in two endpoints and returns the 
  // straightline distance between them.
  // Our answer will be rounded...
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a, 2) + pow(b, 2));
  return round(c);
}

function renderGrid() {
  // use nested loops to create a grid of shapes...
  for (let x = 0; x < width; x = x + gridSpacing) {
    for (let y = 0; y < height; y = y + gridSpacing) {

      let d = circleDistance(x, y, mouseX, mouseY);

      if (d > 150) {    //set fill for color according
        fill(0);      //to mouse proximity
      }
      else {
        fill(200, 50, 120);
      }
      circle(x, y, gridSpacing);

      fill(200);                //display distance
      textSize(gridSpacing / 2);  //of each circle
      textAlign(CENTER, CENTER); //to the mouse
      text(d, x, y);

    }
  }
}