jQuery('#products-tabs ul, #info-tabs ul').superSimpleTabs();

$(".pagescroll").click(function(event){
    event.preventDefault();
    //calculate destination place
    var dest=0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()) {
         dest=$(document).height()-$(window).height();
    } else {
         dest=$(this.hash).offset().top;
    }
    //go to destination
    $("html,body").animate({scrollTop:dest}, 1000,"swing");
});

// gallery
$( ".info-gallery .thumbnails a" ).click(function() {
	var id = $(this).attr("rel");
	$( ".info-gallery .big img" ).hide();
	$( ".photo-big-" + id ).show();
});