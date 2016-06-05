---
layout: post
author: TVD
title: "Beautiful cross browser JavaScript dashboard charts"
date: 2012-01-01 03:44:04
permalink: /c7/posts/66-beautiful-cross-browser-javascript-dashboard-charts
---

<a href="http://techoctave.com/charts"><img src="/c7/static/charts.png" width="100%" alt="Beautiful dashboard charts for the sophisticated developer."/></a>

Recently, we released our [JavaScript Charts][1] Suite. They're perfect for creating a business intelligence dashboard that gives Senior Management an intuitive pulse on the enterprise.

Our JavaScript Charts Suite includes a [highly configurable API][2]. Choose from over 30+ customizable properties to design the exact chart you need. Build your own executive level dashboard. Beautifully illustrate your data.

We believe software should be beautiful and inspired. Data is no different. Beautiful data is easier to understand and faster to comprehend. Your users will thank you:

### Six Core Principles

We built our JavaScript Charts Suite on Six Core Principles:

{% highlight js %}
1. Beautifully Illustrated

2. Cross Browser Compatible

3. Lightweight Footprint

4. Vector Based for Crisp Zoom and Print

5. Highly Configurable

6. Framework Agnostic
{% endhighlight %}

We know you have tight deadlines and constraints. We know you value quality and craftsmanship. We know you'd rather not sacrifice one for the other. That's why we built our JavaScript Charts Suite to deliver just what you need and nothing more.

### Show. Me. The. Codes. Please!?!

We believe in [developing with intelligent defaults][3]. For you, this means you can get each of our JavaScript Charts running quickly and easily:

{% highlight js %}
var sales = new PieChart("sales");
. . .
<div id="sales"></div>
{% endhighlight %}

That's it! This is the minimum requirement to render one of our JavaScript Charts. Time to up the ante.

You'll want to populate each JavaScript Chart with your own data and maybe add legend titles and legend labels:

{% highlight js %}
var purchases = [55, 20, 13];

var sales = new PieChart("sales", {
    data: purchases,
    legendTitle: "Sales",
    legendLabels: ["United State", "Canada", "Brazil"]
});

. . .

<div id="sales"></div>
{% endhighlight %}

There are a ton more properties you could configure. In fact, each JavaScript Chart comes with over 30+ configurable properties.

Our JavaScript Charts are elegantly responsive and update dynamically with ease. So use your [JavaScript Polling][4] method of choice and update your chart instance like so:

{% highlight js %}
(function poll(){
    $.ajax({ url: "server", success: function(data){
        sales.setData(data); //Update pie chart

    }, dataType: "json", complete: poll, timeout: 30000 });
})();
{% endhighlight %}

To poll the server, this example used jQuery. But, we believe in framework agnosticism and believe you should have the freedom to choose whichever JavaScript framework you please. So go ahead! 

Our JavaScript Charts are framework agnostic. jQuery, Prototype, Mootools, ExtJS...Forget about it...We've got you covered. We believe data is most free when it's beautiful and dynamic - that's it! The rest of the decisions are in your hands - where they should be!

There are just too many goodies to mention in a single post. So seriously, pick your team up a copy of our [JavaScript Charts][5]. You're next project deserves our JavaScript Charts. You know what? You deserve our JavaScript Charts!

### We're Developer Too

We're developers too. We've been there. We know requirements shift and enhancements are right around the corner. We want you to be positioned for success.

Our JavaScript Charts work in every browser that supports Standard Vector Graphics (SVG) - it just works! We're pixel perfect.

Using jQuery Mobile, we're your best fit. Working on an iPad app, your customers will be impressed with the quality of each chart. With crisp zoom and a crisp, clean print, your customers will be impressed.

Best part is we're framework agnostic. That means you can use your favorite JavaScript framework: jQuery, Prototype, MooTools, ExtJS, Dojo - we're compatible with them all.

With over 30+ configurable properties, each JavaScript Chart is highly configurable. Create the perfect chart you were thinking about. Tweak and adjust all your heart desires.

Each purchase comes with a year of support. Have a quick question. Talk to the Lead Developer directly. No middle men. No outsourced customer service. We're here for you!

Looking for a JavaScript Charts Suite that Rocks? Checkout our [JavaScript Charts][6] Suite today.


  [1]: http://techoctave.com/charts
  [2]: http://techoctave.com/charts
  [3]: https://techoctave.com/posts/65-prototypes-and-the-law-of-conservation-of-quality
  [4]: https://techoctave.com/posts/60-simple-long-polling-example-with-javascript-and-jquery
  [5]: http://techoctave.com/charts/
  [6]: http://techoctave.com/charts
