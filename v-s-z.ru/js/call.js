$(".showcase .item:nth-child(odd)").addClass("odd");

$("#tn_search").click(function() {
  $("#tn_email_box").hide();
  $("#tn_search_box").toggle();
});

$("#tn_email").click(function() {
  $("#tn_search_box").hide();
  $("#tn_email_box").toggle();
});

$(".price .description-short").click(function() {
  $(".description-more, .description-top", this).toggle();
});

$(function() {
    $(".anyClass").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
    	vertical: true,
    	visible: 2
    });
});

/* product tabs */
$("#nav1 span").click(function() {
  $(this).parent("li").siblings("li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".product-description .tab").hide();
  $("#tab1").show();
});

$("#nav2 span").click(function() {
  $(this).parent("li").siblings("li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".product-description .tab").hide();
  $("#tab2").show();
});

$("#nav3 span").click(function() {
  $(this).parent("li").siblings("li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".product-description .tab").hide();
  $("#tab3").show();
});

$("#nav4 span").click(function() {
  $(this).parent("li").siblings("li").removeClass("active");
  $(this).parent("li").addClass("active");
  $(".product-description .tab").hide();
  $("#tab4").show();
});