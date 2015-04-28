var imageList = [];
var imageRestList = [];
var imageLoadCount = 0;
var imageTotalNumber = 0;

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
imageRestList.push("img/clink/ClinkTotal.jpg");

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

imageRestList.push("img/card/C.png");
imageRestList.push("img/card/C_background.jpg");

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
imageList.push("img/pour/PourTotal.jpg");
imageList.push("img/res/bottle.jpg");
imageList.push("img/res/fourth-bg.png");
imageList.push("img/res/main-text.png");
imageList.push("img/res/next0.png");
imageList.push("img/res/next1.png");
imageList.push("img/res/peng.mp3");
imageList.push("img/res/second-bg.png");

}