// select
$(function () {
	$(".selectbox").selectbox();
});

// status show
$(".categories .view").hover(function() {
  $(this).siblings(".status").toggle();
});

/* corners */
$(".header-nav li.active, .paginator li.active").append("<div class='tl'></div><div class='tr'></div>");
$(".comments-list .text").append("<div class='arrow'></div>");

/* expand */
$(".expand").click(function() {
  $("ul", this).toggle();
});

// subscribe
$(".subscribenow-button .button-red").click(function() {
  $(".subscribenow-button .notice").toggle();
});

$(".categories-expand").click(function() {
  $(this).toggleClass("active");
  $(".categories-dropdown").toggle();
});

$(".categories-dropdown-close").click(function() {
  $(".categories-expand").toggleClass("active");
  $(".categories-dropdown").hide();
});

// video tabs
$(".tab1-link").click(function() {
  $(".tabs-nav li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".tab2, .tab3").hide();
  $(".tab1").show();
});

$(".tab2-link").click(function() {
  $(".tabs-nav li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".tab1, .tab3").hide();
  $(".tab2").show();
});

$(".tab3-link").click(function() {
  $(".tabs-nav li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".tab1, .tab2").hide();
  $(".tab3").show();
});

// share tabs
$(".share1-link").click(function() {
  $(".share-nav li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".share2, .share3").hide();
  $(".share1").show();
});

$(".share2-link").click(function() {
  $(".share-nav li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".share1, .share3").hide();
  $(".share2").show();
});

$(".share3-link").click(function() {
  $(".share-nav li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".share1, .share2").hide();
  $(".share3").show();
});

$('.fancybox').fancybox();
