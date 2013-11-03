var popupStatus = 0;

function loadPopup(type){
	
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		if(type=='ent')
			$("#popupAuth").fadeIn("slow");
		if(type=='reg')
			$("#popupReg").fadeIn("slow");
		if(type=='metro')
			$("#popupMetro").fadeIn("slow");
		if(type=='google')
			$("#googleMap").fadeIn("slow");
		if(type=='addOffer')
			$("#addOffer").fadeIn("slow");
		popupStatus = 1;
	}
}


function disablePopup(){
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$(".popup").fadeOut("slow");
		popupStatus = 0;
	}
}

function centerPopup(){

	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $(".popup").height();
	var popupWidth = $(".popup").width();
	
	$(".popup").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


// events
$(document).ready(function(){
	
	/* enable */
	
	$("#enter").click(function(){
		centerPopup();
		loadPopup('ent');
	});
				
	$("#register").click(function(){
		centerPopup();
		loadPopup('reg');
	});	$("#mark").click(function(){		centerPopup();		loadPopup('bookmark');	});

	$("#metroShow").click(function(){
		centerPopup();
		loadPopup('metro');
	});

	$(".google").click(function(){
		centerPopup();
		loadPopup('google');
		return false;
	});
	
	$("#addOfferBut").click(function(){
		centerPopup();
		loadPopup('addOffer');
		return false;
	});

	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup('ent');
		}
	});

	/* disable */

	$("#popupRegClose").click(function(){
		disablePopup();
	});	$("#popupmarkClose").click(function(){		disablePopup();	});

	$("#popupMetroClose").click(function(){
		disablePopup();
	});

	$("#popupMetroClose2").click(function(){
		disablePopup();
	});

	$("#backgroundPopup").click(function(){
		disablePopup('reg');
	});

	$("#popupAuthClose").click(function(){
		disablePopup('ent');
	});
	
	$("#popupGoogle").click(function(){
		disablePopup('google');
	});

	$("#backgroundPopup").click(function(){
		disablePopup('ent');
	});
	
	$("#addOfferClose").click(function(){
		disablePopup('addOffer');
	});

	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
		disablePopup();
		}
	});
	
	/* */
	
	$("#termins li").mouseover(function(){
		$(this).children(".info").css({display: "block"});
	});

	$("#termins li").mouseout(function(){
		$(this).children(".info").css({display: "none"});
	});
	


	/* news admin insets */

	$(".insets #all").click(function(){
		$("#newInset").css({display:"none"});
		$("#allInset").css({display:"block"});
		
		if($(".insets #all").css("cursor")=="pointer")
			{
				$(this).toggleClass("active");
				$(".insets #new").toggleClass("active");
			}
		
		return false; 
	});
	
	
	$(".insets #new").click(function(){
		$("#newInset").css({display:"block"});
		$("#allInset").css({display:"none"});

		if($(".insets #new").css("cursor")=="pointer")
			{
				$(this).toggleClass("active");
				$(".insets #all").toggleClass("active");
			}

		return false; 
	});


});