	var flag=0;

	
function initialize() 
{
if (GBrowserIsCompatible()) {
/* Инициализация карты Google Maps */  	
	var map = new GMap2(document.getElementById("map_canvas"),{ size: new GSize(600,500) } );		
	/*Задаем центр выводимой области карты - Москва*/  		
	map.setCenter(new GLatLng(center_x,center_y), 15);  
	var customUI = map.getDefaultUI();
	map.setUI(customUI);/*управляющие компоненты*/
	map.disableScrollWheelZoom();  /*отключаем прокрутку колесом мыши*/
	map.enableGoogleBar(); /*панель поиска*/
	
	var blueIcon = new GIcon(G_DEFAULT_ICON);
		blueIcon.image = "http://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png";
		markerOptions = { icon:blueIcon };
				
	/*for(i in markers) {   
		map.addOverlay(createMarker(markers[i]['x'],markers[i]['y'],markers[i]['comment']));   
	} 	*/
		
	if (comment!==''){
		var marker1 = new GMarker(new GLatLng(center_x,center_y), markerOptions);
			GEvent.addListener(marker1, "mouseover", function() {   
				marker1.openInfoWindowHtml(comment);  
			});  
			map.addOverlay(marker1);	
			marker1.openInfoWindow(comment);
	}

	var map = new GMap2(document.getElementById("map_canvas2"),{ size: new GSize(370,500) } );		
	/*Задаем центр выводимой области карты - Москва*/  		
	map.setCenter(new GLatLng(center_x,center_y), 15);  
	var customUI = map.getDefaultUI();
	map.setUI(customUI);/*управляющие компоненты*/
	map.disableScrollWheelZoom();  /*отключаем прокрутку колесом мыши*/
	map.enableGoogleBar(); /*панель поиска*/
	
	var blueIcon = new GIcon(G_DEFAULT_ICON);
		blueIcon.image = "http://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png";
		markerOptions = { icon:blueIcon };
				
	/*for(i in markers) {   
		map.addOverlay(createMarker(markers[i]['x'],markers[i]['y'],markers[i]['comment']));   
	} 	*/
		
	if (comment!==''){
		var marker1 = new GMarker(new GLatLng(center_x,center_y), markerOptions);
			GEvent.addListener(marker1, "mouseover", function() {   
				marker1.openInfoWindowHtml(comment);  
			});  
			map.addOverlay(marker1);	
			marker1.openInfoWindow(comment);
	}
}}
//=====================================================================================
function initialize_add() 
{
if (GBrowserIsCompatible()) {
/* Инициализация карты Google Maps */  	
	var map = new GMap2(document.getElementById("map_canvas"),{ size: new GSize(600,500) } );		
	/*Задаем центр выводимой области карты - Москва*/  		
	map.setCenter(new GLatLng(55.743347,37.657012), 15);  
	var customUI = map.getDefaultUI();
	map.setUI(customUI);/*управляющие компоненты*/
	map.disableScrollWheelZoom();  /*отключаем прокрутку колесом мыши*/
	map.enableGoogleBar(); /*панель поиска*/
		
	var blueIcon = new GIcon(G_DEFAULT_ICON);
	blueIcon.image = "http://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png";
	markerOptions = { icon:blueIcon, draggable:true};
				
	//-----------------------------------------------------------
	/*добавление маркера на карту*/
		
	GEvent.addListener(map, "click", function(overlay, latlng) {
		map.clearOverlays();
		var marker = new GMarker(latlng, markerOptions);
		GEvent.addListener(marker, "dragend", function() {
			document.getElementById("lat").value=(marker.getPoint().lat());
			document.getElementById("lng").value=(marker.getPoint().lng());
		});
		map.addOverlay(marker);
		document.getElementById("lat").value=(marker.getPoint().lat());
		document.getElementById("lng").value=(marker.getPoint().lng());	
	});
}}
//======================================================================================
function initialize_edit() 
{
	if (GBrowserIsCompatible()) {
		/* Инициализация карты Google Maps */  	
		var map = new GMap2(document.getElementById("map_canvas"),{ size: new GSize(600,500) } );		
		/*Задаем центр выводимой области карты - Москва*/  		
		map.setCenter(new GLatLng(center_x,center_y), 15);  
		var customUI = map.getDefaultUI();
		map.setUI(customUI);/*управляющие компоненты*/
		map.disableScrollWheelZoom();  /*отключаем прокрутку колесом мыши*/
		map.enableGoogleBar(); /*панель поиска*/
	
		var blueIcon = new GIcon(G_DEFAULT_ICON);
			blueIcon.image = "http://gmaps-samples.googlecode.com/svn/trunk/markers/blue/blank.png";
			markerOptions = { icon:blueIcon, draggable:true};
	
		var marker = new GMarker(new GLatLng(center_x,center_y), markerOptions);
			GEvent.addListener(marker, "dragend", function() {
				document.getElementById("lat").value=(marker.getPoint().lat());
				document.getElementById("lng").value=(marker.getPoint().lng());	
			});
			map.addOverlay(marker);
		
		GEvent.addListener(map, "click", function(overlay, latlng) {
			map.clearOverlays();
			var marker = new GMarker(latlng, markerOptions);
			GEvent.addListener(marker, "dragend", function() {
			document.getElementById("lat").value=(marker.getPoint().lat());
			document.getElementById("lng").value=(marker.getPoint().lng());
			});
			map.addOverlay(marker);
			document.getElementById("lat").value=(marker.getPoint().lat());
			document.getElementById("lng").value=(marker.getPoint().lng());
		});	
	}
}

// Функция создания маркера с указанными параметрами   
function createMarker(x, y, comment) {    
    var point = new GLatLng(x, y);   
        
    var marker = new GMarker(point, markerOptions);   
    GEvent.addListener(marker, "mouseover", function() {   
		marker.openInfoWindowHtml(comment);  
    });   
       
    return marker;   
}  