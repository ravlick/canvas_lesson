'use strict';
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
// ctx.fillStyle="red";
// ctx.fillRect(100 , 50 , 150,75);
// ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
// ctx.fillRect (30, 30, 55, 50);
// ctx.strokeStyle="yellow";
// ctx.strokeRect(50, 50,50, 50);
//
// ctx.moveTo(10,10);
// ctx.lineTo(50,50);
// ctx.stroke();

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();





