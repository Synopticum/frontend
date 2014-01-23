// slider
$(function(){
    $('#slider').anythingSlider({
    	hashTags            : false,
		buildNavigation     : false,
		buildStartStop      : false,   
    });
});

// fixe's
$( ".mainmenu a" ).append( "<div class='arrow'></div>" );
$( ".total" ).append( "<div class='arrow'></div>" );
$( ".steps-table" ).append( "<div class='arrow'></div>" );
$( ".feedslist .wrapper" ).append( "<div class='arrow'></div>" );
$( ".mainslider .wide-content-wrapper" ).append( "<div class='up'></div>" );

$( ".feeds-wrapper .item:last, .adv-wrapper .item:last, .step-by-step .item:last, .news .item:last, .feedslist .item:last" ).addClass( "last" );
$( ".feedslist .item:even" ).addClass( "even" );

$( ".mainmenu td:first-child" ).addClass( "first" );
$( ".mainmenu td:last-child" ).addClass( "last" );

$( ".news-banner" ).prev().css( "border", "0" );
$( ".mainmenu li.active, .mainmenu td.active" ).next().toggleClass( "noborder" );

$( ".mainmenu li, .mainmenu td" ).hover(function() {
	$(this).next().toggleClass( "noborder" );
});

// selectbox
$(function () {
	$(".selectbox").selectbox();
});

// lightbox
$('.fancybox').fancybox();
