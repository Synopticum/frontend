// font's replace
Cufon.replace('.tarifs-table h5, .tarifs-table h6, .header-phones, .header-login .title, .slider-slogan, .slider-item .title, .slider-item p, .box-title, .business .title, .tarif-name .subtitle, .cart-total .subtitle,  .cart-total .total-wrapper .subtitle'); 

// add class
$(".news .item:first-child").addClass('first');
$(".business .item:odd").addClass('odd');
$(".column-left  .tarifs-mini .item:nth-child(4n)").addClass('fourth');
$(".column-right .tarifs-mini .item:even").addClass('even');

// slider
$(window).load(function() {
    $('#slider').nivoSlider({
	    effect: 'fade',               // Specify sets like: 'fold,fade,sliceDown'
	    slices: 15,                     // For slice animations
	    boxCols: 8,                     // For box animations
	    boxRows: 4,                     // For box animations
	    animSpeed: 500,                 // Slide transition speed
	    pauseTime: 5000,                // How long each slide will show
	    startSlide: 0,                  // Set starting Slide (0 index)
	    directionNav: false,             // Next & Prev navigation
	    controlNav: true,               // 1,2,3... navigation
	    controlNavThumbs: false,        // Use thumbnails for Control Nav
	    pauseOnHover: true,             // Stop animation while hovering
	    manualAdvance: false,           // Force manual transitions
	    prevText: 'Prev',               // Prev directionNav text
	    nextText: 'Next',               // Next directionNav text
	    randomStart: true,             // Start on a random slide
	});
});

// cycle
var divs = $('.newsline .item'),
    interval, current = $(divs[0]);

var cycle = function(){
    var prev = current;   
    current = current.next();
    if (current.length == 0){
         current = $(divs[0]);
    }    
    prev.fadeOut(function(){
        current.fadeIn(); 
    });
}

$(document).ready(function() {
   interval = window.setInterval(cycle, 7000);    
}, function(){
    window.clearInterval(interval);
});

// selectbox
$(".selectbox").selectbox();

$(function() {
    $( ".mycheckbox input, .minicheckbox input" ).button();
});