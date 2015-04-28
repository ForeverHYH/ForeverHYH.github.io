$(function() {

    $("#scroll-swipe").swipe({
        swipeUp:function() {
            if (logoIndex < 5) return ;
            fadeBGLogo();
            stopNextAnim();
        }, 
        swipeDown:function() {
            if (logoIndex < 5) return ;
            changePage("bottle");
            showSecondBG();
            $(".z-logo").hide();

        },threshold:0
    });

    $("#first-bg").swipe({
        swipeUp:function() {
            if (startFrameIndex >= startFrame) {
                changePage("bottle");
                showSecondBG();
            }
        }, threshold:0
    });

    $("#b-rotation-masker").swipe({
        swipeDown:function() {
            changePage("scroll");
            startScrollVideo();
        }, threshold:0
    });
});


$(function() {
    $("#second-bg").swipe({
        swipeUp:function() {
            stopNextAnim();
            disappearSecondBG();
        }, 
        swipeDown: function() {
            stopNextAnim();
            startPlayStartVideo();
        },
        threshold:0
    });
});