$('.product-side-set .item:nth-child(2)').css('border', '0');

$(".product-info-rating-popup .close").click(function() {
  $(".product-info-rating-popup").hide();
});

$(".product-full .toggle").click(function() {
  $(this).siblings('table').toggle();
  $(this).parent('li').toggleClass('hide');
});

$('.product-comments-item').first().css('border', '0');

/* fancybox */
$(document).ready(function() {
    $("a[rel=product_info_thumbnails_group]").fancybox({
	    'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
		    return '<span id="fancybox-title-over">Фото ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
});

$("#sendfeed-popup-link, .buyers-popup-link").fancybox({
    'titlePosition'		: 'inside',
	'transitionIn'		: 'none',
	'transitionOut'		: 'none'
});

/* product tabs */
$(".product-tabs-nav a").click(function() {
  $(this).siblings('a').removeClass('active');
  $(this).addClass('active');
});

$(".tab1link").click(function() {
  $(".tab1").show();
  $(".tab2, .tab3, .tab4, .tab5").hide();
});

$(".tab2link").click(function() {
  $(".tab2").show();
  $(".tab1, .tab3, .tab4, .tab5").hide();
});

$(".tab3link").click(function() {
  $(".tab3").show();
  $(".tab1, .tab2, .tab4, .tab5").hide();
});

$(".tab4link").click(function() {
  $(".tab4").show();
  $(".tab1, .tab2, .tab3, .tab5").hide();
});

$(".tab5link").click(function() {
  $(".tab5").show();
  $(".tab1, .tab2, .tab3, .tab4").hide();
});