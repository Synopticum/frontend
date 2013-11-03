Cufon.replace("#footer .quote h5, .slider .title, .entry-title, .topmenu .hover a", {
    hover: true
});

$(document).ready(function(){	
	$("#innerslider").easySlider({
		auto: false,
		continuous: true,
		nextId: "s1next",
		prevId: "s1prev"
	});
	$("#innerslider2").easySlider({ 
		auto: false,
		continuous: true,
		nextId: "s2next",
		prevId: "s2prev"
	});
	$("#innerslider3").easySlider({ 
		auto: false,
		continuous: true,
		nextId: "s3next",
		prevId: "s3prev"
	});
});

$(function(){
    $('#slider').anythingSlider({ 
        buildArrows: false,
        buildStartStop: false
	});
});

$('.r1 a').click ( function() { $('#slider').anythingSlider(1); } );
$('.r2 a').click ( function() { $('#slider').anythingSlider(2); } );
$('.r3 a').click ( function() { $('#slider').anythingSlider(3); } );
$('.r4 a').click ( function() { $('#slider').anythingSlider(4); } );


$('.columns').columnize({ columns: 2 });


$(".topmenu li").hover(function() {
  $(this).toggleClass('current');
  $(this).siblings('li').toggleClass('opacity');
});

$(function()
{
	$('.scroll-pane').jScrollPane();
});