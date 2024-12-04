import "./style.css";
import RealTurtle from "real-turtle";
import { TextInterface } from "text-interface";
//import { runDemo } from "./demo";

const canvas = document.querySelector("#real-turtle");
const textDiv = document.querySelector("#app");

// Initialize turtle and text interface objects
const turtle = new RealTurtle(canvas, {
  /* set async to false if you will do all
  * of your drawing at once. If so, you don't have
  * to "await" at the end of each turtle command,
  * but you *will* have to add a turtle.start()
  * call at the end. */
  async: false,
  autoStart: false,
});

turtle.setSpeed(0.999); // from 0 - 1 (0 slow, 1 fast)
turtle.setLineWidth(3);
turtle.setStrokeStyle("black");
turtle.start();

const ti = new TextInterface(textDiv, "ATO Turtle Program!");
ti.output("Welcome to our Jersey Customizer!");
ti.output("In this website, you will be able to choose between three New England Patriots and watch us draw it using functions!")


/* Comment out the line below once you're writing
 * your own code -- you can also take a look at the
 * code in demo.js for an example. */
//runDemo(turtle, ti);
/** Mini-Turtle Project **/

/*
 * Starting and finishing from an "up" direction,
 * draw a pair of eyes to the right of the turtle,
 * where each eye is `size` width and `color`.
 * The total eye width will be size * 2.5
 */
function drawBase(size, color) {
  let shoulder = "#d4dce2";
  if (color == "home") {
    turtle.setFillStyle("#0c274a");
  } else if (color == "away") {
    turtle.setFillStyle("White");
    shoulder = "#0c274a";
  } else if (color == "throwback") {
    turtle.setFillStyle("#b10018");
    shoulder = "white";
  }
  turtle.beginPath();
  turtle.left(90);
  turtle.forward(50 * size);
  turtle.left(45);
  for (let i = 0; i < 2; i++) {
    turtle.forward(70 * size);
    turtle.left(90);
  }
  turtle.forward(40 * size);
  turtle.right(135);
  turtle.forward(200 * size);
  turtle.left(90);
  turtle.forward(170 * size);
  turtle.left(90);
  turtle.forward(200 * size);
  turtle.right(135);
  turtle.forward(40 * size);
  for (let i = 0; i < 2; i++) {
    turtle.left(90);
    turtle.forward(70 * size);
  }
  turtle.left(45);
  turtle.forward(50 * size);
  turtle.left(15);
  turtle.arc(246 * size, 30);
  turtle.closePath();
  turtle.fill();
  turtle.penUp();
  turtle.setFillStyle(shoulder);
  turtle.left();
  turtle.left(90);
  turtle.forward(20 * size);
  turtle.beginPath();
  turtle.forward(30 * size);
  turtle.left(45);
  turtle.forward(30 * size);
  turtle.left(90);
  turtle.penDown();
  turtle.forward(70 * size);
  turtle.left();
  turtle.forward(70 * size);
  turtle.closePath();
  turtle.fill();
  if (color == "throwback") {
    turtle.setFillStyle("darkBlue");
    turtle.left(90);
    turtle.beginPath();
    turtle.forward(30 * size);
    turtle.left(45);
    turtle.forward(30 * size * 0.5);
    turtle.left(90);
    turtle.penDown();
    turtle.forward(70 * size * 0.5);
    turtle.left();
    turtle.forward(71 * size * 0.5);
    turtle.closePath();
    turtle.fill();
    turtle.penUp();
    turtle.right(90);
    turtle.forward(15 * size);
    turtle.setFillStyle(shoulder);
  } else {
    turtle.penUp();
    turtle.forward(size);
    turtle.right(90);

  }
  turtle.forward(170 * size);
  turtle.beginPath();
  turtle.forward(30 * size);
  turtle.right(45);
  turtle.forward(30 * size);
  turtle.penDown();
  turtle.right(90);
  turtle.forward(70 * size);
  turtle.right();
  turtle.forward(70 * size);
  turtle.closePath();
  turtle.fill();
  if (color == "throwback") {
    turtle.setFillStyle("darkblue");
    turtle.right(90);
    turtle.beginPath();
    turtle.forward(30 * size);
    turtle.right(45);
    turtle.forward(30 * size * 0.5);
    turtle.right(90);
    turtle.penDown();
    turtle.forward(70 * size * 0.5);
    turtle.right();
    turtle.forward(70 * size * 0.5);
    turtle.closePath();
    turtle.fill();
    turtle.penUp();
  }
}

const drawOne = (size, color) => {
  turtle.beginPath();
  turtle.forward(300 * size);
  turtle.left(90);
  turtle.forward(70 * size);
  turtle.left(60);
  turtle.forward(70 * size);
  turtle.left(120);
  turtle.forward(25 * size);
  turtle.right(90);
  turtle.forward(235 * size);
  turtle.right(90);
  turtle.forward(50 * size);
  turtle.left(90);
  turtle.forward(40 * size);
  turtle.left(90);
  turtle.forward(180 * size);
  turtle.left(90);
  turtle.forward(40 * size);
  turtle.left(90);
  turtle.forward(50 * size);
  turtle.penUp();
  turtle.closePath();
  turtle.setFillStyle("white");
  turtle.fill();
};

//drawOne();

const drawTwo = (size, color) => {
  turtle.beginPath();
  turtle.penDown();
  turtle.left(180);
  turtle.forward(50 * size);
  turtle.left(90);
  turtle.forward(50 * size);
  turtle.right(90);
  turtle.forward(70 * size);
  turtle.right(90);
  turtle.forward(90 * size);
  turtle.right(90);
  turtle.forward(200 * size);
  turtle.right(90);
  turtle.forward(150 * size);
  turtle.right(45);
  turtle.forward(75 * size);
  turtle.right(45);
  turtle.forward(50 * size);
  turtle.left(90);
  turtle.forward(75 * size);
  turtle.left(90);
  turtle.forward(45 * size);
  turtle.left(90);
  turtle.forward(40 * size);
  turtle.right(90);
  turtle.forward(50) * size;
  turtle.right(90);
  turtle.forward(80 * size);
  turtle.right(90);
  turtle.forward(150 * size);
  turtle.right(45);
  turtle.forward(75 * size);
  turtle.right(45);
  turtle.forward(50 * size);
  turtle.right(45);
  turtle.forward(100 * size);
  turtle.right(45);
  turtle.forward(50 * size);
  turtle.left(90);
  turtle.forward(100 * size);
  turtle.closePath();
  turtle.setFillStyle("white")
  turtle.fill();
};

//drawTwo();

const drawFour = (size, color) => {
  turtle.beginPath();
  turtle.left(180);
  turtle.forward(200 * size);
  turtle.left(90);
  turtle.forward(169 * size);
  turtle.right(90);
  turtle.forward(50 * size);
  turtle.right(35);
  turtle.forward(280 * size);
  turtle.right(55);
  turtle.forward(70 * size);
  turtle.right(90);
  turtle.forward(230 * size);
  turtle.left(90);
  turtle.forward(70 * size);
  turtle.right(90);
  turtle.forward(50 * size);
  turtle.right(90);
  turtle.forward(70 * size);
  turtle.left(90);
  turtle.forward(195 * size);
  turtle.right(90);
  turtle.forward(55 * size);
  turtle.penUp();
  turtle.right(90 * size);
  turtle.forward(250);
  turtle.left(90 * size);
  turtle.forward(30);
  turtle.right(90 * size);
  turtle.penDown();
  turtle.forward(100 * size);
  turtle.left(150);
  turtle.forward(120 * size);
  turtle.left(120);
  turtle.forward(70 * size);
  turtle.closePath();
  turtle.setFillStyle("white");
  turtle.fill();
};
// Test code
const drawJersey = (version, playerNumber) => {
  turtle.penUp();
  turtle.forward(500);
  turtle.left(90);
  turtle.forward(300);
  turtle.right(90);
  turtle.penDown();
  ti.output("test")
  drawBase(3, version);
  turtle.penUp();
  turtle.left(90);
  turtle.forward(350);
  turtle.left(90);
  turtle.forward(500);
  turtle.left()
  if(playerNumber == 12) {
    drawOne(1);
    turtle.penUp();
    turtle.right(180)
    turtle.forward(150);
    turtle.left(180);
    drawTwo(1);
  }
}

drawJersey("home", 12);
/* main method -- put all of your work in here */
const main = async () => {
  // Get input...

  let size = await ti.promptSquare("How big a square?");

  // Draw turtle stuff
  

  // We need a separate "start" command
  // after the turtle.
  turtle.start();

  main();
};

// Commenting out main for now --
// we're just testing our function!
//main();
//drawSquare(200);
//turtle.start();

/* We need a separate "start" command
 * if we are NOT in async mode.
 * uncomment if you change out of async mode */
// turtle.start();
