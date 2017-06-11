window.onload = function() {
    setInterval(draw, 10);
}
var canvas  = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var x = 0
var y = 0

var spacebarPressed = false;

window.onload = function() {
    setInterval(drawMario, 10);
}

function drawMario() {
    image = new Image();
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4b_4gyvaRc1GeiEvr5x4FEVwJni-hf3A8qdxg70loeqY6GpxdHaIlpVi";
    x = canvas.width / 2 - image.width /2;
    y = canvas.height - image.height;


    if(spacebarPressed && y > 358) {
      y = y-7
    }

function draw() {
  drawMario()
}

    context.drawImage(image, x, y);
}





document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.keyCode == 32) {
        spacebarPressed = true;
  }
}
