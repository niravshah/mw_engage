jQuery(document).ready(function($) {
"use strict";
// ---------------------------------------------------------
// Navigation Menu
// ---------------------------------------------------------
	jQuery('.sf-menu').mobileMenu();
	jQuery('ul.sf-menu').superfish({
		delay: 1000, // the delay in milliseconds that the mouse can remain outside a sub-menu without it closing
		animation: {
			opacity: 'show',
			height: 'show'
		}, // used to animate the sub-menu open
		speed: 'normal', // animation speed 
		autoArrows: false, // generation of arrow mark-up (for submenu)
		disableHI: true // to disable hoverIntent detection
	});
// ---------------------------------------------------------
// Zoom fix IPad/IPhone
// ---------------------------------------------------------
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
		ua = navigator.userAgent,

		gestureStart = function() {
			viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
		},

		scaleFix = function() {
			if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
				viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
				document.addEventListener("gesturestart", gestureStart, false);
			}
		};
	scaleFix();
// ---------------------------------------------------------
// Prettyphoto
// ---------------------------------------------------------
	var viewportWidth = $('body').innerWidth();
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		overlay_gallery: true,
		theme: 'pp_default',
		social_tools: false,
	 	changepicturecallback: function(){
			// 767px is presumed here to be the widest mobile device. Adjust at will.
			if (viewportWidth < 767) {
			   $(".pp_pic_holder.pp_default").css("top",window.pageYOffset+"px");
			}
		}
	});
	$('#flickr').jflickrfeed({
		limit: 6,
		qstrings: {
			id: '132108856@N03'
		},
		itemTemplate: '<li class="flickr_li"><a class="thumbnail" rel="prettyPhoto[flickr]" href="{{image_b}}" title="{{title}}"><img class="flickr_img" src="{{image_s}}" alt="{{title}}" /></a></li>'
	}, function(data) {
		$('#flickr a').prettyPhoto({
			animation_speed: 'normal',
			slideshow: 5000,
			autoplay_slideshow: false,
			overlay_gallery: false
		});
		$(".flickr_li:nth-child(3n)").addClass("nomargin");
	});
// ---------------------------------------------------------
// Tooltip
// ---------------------------------------------------------
	$("[rel='tooltip']").tooltip();
// ---------------------------------------------------------
// Back to Top
// ---------------------------------------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
	$('#back-top a').click(function () {
		$('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800);
		return false;
	});
// ---------------------------------------------------------
// Add accordion active class
// ---------------------------------------------------------
	$('.accordion').on('show', function (e) {
        $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    });
    $('.accordion').on('hide', function (e) {
        $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
    });
// ---------------------------------------------------------
// Isotope Init
// ---------------------------------------------------------
	$("#portfolio-grid").css({"visibility" : "visible"});
// ---------------------------------------------------------
// Menu Android
// ---------------------------------------------------------
	if(window.orientation!=undefined){
		var regM = /ipod|ipad|iphone/gi,
			result = navigator.userAgent.match(regM)
		if(!result) {
			$('.sf-menu li').each(function(){
				if($(">ul", this)[0]){
					$(">a", this).toggle(
						function(){
							return false;
						},
						function(){
							window.location.href = $(this).attr("href");
						}
					);
				} 
			})
		}
	}
});