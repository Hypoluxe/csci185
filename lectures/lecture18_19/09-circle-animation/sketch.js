const circleData = [
 {x: 500, y: 50, d: 100, speedX: 3, speedY: 3 , color: "lightgreen"},
{x: 300, y: 150, d: 50, speedX: 2, speedY: 0 , color: "purple"},
{x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: "lightblue"},
{x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: "orange"},
{x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: "salmon"},
{x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: "yellow"},
 ];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// initialize variables outside of the function:
// let x = 0;
// let y = 0;
// let d = 50;
// let speedX = 3;
// let speedY = 2;

// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    clear();

let counter =0;
while (counter < circleData.length) {
let x = circleData [counter].x;
let y = circleData [counter].y;
let d = circleData [counter].d;
let speedX = circleData[counter] .speedX;
let speedY = circleData[counter] .speedY;
    fill(circleData[counter] .color);
    circle(x, y, d);
    circleData [counter].x += speedX;
circleData [counter].y += speedY;
counter += 1;
}
    drawGrid(canvasWidth, canvasHeight);
}
