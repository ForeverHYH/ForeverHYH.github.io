var canvas =document.getElementById("canvas");
var canvasBox = $(document.getElementById('canvas')); 
var div = document.getElementById("canvasDiv"); 
var context2D =canvas.getContext("2d"); 
var pic = new Image();
var rotateCount = 1;   
pic.src ="img/card/C.png";
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var picWidth = div.offsetWidth;
var picHight = div.offsetHeight;
//注意下面方法中画笔状态的保护，这在很多情况下都会使用到  
function draw(){
    if(rotateCount*2.5>picHight) 
    {
        context2D.clearRect(0,0,canvasWidth,canvasHeight);
        stopNextAnim();
        clearInterval(intervalID);

        if(window.orientation == -90 || window.orientation == 90) {
            $("#b-main-content").show();
            $("#b-rotation-masker").hide();
        } else {
            // alert("2");
            var b = $("#b-rotation-masker");
            b.show();
            b.css("opacity", 0);
            b.animate({
              "opacity": 1
            }, 1000);
        }
        // add detection for orientation
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);

        return; 
    }
    context2D.clearRect(0,0,canvasWidth,canvasHeight);  
    context2D.save();//保存画笔状态  
    //context2D.translate(picWidth/2, rotateCount);//开始移动画笔 
    context2D.translate(30, 30);
    $(canvasBox).css('top', rotateCount*2); 
    context2D.rotate(rotateCount*Math.PI/180);
    context2D.drawImage(pic,0, 0,25,25);  
    context2D.restore();//绘制结束以后，恢复画笔状态 
    rotateCount++; 
} 

function startCardVideo() {
    cardFrameIndex = 0;
    intervalID = setInterval(draw, 10);
}

// orientation handle
function orientationChange(){   
    switch(window.orientation) {   
        case 0: // Portrait   
        case 180: // Upside-down Portrait
        $("#b-rotation-masker").show();
        $("#b-main-content").hide();

        break;
        case -90: // Landscape: turned 90 degrees counter-clockwise   
        case 90: // Landscape: turned 90 degrees clockwise   

        $("#b-rotation-masker").hide();
        $("#b-main-content").show();
        
        break;   
    }
}       