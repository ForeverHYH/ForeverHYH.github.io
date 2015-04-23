/**
 * Created by zhaozijing on 4/17/15.
 */

var refreshMilli = 50;
var startFrameIndex = 0;

function playStartVideo() {
    if (startFrameIndex >= startVideo.length) {
        clearInterval(intervalID);
        startNextAnim();
        return;
    }
    $("#start"+startFrameIndex).show();
    startFrameIndex += 1;
}

function startPlayStartVideo() {
    changePage("start");
    $(".z-start").hide();
    startFrameIndex = 0;
    $("#first-bg").show();
    // start playing pngs
    intervalID = setInterval(playStartVideo, refreshMilli*2);
}





