---
layout: post
author: TVD
title: "JavaScript Function to Ease a Needle Around a Circle"
date: 2011-05-15 10:25:30
permalink: /c7/posts/51-javascript-function-to-ease-a-needle-around-a-circle
---

<img src="/c7/static/Circle_center_a_b_radius_r.svg" alt="Ease a Needle around a Circle with this JavaScript Function" width="100%"/>

[Raphael][1] makes [rotating a needle around a speedometer or fuel gauge][2] intuitive. But, what if you wanted a smooth easing of the needle from the gauge's starting vector to its ending vector.

The first thing that should come to mind is acceleration and what you are really searching for is Circular Easing. 

You may need to modify the code to fit your specific needs, but here is the JavaScript code to implement Circular Easing:

{% highlight js %}
// Circular Easing: sqrt(1-t^2)
// t: current time, b: beginning value
// c: change in position, d: duration
easeInCirc = function (t, b, c, d) {
	return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
}
{% endhighlight %}

Here, the output is in radians. So, for my [jquery dashboard speedometer gauge][3], that means I need a way to map each radian to a degree on my gauge, which will in turn map to a miles-per-hour (mph) on the texture itself.

Here is my mapping the needle texture to each easing point:

{% highlight js %}
Speedometer.prototype.mph2deg = function() {
	return ((this.mph - 50) * 2.62) + 
   (((this.mph - 50) * 1.8999) * 0.022900763);
}
{% endhighlight %}

The result is a degree value that directly corresponds to the needle's position on my [speedometer gauge][4]. This creates the degree that I need to pass to Raphael's rotation methods.

The exact Euclidean translation is a bit involved here and very much specific to the gauge texture you're working with. Yet the results are a familiar part of our everyday lives - informational intelligence.

Each needle instance I create inherits the rotate function from the Raphael prototype. So the actual image processing is handled by the Raphael core like so:

{% highlight js %}
Gauge.prototype.RotateNeedle = function(deg) {
	this.needle.rotate(deg, this.cX, this.cY);
}
{% endhighlight %}

TechOctave's [JavaScript Gauge Suite][5] really is a unique partnership between business and open source.

If Gauges interest you or you are a Business Intelligence junkie, feel free to check the project out - it's open source! A portion of each sale goes toward maintaining the project and extending it for the benefit of the development community. Happy Coding and Take Care!


  [1]: http://raphaeljs.com/
  [2]: http://techoctave.com/gauges
  [3]: http://techoctave.com/c7/posts/17-jquery-dashboard-gauges-using-raphael-xhtml-and-css
  [4]: http://techoctave.com/c7/posts/17-jquery-dashboard-gauges-using-raphael-xhtml-and-css
  [5]: http://techoctave.com/gauges
