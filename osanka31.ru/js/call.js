$( ".days .title" ).click(function() {
	$( this ).toggleClass("active");
	$( this ).siblings(".wrapper").toggle();
});
