function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    let y = 0;
    let w = 50;
    while( y <= 600) {
    circle (100, y, w);
    y += 6;
    w += 5;
}


// circle(100, 200, 50);
// circle(100, 250, 50);
//circle(100, 300, 50);
// circle(100, 350, 50);
// circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
