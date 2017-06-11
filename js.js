window.onload = function() {
    drawMario();
}
var canvas  = document.getElementById("myCanvas");
var context = canvas.getContext("2d");


function drawMario() {
    image = new Image();
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4b_4gyvaRc1GeiEvr5x4FEVwJni-hf3A8qdxg70loeqY6GpxdHaIlpVi";
    image.addEventListener('load', drawCanvas);
}
function drawCanvas() {

  var imageXCenter = canvas.width / 2 - image.width /2
  var imageYBottom = canvas.height - image.height
  context.drawImage(image, imageXCenter, imageYBottom);
}
