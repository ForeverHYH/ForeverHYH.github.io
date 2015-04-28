
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
    //videoBox.style.backgroundPosition = -(startFrameIndex*videoBox.width()) + 'px';
    startFrameIndex += 1;
}

function startPlayStartVideo() {
    changePage("start");
    startFrameIndex = 1;
    $("#first-bg").show();
    intervalID = setInterval(playStartVideo, refreshMilli);
}





