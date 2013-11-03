$('.news .item:last-child').addClass('last');

$("#carousel-gallery").touchCarousel({				
	itemsPerPage: 1,				
	scrollbar: false,
	scrollbarAutoHide: true,
	scrollbarTheme: "dark",				
	pagingNav: false,
	snapToItems: false,
	scrollToLast: false,
	useWebkit3d: true,				
	loopItems: true
});