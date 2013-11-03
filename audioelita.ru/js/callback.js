$('.middle .item:nth-child(2)').addClass('center');

$(".leftmenu a").click(function() {
  $(this).parent().toggleClass('active');
  $(this).siblings('ul').toggle('fast');
});

$('.catalog .item:nth-child(2)').addClass('center'); 