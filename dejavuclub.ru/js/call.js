$(".main-events-normal").hover(function() {
  $(".main-events-normal-overlay", this).fadeToggle();
});



$(".button, .question, .confirm a, .footer-booking").hover(function(){
    $(this).stop().animate({"opacity": 1});
},function(){
    $(this).stop().animate({"opacity": 0.8});
});



$(document).ready(function(){
	$(".navigation-menu li a").mouseenter(
	  function () {
		$(this).animate({
			backgroundColor:"#d80350",
	    }, 300 );
	});

	$(".navigation-menu li a").mouseleave(function() {
		$(this).animate({
			backgroundColor:"#470e26",
	    }, 300 );
	});
});



$(function () {
   $("#country_id").selectbox();
});

$("li:first-child").addClass("first");
$("li:last-child").addClass("last");