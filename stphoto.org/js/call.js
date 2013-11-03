$(document).ready(function(){
		$('#wrap').pageScroller({
			navigation: '#nav',
			scrollOffset: -125
		});
    $('#mylogo').bind('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
    
    					
	});
