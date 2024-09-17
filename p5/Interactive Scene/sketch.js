// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
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
  triangle(width*0.9/2, height/6, width/4, height/2, width*3/4, height/2);

  fill(38, 139, 7);
  //draw grass
  ellipse(width / 2, height, width * 3, height * 1.2);

  loop()
  stroke(0,0,0);
  strokeWeight(10)
  fill(0,0,0,0)
  circle(mouseX, mouseY - height/15, width*height/10000)
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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