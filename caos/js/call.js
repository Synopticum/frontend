$(".expand").click(function() {
  $("ul", this).toggle();
});

// toggle
$(".sale-title a").click(function() {
  $(".sale-content").toggle();
});

$(".filters-more-toggle").click(function() {
  $(".filters-more").toggleClass("active");
});


// add
$(".button-group a:first-child").addClass("first");
$(".button-group a:last-child").addClass("last");

$(".notice").append("<span class='arrow'></span>");
$(".dropdown ul").append("<li class='arrow'></li>");

// notices
$(".header-city .current").click(function() {
  $(".header-city .notice").toggle();
});

$(".dropdown-toggle").click(function() {
  $(this).siblings("ul").toggle();
});

$(".header-logged-notice").click(function() {
  $(this).siblings(".notice").toggle();
});

// jquery ui
$(function() {
	$( ".cb" ).button();
	$( ".radioset, .checkboxset" ).buttonset();
		
	$( ".tabs" ).tabs();		

	$(function() {
		$( ".datepicker" ).datepicker();
	});

    $( "#slider-range-1" ).slider({
      range: true,
      min: 0,
      max: 5000,
      values: [ 900, 2500 ],
      slide: function( event, ui ) {
        $( "#amount-1" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount-1" ).val( "" + $( "#slider-range-1" ).slider( "values", 0 ) +
      " - " + $( "#slider-range-1" ).slider( "values", 1 ) );

    $( "#slider-range-2" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount-2" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount-2" ).val( "" + $( "#slider-range-2" ).slider( "values", 0 ) +
      " - " + $( "#slider-range-2" ).slider( "values", 1 ) );
});