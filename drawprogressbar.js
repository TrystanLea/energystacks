function drawprogressbar(element,width,percentage)
{
    $('#'+element)[0].width = width;
    
    var canvas = document.getElementById(element);
    var ctx = canvas.getContext("2d");
    
    ctx.clearRect(0,0,width,80);
    ctx.fillStyle = "rgb(222,222,222)";
    ctx.fillRect(0,0,width,80);
    ctx.strokeStyle = "rgb(180,180,180)";
    ctx.strokeRect(0,0,width,80);
    ctx.fillStyle = "rgb(100,220,100)";
    ctx.fillRect(5,5,(width-10)*percentage,70);
    ctx.fillStyle    = "rgba(0, 0, 0, 1)";
    ctx.textAlign    = "center";
    ctx.font = "bold 24px arial";
    ctx.fillText(Math.round(percentage*100)+"%",5+(width-10)*percentage*0.5, 40);
    ctx.font = "bold 12px arial";
    ctx.fillText("Sustainable Energy",5+(width-10)*percentage*0.5, 55);
}
