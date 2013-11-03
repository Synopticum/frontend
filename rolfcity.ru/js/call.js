$(".showcase .column").hover(function() {
	$(this).toggleClass("hover");
});

$(".column-left .showcase-more").click(function() {
	$(".column-left").toggleClass("active");
	$(".column-right").toggle();
});

$(".column-right .showcase-more").click(function() {
	$(".column-right").toggleClass("active");
	$(".column-left").toggle();
});

/* */
$(".cf-params").click(function() {
	$(".catalog-filter .tab2").hide();
	$(".catalog-filter .tab1").show();
});

$(".cf-mark").click(function() {
	$(".catalog-filter .tab1").hide();
	$(".catalog-filter .tab2").show();
});

/* slider */
$(function(){
    $('#slider').anythingSlider();
});