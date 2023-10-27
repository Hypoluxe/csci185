
let sizeH1 = 40;
let sizeP = 20;



function makeBigger() {
   sizeH1 = sizeH1 + 5;
   sizeP = sizeP + 5;
   //alert('make bigger!');
document.querySelector("h1") .style.fontSize = sizeH1 + "px";
document.querySelector("p") .style.fontSize = sizeP + "px";
}

function makeSmaller() {
   //alert('make smaller!');
   sizeH1 = sizeH1 - 5;
   sizeP = sizeP - 5;
   document.querySelector("h1") .style.fontSize = sizeH1 + "px";
document.querySelector("p") .style.fontSize = sizeP + "px";
}


