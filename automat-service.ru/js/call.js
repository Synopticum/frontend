// append
$(".aside-menu li").append("<div class='icon'></div>");

var productHeight = $(".product-left").height();
$(".product-right .wrapper").css("min-height", productHeight - 57);

// radio
$(function() {
	$( ".checkbox input" ).button();
});

// autocomplete
var availableTags = [
    "Самара",
    "Санкт-Петербург",
    "Саранск",
    "Саратов",
    "Чебоксары",
    "Южно-Сахалинск"
];

$( "#autocomplete" ).autocomplete({
    source: availableTags
});