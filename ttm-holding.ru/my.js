jQuery(document).ready(function(){ 
 
    // CSS //
    
    $("#news ul li span.title:last")
        .css({background:"none"})  
    $("#about_news ul li span.title:last")
        .css({background:"none"})  
    $("#about_jobs ul li:last")
        .css({background:"none"})    
        
    // Plate //
    
    $("#header_plate_category_select li" ).click(function() {
        $("#header_plate_category_select li").removeClass("active");   
        $(this).addClass("active");      
    });
    
    $(".header_plate_category_select_sub li" ).hover(function() { 
        $(".header_plate_category_select_sub li").removeClass("hover");   
        $(this).addClass("hover");             
//        $(".illustrations img.second").effect("explode", [$(".illustrations img.first").fadeIn()]);
    });

    $("#header_plate_category_select li.second").click(function () {
				$( ".header_plate_category_select_sub" ).animate({
					right: "84px"
				}, 200 );
				$( ".header_plate_category_select_sub" ).animate({
					right: "288px"
				}, 500 );				
    });
    
    $("#header_plate_category_select li.first").click(function () {
				$( ".header_plate_category_select_sub" ).animate({
					right: "84px"
				}, 200 );		    
				$( ".header_plate_category_select_sub" ).animate({
					right: "288px"
				}, 500 );	
    });      
    
    // Accordion //
    
    $( "#about_contacts_wrapper" ).accordion({ autoHeight: false });
    
    // Popup //
    
    jQuery(document).ready(function(){
        var intervalID;    
        jQuery("#about_partners_wrapper ul li div").hover(
          function () {
                var popup = jQuery(this).find("div.popup");
                intervalID=setTimeout(
                        function() {
                        popup.fadeIn();
                        }, 500);                           
          },
          function () {
                jQuery("div.popup").fadeOut();
                clearInterval(intervalID);
          }
        );

    });


});





