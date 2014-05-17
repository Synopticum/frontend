// append
$(".aside-title").append("<span class='icon'></span>");
$(".categories .item:odd").addClass("odd");
$(".catalog-list .item:nth-child(3n)").addClass("third");

// anything slider
$(function() {
	$("#slider").anythingSlider({
		buildStartStop : false,
		hashTags : false
	});
});

// custom selectbox
$(function () {
	$(".selectbox").selectbox();
});

// tabs
$( "#mytabs" ).tabs();
