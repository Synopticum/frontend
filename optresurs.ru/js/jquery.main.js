$(function(){
	
	_slideEl = $('.bg-slides img');
	_slideEl.not(':first-child').hide();
	var _current = 0;
	$('div.promo').slideShow({
		slideEl:'div.slide',		
		numElement:'ul.bullets a',
		autoSlideShow:true,		
		switchTime:8000,
		onClickCallback:function(_next){
			_slideEl.removeClass('active');
			_slideEl.eq(_current).addClass('hide');
			_slideEl.eq(_next).fadeIn(800, function(){
				_slideEl.filter('.hide').hide().removeClass('hide');
			}).addClass('active');
			_current = _next;
		}
	});
});

jQuery.fn.slideShow=function(a){a=jQuery.extend({slideEl:"div.slide",linkNext:"a.next",linkPrev:"a.prev",linkPause:"a.pause",numElement:"div.slideNav li a",duration:800,autoSlideShow:!1,switchTime:3E3,noCicle:!1,disableClass:"no-active",event:"click",currentEl:"span.cur",allEl:"span.all",hideBeforeShow:!1,hoverStopGallery:!0,onClickCallback:function(){window.console&&console.log("click")}},a);return this.each(function(){function q(){e!=c&&(a.onClickCallback(c),b.removeClass("active"),b.eq(e).addClass("hide"),
a.hideBeforeShow?b.filter(".hide").fadeOut(r,function(){b.eq(c).fadeIn(r)}).removeClass("hide"):b.eq(c).fadeIn(r,function(){b.filter(".hide").hide().removeClass("hide")}).addClass("active"),e=c,a.currentEl&&m.length&&m.html(e+1))}function n(){h.parent().removeClass("active");h.eq(e).parent().addClass("active")}function k(){i.removeClass("prev-"+a.disableClass);!b.is(":animated")&&!g.hasClass("next-"+a.disableClass)&&(d&&clearTimeout(d),c=e+1,c==b.length&&(c=0),a.noCicle&&c+1>=b.length&&g.addClass("next-"+
a.disableClass),q(),n(),o())}function o(){l||(j.length&&a.linkPause?j.hasClass("play")&&(d=setTimeout(function(){k()},p)):d=setTimeout(function(){k()},p))}function s(){b.mouseenter(function(){d&&clearTimeout(d)}).mouseleave(function(){o()})}var f=jQuery(this),b=jQuery(a.slideEl,f),g=jQuery(a.linkNext,f),i=jQuery(a.linkPrev,f),j=jQuery(a.linkPause,f),h=jQuery(a.numElement,f),m=jQuery(a.currentEl,f),f=jQuery(a.allEl,f),r=a.duration,p=a.switchTime,d=!1,e=0,c=0,l=!0;b.filter(".active").length?e=b.index(b.filter(".active")):
(b.eq(0).addClass("active"),e=0);b.not(".active").hide();jQuery(h).length&&a.numElement&&n();a.autoSlideShow&&(l=!1,d=setTimeout(function(){k()},p),j.length&&a.linkPause&&j.addClass("play"),a.hoverStopGallery&&s());a.currentEl&&m.length&&(f.html(b.length),m.html(e+1));g.length&&a.linkNext&&g.click(function(){k();return!1});a.noCicle&&i.addClass("prev-"+a.disableClass);i.length&&a.linkPrev&&i.click(function(){g.removeClass("next-"+a.disableClass);!b.is(":animated")&&!jQuery(this).hasClass("prev-"+
a.disableClass)&&(d&&clearTimeout(d),c=e-1,0>c&&(c=b.length-1),a.noCicle&&0>c-1&&jQuery(this).addClass("prev-"+a.disableClass),q(),n(),o());return!1});h.length&&a.numElement&&h.bind(a.event,function(){b.is(":animated")||(c=h.index(jQuery(this)),g.removeClass("next-"+a.disableClass),i.removeClass("prev-"+a.disableClass),a.noCicle&&c+1>=b.length&&g.addClass("next-"+a.disableClass),a.noCicle&&0>c-1&&i.addClass("prev-"+a.disableClass),d&&clearTimeout(d),b.eq(c).hasClass("active")||(q(),n(),o()));return!1});
j.length&&a.linkPause&&j.click(function(){l?(jQuery(this).addClass("play"),d=setTimeout(function(){k()},p),l=!1):(jQuery(this).removeClass("play"),clearTimeout(d),l=!0);return!1})})};

