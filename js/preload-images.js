/**
 * Created by zhaozijing on 4/17/15.
 */


var imageList = [];
var imageRestList = [];
var imageLoadCount = 0;
var imageTotalNumber = 0;

var startVideo = [];
var scrollVideo = [];
var cardVideo = [];
var clinkVideo = [];

var media;

var intervalID;

var preload = new createjs.LoadQueue();
var preloadRest = new createjs.LoadQueue();

preloadRest.addEventListener("fileload", loadRest);

function preloadOthers() {
    imageLoadCount = 0;
    preloadRest.loadFile(imageRestList[imageLoadCount]);
}

function loadRest() {
    imageLoadCount += 1;
    if (imageLoadCount > imageRestList.length) return ;
    preloadRest.loadFile(imageRestList[imageLoadCount]);
}


preload.addEventListener("fileload", loadAnotherImage);

function preloadImages() {
    // load all image names to the array
    addAllImages();
    setupVideoNames();
    imageTotalNumber = imageList.length;
    preload.loadFile(imageList[imageLoadCount]);
}

function loadAnotherImage() {
    imageLoadCount += 1;
    if (imageLoadCount >= imageTotalNumber) {
        console.log("load finished");
        $("#load-progress").hide();
        changePage("start");
        startPlayStartVideo();
        preloadOthers();
    } else {
        var percent = Math.round(imageLoadCount/imageTotalNumber * 50);
        var left = Math.round(50-percent/2);
        $("#load-progress").css("width", percent + "%");
        $("#load-progress").css("left", left + "%");
        preload.loadFile(imageList[imageLoadCount]);
    }
}

// all names are generated with gen.py


addAllImages = function() {
imageRestList.push("img/clink/03_gun_C_00027.jpg");
imageRestList.push("img/clink/03_gun_C_00030.jpg");
imageRestList.push("img/clink/03_gun_C_00033.jpg");
imageRestList.push("img/clink/03_gun_C_00039.jpg");
imageRestList.push("img/clink/03_gun_C_00045.jpg");
imageRestList.push("img/clink/03_gun_C_00054.jpg");

imageRestList.push("img/res/1996.png");
imageRestList.push("img/res/2003.png");
imageRestList.push("img/res/2004.png");
imageRestList.push("img/res/2008.png");
imageRestList.push("img/res/2010.png");

imageRestList.push("img/res/1996.jpg");
imageRestList.push("img/res/2003.jpg");
imageRestList.push("img/res/2004.jpg");
imageRestList.push("img/res/2008.jpg");
imageRestList.push("img/res/2010.jpg");
imageRestList.push("img/card/04_lianyi_00000.jpg");
imageRestList.push("img/card/04_lianyi_00001.jpg");
imageRestList.push("img/card/04_lianyi_00002.jpg");
imageRestList.push("img/card/04_lianyi_00003.jpg");
imageRestList.push("img/card/04_lianyi_00004.jpg");
imageRestList.push("img/card/04_lianyi_00005.jpg");
imageRestList.push("img/card/04_lianyi_00006.jpg");
imageRestList.push("img/card/04_lianyi_00007.jpg");
imageRestList.push("img/card/04_lianyi_00008.jpg");
imageRestList.push("img/card/04_lianyi_00009.jpg");
imageRestList.push("img/card/04_lianyi_00010.jpg");
imageRestList.push("img/card/04_lianyi_00011.jpg");
imageRestList.push("img/card/04_lianyi_00012.jpg");
imageRestList.push("img/card/04_lianyi_00013.jpg");
imageRestList.push("img/card/04_lianyi_00014.jpg");
imageRestList.push("img/card/04_lianyi_00015.jpg");
imageRestList.push("img/card/04_lianyi_00016.jpg");
imageRestList.push("img/infocard/b-rotate-bg.jpg");
imageRestList.push("img/infocard/b-rotate-note.png");
imageRestList.push("img/infocard/info-bg.jpg");
imageRestList.push("img/infocard/infocard-bg.jpg");
imageRestList.push("img/infocard/infocard-logo.png");
imageRestList.push("img/infocard/infocard-name-label.png");
imageRestList.push("img/infocard/infocard-phone-label.png");
imageRestList.push("img/infocard/infocard-text.png");
imageRestList.push("img/infocard/swipe-right-note.png");
imageRestList.push("img/map/map-bg-masker.png");
imageRestList.push("img/map/map-bg.jpg");
imageRestList.push("img/map/map-logo.png");
imageRestList.push("img/map/map-pointer-marker.png");
imageRestList.push("img/map/map-text.png");

imageList.push("img/res/loading.png");
imageList.push("img/pour/01_daojiu_shu_00000.jpg");
imageList.push("img/pour/01_daojiu_shu_00003.jpg");
imageList.push("img/pour/01_daojiu_shu_00006.jpg");
imageList.push("img/pour/01_daojiu_shu_00009.jpg");
imageList.push("img/pour/01_daojiu_shu_00012.jpg");
imageList.push("img/pour/01_daojiu_shu_00015.jpg");
imageList.push("img/pour/01_daojiu_shu_00018.jpg");
imageList.push("img/pour/01_daojiu_shu_00021.jpg");
imageList.push("img/pour/01_daojiu_shu_00024.jpg");
imageList.push("img/pour/01_daojiu_shu_00027.jpg");
imageList.push("img/pour/01_daojiu_shu_00030.jpg");
imageList.push("img/pour/01_daojiu_shu_00033.jpg");
imageList.push("img/pour/01_daojiu_shu_00036.jpg");
imageList.push("img/pour/01_daojiu_shu_00039.jpg");
imageList.push("img/pour/01_daojiu_shu_00042.jpg");
imageList.push("img/pour/01_daojiu_shu_00045.jpg");
imageList.push("img/pour/01_daojiu_shu_00048.jpg");
imageList.push("img/pour/01_daojiu_shu_00051.jpg");
imageList.push("img/pour/01_daojiu_shu_00054.jpg");
imageList.push("img/pour/01_daojiu_shu_00057.jpg");
imageList.push("img/pour/01_daojiu_shu_00060.jpg");
imageList.push("img/pour/01_daojiu_shu_00063.jpg");
imageList.push("img/pour/01_daojiu_shu_00066.jpg");
imageList.push("img/pour/01_daojiu_shu_00071.jpg");
imageList.push("img/res/bottle.jpg");
imageList.push("img/res/fourth-bg.png");
imageList.push("img/res/main-text.png");
imageList.push("img/res/next0.png");
imageList.push("img/res/next1.png");
imageList.push("img/res/peng.mp3");
imageList.push("img/res/second-bg.png");
imageList.push("img/clink/03_gun_C_00002.jpg");
imageList.push("img/clink/03_gun_C_00006.jpg");
imageList.push("img/clink/03_gun_C_00010.jpg");
imageList.push("img/clink/03_gun_C_00014.jpg");
imageList.push("img/clink/03_gun_C_00016.jpg");


}

setupVideoNames = function() {
startVideo.push("img/pour/01_daojiu_shu_00000.jpg");
startVideo.push("img/pour/01_daojiu_shu_00003.jpg");
startVideo.push("img/pour/01_daojiu_shu_00006.jpg");
startVideo.push("img/pour/01_daojiu_shu_00009.jpg");
startVideo.push("img/pour/01_daojiu_shu_00012.jpg");
startVideo.push("img/pour/01_daojiu_shu_00015.jpg");
startVideo.push("img/pour/01_daojiu_shu_00018.jpg");
startVideo.push("img/pour/01_daojiu_shu_00021.jpg");
startVideo.push("img/pour/01_daojiu_shu_00024.jpg");
startVideo.push("img/pour/01_daojiu_shu_00027.jpg");
startVideo.push("img/pour/01_daojiu_shu_00030.jpg");
startVideo.push("img/pour/01_daojiu_shu_00033.jpg");
startVideo.push("img/pour/01_daojiu_shu_00036.jpg");
startVideo.push("img/pour/01_daojiu_shu_00039.jpg");
startVideo.push("img/pour/01_daojiu_shu_00042.jpg");
startVideo.push("img/pour/01_daojiu_shu_00045.jpg");
startVideo.push("img/pour/01_daojiu_shu_00048.jpg");
startVideo.push("img/pour/01_daojiu_shu_00051.jpg");
startVideo.push("img/pour/01_daojiu_shu_00054.jpg");
startVideo.push("img/pour/01_daojiu_shu_00057.jpg");
startVideo.push("img/pour/01_daojiu_shu_00060.jpg");
startVideo.push("img/pour/01_daojiu_shu_00063.jpg");
startVideo.push("img/pour/01_daojiu_shu_00066.jpg");
startVideo.push("img/pour/01_daojiu_shu_00071.jpg");

cardVideo.push("img/card/04_lianyi_00000.jpg");
cardVideo.push("img/card/04_lianyi_00001.jpg");
cardVideo.push("img/card/04_lianyi_00002.jpg");
cardVideo.push("img/card/04_lianyi_00003.jpg");
cardVideo.push("img/card/04_lianyi_00004.jpg");
cardVideo.push("img/card/04_lianyi_00005.jpg");
cardVideo.push("img/card/04_lianyi_00006.jpg");
cardVideo.push("img/card/04_lianyi_00007.jpg");
cardVideo.push("img/card/04_lianyi_00008.jpg");
cardVideo.push("img/card/04_lianyi_00009.jpg");
cardVideo.push("img/card/04_lianyi_00010.jpg");
cardVideo.push("img/card/04_lianyi_00011.jpg");
cardVideo.push("img/card/04_lianyi_00012.jpg");
cardVideo.push("img/card/04_lianyi_00013.jpg");
cardVideo.push("img/card/04_lianyi_00014.jpg");
cardVideo.push("img/card/04_lianyi_00015.jpg");
cardVideo.push("img/card/04_lianyi_00016.jpg");


clinkVideo.push("img/clink/03_gun_C_00002.jpg");
clinkVideo.push("img/clink/03_gun_C_00006.jpg");
clinkVideo.push("img/clink/03_gun_C_00010.jpg");
clinkVideo.push("img/clink/03_gun_C_00014.jpg");
clinkVideo.push("img/clink/03_gun_C_00016.jpg");
clinkVideo.push("img/clink/03_gun_C_00027.jpg");
clinkVideo.push("img/clink/03_gun_C_00030.jpg");
clinkVideo.push("img/clink/03_gun_C_00033.jpg");
clinkVideo.push("img/clink/03_gun_C_00039.jpg");
clinkVideo.push("img/clink/03_gun_C_00045.jpg");
clinkVideo.push("img/clink/03_gun_C_00054.jpg");


};
