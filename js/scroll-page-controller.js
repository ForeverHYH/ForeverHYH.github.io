var scrollFrameIndex = 1;
var scrollIntervalID = 0;
var scrollFrame = 99;
var scrollVideoBox = $(document.getElementById('clinkImg')); 

function playScrollVideo() {
    if (scrollFrameIndex >= scrollFrame) {
        showLogos();
        clearInterval(scrollIntervalID);
        return ;
    }
    if (scrollFrameIndex == 15) {
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
