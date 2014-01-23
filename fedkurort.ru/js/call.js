$(document).ready(function(){
        $(".activeCountry").on("click",function() {
            if($(this).parent().children(".country_list").css("display") == "none") {

                $(this).parent().children(".country_list").slideDown(100);
            } else {
                $(this).parent().children(".country_list").slideUp(100);
            }
        });
        $(".country_list").delegate("li", "click", function(e) {
            var flag = $(this).children(".item_flag").css("background-position");
            var code = $(this).children(".item_code").text();
            $(this).parents(".input_wreper").children(".activeCountry").css("background-position", flag);
            $(this).parents(".input_wreper").children("input").attr("value",code);
            $(this).parents(".input_wreper").children(".country_list").css("display","none")
        });
});

// add class
$(".tours .item:odd").addClass("odd");
$(".earlier .r-item:last-child").addClass("last");
$(".feeds .f-item:last-child").addClass("last");

$(".rating").append("<div class='corner'></div>");

// toggles
$( ".header-login-link" ).click(function() {
	$( ".header-login-form" ).toggle();
});

$( ".available-toggle" ).click(function() {
	$( this ).siblings(".available-wrapper").toggle();
});

$( ".accordion .title" ).click(function() {
	$( this ).siblings(".description").toggle();
	$( this ).toggleClass("active");
});

// custom selectbox
$(function () {
	$(".selectbox").selectbox();
});

// touchcarousel
jQuery(function($) {
	$("#carousel-image-text-horizontal, #carousel-image-text-horizontal2").touchCarousel({			
		itemsPerMove: 4,
		pagingNav: true,
		scrollbar: false,				
		scrollToLast: true,
		loopItems: true				
	});
			
	$("#carousel-single-image").touchCarousel({
		pagingNav: true,
		scrollbar: false,
		directionNavAutoHide: false,				
		itemsPerMove: 1,				
		loopItems: true,				
		directionNav: false,
		autoplay: false,
		autoplayDelay: 2000,
		useWebkit3d: true,
		transitionSpeed: 400
	});
			
	$("#carousel-image-and-text").touchCarousel({					
		pagingNav: false,
		snapToItems: false,
		itemsPerMove: 4,				
		scrollToLast: false,
		loopItems: false,
		scrollbar: true
	});
			
	$("#carousel-gallery").touchCarousel({				
		itemsPerPage: 1,				
		scrollbar: true,
		scrollbarAutoHide: true,
		scrollbarTheme: "dark",				
		pagingNav: false,
		snapToItems: false,
		scrollToLast: true,
		useWebkit3d: true,				
		loopItems: false
	});			
});

//jquery ui
$(function() {		
    	$( ".mf-checkbox input, .hl-checkbox input, .lf-checkbox input" ).button();

		$( ".ratefield-radio, .default-radio" ).buttonset();
		
		$( "#maptabs" ).tabs();
});

$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "" + ui.values[ 0 ] + " RUB до " + ui.values[ 1 ] + " RUB+" );
        }
    });
    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
      " RUB до " + $( "#slider-range" ).slider( "values", 1 ) + " RUB+" );
});

// rating
$('.stars').raty();
$('.oks').raty({
    starOff       : 'js/rating/img/ok-off.png',
    starOn        : 'js/rating/img/ok-on.png',	
});
$('.stars2').raty({
    starOff       : 'js/rating/img/s-off.png',
    starOn        : 'js/rating/img/s-on.png',	
});
$('.peoples').raty({
    starOff       : 'js/rating/img/peoples-off.png',
    starOn        : 'js/rating/img/peoples-on.png',	
});
$('.child').raty({
    starOff       : 'js/rating/img/child-off.png',
    starOn        : 'js/rating/img/child-on.png',	
});
