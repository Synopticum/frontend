$(document).ready(function(){
  
  $("#newsSlider").slider({
    animate: true,
    handle: ".newsSliderHandle",
    change: handleSliderChange,
    slide: handleSliderSlide
  });
   
   $("#backOffers img").hover(function(){
										    $("#listOffersWrapper").scrollTo( 0, 800, {queue:true} );
										});
   
});

function handleSliderChange(e, ui)
{
  var maxScroll = $("#scrollNews").attr("scrollWidth") - $("#scrollNews").width();
  $("#scrollNews").animate({scrollLeft: ui.value * (maxScroll / 100) }, 1000);
}

function handleSliderSlide(e, ui)
{
  var maxScroll = $("#scrollNews").attr("scrollWidth") - $("#scrollNews").width();
  $("#scrollNews").attr({scrollLeft: ui.value * (maxScroll / 100) });
}