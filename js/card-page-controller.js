/**
 * Created by zhaozijing on 4/17/15.
 */

 var cardFrameIndex = 1;
 var cardFrame = 16;
 var cardVideoBox = $(document.getElementById('cardImg')); 

 function playCardVideo() {
    if (cardFrameIndex >= cardFrame) {
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

       return ;
   }
   $(cardVideoBox).css(
            'background-position', 
            -cardFrameIndex*videoBox.width()
        );
   cardFrameIndex += 1;
}

function startCardVideo() {
    cardFrameIndex = 1;
    intervalID = setInterval(playCardVideo, refreshMilli * 2);
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

