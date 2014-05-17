// columns
var columnHeight = $(".content").outerHeight();
$(".leftside").outerHeight(columnHeight);

// tabs
$(".tab1").click(function() {
  $( ".tab" ).removeClass("active");
  $( this ).addClass("active");
  $( ".tab2-content" ).hide();
  $( ".tab1-content" ).show();
});

$(".tab2").click(function() {
  $( ".tab" ).removeClass("active");
  $( this ).addClass("active");
  $( ".tab1-content" ).hide();
  $( ".tab2-content" ).show();
});

// animate categories
$('.categories .item').hover(
    function(){
        $(".title", this).animate({
            padding:"35px 0"
        }, 500);
    },
    function(){
        $(".title", this).animate({
            padding:"5px 0"
        }, 500);  
});

// gallery shadow
$(".gallery .item").append("<div class='shadow'></div>");

// fancybox
$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$(".fancybox-inner").append("<div class='play'></div>");
});
