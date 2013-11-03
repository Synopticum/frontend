$( ".radioset" ).buttonset();
$( ".check" ).button();

/* range slider */
$(function() {
    $( "#slider-range-max-1" ).slider({
      range: "max",
      min: 1000,
      max: 6000,
      value: 2000,
      step: 1000,
      slide: function( event, ui ) {
        $( "#amount-1" ).val( ui.value );
      }
    });
    $( "#amount-1" ).val( $( "#slider-range-max-1" ).slider( "value" ) );
  });

$(function() {
    $( "#slider-range-max-2" ).slider({
      range: "max",
      min: 0,
      max: 20,
      value: 10,
      step: 5,
      slide: function( event, ui ) {
        $( "#amount-2" ).val( ui.value );
      }
    });
    $( "#amount-2" ).val( $( "#slider-range-max-2" ).slider( "value" ) );
  });

/* login dropdown */
$("#footer-toggle").click(function() {
  $("footer").toggleClass("footer-more");
  $("#footer-toggle").toggleClass("active");
});

$(".information-payments tr:odd").addClass("odd");

$(".selectbox").selectbox({
  effect: "fade"
});