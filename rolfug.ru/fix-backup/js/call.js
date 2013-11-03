$(".product-description-full tr:nth-child(even), .product-description-full td:nth-child(even)").addClass("even");

/* hide model */
$(".csearch-model").click(function() {
  $(this).fadeOut();
});

/* text gradient */
$(".text-title, .inner h1, .left .features-phone").pxgradient({ 
  step: 10, 
  colors: ["#082b4d","#006ba2"], 
  dir: "x" 
});

/* anythingslider */
$(function(){
	$('#imageslider, #promoslider').anythingSlider();
});

/* switch tabs */
$("#double-tab-1-link").click(function() {
  $(".double-switcher a").removeClass("active");
  $(this).addClass("active");
  $("#double-tab-1").show();
  $("#double-tab-2").hide();
});

$("#double-tab-2-link").click(function() {
  $(".double-switcher a").removeClass("active");
  $(this).addClass("active");
  $("#double-tab-1").hide();
  $("#double-tab-2").show();
});

/* polis steps */
$(".polis-step .title").click(function() {
  $(this).siblings(".wrapper").toggle('fast');
  $(this).parent(".polis-step").toggleClass("active");
});