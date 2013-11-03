/* dealer tabs */
$(".dealer .t1").click(function() {
	$(".dealer .tab1").show();
	$(".dealer .tab2, .dealer .tab3, .dealer .tab4, .dealer .tab5").hide();
	$(".dealer-tabs a").removeClass("active");
	$(this).addClass("active");
});

$(".dealer .t2").click(function() {
	$(".dealer .tab2").show();
	$(".dealer .tab1, .dealer .tab3, .dealer .tab4, .dealer .tab5").hide();
	$(".dealer-tabs a").removeClass("active");
	$(this).addClass("active");
});

$(".dealer .t3").click(function() {
	$(".dealer .tab3").show();
	$(".dealer .tab1, .dealer .tab2, .dealer .tab4, .dealer .tab5").hide();
	$(".dealer-tabs a").removeClass("active");
	$(this).addClass("active");
});

$(".dealer .t4").click(function() {
	$(".dealer .tab4").show();
	$(".dealer .tab1, .dealer .tab2, .dealer .tab3, .dealer .tab5").hide();
	$(".dealer-tabs a").removeClass("active");
	$(this).addClass("active");
});

$(".dealer .t5").click(function() {
	$(".dealer .tab5").show();
	$(".dealer .tab1, .dealer .tab2, .dealer .tab3, .dealer .tab4").hide();
	$(".dealer-tabs a").removeClass("active");
	$(this).addClass("active");
});
