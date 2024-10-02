// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let rectWidth = 5;
let peakX = 0;
let peakY = 10000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(15);
}

function draw() {
  background(220);
  strokeWeight(1);
  staircase();

}

function staircase() {
  randomSeed(1);

  let x = 0;
  for (let x = 0; x <= width; x += rectWidth) {


    let noiseLevel = height;
    let noiseInterval = 0.002;

    // Scale the input coordinate.

    let nx = noiseInterval * x;

    // Compute the noise value.
    let rectHeight = noiseLevel * noise(nx);

    if (rectHeight <= peakY) {
      peakX = x;
      peakY = height - rectHeight;
    }

    


    rect(x, height, rectWidth, -rectHeight);
  }
  drawFlag();
}


function keyPressed() {
  if (keyCode === 37) {
    rectWidth -= 1;
  }
  if (keyCode === 39) {
    rectWidth += 1;
  }


}

function drawFlag() {

  strokeWeight(5)
  line(peakX, peakY, peakX, peakY-20);

}


//constantly updating window for canvas to look natural and fit to scale
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}