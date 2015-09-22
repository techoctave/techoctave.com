---
layout: post
author: TVD
title: "JavaScript Testing with Jasmine"
date: 2012-05-27 01:21:01
permalink: /c7/posts/77-javascript-testing-with-jasmine
---

<img src="http://techoctave.com/c7/static/jasmine.png"/>


Jasmine is a testing framework for JavaScript. It's framework agnostic and does not require a DOM. We use Jasmine to run both our [JavaScript Gauges][1] and JavaScript Charts test suites:

The [Jasmine documentation][2] is really good. So I won't go into every single detail. But, I believe it's important to share exactly how we use Jasmine for our JavaScript testing and why.

Here's an inside look at our gauge library's test suite:

###Getting started with Jasmine

First, download the latest [Jasmine][3] build from Github. Then rename the folders to tests. Then add a new spec to the spec folder.

Now, your tests folder will look something like this:

{% highlight bash %}
- tests
  - lib
    + jasmine-1.2.0
  - spec
    GaugeSpec.js
  SpecRunner.html
  + src
{% endhighlight %}

SpecRunner.html will run all the spec suites you ask it to:

{% highlight js %}
<!-- include source files here... -->
<script type="text/javascript" src="../javascripts/raphael.js"></script>
<script type="text/javascript" src="../javascripts/gauge.js"></script>

<!-- include spec files here... -->
<script type="text/javascript" src="spec/GaugeSpec.js"></script>
{% endhighlight %}

SpecRunner is also handy for setting up DOM test harnesses:

{% highlight js %}
<div id="tests" style="display: none;"></div>
{% endhighlight %}    

###Suites and Specs

Jasmine is composed of suites and specs.

####Specs
A spec is just a JavaScript function that takes two parameters:

{% highlight js %}
// Gauge Properties
// ----------------
it("should be able to set a width", function() {
	expect(gauge.get("width")).toEqual(195);
});
{% endhighlight %}

The first parameter is the spec description. The second parameter is an anonymous JavaScript function that implements the spec. Here, we expect a new gauge instance to have a default width of 195.

####Suites

A suite is composed of a list of specs:

{% highlight js %}
describe("Gauge", function() {
    // Gauge Properties
	// ----------------
	it("should be able to set a width", function() {
		expect(gauge.get("width")).toEqual(195);
	});

    . . .

	// Gauge Methods
	// -------------
    it("should be able to set a setValue", function() {
      gauge.setValue(25);
      expect(gauge.get("value")).toEqual(25);
    });
});
{% endhighlight %}

Once you get this core concept, you're up and running. Things can get really interesting after that. But, the crux of the matter is you're testing and that's great.

###You can't test all the things all the time

A great man once said, "Errors using inadequate data are much less than those using no data at all." That man was [Charles Babbage][4], a pioneer of computer engineering and science.

I wholeheartedly agree. Our gauge library didn't always have tests. Somewhere around version 2.0.* we chose Jasmine as our JavaScript testing framework and I am SO GLAD we did.

Initially, we had around 55 tests. At first, you think Jasmine will be just another step in the development process. And not just another step, but another unneeded step - a waste of time. Try not to think about it like that. Instead, think about Jasmine as a friend. Someone who always has your back covered, even when you don't expect it. Which is the whole point of this conversation.

Listen, you can't test all the things all the time. Our gauge library currently has 72 exposed properties and that's not even including class methods. Do you think any developer can code new features and still validate existing features at the same time? Hell no! Well, maybe [Jon Skeet][5] can. But you, my friend, are no Jon Skeet.

###Jasmine is beautiful

In each of the scenarios above, you see me using a gauge object.
Every spec must have access to an instance of the Gauge class to run.

To accomplish this, we could've done something like this:

{% highlight js %}
describe("Gauge", function() {
    // Gauge Properties
	// ----------------
	it("should be able to set a width", function() {
        var gauge = new Gauge("tests");
        expect(gauge.get("width")).toEqual(195);
	});

    . . .

    it("should be able to . . .", function() {
        var gauge = new Gauge("tests");
        . . .
	});     
});
{% endhighlight %}

After awhile, creating instance-after-instance becomes tedious at-best. There are better ways.

####Setup and Teardown

Jasmine provides methods to help you Don't Repeat Yourself (DRY):

{% highlight js %}
describe("Gauge", function() {
    var gauge;

    beforeEach(function() {
        gauge = new Gauge("tests");
    });

    afterEach(function() {
        delete gauge;
    });
 
    // Gauge Properties
	// ----------------
	it("should be able to set a width", function() {
        expect(gauge.get("width")).toEqual(195);
	}); 

    . . .
});
{% endhighlight %}

Before each spec is called, I create an instance of the Gauge class and attach it to a DOM test harness called tests:

{% highlight js %}
<div id="tests" style="display: none;"></div>
{% endhighlight %}

This DOM element is located in SpecRunner.html. After each spec has finished executing, I delete the gauge instance. This technique works remarkably well for many scenarios.

####Using Jasmine Matchers

Jasmine BDD has several built-in matchers. A full list of [Jasmine matchers][6] are available on the Jasmin Wiki. Here are a few of the matchers we use and how to implement them:

{% highlight js %}
describe("Gauge", function() {
    // Gauge Properties
	// ----------------
	it("should be able to set a width", function() {
        expect(gauge.get("width")).toEqual(195);
	});

    it("should be able to set a autoresize", function() {
        expect(gauge.get("autoresize")).toBeUndefined();
    });

    . . .

    // Gauge Parts
    // -----------
    it("should be able to get a base", function() {
        expect(gauge.base.id).toBeGreaterThan(0);
    });

    . . .

	// Gauge Methods
	// -------------
    it("should be able to format thousands", function() {
        expect(gauge.arc(...)).toContain("...");
    });

    it("should be able to format thousands", function() {
        expect(gauge.formatValue(1500)).toEqual("1.5k");
    });
});
{% endhighlight %}

The matcher *toEqual* compares objects or primitives x and y and passes if they are equivalent.

The matcher *toBeUndefined* passes if x is undefined.

The matcher *toBeGreaterThan* passes if x is greater than y.

The matcher *toContain* passes if array or string x contains y.

You can even extend Jasmine to write your own custom matchers.

###Closing thoughts on using Jasmine BDD

With Jasmine, we're able to focus our limited time and energy to refactor and craft killer features. Jasmine gives us the confidence to know we're not breaking existing functionality.

We started with 55 tests. Now, we're up to 111 test specs and counting. I couldn't be happier with the results. Since version 2.0, Jasmine has meant an increase in quality that is now part of our gauge library's DNA and that means everything to me.

Think. Do.


  [1]: http://techoctave.com/gauges
  [2]: http://pivotal.github.com/jasmine/
  [3]: https://github.com/pivotal/jasmine/downloads
  [4]: http://en.wikipedia.org/wiki/Charles_Babbage
  [5]: http://meta.stackoverflow.com/questions/9134/jon-skeet-facts
  [6]: https://github.com/pivotal/jasmine/wiki/Matchers
