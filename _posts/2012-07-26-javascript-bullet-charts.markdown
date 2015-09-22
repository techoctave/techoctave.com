---
layout: post
author: TVD
title: "JavaScript Bullet Charts"
date: 2012-07-26 12:33:05
permalink: /c7/posts/82-javascript-bullet-charts
---

<img src="http://techoctave.com/charts/images/bulletchart.png" width="520" alt="JavaScript Bullet Chart" />

Recently, one of our [JavaScript Charts][1] customers asked if we'd consider adding Bullet Graphs to our collection of JavaScript data visualization components.

Now given, our customers are no lightweights. I can say, without a single doubt, that they are some of the most awesome developers in the community. [Descended from Mount Olympus][2], molded after Adonis himself...Tiger's Blood courses through their veins. So it was no small feat for them to reach out to us to fulfill this wish.

No small feat indeed, but a very very extremely smart one. Not only were we able to knock out the new Bullet Chart quicker, but now the chart will be supported indefinitely. And our customer saved a ton of time.

###What are Bullet Charts anyway?

####Introduction to the Bullet Chart

The [Bullet Chart][3] is a type of chart envisioned by business intelligence consultant Stephen Few circa 1995. The Bullet Chart was designed to convey a rich story clearly in little space.

Its linear and no-frills design provides a rich display of data in a small space, which is essential on a dashboard. Like most meters and [circular gauges][4], bullet graphs feature a single quantitative measure (for example, year-to-date revenue) along with complementary measures to enrich the meaning of the featured measure.

####Breaking down the Bullet Chart

The bullet graph consists of five primary components:

{% highlight js %}
- Text label

- A quantitative scale along a single linear axis

- The featured measure

- One or two comparative measures (optional)

- From two to five ranges along the quantitative scale to declare the featured measure's qualitative state (optional)
{% endhighlight %}

<img src="http://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Bullet_graph_labeled.png/500px-Bullet_graph_labeled.png" alt="520" alt="JavaScript Bullet Graph" />

####Applying the Bullet Chart to Hustle & Code, LLC

Here, maybe between $0 and $200,000 in revenue is considered "Low". Next, between $200,000 and $250,000 in revenue could be considered "Medium". Finally, between $250,000 and $300,000 in revenue could be considered "High".

Conceptually, Hustle & Code, LLC made $275,000 in revenue. The comparative indicates Hustle & Code, LLC shot for approximately $265,000 in revenue. 

How did the Hustle & Code Team do in 2005?

At a glance, it's clear they did excellent! Lo and Behold, the Hustle & Code Team got into the "High" region. Moreover, they beat their goal by approximately $10,000 or 3.8%.

Quick data visualization results, at a glance and clean. That's the power of the Bullet Graph and we love that we're able to offer this chart as part of our [JavaScript Charts Library][5].

###Using our Bullet Chart

Our JavaScript Bullet Chart stands on the base of our [Six Core Principles for JavaScript chart libraries][6]. It's crisp, clear, cross-browser and mobile ready JavaScript. But, at it's core, it's framework agnostic.

That means whether you're using jQuery or Prototype or Mootools or Google Web Toolkit (GWT), our charts just work. So pick your favorite and jump right in...

####Horizontal Bullet Chart

Creating a horizontal Bullet Chart library is as simple as this:

####HTML

{% highlight js %}
    <div id="revenue"></div>
{% endhighlight %}

####JavaScript

{% highlight js %}
var revenue = new BulletChart("revenue", {
	title: "Revenue",
	subtitle: "US$, in thousands",
	ranges: [150, 225, 300],
	measures: [275],
	markers: [265]
});
{% endhighlight %}

The above instance of the BulletChart class creates the sample Bullet Chart detailing the success of Hustle & Code, LLC.

Simplicity the ultimate arbiter, our BulletChart library is flushed with smart defaults and multiple example implementations to speed up your project timeline.

####Vertical Bullet Chart

Creating a vertical Bullet Chart is just as simple. Simply set the *vertical* property to true:

{% highlight js %}
var revenue = new BulletChart("revenue", {
    title: "Revenue",
    subtitle: "US$, in thousands",
    ranges: [150, 225, 300],
    measures: [275],
    markers: [265],
    vertical: true
});
{% endhighlight %}

As the measure increases or decreases, simply pick your favorite [JavaScript Long Polling][7] technique and make a call to your data source to update the measure:

{% highlight js %}
revenue.setMeasures([200]);
{% endhighlight %}

Need to update the ranges or even the comparative marker? You can do that too:

{% highlight js %}
revenue.setRanges([100, 200, 300]);

revenue.setMarkers([125]);
{% endhighlight %}

That simple.

####Customizing our Bullet Charts

Like all of our JavaScript gauges and JavaScript charts, our Bullet Chart is highly customizable.

Every range, measure and marker is customizable. Every label, stroke and even the number of major values (ticks) are customizable. We believe in powerful APIs that are easy to get started with. It's that simple.

I believe simplicity is at the core of what makes great solutions...Well, Great! Our Bullet Chart has the right foundation for your next project.

I say this without hesitation because I believe something else as well...

There are plenty of charting solutions out there, so please don't let this be your only stop...

But if you're looking for a team that will be with you every step of the way...If you're looking for a company that will stand with you, while the rest stand aside, then welcome home friend...

And let me be the first to Welcome You to the TechOctave Family.



  [1]: http://techoctave.com/charts
  [2]: http://techoctave.com/c7/posts/78-foundation-is-everything
  [3]: http://www.perceptualedge.com/blog/?p=217
  [4]: http://techoctave.com/gauges
  [5]: http://techoctave.com/charts
  [6]: http://techoctave.com/c7/posts/66-beautiful-cross-browser-javascript-dashboard-charts
  [7]: http://techoctave.com/c7/posts/60-simple-long-polling-example-with-javascript-and-jquery
