// append
$(".header-menu li").append("<div class='arrow'></div>");
$(".catalog-home-wrapper .catalog-item:nth-child(4n)").addClass("four");
$(".catalog-inner .catalog-item:nth-child(3n)").addClass("three");

// skdslider
jQuery(document).ready(function(){
	jQuery('#mainslider').skdslider({
		'delay': 5000, 
		'fadeSpeed': 2000,
		'showNextPrev': true,
		'showPlayButton': true,
		'autoStart': false,
		'numericNav' : true
	});
});

jQuery(document).ready(function(){
	jQuery('#feedslider').skdslider({
		'delay': 5000, 
		'fadeSpeed': 2000,
		'showNextPrev': true,
		'showPlayButton': true,
		'autoStart': false
	});
});

// custom selectbox
$(function () {
	$(".selectbox").selectbox();
});

// fancybox
$('.fancybox').fancybox();

// bxslider
$('.bxslider').bxSlider({
  pagerCustom: '#bx-pager'
});
