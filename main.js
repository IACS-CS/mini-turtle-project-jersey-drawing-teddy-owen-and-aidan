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
const drawOne = (size, color) => {
  turtle.beginPath();
  turtle.forward(300);
  turtle.left(90);
  turtle.forward(70);
  turtle.left(60);
  turtle.forward(70);
  turtle.left(120);
  turtle.forward(25);
  turtle.right(90);
  turtle.forward(235);
  turtle.right(90);
  turtle.forward(50);
  turtle.left(90);
  turtle.forward(40);
  turtle.left(90);
  turtle.forward(180);
  turtle.left(90);
  turtle.forward(40);
  turtle.left(90);
  turtle.forward(50);
  turtle.penUp();
  turtle.closePath();
  turtle.setFillStyle("white");
  turtle.fill();
};
turtle.setSpeed(0.98); // from 0 - 1 (0 slow, 1 fast)
turtle.setLineWidth(10);
turtle.setStrokeStyle("red");
turtle.start();
drawOne();

const drawTwo = (size, color) => {
  turtle.beginPath();
  turtle.penDown();
  turtle.left(180);
  turtle.forward(50);
  turtle.left(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(70);
  turtle.right(90);
  turtle.forward(90);
  turtle.right(90);
  turtle.forward(200);
  turtle.right(90);
  turtle.forward(150);
  turtle.right(45);
  turtle.forward(75);
  turtle.right(45);
  turtle.forward(50);
  turtle.left(90);
  turtle.forward(75);
  turtle.left(90);
  turtle.forward(45);
  turtle.left(90);
  turtle.forward(40);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(80);
  turtle.right(90);
  turtle.forward(150);
  turtle.right(45);
  turtle.forward(75);
  turtle.right(45);
  turtle.forward(50);
  turtle.right(45);
  turtle.forward(100);
  turtle.right(45);
  turtle.forward(50);
  turtle.left(90);
  turtle.forward(100);
  turtle.closePath();
  turtle.setFillStyle("white")
  turtle.fill();
};

drawTwo();

const drawFour = (size, color) => {
  turtle.beginPath();
  turtle.left(180);
  turtle.forward(200);
  turtle.left(90);
  turtle.forward(169);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(35);
  turtle.forward(280);
  turtle.right(55);
  turtle.forward(70);
  turtle.right(90);
  turtle.forward(230);
  turtle.left(90);
  turtle.forward(70);
  turtle.right(90);
  turtle.forward(50);
  turtle.right(90);
  turtle.forward(70);
  turtle.left(90);
  turtle.forward(195);
  turtle.right(90);
  turtle.forward(55);
  turtle.penUp();
  turtle.right(90);
  turtle.forward(250);
  turtle.left(90);
  turtle.forward(30);
  turtle.right(90);
  turtle.penDown();
  turtle.forward(100);
  turtle.left(150);
  turtle.forward(120);
  turtle.left(120);
  turtle.forward(70);
  turtle.closePath();
  turtle.setFillStyle("white");
  turtle.fill();
};
drawFour();

// Test code

/* main method -- put all of your work in here */
const main = async () => {
  // Get input...

  let size = await ti.promptSquare("How big a square?");

  // Draw turtle stuff
  drawSquare(size);

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
