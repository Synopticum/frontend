Cufon.replace(".header-contacts a, .mainmenucontainer li a, .aside-news .date .d", {
    hover: true
});

$(".sprite").hover(function(){
    $(this).stop().animate({"opacity": 1});
},function(){
    $(this).stop().animate({"opacity": 0.85});
});

$(".aside-menu a").click(function() {
  $(this).siblings("ul").toggle('fast');
});