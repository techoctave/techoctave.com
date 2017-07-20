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
  	/*$(".checkout").click(function() {
  		//Grab the affiliate source
  		var parameters = $.deparam.querystring();

  		//Update checkout link with affiliate source
  		$(".checkout").querystring(parameters);
  	});*/

	//Checkout
	/*var stripe = StripeCheckout.configure({
		key: "pk_live_BOYYmal1pN2cEZrzYwRum5cL",
		image: "https://s3.amazonaws.com/stripe-uploads/acct_16JEWjKbOzLc5qpXmerchant-icon-1465516562655-lion.png",
		locale: "auto",
		billingAddress: false,
		zipCode: false,
		allowRememberMe: true,
		token: function(token) {
			// You can access the token ID with `token.id`.
			// Get the token ID to your server-side code for use.
			token.plan = $(".buy").data("plan");
			token.description = $(".buy").data("description");

			$.ajax({
				type: "POST",
				url: "https://checkout.techoctave.com/charge",
				cache: false,
				data: JSON.stringify({
					token: token
				}),
				dataType: "json",
				contentType: 'application/json',

				success: function(response) {
					//console.log("success", response);
					if(response.status === 200) {
						window.location = "/confirmation";
					}
				},

				error: function(error) {
					//console.log("error", error);
				},

				complete: function(response) {
					//console.log("complete", response);
				}
			});
		},
		closed: function() {
			// The callback to invoke when Checkout is closed (not supported in IE6 and IE7).
			// Called after the token callback (for successful tokenizations).
			//console.log("closed");
		}
	});

	$(".buy").on("-click-", function(e) {
		// Open Checkout with further options:
		var amount = $(this).data("amount");
		var money = accounting.formatMoney(amount, { precision: 0 });
		var description = $(this).data("description") + " " + money + "/year";
		var cents = amount * 100;

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
	});*/

  $(".buy").on("click", function(e) {
    e.preventDefault();

    window.location = $(".buy a[href]").attr("href");
	});
});
