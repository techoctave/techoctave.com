---
layout: post
author: TVD
title: "JavaScript Bubble Charts"
date: 2012-11-26 03:13:17
permalink: /c7/posts/95-javascript-bubble-charts
---

<img src="http://techoctave.com/charts/images/highly_customizable_charts.png" alt="TechOctave JavaScript Charts Suite: Bar Chart, Bubble Chart, Line Chart and Scatter Chart." width=100% />

Today marks a milestone for our [JavaScript Charts][1].

Release 1.2.0 ushers in many technological advancements to our chart library, but most importantly, this release affirms our commitment to providing best-of-breed solutions for best-in-class development teams:

Teams change. Customers change. Requirements change. That's why we built our JavaScript charts to be highly configurable. Changing times require agile solutions.

Look. For us it's simple. We believe our JavaScript charts do something no one else can...We put your success in your hands - as it should be.

To that end, we build products that inspire you to your better end and offer support that helps you get there. Every enhancement. Every release. Every time.

###Release Notes

####Enhancements

{% highlight ruby %}
- Created BubbleChart component

- Created 100% native svg Tooltips on hover

- Implemented customizable Tooltip Templates

- Implemented automatic color selection from color spectrum 

- Implemented data point descriptions

- Implemented LineChart data point dots
{% endhighlight %}

####API Improvements

{% highlight ruby %}
- Raphael.js: Upgraded to version 2.1.0

- Improved chart axis rendering and mapping algorithm

- Refactored setData method to increase reuse & code quality

- Added opacity properties to data points and chart objects
{% endhighlight %}

###Bubble Charts

Bubble charts are used to visualize a data set with 2 to 4 dimensions. The first two dimensions are visualized as coordinates, the 3rd as color and the 4th as size:

<img src="http://techoctave.com/charts/images/bubblechart.png" alt="Bubble Chart - TechOctave JavaScript Charts." width=100%/>

Here, we have a Bubble Chart displaying a "Correlation between Estimated Sales, Annual Income and Vehicle Price of some luxury brands." Using our Bubble Chart would look something like this:

{% highlight js %}
var vehicles = new BubbleChart("vehicles", {
	data: [...],
	legendTitle: "Luxury Brands",
	XAxisLabel: "Estimated Sales ($ Millions)",
	YAxisLabel: "Annual Income ($ Millions)",
	minValueX: -20,
	maxValueX: 70,
	minValueY: -50,
	maxValueY: 200,
	majorTicksX: 9,
	majorTicksY: 5
});
{% endhighlight %}

We need a DOM element to bind the BubbleChart instance to. That element is created with a simple div tag:

{% highlight html %}
<div id="vehicles"></div>      
{% endhighlight %}

There are seven (7) brands: Acura, Alfa Romeo, AM General, Aston Martin, Audi, BMW and Bugatti.

However, there are nine (9) vehicles: Acura TSX, Acura RDX, Alfa Romeo Giulietta, AM General Humvee, Aston Martin Lagonda, Aston Martin Vanquish, Audi A3, BMW 528i and Bugatti Vitesse.

Each vehicle is plotted based on Estimated Sales relative to the purchaser's Annual Income. That means the first two dimensions are Estimated Sales and Annual Income.

Next, each vehicle is grouped by brand using the third dimension - Color. The Acura vehicles are grouped by the color red; Bugatti by blue; etc. etc.

The fourth and last dimension is represented by the Cost of each vehicle. As the cost of the vehicle increases, so too does the size of its circle. The size of the circle gives the user a quick comparison of how much more or less costly a vehicle is to another vehicle in the sample.

###Looking Ahead

Put together all of these dimensions and you get a succinct way to tell a compelling story about your business. Done well and your executives and leaders can make decisions that were seemingly impossible before.

And that's what Business Intelligence is about - shining light on big data and empowering decision makers.

What distinguishes your leadership team from your competition? What would it mean for you and your team if you could leverage data to be as agile as the market demands?

What would it take for you to try? Do you know what happens if you don't?

Nothing.

If you're looking for a team that will be with you every step of the way...If you're looking for a company that will stand with you, while the rest stand aside, then welcome home friend.

Purchase our [JavaScript Charts][2] and let's make something happen together.


  [1]: http://techoctave.com/charts/
  [2]: http://techoctave.com/charts/
