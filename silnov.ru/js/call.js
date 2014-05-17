// touchcarousel
jQuery(function($) {
	$("#carousel-image-and-text").touchCarousel({					
		pagingNav: true,
		pagingNavControls: true,
		snapToItems: false,
		itemsPerMove: 1,				
		scrollToLast: false,
		loopItems: false,
		scrollbar: false,
		directionNav: true,
		directionNavAutoHide: false,
		dragUsingMouse: false
	});

	$( "#button" ).button();
});