/**
 * Created by zhaozijing on 4/17/15.
 */

var refreshMilli = 50;
var startFrameIndex = 1;
var startFrame = 70;
var videoBox = $(document.getElementById('startImg')); 

function playStartVideo() {
    if (startFrameIndex >= startFrame) {
        clearInterval(intervalID);
        startNextAnim();
        return;
    }
    $(videoBox).css(
            'background-position', 
            -startFrameIndex*videoBox.width()
        );
    startFrameIndex += 1;
}

function startPlayStartVideo() {
    changePage("start");
    $(".z-start").hide();
    startFrameIndex = 1;
    $("#first-bg").show();
    // start playing pngs
    intervalID = setInterval(playStartVideo, refreshMilli*2);
}





