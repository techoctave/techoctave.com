---
layout: post
author: TVD
title: "Digital JavaScript Gauges"
date: 2014-05-31 07:35:42
permalink: /c7/posts/134-digital-javascript-gauges
---

<img src="https://techoctave.com/c7/static/digital-gauges.png" title="digital JavaScript gauges"/>

G'day Mate,

The latest version of our Charts Suite is here! :) 

We've introduced a new example demonstrating how to create a digital gauge

We also implemented a smarter way to format values using a flexible mask:

{% highlight js %}
var sales = new Gauge("sales", {
	mask: "$#,##0.#0"
});
{% endhighlight %}

Thanks for your support everyone!

Are you working on any projects in the flight simulation field? Know a friend in the same? We'd love if you'd introduce them to our [JavaScript Flight Gauges][1] suite.


####Release Notes: 2.3.0
####GaugeJS

========================================
[Enhancements]

{% highlight js %}
- New digital example
- List item
- New number formatting mask
{% endhighlight %}

[Defects]

{% highlight js %}
- formatValue negative bug
{% endhighlight %}

  [1]: http://techoctave.com/simulation
