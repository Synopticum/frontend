$( ".header-brands .item:last" ).addClass( "last" );
$( ".page-cart td:first" ).addClass( "first" );
$( ".page-cart .button-nav" ).append( "<div class='arrow'></div>" );
$( ".catalog .aside-menu" ).append( "<div class='arrow-lt'></div><div class='arrow-rt'></div>" );
$(".features .item:nth-child(3n), .popular .item:nth-child(3n), .thumbnails a:nth-child(4n)").addClass("nomargin");

$( ".header-search-button" ).click(function() {
	$( ".header-search-toggle" ).toggle();
});

$( ".page-cart .button" ).click(function() {
	$( ".button-nav", this ).toggle();
});

$(function(){
	$('#slider').anythingSlider({
		hashTags            : false,  
		buildArrows         : false, 
		buildStartStop      : false, 
	});
});

$('.fancybox').fancybox();
