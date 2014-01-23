// custom selectbox
$(function () {
	$(".default-selectbox").selectbox();
});

// custom file upload
 jQuery(document).ready(function(){
    jQuery(".customupload").matoriaFileupload();
});

// header nav expandable menu
$(".header-nav li:has(ul)").addClass("expandable");

// dynamic classes
$(".sort tbody tr:even").addClass("even");
$(".sort tbody tr:odd").addClass("odd");

// append
$(".control-title").append("<i class='arrow'></i>");

// jquery ui
$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: '',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	'Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	// dateFormat: 'dd mm',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$( ".default-datepicker").datepicker();
$( ".inline-datepicker" ).datepicker();


