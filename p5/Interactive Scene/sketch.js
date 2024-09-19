// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let currentBack = 0
let currentBackColourR = 28
let currentBackColourG = 37
let currentBackColourB = 60

function setup() {
  createCanvas(windowWidth, windowHeight);


  loop()
}

function draw() {

  background(currentBackColourR, currentBackColourG, currentBackColourB);

  noStroke();
  fill(255, 255, 255);

  //draws stars
  let starc = width * height / 10000
  for (let i = 0; i < starc; i++) {
    circle(Math.floor(Math.random() * width) + 1, Math.floor(Math.random() * height) + 1, Math.floor(Math.random() * 5) + 1);



  }




  //no constantly updating stars to prevent asthma attacks


  fill(177, 196, 216);
  //draw back mountains - light grey
  triangle(0, height / 4, 0, height, width, height * 4 / 5);
  triangle(width / 3, height / 4, 0, height * 3 / 4, width, height * 4 / 5);
  triangle(width * 3 / 5, height / 6, 0, height * 3.5 / 4, width, height * 4 / 5);
  triangle(width * 7 / 8, height / 4, 0, height, width, height / 3);
  rect(width * 7 / 8, height / 3, width, height);
  rect(width * 6 / 8, height * 5 / 12, width, height);

  fill(102, 142, 171);
  //draw front mountains - dark grey
  triangle(width / 5.5, height * 3.5 / 16, 0, height / 2, width * 2 / 3, height * 4 / 5);
  triangle(width * 3 / 4, height / 4, 0, height, width, height / 2);
  triangle(width * 0.9 / 2, height / 6, width / 4, height / 2, width * 3 / 4, height / 2);

  fill(38, 139, 7);
  //draw grass
  ellipse(width / 2, height, width * 3, height * 1.2);

  //stick man head
  stroke(0, 0, 0);
  strokeWeight(10);
  fill(0, 0, 0, 0);
  circle(mouseX, mouseY - height / 15, width * height / 10000);

  line(mouseX, (mouseY - height / 15) + (width * height / 10000) / 2, mouseX, ((mouseY - height / 15) + (width * height / 10000) / 2) + width * height / 10000);
  line(mouseX-width * height / 12500, mouseY, mouseX+width * height / 12500, mouseY)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function mousePressed() {
  if (mouseButton === CENTER) {

    if (currentBack === 0) {
      currentBackColourR = 31
      currentBackColourG = 62
      currentBackColourB = 90
      currentBack = 1
    } else if (currentBack === 1) {
      currentBackColourR = 20
      currentBackColourG = 80
      currentBackColourB = 81
      currentBack = 2

    } else if (currentBack === 2) {
      currentBackColourR = 40
      currentBackColourG = 28
      currentBackColourB = 60
      currentBack = 3
    } else if (currentBack === 3) {
      currentBackColourR = 60
      currentBackColourG = 28
      currentBackColourB = 49
      currentBack = 0
    }
  }
}



/*function starr() {

  textAlign(CENTER, CENTER);

  // Use the size parameter.
  textSize(size);
  background(0);
  noStroke();
  fill(255, 255, 255);
  //draws stars
  let starc = width * height / 10000
  for (let i = 0; i < starc; i++) {
    circle(Math.floor(Math.random() * width) + 1, Math.floor(Math.random() * height) + 1, Math.floor(Math.random() * 5) + 1);


  }
  //no constantly updating stars to prevent asthma attacks
  noLoop();
}*/