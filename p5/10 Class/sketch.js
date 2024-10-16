// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Try to create 2-3 more books, and add them
// to the shelf...

// challenge feature: use an array to store
// 10 books, and display


let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS 30 Textbook", "Mr. Scott",
    "leatherbound", 515, 1234567891011,
    width * 0.3);
}

function draw() {
  background(220);
  myBook.display();
}

class Book {
  //1. constructor
  constructor(title, author, coverType, pages, isbn, x) {
    this.title = title;
    this.author = author;
    this.coverType = coverType;
    this.pages = pages;
    this.isbn = isbn;
    this.x = x;
  }
  //2. class methods
  printSummary() {
    //print out a nicely formatted description of object
    print(this.title + ", by " + this.author);
    print("length: " + this.pages + "pages.");
    print("Covertype: " + this.coverType);
    print("ISBN:" + this.isbn);
  }

  display() {
    //visualize the book based on its properties
    //width depends on pages (1/10 scale)
    rectMode(CENTER); textAlign(CENTER, CENTER);
    switch (this.coverType) {
    case "softcover":
      fill(250, 200, 200); break;
    case "hardcover":
      fill(120, 255, 240); break;
    case "leatherbound":
      fill(150, 100, 15); break;
    }
    rect(this.x, height / 2, this.pages / 10, 150);
    textSize(20); fill(255);
    text(this.title[0], this.x, height / 2 - 50);
  }


}