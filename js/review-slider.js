jQuery(document).ready(function ($) {
	//create the slider
	$('.review-slide').flexslider({
		initDelay: 500,
		selector: ".review-content > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		init: function () {
			$('.review-content').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});
});



