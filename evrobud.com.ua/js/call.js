Cufon.replace('.header-phone, .header-email', { fontFamily: 'PT Sans Regular' });
Cufon.replace('footer .box-title', { fontFamily: 'Franklin Gothic Demi', color: '-linear-gradient(#000, #747474)', textShadow: '1px 1px 0 #fff' });

$(function(){
    $('#slider').anythingSlider();
});

$('.custom1').click ( function() { $('#slider').anythingSlider(1); } );
$('.custom2').click ( function() { $('#slider').anythingSlider(2); } );
$('.custom3').click ( function() { $('#slider').anythingSlider(3); } );
$('.custom4').click ( function() { $('#slider').anythingSlider(4); } );
$('.custom5').click ( function() { $('#slider').anythingSlider(5); } );