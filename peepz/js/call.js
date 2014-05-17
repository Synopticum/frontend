// on load
$(function() {
	$( ".checkboxset" ).buttonset();
	$( "#tabs" ).tabs();

	$("#slider").anythingSlider({
		buildNavigation     : true,      
		buildStartStop      : false,
		hashTags            : false
	});
	
	$( ".page-columns .item:nth-child(3n)" ).addClass("last");	

	var slideCount = $( ".thumbNav li" ).size();
	$( ".thumbNav" ).append(" of " + slideCount);

	$( ".selectbox" ).selectbox();
});
