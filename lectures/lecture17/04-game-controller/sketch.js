let x = 100;
let y = 200;
let width = 50;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

   
    ///fill(fillColor);
    drawCreature(x, y, fillColor, width, false)
}

function moveController(ev) {
    console.log(ev.code);

   ///Controls direction
    if (ev.code === "ArrowUp"){
    y = y - 10;
    }
    if (ev.code === "ArrowDown"){
        y = y +10;
    }
    if (ev.code === "ArrowRight"){
        x = x +10;
    }
    if (ev.code === "ArrowLeft"){
        x = x - 10;
    }

    if (ev.code === "Space"){
        width = width + 3;
         fillColor =("darkorange");
    } else if (ev.code === "KeyP"){
        fillColor = ("darkgreen");
    } else if (ev.code === "KeyL"){
        fillColor = ("darkgrey");
    }

    clear();
    fill(fillColor);
    drawCreature(x, y, fillColor, width, false)
    drawGrid(canvasWidth, canvasHeight);
}


function drawCreature (x, y, color, size)  
{
    fill(color);
   ///let size =150;
    let eye =65;
    circle (x, y , size); 
    fill("black");
    circle (x, y, eye);
}


document.addEventListener("keydown", moveController);
