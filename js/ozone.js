
var a=document.getElementById("myCanvas");
var ctx = a.getContext("2d");



ctx.fillStyle="black";
ctx.fill();
ctx.font = "50px Arial";
ctx.textAlign="center";
ctx.fillText("Ozone Marketing",350,60);
ctx.font = "20px Arial";
ctx.fillText("Akg nagar road,Peroorkada PO,tvm ",350,95);

ctx.beginPath();
ctx.moveTo(90,0);
ctx.lineTo(40,70);
ctx.lineTo(40,130);
ctx.lineTo(140,130);
ctx.lineTo(140,70);
ctx.lineTo(90,0);

ctx.moveTo(40,70);
ctx.lineTo(30,90);
ctx.moveTo(140,70);
ctx.lineTo(150,90);
ctx.lineWidth=4;
ctx.stroke();






ctx.beginPath();
ctx.arc(90,80,30,0,Math.PI,false);
ctx.closePath();
ctx.lineWidth=1;
ctx.fillStyle="red";
ctx.strokeStyle='#550000';
ctx.fill();
ctx.stroke();




ctx.beginPath();
ctx.arc(90,80,30,0,Math.PI,true);
ctx.closePath();
ctx.lineWidth=1;
ctx.fillStyle="blue";
ctx.fill();
ctx.strokeStyle='#550000';
ctx.stroke();

const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';                      
 function generateString(length)
 {
     let result='';
    const ch=characters.length; 
    for(let i=0;i<length;i++)
    {
        result += characters.charAt(Math.floor(Math.random()*ch));
    }
    return result;
}