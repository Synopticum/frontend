    $(function(){
        $('#slider1, #slider2, #slider3').anythingSlider();
    });

$(".asidemenu a").not(".asidemenu li li a").click(function() {
  $(".asidemenu li").removeClass("active");
  $(this).parent("li").toggleClass("active");
});