// slider
$(function(){
    $('#slider').anythingSlider({
		buildStartStop      : false,      
		hashTags            : false
    });
});

$('.s1').click ( function() { $('#slider').anythingSlider(1); } );
$('.s2').click ( function() { $('#slider').anythingSlider(2); } );
$('.s3').click ( function() { $('#slider').anythingSlider(3); } );

// even/odd tr in rent
$( ".rent tbody tr:odd" ).addClass( "odd" );

