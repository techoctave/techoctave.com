---
layout: post
author: TVD
title: "TechOctave Gauges 2.2.8: Unlimited Ranges, Precision Values"
date: 2013-04-15 03:48:12
permalink: /c7/posts/108-techoctave-gauges-2-2-8-unlimited-ranges-precision-values
---

<img src="https://techoctave.com/c7/static/multiple-ranges-javascript-gauges-raphael-svg.png"/>

The latest version of our [JavaScript Gauges][1] Suite is here! :)

The biggest enhancements are Multiple Bands (Ranges) and Custom Value Precision. Now you can have Unlimited Bands and Unlimited Poowerrr (muahahaha) - Wait...

### Release Notes: 2.2.8 Gauge.js

####[Enhancements]

{% highlight ruby %}
- Implemented Multiple Bands E.g. bands: [[start, end, color], [...], [...]]
- Implemented setBands to update band ranges during runtime.
- Implemented Custom Value Precision using majorValuesPercision property. E.g. 0 will create whole number majorValues (3, 4). Whereas 1 will create one decimal point majorValues (2.5, 3.7)
- Added updated.html to show example of Polling, mahorValuesPercision, setBands.
- Implemented animateNeedle property. True => Needle will animate between values, False => Needle will not animate between values.
{% endhighlight %}

####[Defects]

{% highlight ruby %}
- Fixed Needle Flicker
- Fixed Major Values Precision Lacking
{% endhighlight %}

####[API Improvement]

{% highlight ruby %}
- Deprecated drawGreenBand
- Deprecated drawYellowBand
- Deprecated drawRedBand
- Removed minAngle and maxAngle properties
- Improved needle mapping algorithm
- Improved band mapping algorithm
- Added bandDegreeOffset for unique gauges. See, textures_ferarri.html
{% endhighlight %}


  [1]: http://techoctave.com/gauges/
