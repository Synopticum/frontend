$(".header-menu li").append('<div class="spacer"></div>');

// anything slider
$(function() {
	$("#slider").anythingSlider({
		mode                : "horiz",
		buildStartStop      : false,
		hashTags            : false
	});
});

$(function() {
    $("#sliderx").anythingSlider({
        mode                : "fade",
        buildStartStop      : false,
        buildNavigation     : false,
        buildArrows         : false,
        hashTags            : false,
        autoPlay            : true
    });
});

$(function() {
    $("#mainslider").anythingSlider({
        mode                : "fade",
        buildStartStop      : false,
        buildNavigation     : false,
        hashTags            : false
    });
});

$(function() {
	$("#slider1, #slider2, #slider3").anythingSlider({
		mode                : "horiz",
		buildStartStop      : false,
		buildNavigation     : false,
		hashTags            : false
	});
});

$(function () {
 	$(".selectbox").selectbox();
});

// catalog item hovers
$('.catalog-normal .item').hover(
    function(){
        $('.title', this).animate({
            height: "260", 
        }, 500);
 		$(this).toggleClass("item-hover");
        $('#otherdiv').animate({
            //otherdiv properties here
        }, 500);
    },
    function(){
        $('.title', this).animate({
            padding: "25px 15px 75px 15px", 
            height: "0", 
        }, 500);     
 		$(this).toggleClass("item-hover");
        $('#otherdiv').animate({
            //otherdiv properties here
        }, 500);
});

$('.catalog-onlyname .item').hover(
    function(){
        $('.title', this).animate({
            height: "327px", 
        }, 500);
 		$(this).toggleClass("item-hover");
        $('#otherdiv').animate({
            //otherdiv properties here
        }, 500);
    },
    function(){
        $('.title', this).animate({
            padding: "13px 15px 10px 15px", 
            height: "84px", 
        }, 500);     
        $('#otherdiv').animate({
            //otherdiv properties here
        }, 500);
});