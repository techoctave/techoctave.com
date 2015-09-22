jQuery(document).ready(function($) {
  	//Toggle Products
  	$(".active .i").toggle(function() {
  		$(this).html("&ndash;");
  		$(this).parent().parent().next(".details").fadeIn("slow");
  	}, function() {
  		$(this).html("+");
  		$(this).parent().parent().next(".details").hide();
  	});

  	//ScrollTo
  	$(".top").click(function() {
  		$("html, body").animate({scrollTop: $(".products").offset().top}, 2000);
  	});

  	//Affiliates
  	$(".checkout").click(function() {
  		//Grab the affiliate source
  		var parameters = $.deparam.querystring();

  		//Update checkout link with affiliate source
  		$(".checkout").querystring(parameters);
  	});
});