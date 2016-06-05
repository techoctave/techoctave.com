---
layout: post
author: TVD
title: "Style SVG Elements With SVG Attributes"
date: 2013-07-01 11:58:38
permalink: /c7/posts/117-style-svg-elements-with-svg-attributes
---

<img src="https://techoctave.com/c7/static/designer-langauges-steampunk.jpg" alt="Should we style SVG elements with CSS?"/>

Best practice is to style SVG elements using SVG attributes. This approach strengthens the separation between application View and application Components. It also adheres to the [W3C SVG Spec][1], thereby providing the necessary stability required for cross-browser compatibility.

### Our Gauges Look-and-Feel and Dynamic Updates

Some of you will have requirements or features where you may need to change your application's look-and-feel on the fly. Best to leverage our [JavaScript Gauges][3] API and [Raphael.js][4] to handle cross browser, cross platform concerns.

If the entire application look-and-feel changes - Light to Dark for example. Use the set "method" to update a style property and "refresh" the gauge instance. E.g.

{% highlight js %}
var knots = new Gauge("knots");
. . .    
knots.set("baseColor", "#000000");
. . .
knots.refresh();
{% endhighlight %}

That will allow you to theme the application and still maintain browser and device flexibility because we strictly use SVG attributes to style SVG elements.

### Modern Web Application Development
Modern web application development necessitates separation of concerns. Here, best practice is to use HTML5 to reinforce the meaning and structure of your application. CSS3 is very useful in defining our look-and-feel or presentation for human users. Together, this use of HTML and CSS forms the basis of semantic web application development.

### Best Practice
Styling SVG elements basically works the same way as in regular HTML elements. SVG, in fact, shares some common properties with HTML as well. However, there are other properties that are intended specifically for SVG elements which have their own specification apart from CSS.

For example, in a regular HTML element, we can add a background color either with the "background-color" or the "background" CSS property. However, with an SVG element, it is a little bit different.

With an SVG element, the background color is specified with the "fill" property instead. Also, an SVG element's border is specified with "stroke" property, not with the "border" property like we do in regular CSS. You can see the complete list of [SVG element attributes][2] on the W3C spec.

What this means for us as Developers is we need to apply CSS properties to style HTML elements and SVG attributes to style SVG elements. This is the cornerstone of the semantic web.

Following this best practice provides the necessary stability we need to succeed at cross-browser compatibility. Indeed, this strict adherence to semantic development is what allows us to build applications that run on Windows/Mac OSX Browsers, then turn around and run that very same application on an iPhone, iPad and Android.




  [1]: http://www.w3.org/TR/SVG/
  [2]: http://www.w3.org/TR/SVG/propidx.html
  [3]: http://techoctave.com/gauges/
  [4]: http://raphaeljs.com/
