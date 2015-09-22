---
layout: post
author: TVD
title: "Accelerate method gets a tuneup in the JavaScript Gauge Suite "
date: 2011-05-26 11:21:11
permalink: /c7/posts/52-accelerate-method-gets-a-tuneup-in-the-javascript-gauge-suite
---

You know, I often get asked, "What's everyone's fascination with gauges?" I never know what to say really because I'm crazy over gauges myself. For me, I just believe they are a concise and familiar way to share data with people who care!

###Gauges are familiar

I think familiarity really is the key here. Think about it for a second...We use gauges every single day. You have gauges in your car. You have a gauge on your wrist. You may even have a gauge on your stove.

Intimate, everyday experiences and you all experience them with a gauge. Driving is critical. Knowing the right time is critical. Making sure your dinner is cooked is critical. So sharing business critical information in a gauge is not only a natural progression, it just makes sense.

Since I released [TechOctave's JavaScript Gauge Suite][1], the feedback has been amazing. The consensus is "It Rocks!" Performance is production ready. The interfaces are beautiful - one customer called it Data Candy. Data can be sexy and I'm going to prove it!

###Refactoring the accelerate method

One feature request in particular has been getting much support among the customer base: *The ability to control which MPH/KPH the Accelerate method stops at.*

Here is the result of the refactoring...

####Original accelerate method

Originally, I only envisioned this method to be used for demo purposes. The scope was to have the gauge needle move from rest to the last value of the speedometer gauge: 

{% highlight ruby %}
    //var speedGauge = new Speedometer("speedometer");
    //speedGauge.Accelerate();
    Speedometer.prototype.Accelerate = function() {
    	jQuery(this).everyTime(10, function(i) {
    		if(i < 300) {
    			var v = i*80;
    			this.SetMPH(easeInCirc(i, 0, v, 2000));
    		}
    	}, 0);
    	
    	easeInCirc = function (t, b, c, d) {
    		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    	};
    };
{% endhighlight %}

The magic was to have these values increase in a smooth manner just as you would in your vehicle. You'll recognize the *easeInCirc* function from my previous post on [how to ease a needle around a circle in JavaScript][2].

Here, we're using the excellent [jQuery Timers][3] plugin as a wrapper for native JavaScript *setTimeout* and *clearTimeout*. Working with setTimeout can be a pain - jQuery Timers makes it a pleasure.

Think of the Timer as simulated data points. In production, those data points (mph/kph) should come from a real data source via Ajax using JSON. That data source can be anything you can consume. So grab your favorite scripting language and hook your model up to your favorite data store (PostgreSQL, MySQL, MongoDB, SQLite, HTML5 Local Storage).

As you can see, the previous implementation was also limited to the MPH markings only. For demo purposes it got the job done. But many people had different expectations. Many people wanted to set the MPH and still have the easing effect.

Well, I believe I have a solution that's going to solve all your problems.

####Refactored accelerate method

For now, I'm happy with the results of the refactored version. First, it's closer to customer expectation. Second, it's flexible as you can use it for both MPH and KPH. Finally, performance has increased immensely:

{% highlight ruby %}
    //var speedGauge = new Speedometer("speedometer");
    //speedGauge.Accelerate(70, "mph");
    Speedometer.prototype.Accelerate = function(speed, unit) {
    	if (unit === "mph") {
    		this.mph = speed;
    	}
    	
    	if (unit === "kph") {
    		this.kph = speed;
    	}
    	
    	var label = Math.random() * 10;
        label = label.toString();
    
    	jQuery(this).everyTime(10, label, function(t) {
    		var c = t * 80;
    		
    		//Stop at the MPH/KPH specified
    		if(easeInCirc(t, 0, c, 2000) < speed) {
    			if (unit === "mph") {
    				this.SetMPH(easeInCirc(t, 0, c, 2000));
    			}
    			
    			if (unit === "kph") {
    				this.SetKPH(easeInCirc(t, 0, c, 2000));
    			}
    		} 
            else {
    			jQuery(this).stopTime(label);
    		}
    
    	}, 0);
    	
    	easeInCirc = function (t, b, c, d) {
    		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    	};
    };
{% endhighlight %}


Now you have the ability to set either the MPH or the KPH and still get the easing effect that made you fall in love with the accelerate method.

Also, you will get a lot more CPU cycles in since stopTime has been implemented. The timer is being shut off once you reach your targeted MPH/KPH - no more wasted CPU cycles.

Thanks to random timer labels, you can continue to place as many gauge instances as you wish without one colliding with the other.

It's a lot of fun making and supporting the Gauge Suite. Please do check out the [Business package][4] for a Commercial License and six months of support. In addition, you'll find a spectacular set of bonus gauges and one year of support in the [Enterprise package][5].

Have fun, take care and be awesome!


  [1]: http://techoctave.com/gauges/
  [2]: http://techoctave.com/c7/posts/51-javascript-function-to-ease-a-needle-around-a-circle
  [3]: http://plugins.jquery.com/project/timers
  [4]: http://techoctave.com/gauges/#business
  [5]: http://techoctave.com/gauges/#enterprise
