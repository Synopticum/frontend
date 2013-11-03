/* jquery.selectbox */
$(function () {
	$(".default-selectbox").selectbox();
});

/* jquery ui */
$( ".checkbox" ).button();

$( ".default-radio-group, .custom-radio-group" ).buttonset();

/* hide search */
$(".page-search-hide").click(function() {
  $(".page-search-advanced, .page-search-hide").hide();
  $(".page-search-show").show();
});

$(".page-search-show").click(function() {
  $(".page-search-advanced, .page-search-hide").show();
  $(".page-search-show").hide();
});

/* magic manipulations */
$('.page-company-nav li li:first-child').append('<div class="up"></div>');

$('.paginator li:first-child').addClass('first');
$('.paginator li:last-child').addClass('last');

$('.page-map-card-images .image-small img:last-child').addClass('last');

$('.page-more .column:first-child').addClass('first');

$(".page-allinfo-title").click(function() {
  $(this).siblings(".page-allinfo-description").toggle("fast");
  $(this).parent().toggleClass("unactive", "active");
});

$('.fancybox').fancybox();