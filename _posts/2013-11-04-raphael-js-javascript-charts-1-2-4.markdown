---
layout: post
author: TVD
title: "Raphael.js JavaScript Charts 1.2.4"
date: 2013-11-04 12:42:56
permalink: /c7/posts/129-raphael-js-javascript-charts-1-2-4
---

<img src="https://techoctave.com/static/techoctave-charts-gauges-api-docs.png" alt="TechOctave JavaScript Charts and Gauges API Documentation."/>

Hi Everyone - The latest version of our [JavaScript Charts][1] Suite and [JavaScript Gauges][2] Suite is here! :) 

We're very excited to bring you what we feel is a beautiful API documentation set based on the wonderful Raphael.js open source documentation framework. 

We love the look and feel. Every time we use the new documentation it's like spending time with an old friend. We hope you come to feel the same way too.


Also, this release fixes a major bug limiting the number of Columns and Bars on the ColumnChart and BarChart - along with misaligned label positions. See, example of bug report showing shifting labels and bars:

<img src="https://techoctave.com/static/charts-shifting-bug-screenshot.png" alt="Charts shifting bug screenshot."/>

###Release Notes: 1.2.4
####TechOctave Charts Suite

========================================

[Enhancements]

{% highlight ruby %}
- New API Documentation in /docs folder
- Implemented Series Charts capability in both ColumnChart and BarChart charts
- Added barSpacingFactor property to ColumnChart and BarChart charts
{% endhighlight %}


[Defects]

{% highlight ruby %}
- Fixed issue where group label was shifted and not aligned for large amounts of columns/bars.
- Fixed issue where columns/bars would shift off axis for large amounts of columns/bars.
{% endhighlight %}


[API Improvement]

{% highlight ruby %}
- Deprecated hasLines from BubbleChart properties.
- Deprecated lineColor from BubbleChart properties.
- Deprecated lineStrokeWidth from BubbleChart properties.
{% endhighlight %}


Happy Coding Everyone! Chief Geek Out!

  [1]: http://techoctave.com/charts/
  [2]: http://techoctave.com/gauges/
