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


$('.rent tr').click ( function() { 
  $(this).toggleClass('selected'); 
} );
$( ".rent tbody td:first-child" ).addClass( "first" );
$( ".rent tbody td:last-child" ).addClass( "last" );

// selectbox
$(function () {
	$(".selectbox").selectbox();
});

// ui
$(function() {
	$( ".radiobox" ).buttonset();
});

// custom file upload
jQuery(document).ready(function(){
    jQuery(".filebox").matoriaFileupload();
});

//  toggle search
$( ".usernav-search-input" ).click(function() {
  $( ".advsearch" ).toggle();

  if ($(this).val() == "свернуть") {
      $(this).val("поиск");
   }
   else {
      $(this).val("свернуть");
   }
});

// menu
$('.header-menu li').click ( function() { 
  $('.header-menu li').removeClass('active'); 
  $(this).toggleClass('active'); 
  $('.header-menu ul ul').hide(); 
  $('ul',this).show(); 
} );

// popup
$('.fancybox').fancybox();


