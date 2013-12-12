$(".fullinfo-toggle").click(function() {
	$(this).toggleClass("active");
	$(this).siblings("table").toggle();
});

$(".menu-toggle").click(function() {
	$(this).toggleClass("active");
	$(this).siblings(".menu-item-wrapper").toggle();
});

$(".menu-close").click(function() {
	$(".menu").hide("");
});

$(".mainmenu-toggle").click(function() {
	$(".menu").toggle("");
});

$(".mainmenu li a").not(".mainmenu li ul a").mouseover(function() {
	$(".mainmenu li").removeClass("active");
	$(this).parent().addClass("active");
});

$("body").click(function() {
	$(".mainmenu li").removeClass("active");
});