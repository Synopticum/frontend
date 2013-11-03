$(".topmenu li").click(function() {
  $(this).toggleClass('hover');
});

$(".topmenu li > a").not(".topmenu li ul a").addClass('first-level');

Cufon.replace(".topmenu li a.first-level, .header-aboutus .more, .news h2", {
    hover: true
});