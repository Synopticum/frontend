$( ".datepicker" ).datepicker({
	inline: true
});

$(function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 14,
      value: 4,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  });

$(function() {
    $( "#slider-range-max-2" ).slider({
      range: "max",
      min: 1,
      max: 14,
      value: 4,
      slide: function( event, ui ) {
        $( "#amount-2" ).val( ui.value );
      }
    });
    $( "#amount-2" ).val( $( "#slider-range-max-2" ).slider( "value" ) );
  });

$(function() {
	$( ".checkbox" ).button();
	$( "#format" ).buttonset();
});

$(function () {
	$(".selectbox").selectbox();
});