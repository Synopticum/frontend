$(".top-position-item").first().addClass('first');

$(".leftmenu li li").first().addClass('first');
$(".leftmenu li li").last().addClass('last');
$('.leftmenu li li').first().append('<div class="arrow"></div>');

$(".topmenu li ul").hover(function() {
  $(this).siblings('a').toggleClass('highlight');
});