function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("grey");


                                //CIRCLE//
    // https://p5js.org/reference/#/p5/circle
    //fill("lightgrey")
   // circle(550, 100, 100);
    //fill("salmon")
    //circle(550, 100, 50);
    //fill("lightgrey")
    //circle(350, 100, 100);
    //fill("salmon")
    //circle(350, 100, 50);
    //fill("black")
   // circle(402, 150, 30, 40);
    //fill("black")
    //circle(500, 150, 30, 40);

                                //RECTANGLE/SQUARE//
    // https://p5js.org/reference/#/p5/rect
    //fill('salmon')
   // rect(425, 200, 55, 40);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    //point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    //fill('lightgrey');
    //ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve

    drawCreature(100, 100, "orange");
    drawCreature(300, 300, "skyblue");
    drawCreature(400, 700, "hotpink");
    drawCreature(450, 500, "yellow");
    drawCreature(700, 400, "darkgreen");
    
    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}



function drawCreature(x, y, color)  {
    fill(color);
    let size =150;
    let eye =65;
    circle (x, y , size); //base face shape
    fill("black");
    circle (x, y, eye);
}

