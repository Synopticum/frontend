// navigation
$( "#link1" ).click(function() {
	$( ".popup" ).hide();
	$( "#popup-about" ).fadeIn();
});

$( "#link2" ).click(function() {
	$( ".popup" ).hide();
	$( "#popup-gallery" ).fadeIn();
});

$( "#link3" ).click(function() {
	$( ".popup" ).hide();
	$( "#popup-contacts" ).fadeIn();
});

$( "#link4" ).click(function() {
	$( ".popup" ).hide();
	$( "#popup-map" ).fadeIn();
});

$( "#link5" ).click(function() {
  $( ".popup" ).hide();
  $( "#popup-price" ).fadeIn();
});

// gallery
$( ".gallery-select .i1" ).click(function() {
  $( this ).siblings(".item").removeClass("active");
  $( this ).addClass("active");
  $( ".mygallery-2, .mygallery-3, .mygallery-4" ).hide();
  $( ".mygallery-1" ).show();
});

$( ".gallery-select .i2" ).click(function() {
  $( this ).siblings(".item").removeClass("active");
  $( this ).addClass("active");
  $( ".mygallery-1, .mygallery-3, .mygallery-4" ).hide();
  $( ".mygallery-2" ).show();
});

$( ".gallery-select .i3" ).click(function() {
  $( this ).siblings(".item").removeClass("active");
  $( this ).addClass("active");
  $( ".mygallery-1, .mygallery-2, .mygallery-4" ).hide();
  $( ".mygallery-3" ).show();
});

$( ".gallery-select .i4" ).click(function() {
  $( this ).siblings(".item").removeClass("active");
  $( this ).addClass("active");
  $( ".mygallery-1, .mygallery-2, .mygallery-3" ).hide();
  $( ".mygallery-4" ).show();
});
          
$(function(){
    $('#myGallery-1, #myGallery-2, #myGallery-3, #myGallery-4').galleryView({
        panel_width : 373,
        panel_height : 376,
        enable_slideshow : false,
        show_filmstrip_nav : false,
        filmstrip_position : "top"
    });
});

// fancybox
$('.fancybox').fancybox();
