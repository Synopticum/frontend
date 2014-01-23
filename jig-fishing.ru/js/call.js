// append
$( ".mainmenu" ).append( "<div class='arrow-lb'></div><div class='arrow-rb'></div>" );
$( ".catalog-title, .catalog .available" ).append( "<div class='arrow'></div>" );
$( ".catalog .price" ).append( "<div class='arrow1'></div><div class='arrow2'></div>" );
$( ".feeds-add .title h2, .catalog-related-title h2" ).append( "<div class='arrow1'></div><div class='arrow2'></div>" );

// slider
$(function(){
	$( "#slider" ).anythingSlider({
		hashTags            : false,
		buildStartStop      : false
	});
});

$( ".choice .more-link" ).click(function() {
	$(this).siblings( ".more" ).toggle();
});

$( ".radioset" ).buttonset();