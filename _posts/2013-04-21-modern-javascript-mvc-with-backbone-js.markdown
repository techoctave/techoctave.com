---
layout: post
author: TVD
title: "Modern JavaScript MVC With Backbone.js"
date: 2013-04-21 08:40:42
permalink: /c7/posts/110-modern-javascript-mvc-with-backbone-js
---

<img src="http://techoctave.com/c7/static/gangnam-style-feature.jpg" width=520 alt="Modern JavaScript MVC With Backbone.js"/>

Modern JavaScript and HTML5 applications depend on a consistent RESTful JSON API. However, consistency is not always an option when you don't control the server API.

Still, even in those situations, Backbone.js can be a useful tool in taming your JavaScript. Today walk through a simple example of how to connect the dots between Backbone's Model, Collection and View.

###The Backbone Basics

A basic single page application boils down to three distinct parts: Model, Collection and View.

####The Model

The Model defines your class properties and methods. Here we define a class called Knot:

{% highlight js %}
var Knot = Backbone.Model.extend({
	initialize: function() {
		_.extend(this, new Gauge("knots", {
			hasGlass: true,
			glassColor: "#aa0000"
		}));
	}
});
{% endhighlight %}

Whenever a new instance of the Knot class is created, we also inherit an instance of our [JavaScript Gauges][1] using Underscore's extend method.


####The Collection

The Collection defines a list of class instances. Here we define a Collection called Knots:

{% highlight js %}
var Knots = Backbone.Collection.extend({
	    model: Knot,
	
		url: "http://query.yahooapis.com/v1/public/yql?q=select * from google.igoogle.stock where stock='lmt'&format=json&env=store://datatables.org/alltableswithkeys&callback=",
	
		parse: function(response) {
			return response.query.results.xml_api_reply.finance;
		}
});

window.knots = new Knots();  
{% endhighlight %}

First, you define which model the Collection will create a list of. Here, we also specify the collection's data source using the URL property.

Here, the data source is deeply nested. You can use the parse method to intercept the data source and get the data in a more manageable state before creating your model instance.

Finally, we immediately execute the collection to get it ready for use in our single page application (SPA).

####The View

The View updates the User Interface (UI) with the data fetched from the collection:

{% highlight js %}
var KnotsView = Backbone.View.extend({
	el: $("#knots"),

	initialize: function() {
		window.knots.reset();

		window.knots.bind("add", this.render);

		window.knots.fetch();
	},

	render: function() {
		window.knots.each(function(knot) {
			var value = knot.attributes.high.data;
				
			knot.setValue(value);
		});
	}
});

window.knotsView = new KnotsView();
{% endhighlight %}

First, we reset the knots collection. Next, we bind our View's render method to our Collection's add event. What this means is each time a Knot object is added to the Knots collections, we will call the Views render method to update the web application.

Then we make the actual call to the Collection's fetch method to retrieve the data from the data source. Here, we basically make a call to Google's stock webservice to retrieve some data on a company called Lockheed Martin.

Finally, in our View's render method we update each Knot Gauge with the corresponding value passed back from the server call.

####Putting It All Together

Here's the final backbone example end-to-end:

{% highlight js %}
window.onload = function() {
	var Knot = Backbone.Model.extend({
		initialize: function() {
			_.extend(this, new Gauge("knots", {
				hasGlass: true,
				glassColor: "#aa0000"
			}));
		}
	});

	var Knots = Backbone.Collection.extend({
	    model: Knot,
	
		url: "http://query.yahooapis.com/v1/public/yql?q=select * from google.igoogle.stock where stock='lmt'&format=json&env=store://datatables.org/alltableswithkeys&callback=",
	
		parse: function(response) {
			return response.query.results.xml_api_reply.finance;
		}
	});

	window.knots = new Knots();

	var KnotsView = Backbone.View.extend({
		el: $("#knots"),

		initialize: function() {
			window.knots.reset();

			window.knots.bind("add", this.render);

			window.knots.fetch();
		},

		render: function() {
			window.knots.each(function(knot) {
				var value = knot.attributes.high.data;
				
				knot.setValue(value);
			});
		}
	});

	window.knotsView = new KnotsView();
};  
{% endhighlight %}

Backbone is a really good framework for organizing your JavaScript code. It's lightweight and gives you everything you need. It's prescriptive without being heavy-handed. I like it. Enjoy!


  [1]: http://techoctave.com/gauges/
