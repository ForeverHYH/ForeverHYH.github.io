jQuery(document).ready(function ($) {
    $(document).foundation();
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
    
    // console.log(browser);
    // alert("browser:" + browser.versions.android);

    // send info
    var winHeight = $(window).height();

    var breathLightOffset = -0.02;
    // $("#b-info-card-container").css("height", (winHeight * 1) + "px");
    // $(window).resize(function() {
      // $("#b-info-card-container").css("height", (winHeight * 1) + "px");
    // });
    var isSwiped = false;
    $("#b-swipe-container").swipe({
        swipeRight:function() {
            // alert("swipe right");
            if(!isSwiped) {
                sendInfo();
                
            }
        }, 
        threshold:0
    });

    function sendInfo() {
        var name = $("#infoname").val();
        var phone = $("#infophone").val();

        if(name == "" || phone == "") {
            alert("濮撳悕鎴栫數璇濅笉鑳戒负绌�");
        } else {
            isSwiped = true;
            // send ajax
            // var jsonData = {
            //     "name": name,
            //     "phone": phone
            // };

            // console.log(jsonData);
            // alert("browser:" + browser);
            var ios = "ios";
            var android = "android";
            var mobile = "";
            if(browser.versions.ios) {
                mobile = ios;
            } else {
                mobile = android;
            }

            var url = "http://114.215.201.178:8079/info?app_name=wine&title=" + encodeURI(name) + "&detail=" + encodeURI(phone) + encodeURI("|") + mobile;

            $.ajax({
                url: url,
                type:'get', 
                cache: true,    
                dataType:'jsonp'
            });

            stopNextAnim();

            setTimeout(function() {
                // go to next view
                changePage("map-content");
                $("#b-main-content").animate({opacity:'0'}, 1000, function(){
                    $("#b-main-content").css('display', 'none');
                });
                $("#map-content").css('display', 'block');
                $("#map-content").animate({opacity:'1'}, 1500, function(){
                    //breath light effect
                    setInterval(function() {
                        var temp = parseFloat($("#map-pointer").css("opacity"));
                        if(temp <= 0.2) {
                            breathLightOffset = -breathLightOffset;
                        } else if(temp >= 1){
                            if(breathLightOffset > 0) {
                                breathLightOffset = -breathLightOffset;
                            }
                        }
                        temp += breathLightOffset;
                        $("#map-pointer").css("opacity", temp);
                    }, 60);
                });

                // alert("test");

                
            }, 1000);

        }
    };

    $("#map-pointer").click(function() {
        window.location = "http://api.map.baidu.com/marker?location=31.215749,121.449246&title=闆嶇浼�&content=闆嶇浼氬叿浣撲綅缃�&output=html&src=闅忎究鍙�";
    });
});
