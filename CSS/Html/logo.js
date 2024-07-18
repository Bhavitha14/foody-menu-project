let canvas=document.getElementById("pro");
let context=canvas.getContext("2d");
context.beginPath();
context.moveTo(165,60);
context.lineTo(200,40);
context.strokeStyle="#008000";
context.lineWidth=7;
context.stroke();

context.beginPath();
context.moveTo(200,40);
context.lineTo(235,60);
context.strokeStyle="#008000";
context.lineWidth=7;
context.stroke();

context.beginPath();
context.moveTo(235,60);
context.lineTo(235,95);
context.strokeStyle="#ff0022";
context.lineWidth=7;
context.stroke();

context.beginPath();
context.moveTo(165,95);
context.lineTo(165,60);
context.strokeStyle="#ff0022";
context.lineWidth=7;
context.stroke();

context.beginPath();
context.moveTo(235,95);
context.lineTo(200,115);
context.strokeStyle="#008000";
context.lineWidth=7;
context.stroke();

context.beginPath();
context.moveTo(200,115);
context.lineTo(165,95);
context.strokeStyle="#008000";
context.lineWidth=7;
context.stroke();

context.font="28px Calibri";
context.strokeStyle="red";
context.fillText("logo",175,88);