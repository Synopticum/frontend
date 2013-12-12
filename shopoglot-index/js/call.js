$(".about-more-show").click(function() {
  $(".about-more-wrapper, .about-more-hide").show();
  $(".about-more-show").hide();
});

$(".about-more-hide").click(function() {
  $(".about-more-wrapper, .about-more-hide").hide();
  $(".about-more-show").show();
});

/* results */
$(".results-title").click(function() {
  $(this).toggleClass("active");
  $(".results-table").toggle();
});

$(".results-more").click(function() {
  $(this).toggleClass("active");
  $(".results-more-wrapper").toggle();
});

/* examples */
$(".exlist-more").click(function() {
  $(this).toggleClass("active");
  $(".exlist-items-more").toggle();
});

/* tabs */
$(".tabs-filter table a").click(function() {
  $(this).toggleClass("active");
});

$(".tabs-list-more").click(function() {
  $(this).toggleClass("active");
  $(".tabs-list-items-more").toggle();
});

/* left panel */
$(".leftpanel-show").click(function() {
  $(this).hide();
  $(".leftpanel").fadeIn();
});

$(".leftpanel-hide").click(function() {
  $(".leftpanel").fadeOut();
  $(".leftpanel-show").show();
});

/* ofice */
$(".box-contacts-address").hover(function() {
  $(".box-contacts-hover").toggle();
});

/* slider */
$(function(){
    $('#exslider').anythingSlider({
    	mode : "vertical",
    	buildNavigation : false,
		buildStartStop : false,
		hashTags : false
    });
});
$(function(){
    $('#slider2, #slider3').anythingSlider({
    	mode : "horizontal",
    	buildNavigation : false,
		buildStartStop : false,
		hashTags : false
    });
});

/* placeholder */
jQuery('input[placeholder], textarea[placeholder]').placeholder();

/* ui */
$( "#button" ).button();
	$( ".radioset" ).buttonset();		
	$( "#tabs" ).tabs();

/* */
$(function () {
	$(".selectbox").selectbox();
});
