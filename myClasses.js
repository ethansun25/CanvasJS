var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

var start_angle = 0;
var end_angle = 2 * Math.PI;

var x1Coord = 300;
var y1Coord = 300;

var x2Coord = 900;
var y2Coord = 300;

window.addEventListener("keydown", onKeyPress1, false);
window.addEventListener("keydown", onKeyPress2, false);

function onKeyPress1(e)
{
  var kp1 = e.keyCode;

  console.log(e.keyCode);
  console.log(e.key);

  if (kp1 == 87 && y1Coord > 20)
  {
    //up
    y1Coord -= 20;
  }
  /* else if (kp1 == 65 && x1Coord > 20)
  {
    //left
    x1Coord -= 20;
  } */
  else if (kp1 == 83 && y1Coord < 580)
  {
    //down
    y1Coord += 20;
  }
  /* else if (kp1 == 68 && x1Coord < 1180)
  {
    //right
    x1Coord += 20;
  } */
}

function onKeyPress2(e)
{
  var kp2 = e.keyCode;

  if (kp2 == 38 && y2Coord > 20)
  {
    //up
    y2Coord -= 20;
  }
  /* else if (kp2 == 37 && x2Coord > 20)
  {
    //left
    x2Coord -= 20;
  } */
  else if (kp2 == 40 && y2Coord < 580)
  {
    //down
    y2Coord += 20;
  }
  /* else if (kp2 == 39 && x2Coord < 1180)
  {
    //right
    x2Coord += 20;
  } */
}

function drawCircle1(x, y){
  ctx.beginPath();
  ctx.arc(x, y, 20, start_angle, end_angle);
  ctx.closePath();
  ctx.fillStyle="rgb(255, 0, 0)";
  ctx.fill();
  ctx.strokeStyle="#000000";
  ctx.stroke();
}

function drawCircle2(x, y){
  ctx.beginPath();
  ctx.arc(x, y, 20, start_angle, end_angle);
  ctx.closePath();
  ctx.fillStyle="rgb(0, 0, 255)";
  ctx.fill();
  ctx.strokeStyle="#000000";
  ctx.stroke();
}

function animate1(){
  ctx.clearRect(0, 0, 1200, 600);
  drawCircle1(x1Coord, y1Coord);
  requestAnimationFrame(animate1);
}

function animate2(){
  drawCircle2(x2Coord, y2Coord);
  requestAnimationFrame(animate2);
}

animate1();
animate2();
