$(".pagescroll").click(function(event){
    event.preventDefault();
    //calculate destination place
    var dest=0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()) {
         dest=$(document).height()-$(window).height();
    } else {
         dest=$(this.hash).offset().top-135;
    }
    //go to destination
    $("html,body").animate({scrollTop:dest}, 1000,"swing");
});

$(".mainmenu a").click(function() {
  $(".mainmenu li, .toggle-contacts").removeClass("active");
  $(this).parent("li").addClass("active");
});

$(".toggle-contacts").click(function() {
  $(this).toggleClass("active");
  $(".contacts").toggle();
});

// objects animate
$(".objects .item").hover(function() {
});

// anything slider
$(function() {
	$("#slider").anythingSlider();
});

// fancybox
$('.fancybox').fancybox();
