// anything slider
$(function() {
	$("#slider").anythingSlider({
		buildNavigation     : false,
		buildStartStop      : false,
		hashTags            : false,
		autoPlay            : true,
		delay               : 3000
	});
});

$('.slider .r1').click ( function() { $('#slider').anythingSlider(1); } );
$('.slider .r2').click ( function() { $('#slider').anythingSlider(2); } );
$('.slider .r3').click ( function() { $('#slider').anythingSlider(3); } );

// fix menu
jQuery("document").ready(function($){	
	var nav = $('.mainmenu');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 125) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
});