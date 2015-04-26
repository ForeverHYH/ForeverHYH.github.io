/**
 * Created by zhaozijing on 4/17/15.
 */

var scrollFrameIndex = 1;
var scrollIntervalID = 0;
var scrollFrame = 99;
var scrollVideoBox = $(document.getElementById('scrollImg')); 

function playScrollVideo() {
    if (scrollFrameIndex >= scrollFrame) {
        showLogos();
        clearInterval(scrollIntervalID);
        return ;
    }
    if (scrollFrameIndex == 2) {
        playPeng();
    }
    $(scrollVideoBox).css(
            'background-position', 
            -scrollFrameIndex*scrollVideoBox.width()
        );
    scrollFrameIndex += 1;
}

function startScrollVideo() {
    $(".z-logo").hide();
    $("#clink-final").hide();
    $("#clink-bei").hide();

    scrollFrameIndex = 0;
    scrollIntervalID = setInterval(playScrollVideo, refreshMilli);
}
