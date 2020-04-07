jQuery(document).ready(function($){
	//create the slider
	$('.review-slide').flexslider({
		selector: ".review-content > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.review-content').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});
});