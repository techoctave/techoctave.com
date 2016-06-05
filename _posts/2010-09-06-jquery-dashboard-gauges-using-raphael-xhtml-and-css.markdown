---
layout: post
author: TVD
title: "jQuery Dashboard Gauges using Raphael, XHTML and CSS"
date: 2010-09-06 06:04:06
permalink: /c7/posts/17-jquery-dashboard-gauges-using-raphael-xhtml-and-css
---

<a href="http://techoctave.com/gauges"><img src="http://techoctave.com/images/gauges.png" alt="Beautiful dashboard gauges for the sophisticated developer."/></a>

Recently, we released our [Dashboard Gauge Suite][1]. They're perfect for engineering a business intelligence dashboard that gives Senior Management an intuitve pulse on the enterprise. 

Our Gauge Suite includes a [highly configurable API][2]. Choose from over 40+ customizable properties to design the exact gauge you need. Build your own executive level dashboard. Beautifully illustrate your data. Start your engines!

They've been my passion and baby for almost three years now. It's an honor to share them with you. I hope you enjoy.

###Long Live JavaScript
The [framework wars][3] have long passed and we all know who won. Much good came out of those days. Developers learned the many intricacies of cross-browser development. But most importantly, we came to appreciate those frameworks which normalized that environment for us.

[jQuery][4] is one of those frameworks and I love it. But there are many other great frameworks out there too. I want our customers to use our dashboard gauges with whichever frameworks they choose.

That's why we based our [Dashboard Gauge Suite][5] on Six Core Principles. We felt they should be:

{% highlight bash %}
1. Beautifully Illustrated

2. Cross-Browser Compatible

3. Lightweight footprint

4. Vector Based for Crisp Zoom and Print

5. Highly Configurable

6. Framework Agnostic
{% endhighlight %}

In today's JavaScript environment, I believe framework agnosticism is central to developer happiness. Sometimes you simply don't have the time to fiddle with yet-another-javascript-framework. Sometimes you just need the software to work. Our gauges just work!

###JavaScript and Raphael.js

Our dashboard gauges were forged on principled engineering and JavaScript best practices. For one, we strive for 100% cross-browser compatibility. Our dashboard gauges are based on high-quality vector graphics, SVG and VML (IE7+).

To bring the dashboard gauges to life, we used the excellent [Raphael.js][6] and took advantage of its SVG and VML vector graphics processing capabilities. The functionality and dynamics will remind many of you of HTML5's Canvas element. But it's not HTML5 Canvas. Our dashboard gauges are way more powerful and flexible.

Think of HTML5 Canvas as Adobe Photoshop and SVG as Adobe Illustrator. Both are excellent pieces of software. Both can produce great logos. But Illustrator produces scalable, crisp logos whereas Photoshop does not. Our dashboard gauges are the Adobe Illustrator of the Business Intelligence (BI) world. We understand your needs because we're developers too. Think about that!

From the very beginning, we aimed for highly configurable gauges with a very intuitive API. Setting your first gauge is as simple as this:

####JavaScript Code
Load Raphael.js and our Gauge.js package. Wait for the DOM to load and then create an instance of our Gauge class:

{% highlight js %}
<script src="javascripts/raphael.js"></script>

<script src="javascripts/gauge.js"></script>

<script>
window.onload = function() {
  var sales = new Gauge("sales", {
      label: "Sales",
      minValue: 30,
      maxValue: 90,
      majorTicks: 5,
      minorTicks: 4
  });

  sales.setValue(60);
};
</script>
{% endhighlight %}

Note, label, minValue, maxValue, majorTicks and minorTicks are only five of 40+ configurable gauge properties.

####HTML5 Code
Minimum requirement for a gauge instance is a unique DOM identifier to attach the gauge instance:

{% highlight html %}
<div id="sales"></div>
{% endhighlight %}

Here, we use a div tag, but could have easily used a li tag or any other DOM element.

The above setup creates a dashboard gauge and you can update its value anytime during runtime. But again, these are just a few settings - there are over 40+ configurable properties for you to tweak.

Many of you will need to poll a remote server to update your gauges. For an advanced discussion on client-side polling techniques, see [Long Polling with JavaScript and jQuery][7].

Setting the value causes the needle to move to the value entered. Set different minValue and maxValue and give it a whirl. Focus on implementing your business logic. We've got you covered in the browser department.

###Dashboards and Business Intelligence

Think data visualization. Our dashboard gauges are a great way for Senior Management to get a pulse on the company. Get your very own copy of our Dashboard Gauges today - you'll be happy you did!

Visually, gauges are a natural progression for data visualization. But why? We have a theory. We believe gauges are so useful because they are so familiar. Think about it, we use gauges every single day to convey mission critical information.

For breakfast, we use gauges to cook our meal and to tell us when it's complete. When we start our cars, we use gauges to tell us whether we have enough fuel for the journey or if we can even make the journey. On the road, we use gauges to monitor our speed which saves lives (maybe even our own). Mission critical.

At TechOctave, we believe gauges shouldn't stop at the parking lot. We believe our gauges should be at desks and boardrooms. We want to help you empower your executives to lead with mission critical data in a form that is both familiar and intuitive.

We believe we've found that magic point with our [Dashboard Gauge Suite][8]. We believe we can help you visualize your data in a beautiful and intuitive way. Our gauges are clean, well architected and focused on developer happiness.

Analyze tons of data in a visually appealing manner. Build a Business Intelligence dashboard you'll be proud of and will love working on. Give your Senior Management an intuitive pulse on the company's metrics.

###Pragmatic Point-of-View

Data visualization is about having fun, but it's about getting real work done too. Our Dashboard Gauge Suite works in every major browser that supports vector graphics - Chrome, Firefox, Internet Explorer (IE7+), Safari (iPad and iPhone). Our Dashboard Gauge Suite also runs on top of the [jQuery Mobile][9] framework and other client-side mobile frameworks.

In addition, you can also run our gauge suite using your favorite server-side technology if you like. Using .NET or J2EE? It just works! Using Node.js, Ruby, Python or Perl? It just works - it's that simple!

Focus on your core business needs. We've got you covered in the data visualization department.

###Download

Download all of our [JavaScript Dashboard Gauges][10] today!


  [1]: http://techoctave.com/gauges
  [2]: http://techoctave.com/gauges
  [3]: https://techoctave.com/posts/49-rails-3-1-and-the-jquery-effect
  [4]: http://jquery.com
  [5]: http://techoctave.com/gauges
  [6]: http://raphaeljs.com/
  [7]: https://techoctave.com/posts/60-simple-long-polling-example-with-javascript-and-jquery
  [8]: http://techoctave.com/gauges
  [9]: http://jquerymobile.com/
  [10]: http://techoctave.com/gauges
  [11]: http://techoctave.com/charts
