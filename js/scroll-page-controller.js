/**
 * Created by zhaozijing on 4/17/15.
 */

var scrollFrameIndex = 0;
var scrollIntervalID = 0;

function playScrollVideo() {
    if (scrollFrameIndex > clinkVideo.length) {
        showLogos();
        clearInterval(scrollIntervalID);
        return ;
    }
    if (scrollFrameIndex == 2) {
        playPeng();
    }
    $("#clink" + scrollFrameIndex).show();
    scrollFrameIndex += 1;
}

function startScrollVideo() {
    $(".z-logo").hide();
    $("#clink-final").hide();
    $("#clink-bei").hide();

    scrollFrameIndex = 0;
    scrollIntervalID = setInterval(playScrollVideo, refreshMilli * 3);
}
