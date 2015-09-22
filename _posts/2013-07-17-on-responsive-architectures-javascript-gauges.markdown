---
layout: post
author: TVD
title: "On Responsive Architectures & JavaScript Gauges"
date: 2013-07-17 12:00:18
permalink: /c7/posts/119-on-responsive-architectures-javascript-gauges
---

<img src="http://techoctave.com/c7/static/samurai.1.gif" alt="Responsive Architecture"/>

Use Responsive Web Design breakpoints and each Gauge's refresh method to build the right [JavaScript Gauge][1] for the right resolution.

###We're Deprecating The AutoResize Feature

Autoresize was written with the best of intentions. It was early 2010. Barely anyone had heard of the term [Responsive Web Design][2] (RWD) and we were trying to help an early customer with a "very dynamic website" - as it was described. So we wrote autoresize with the goal to calculate our Gauge's DOM container and resize accordingly.

It worked for the customer's specific use case. But we now believe it was a bad approach overall because only the actual developer can 100% know what Gauge size will work for him.

Our Gauge (any component really) can only approximate the best dimensions since the DOM container's offsetWidth and offsetHeight doesn't always return the expected results and that's if those properties even exist for the specific browser - That's the best case. 

Worst case is we, inadvertently, deny our developers the needed control of the end user experience. Either result is no longer acceptable for us.

###The Recommendation

Fast forward 3 years later and we've made [leaps][3] and [bounds][4] towards our understanding of RWD. Using the discipline of Responsive Architecture and techniques like Flexible Grids, Flexible Images and CSS3 Media Queries, we can write an application once and it will run in every environment we target. 

With RWD, we the Developer, decide which breakpoints - a [breakpoint][5] is a value at which a layout adapts - we will design for. Once we decide that, then we design how we want our web application to look for each breakpoint.

Using these techniques, the same app you write for a desktop can run great on a mobile device. The UI will simply look crystal clear at any breakpoint because our JavaScript Gauges are based on vector graphics and are scalable. 

Once the UI hits a breakpoint, simply update our Gauge with the width and height that looks best for that breakpoint:

{% highlight js %}
    var knots = new Gauge("knots");
    . . .
    knots.set("width", width);
    knots.set("height", height);
    . . .    
    knots.refresh();
{% endhighlight %}

Using a Responsive Architecture will set your application up for success - You don't need autoresize to make that happen. We'll keep autoresize in for backwards compatibility, for a few releases at least, but we'll no longer promote it as a feature. 

Instead we'll promote refresh and RWD for best results - Which was the real intent of autoresize, however lofty the goal was. Our Gauge API has outgrown autoresize. Frankly, the web has outgrown autoresize.

Use Responsive Web Design breakpoints and each Gauge's refresh method to build the right Gauge for the right resolution and Code for the moments that take your breathe away.


  [1]: http://techoctave.com/gauges/
  [2]: http://en.wikipedia.org/wiki/Responsive_web_design
  [3]: http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/
  [4]: http://blog.teamtreehouse.com/beginners-guide-to-responsive-web-design
  [5]: http://www.netmagazine.com/tutorials/build-responsive-site-week-media-queries-part-4
