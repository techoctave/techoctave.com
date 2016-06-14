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
	
	//Checkout
	var stripe = StripeCheckout.configure({
		key: "pk_test_tzEqhD4Grs6H7VkkHxpVTdHD",
		image: "https://s3.amazonaws.com/stripe-uploads/acct_16JEWjKbOzLc5qpXmerchant-icon-1465516562655-lion.png",
		locale: "auto",
		billingAddress: false,
		zipCode: false,
		allowRememberMe: false,
		token: function(token) {
			// You can access the token ID with `token.id`.
			// Get the token ID to your server-side code for use.
			
			
			token.plan = $(".buy").data("plan");
			token.description = $(".buy").data("description");
			console.log("token", token);
			
			$.ajax({
				type: "POST",
				url: "http://localhost:3000/charge",
				cache: false,
				data: JSON.stringify({ 
					token: token
				}),
				dataType: "json",
				contentType: 'application/json',
				
				success: function(response) {
					console.log("success", response);
				},
				
				error: function(error) {
					console.log("error", error);
				},
				
				complete: function(response) {
					console.log("complete", response);
				}
			});
		},
		closed: function() {
			// The callback to invoke when Checkout is closed (not supported in IE6 and IE7). 
			// Called after the token callback (for successful tokenizations).
			console.log("closed");
		}
	});

	$(".buy").on("click", function(e) {
		// Open Checkout with further options:
		var amount = $(this).data("amount");
		var money = accounting.formatMoney(amount, { precision: 0 });
		var description = $(this).data("description") + " " + money + "/year";
		var cents = amount * 100;
		
		console.log(description, amount);
		
		// Tests Credit Card: 4242 4242 4242 4242
		stripe.open({
			panelLabel: "Buy Now",
			name: "TECHOCTAVE",
			description: description,
			amount: cents
		});
		
		e.preventDefault();
	});

	// Close Checkout on page navigation:
	$(window).on("popstate", function() {
		stripe.close();
	});
});