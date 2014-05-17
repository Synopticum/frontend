// fancybox
$('.mainmenu ul ul').append("<li class='arrow'></li>");
$('.news-view, .cart-thumbnail, .rightside-menu-variant li li').append("<div class='arrow'></div>");
$('.feeds .item:odd').addClass("odd");
$('.cart-table tbody tr:odd, .catalog-table tbody tr:odd, #product-tabs tbody tr:odd').addClass("odd");
$('.feedslist .item:odd').addClass("odd");

// fancybox
$('.fancybox').fancybox();

// fancybox
$( ".news .i1 a" ).hover(function() {
	$( ".news .v2, .news .v3" ).hide();
	$( ".news .v1" ).show();
});

$( ".news .i2 a" ).hover(function() {
	$( ".news .v1, .news .v3" ).hide();
	$( ".news .v2" ).show();
});

$( ".news .i3 a" ).hover(function() {
	$( ".news .v1, .news .v2" ).hide();
	$( ".news .v3" ).show();
});

$( "#popup-fin .close" ).click(function() {
    $.fancybox.close()
});

// ie8
var w = $(window).width();
if (w < 1024) {
    document.write('<link rel="stylesheet" href="css/ie8.css">');
}


$(function() {	
    // skdslider        
    $('#mainslider, #parthners').skdslider({'delay':5000, 'fadeSpeed': 2000,'showNextPrev':true,'showPlayButton':true,'autoStart':false});

	$(".default-checkbox input").button();
	$(".default-radiobox, .radiocolor").buttonset();

	$("#product-tabs").tabs();

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#vfrom" ).val(ui.values[ 0 ]);
            $( "#vto" ).val(ui.values[ 1 ]);
        }
    });
    $( "#vfrom" ).val($( "#slider-range" ).slider( "values", 0 ));
    $( "#vto" ).val($( "#slider-range" ).slider( "values", 1 ));

	// inc/dec input
	$('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    }); 

    // custom upload
    $("#file1").matoriaFileupload();

    // rating stars
    $('.raty').raty({    
        starOff       : 'js/raty/img/star-off.png',
        starOn        : 'js/raty/img/star-on.png',
    });
});

