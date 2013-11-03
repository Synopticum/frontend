/* top menu */
$(".topmenu li").click(function() {
  $(this).toggleClass('hover');
});

$(".topmenu li > a").not(".topmenu li ul a").addClass('first-level');

/* slider */
$(document).ready(function(){
	    $("#slider").easySlider({
		    auto: false,
			continuous: true,
			numeric: true
		});
});

/* font */
Cufon.replace(".topmenu li .first-level, .news h3, .welcome h1, .special h2, .additional h4", {
    hover: true
});
