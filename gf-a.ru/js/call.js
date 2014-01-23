// slider's
$(function(){
	$('#slider, #slider2, #slider3, #slider4, #rotator').anythingSlider({
		buildStartStop      : false,
		buildNavigation     : false, 
		hashTags            : false,
		mode                : "horiz"
	});
});


// fixe's
$( ".green-line .wrapper" ).append( "<div class='arrow'></div>" );
$( ".services-item" ).append( "<span class='icon'></span>" );

// temp rotator(company page)
$( ".v1" ).click(function() {
	$( ".v-big-2, .v-big-3" ).hide();
	$( ".v-big-1" ).show();
});

$( ".v2" ).click(function() {
	$( ".v-big-1, .v-big-3" ).hide();
	$( ".v-big-2" ).show();
});

$( ".v3" ).click(function() {
	$( ".v-big-1, .v-big-2" ).hide();
	$( ".v-big-3" ).show();
});

// lightbox
$('.fancybox').fancybox();
