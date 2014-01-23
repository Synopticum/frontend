$( ".about li" ).append("<div class='arrow'></div>");
$( ".articles .item:last-child, .order tr:last-child td" ).css("border", "0");

//  about toggle
$( ".about .link1" ).click(function() {
	$( ".about .i1" ).show();
	$( ".about .i2" ).hide();
	$( this ).siblings("li").removeClass("active");
	$( this ).addClass("active");
});

$( ".about .link2" ).click(function() {
	$( ".about .i1" ).hide();
	$( ".about .i2" ).show();
	$( this ).siblings("li").removeClass("active");
	$( this ).addClass("active");
});

$( ".mainmenu li" ).click(function() {
	$( this ).siblings("li").removeClass("active");
	$( this ).addClass("active");
});

// more highlight
$( ".more .it1" ).hover(function() {
	$( ".more .it1, .more .pi1" ).toggleClass("highlight");
});

$( ".more .it2" ).hover(function() {
	$( ".more .it2, .more .pi2" ).toggleClass("highlight");
});

// fancybox
$(document).ready(function() {
	$(".fancybox").fancybox();
});