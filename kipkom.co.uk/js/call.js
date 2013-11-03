Cufon.replace("#footer .quote h5, .box .title, .entry-title, .topmenu .hover a", {
    hover: true
});

$(document).ready(function(){	
	$("#id1").easySlider({ auto: false, continuous: false, nextId: "s1next", prevId: "s1prev" });
	$("#id2").easySlider({ auto: false, continuous: false, nextId: "s2next", prevId: "s2prev" });
	$("#id3").easySlider({ auto: false, continuous: false, nextId: "s3next", prevId: "s3prev" });
	$("#id4").easySlider({ auto: false, continuous: false, nextId: "s4next", prevId: "s4prev" });
	$("#id5").easySlider({ auto: false, continuous: false, nextId: "s5next", prevId: "s5prev" });
	$("#id6").easySlider({ auto: false, continuous: false, nextId: "s6next", prevId: "s6prev" });
	$("#id7").easySlider({ auto: false, continuous: false, nextId: "s7next", prevId: "s7prev" });
	$("#id8").easySlider({ auto: false, continuous: false, nextId: "s8next", prevId: "s8prev" });
	$("#id9").easySlider({ auto: false, continuous: false, nextId: "s9next", prevId: "s9prev" });
	$("#id10").easySlider({ auto: false, continuous: false, nextId: "s10next", prevId: "s10prev" });
	$("#id11").easySlider({ auto: false, continuous: false, nextId: "s11next", prevId: "s11prev" });
	$("#id12").easySlider({ auto: false, continuous: false, nextId: "s12next", prevId: "s12prev" });
	$("#id13").easySlider({ auto: false, continuous: false, nextId: "s13next", prevId: "s13prev" });
	$("#id14").easySlider({ auto: false, continuous: false, nextId: "s14next", prevId: "s14prev" });
	$("#id15").easySlider({ auto: false, continuous: false, nextId: "s15next", prevId: "s15prev" });
	$("#id16").easySlider({ auto: false, continuous: false, nextId: "s16next", prevId: "s16prev" });
});

/* */

$("#r1").click(function() { $(".box").hide(); $("#id1").parent(".box").show(); });

$("#r2, .back-to-marketing").click(function() { $(".box").hide(); $("#id2").parent(".box").show(); });
$("#r21").click(function() { $(".box").hide(); $("#id3").parent(".box").show(); });
$("#r22").click(function() { $(".box").hide(); $("#id4").parent(".box").show(); });
$("#r23").click(function() { $(".box").hide(); $("#id5").parent(".box").show(); });
$("#r24").click(function() { $(".box").hide(); $("#id6").parent(".box").show(); });
$("#r25").click(function() { $(".box").hide(); $("#id7").parent(".box").show(); });

$("#r3, .back-to-design").click(function() { $(".box").hide(); $("#id8").parent(".box").show(); });
$("#r31").click(function() { $(".box").hide(); $("#id9").parent(".box").show(); });
$("#r32").click(function() { $(".box").hide(); $("#id10").parent(".box").show(); });

$("#r4, .back-to-webservices").click(function() { $(".box").hide(); $("#id11").parent(".box").show(); });
$("#r41").click(function() { $(".box").hide(); $("#id12").parent(".box").show(); });
$("#r42").click(function() { $(".box").hide(); $("#id13").parent(".box").show(); });
$("#r43").click(function() { $(".box").hide(); $("#id14").parent(".box").show(); });
$("#r44").click(function() { $(".box").hide(); $("#id15").parent(".box").show(); });
$("#r45").click(function() { $(".box").hide(); $("#id16").parent(".box").show(); });

/* */

$(document).ready(function () {
  $("#id2, #id3, #id4, #id5, #id6, #id7, #id8, #id9, #id10, #id11, #id12, #id13, #id14, #id15, #id16").parent(".box").hide();
});


$('.columns').columnize({ columns: 2 });


$(".topmenu li").hover(function() {
  $(this).toggleClass('current');
  $(this).siblings('li').toggleClass('opacity');
});

