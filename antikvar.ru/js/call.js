// sliders
$(function() {
	$("#slider").anythingSlider({
		hashTags            : false,
		buildNavigation     : false, 
		buildStartStop      : false
	});

  $('#gallery-2').royalSlider({
    fullscreen: {
      enabled: false,
      nativeFS: false
    },
    controlNavigation: 'thumbnails',
    thumbs: {
      orientation: 'vertical',
      paddingBottom: 4,
      appendSpan: true
    },
    transitionType:'fade',
    autoScaleSlider: false, 
    loop: true,
    arrowsNav: false,
    keyboardNavEnabled: false

  });
});

// fancybox
$('.fancybox').fancybox();
