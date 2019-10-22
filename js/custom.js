(function ($) {
	
	$(".image-neurona").click(function() {
		$(".content-neurona").toggleClass("open");
		$(".image-neurona").toggleClass("move");
	});
	
	$(".close-button").click(function() {
		$(".content-neurona").toggleClass("open");
		$(".image-neurona").toggleClass("move");
	});
	
})(jQuery);