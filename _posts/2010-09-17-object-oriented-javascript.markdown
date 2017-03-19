---
layout: post
author: TVD
title: "Object Oriented JavaScript"
date: 2010-09-17 07:31:13
permalink: /c7/posts/20-object-oriented-javascript
---

In search of guidance many developers ask on StackOverflow, *How do I write Object Oriented JavaScript?* Each desperately seeking guidance on how to structure their code to take advantage of a more modular, reusable and maintainable code base.


### Plain Old JavaScript Objects (POJOs)

One of my consulting areas is advising clients on the use of JavaScript and JavaScript Frameworks like jQuery. Recently, I released a set of [JavaScript Dashboard Gauges][1] for use in charting and business intelligence applications.

Today, I'm going to talk about Object Oriented JavaScript and help you think about ways to move away from the procedural mess many good developers find themselves in. We'll focus on building a Plain Old JavaScript Object (POJO) and examine the inherent Object Oriented principles.

### Speedometer Class

We are going to use the [Prototype Design Pattern][2]. Take for example a Speedometer. A Speedometer is derived from a Gauge. So, we say the speedometer inherits functionality from the Gauge. The following code would be in a single JavaScript file:

Class definition and Constructor:

{% highlight js %}
Speedometer = function (gaugeID) {
    //State  
    var mph;

    //Constructor
    this.SetGaugeID(gaugeID); //inherited from Gauge

    this.CreateGauge(); //inherited from Gauge
    this.SetMPH(0);
}
{% endhighlight %}

Inherit base functionality from Gauge class:

{% highlight js %}
Speedometer.prototype = new Gauge();
{% endhighlight %}

This type of inheritance is called Prototypal Inheritance. Under the hood, it's different from classical class based inheritance. But, should be very familiar.

Properties (Accessors):

{% highlight js %}
Speedometer.prototype.SetMPH = function(mph) {
    this.mph = mph;
    this.RotateNeedle(...); //inherited from Gauge
}
{% endhighlight %}

Methods (Do the work for the Speedometer Class):

{% highlight js %}
Speedometer.prototype.Accelerate = function() {
    //Do some work here...
}
{% endhighlight %}

The accelerate method is only within the scope of the Speedometer class. So only instances of a Speedometer object or children of the Speedometer class have access to the method.

### Using the Speedomter Class

Well, we so deliciously put together our Speedometer class. Now, it's [time to have some fun][3] and use an instance of the Speedometer object. Let's take this Teslar Roadster for a spin:

{% highlight js %}
//Create a new instance of a Speedometer object
var speedGauge = new Speedometer("speedometer");

//Warm up the engine
speedGauge.SetMPH(5);

//Time to put the pedal to the metal
speedGauge.Accelerate();
{% endhighlight %}

Hey, the good news is if you're here, that means you're looking for help and that makes you awesome! It also means you already have the necessary prerequisites to develop cleaner, more reusable, Object Oriented JavaScript.

My gut tells me you're not here to write the next [jQuery JavaScript Framework][4]. But, you do want to be a better developer and write better code. I can help you with that!


  [1]: https://techoctave.com/c7/posts/17-jquery-dashboard-gauges-using-raphael-xhtml-and-css
  [2]: http://en.wikipedia.org/wiki/Prototype_pattern
  [3]: https://techoctave.com/c7/posts/1-hello-world
  [4]: http://jquery.com/
