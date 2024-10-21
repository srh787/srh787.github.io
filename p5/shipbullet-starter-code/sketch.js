// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.xPosition = x;
    this.yPosition = y;
    this.imag = theImage;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(LEFT_ARROW)) {
      if (this.xPosition > 0) {
        this.xPosition -= 8;
      }
    }
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.xPosition < windowWidth-100) {
        this.xPosition += 8;
      }
    }
    if (keyIsDown(UP_ARROW)) {
      if (this.yPosition > 0) {
        this.yPosition -= 8;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (this.yPosition < windowHeight-200) {
        this.yPosition += 8;
      }
    }
    // if doing extra for experts, show bullet(s)
  }

  display() {
    // show the ship
    image(this.imag, this.xPosition, this.yPosition);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
  }

  display() {
    // show the bullet
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

