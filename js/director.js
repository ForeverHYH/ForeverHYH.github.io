/**
 * Created by zhaozijing on 4/17/15.
 */

 document.ontouchmove = function(e){ e.preventDefault(); }

 var nextIntervalID = 0;
 var nextFrameIndex = 0;

 var logos = [];
 var logoImages = [];
 var logoIndex = 0;
var logoMilli = 1000;

// animations
function showSecondBG() {
    $("#second-bg").css("left", 0);
    $("#second-bg").css("opacity", 0);
    $("#second-bg").animate({
        "opacity": 1
    }, 1000);
}

function disappearSecondBG() {
    $("#second-bg").animate({
        opacity: 0,
        left: "-=200"
    }, 1000, function() {
        changePage("scroll");
        startScrollVideo();
    });
}

function fadeBGLogo() {
    $("#logo96").animate({
        opacity: 0
    }, 500, function() {
        this.style.display = "none";
    });
    $("#Logo96").animate({
        opacity: 0
    }, 500, function() {
        this.style.display = "none";
    });
    $("#clink-final").animate({
        opacity: 0
    }, 500, function() {
        changePage("card");
        this.style.display = "none";
        startCardVideo();
    });
}

function hideLogo() {
    var textID = logos[logoIndex];
    var imageID = logoImages[logoIndex];

    var logoText = $("#" + textID);
    var logoImage = $("#" + imageID);
    logoText.show();
    logoText.css("opacity", 1);
    logoText.animate({
        opacity: 0
    }, logoMilli);

    logoImage.show();
    logoImage.css("opacity", 1);
    logoImage.animate({
        opacity: 0
    }, logoMilli, function() {
        logoIndex += 1;
        showLogo();
    });
}

function showLogo() {
    var textID = logos[logoIndex];
    var imageID = logoImages[logoIndex];

    $(".z-logo").hide();
    var logoText = $("#" + textID);
    var logoImage = $("#" + imageID);
    logoText.show();
    logoText.css("opacity", 0);
    logoText.animate({
        opacity: 1
    }, logoMilli);

    logoImage.show();
    logoImage.css("opacity", 0);
    logoImage.animate({
        opacity: 1
    }, logoMilli, function() {
        if (logoIndex < 4) {
            setTimeout(hideLogo, logoMilli);
        } else {
            startNextAnim();
            logoIndex += 1;
        }
    });
}

function hideClinkImage() {
    $(".c-clink-image").hide();
    $("#clink-final").show();
    $("#clink-final").css("opacity", 1);
    var c = $("#clink10");
    c.show();
    c.css("opacity", 1);
    c.animate({
        opacity: 0
    }, logoMilli, function() {
        this.style.display = "none";
        showLogo();
    });
}

function showLogos() {
    logoIndex = 0;
    logos = [];
    logoImages = []
    logos.push("logo10");
    logos.push("logo08");
    logos.push("logo03");
    logos.push("logo04");
    logos.push("logo96");
    logoImages.push("Logo10");
    logoImages.push("Logo08");
    logoImages.push("Logo03");
    logoImages.push("Logo04");
    logoImages.push("Logo96");

    hideClinkImage();
}

// other functions
function stopNextAnim() {
    clearInterval(nextIntervalID);
    $(".z-next").hide();
}

function playNextAnim() {
    nextFrameIndex += 1;
    if (nextFrameIndex > 1) {
        nextFrameIndex = 0;
    }
    $(".z-next").hide();
    $("#next"+nextFrameIndex).show();
}

function startNextAnim() {
    nextFrameIndex = 0;
    nextIntervalID = setInterval(playNextAnim, 500);
}



function playPeng() {
    var oAudio = document.getElementById('audiofile');
    oAudio.play();
}

function changePage(pageName) {
    $(".page").hide();
    $("#"+pageName).show();
}

$(document).ready(function () {
    changePage("preload");
    preloadImages();
    stopNextAnim();

    var browser={  
        versions:function(){   
            var u = navigator.userAgent, app = navigator.appVersion;   
           return {//绉诲姩缁堢娴忚鍣ㄧ増鏈俊鎭�   
                trident: u.indexOf('Trident') > -1, //IE鍐呮牳  
                presto: u.indexOf('Presto') > -1, //opera鍐呮牳  
                webKit: u.indexOf('AppleWebKit') > -1, //鑻规灉銆佽胺姝屽唴鏍�  
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //鐏嫄鍐呮牳  
                mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //鏄惁涓虹Щ鍔ㄧ粓绔�  
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios缁堢  
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android缁堢鎴栬€卽c娴忚鍣�  
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //鏄惁涓篿Phone鎴栬€匭QHD娴忚鍣�  
                iPad: u.indexOf('iPad') > -1, //鏄惁iPad  
                webApp: u.indexOf('Safari') == -1 //鏄惁web搴旇绋嬪簭锛屾病鏈夊ご閮ㄤ笌搴曢儴  
            };
        }(),

        language:(navigator.browserLanguage || navigator.language).toLowerCase()  
    }; 

    var ios = "ios";
    var android = "android";
    var mobile = "";
    if(browser.versions.ios == false && browser.versions.android == false) {
        mobile = "pc";
    } else if(browser.versions.ios) {
        mobile = ios;
    } else {
        mobile = android;
    }

    
});
