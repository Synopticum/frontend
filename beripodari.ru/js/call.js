$( ".header-notice .close" ).click(function() {
	$( ".header-notice" ).hide();
});

$( ".wbanner .close" ).click(function() {
	$( ".wbanner" ).hide();
});

// slider
$(function(){
    $('#slider').anythingSlider({
    	hashTags            : false,
		buildStartStop      : false, 
		autoPlay            : true,
		delay               : 5000
    });
});

// social tabs
$( ".aside-social .t1" ).click(function() {
	$( this ).siblings().removeClass( "active" );
	$( this ).addClass( "active" );
	$( ".aside-social .tab2, .aside-social .tab3" ).hide();
	$( ".aside-social .tab1" ).show();
});

$( ".aside-social .t2" ).click(function() {
	$( this ).siblings().removeClass( "active" );
	$( this ).addClass( "active" );
	$( ".aside-social .tab1, .aside-social .tab3" ).hide();
	$( ".aside-social .tab2" ).show();
});

$( ".aside-social .t3" ).click(function() {
	$( this ).siblings().removeClass( "active" );
	$( this ).addClass( "active" );
	$( ".aside-social .tab1, .aside-social .tab2" ).hide();
	$( ".aside-social .tab3" ).show();
});

// countdown
jQuery(document).ready(function() {
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day':      13,
            'month':    12,
            'year':     2013,
            'hour':     14,
            'min':      0,
            'sec':      0
        }
    });                
});