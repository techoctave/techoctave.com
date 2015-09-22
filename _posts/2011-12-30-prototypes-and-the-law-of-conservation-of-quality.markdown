---
layout: post
author: TVD
title: "Prototypes and The Law of Conservation of Quality"
date: 2011-12-30 01:06:17
permalink: /c7/posts/65-prototypes-and-the-law-of-conservation-of-quality
---

<img src="http://techoctave.com/c7/static/column-chart-concept.png" alt="TechOctave Column Chart Concept"/>

Prototyping is hard, but good for business. It's a necessary phase between idea and product. It's the double rainbow between you and your customer. No Unicorns.

We apply prototyping to all of our products. Here are some lessons learned from our latest product - [JavaScript Charts][1] Suite. We hope you enjoy!


###Great products evolve from great prototypes...

Good prototyping isn't easy either. It takes sacrifice and diligence to introspect and seek the right questions before coming to a "solution". Think about it...What could you have been doing instead of prototyping? Working on client work? Jumping straight into production code?

My point is prototyping takes time away from other activities. But, I posit this, "Great products evolve from great prototypes." Without dedication to the prototyping process, a continuous loop of feedback, what are we left with? Luck? I prefer iterations over luck.

Don't get me wrong, I respect Lady Luck. I just believe she favors those who [Tango][2] with purposeful intent. With our Dashboard Chart Suite, prototyping is both meaningful and purposeful.

###Prototypes are Functional Concepts

The scope of a prototype is really up to you. Each can vary based on what you're trying to accomplish. Prototypes are functional concepts.

Prototypes should help you: 1) Get a feel for the problem domain; 2) Get something solid enough where you can begin soliciting feedback.

Our Dashboard Chart Suite has several prototypes we feel represent core functionality. For example, here are two:

<img src="http://techoctave.com/c7/static/scatter-chart-concept.png" alt="TechOctave Scatter Chart Concept"/>

Left: Scatter Chart, Right: Column Chart

A good prototype allows you to have a conversation about complexity. Hypotheticals are removed and you can quickly get down to brass tacks. I follow a series of methodical questions when I prototype:

{% highlight bash %}
1. What environment will this product be used? 
2. Who is going to use this product?
3. What is the motivation to use this product?
{% endhighlight %}

####What environment will this product be used?

Here, I'm trying to figure out the operating constraints of the product: Will it be used in a web application? Or will it be used in a Desktop application? Or is it a server utility?

These are the basis for my digital product questions. But, I'm an Engineer by training so hardware products aren't out of scope. For hardware products, you might ask: How will the user interact with the device? What communication protocol(s) need to be available? Is the context a laboratory? Is the context someone's home? Or, is the context someone's business?

Some questions are useful for both software and hardware: Is this a stand alone component? Is this product a single piece to a much larger puzzle? Is this piece mission critical? What will this product mean to the success of the larger initiative?

It's important to know which environment your product will be used. Knowing this will help you value your product. It will also help your customers value their time.

####Who is going to use this product?

Here, it's important to reflect on who the end user is. Call it, "Getting inside their head". Call it "User Profiles". Call it, "End User Analysis". Whatever you call it, make sure you spend time empathizing with the end user. Make sure you spend time thinking about (their) level of experience - not yours.

Most of my customers are developers. I'm a developer too. So I can make a pretty good call as to what makes sense and what doesn't. But, your situation may be different.

Maybe your customers are designers. What if you're not a designer? All that means is you'll have to spend a little more time upfront understanding how they work and why.

Fundamentally, the answer to this question helps you understand how much complexity you have liberty to expose and how much you simply need to keep hidden.

####What is the motivation to use this product?

This is where you get down to brass tacks and truly evaluate the value of what your prototype can become. Why is the customer here? Why don't they just build the product themselves? Are they trying to save time? Are they trying to save money? Are they trying to save both?

Maybe your customers value beauty. I believe in beauty. I believe software should be beautiful and inspired. This is a core value. People value functional things, but they love beautiful things. As you evaluate motivation try to remember that.

###Intelligent Defaults

I not only value beauty, I also value aforethought and conviction. That's why I believe in Intelligent Defaults.

I believe each product should be able to run with as minimum configuration as possible. This concept is a hallmark of our [Dashboard Gauge Suite][3] and our customers love it. Intelligent defaults increase confidence and decrease learning curve.

I say learn to love intelligent defaults. Apply them without haste. It's good for the end user and it's good for you too. Intelligent Defaults are good for you because they communicate clean interfaces from which to work from.

For example, which do you believe is cleaner code?

Interface One (Uses Intelligent Defaults):

{% highlight js %}
var data = [["2010", 150, 99, 350, 1200],
            ["2011", 25, 120, 2400, 540]];

var sales = new BarChart("sales", {"data": data});
{% endhighlight %}

An instance of the BarChart object *sales* is instantiated and beautifully drawn on your screen.

Interface Two:

{% highlight js %}
var data = [["2010", 150, 99, 350, 1200],
            ["2011", 25, 120, 2400, 540]];

var sales = new BarChart();

sales.SetProperty("id", "sales");
sales.SetProperty("data", data);

sales.SetProperty("colors", ["#FF2400", "#E25822", "#F2F2F2", "#B22222"]);

sales.SetProperty("fill", true);
sales.SetProperty("width", 200);
sales.SetProperty("height", 200);
sales.SetProperty("scaling", 0.5);

...

sales.drawGraph();
{% endhighlight %}

There were a few more properties to set before a "valid" BarChart could be rendered. But, let's cut to the chase. Your project is behind schedule and the boss is getting antsy for results. Which philosophy do you wish guided the development of your components?

####Intelligent Defaults are core to your DNA

Intelligent Defaults can and should go further than user experience. Indeed, I believe Intelligent Defaults should be at the DNA of our products.

In the example above, why use the new keyword at all?

The first example could go from:

{% highlight js %}
var sales = new BarChart("sales", {"data": data});
{% endhighlight %}

To:

{% highlight js %}
var sales = BarChart("sales", {"data": data});
{% endhighlight %}

With well executed constructor code:

{% highlight js %}
function BarChart(id, options) {
   if(window === this) {
      return new BarChart(id, options);
   }
   ...
}
{% endhighlight %}

What this means is the end user gets the benefits of a fully instantiated object without ever having to worry about forgetting the *new* keyword.

With this attention to detail, the new keyword would never slip through the cracks. That means the end user doesn't have to worry about potentially overriding data. That means less logic errors will occur. Less testing time will be needed. Indeed, less development time will be needed. That's why I always say, "Quality has a price and it's not a question of if you'll pay, but when."

###The Law of Conservation of Quality

The Law of Conservation of Energy is a fundamental law of physics. It states, "The total amount of energy in an isolated system remains constant over time. Therefore, the total energy is said to be conserved over time."

For an isolated system, this law means that energy can change its location within the system, and that it can change form within the system, but that energy can be neither created nor destroyed.

I believe there is a corollary in software development. I call it *The Law of Conservation of Quality*. It states, "The total amount of quality in an isolated software project remains constant over time."

From a pragmatic standpoint, this means to increase quality, we need to add quality. This could come in the form of quality components, quality processes and most importantly, quality people.

Quality doesn't come out of thin air, it's either bought upfront or bought later. Eventually, someone pays the price and the many benefit.

Those people go by many names. Some call them Pioneers. Some call them Leaders. I call them Customers.

Looking for an easy to use JavaScript Charts library with a powerful API? Checkout our [JavaScript Charts][4] Suite. We believe in quality because we're developers too.


  [1]: http://techoctave.com/charts
  [2]: http://techoctave.com/c7/posts/63-libertango
  [3]: http://techoctave.com/gauges
  [4]: http://techoctave.com/charts 
