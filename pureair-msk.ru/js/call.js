$(function() {
	$( ".checkbox" ).button();
});

$( ".radio" ).buttonset();
		
$( ".tabs" ).tabs();

$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 50000,
      values: [ 7500, 30000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) +
      " до " + $( "#slider-range" ).slider( "values", 1 ) );