---
layout: post
author: TVD
title: "Google Web Toolkit (GWT): JavaScript Gauges & Charts"
date: 2012-12-02 02:14:00
permalink: /c7/posts/96-google-web-toolkit-gwt-javascript-gauges-charts
---

<img src="https://techoctave.com/c7/static/gwt-techoctave-gauges-charts.png" alt="Google Web Toolkit (GWT) - TechOctave Gauges and Charts Integration"/>

For awhile now, folks have been asking whether our [JavaScript Gauges][1] and [JavaScript Charts][2] work with Google Web Toolkit (GWT). I'm happy to say the answer is a resounding Yes.

More importantly, I wanted to take some time to walk you through how the integration might look for you.

### Google Web Toolkit (GWT)

For those who don't know, [GWT is a development toolkit][3] for building and optimizing browser-based web applications. Specifically, developers write their applications in Java, then GWT cross-compiles the Java source code into JavaScript.


Often, you will need to integrate GWT with existing handwritten JavaScript or with a third-party JavaScript library. Occasionally you may need to access low-level browser functionality not exposed by the GWT class API's.

The JavaScript Native Interface (JSNI) feature of GWT can solve both of these problems by allowing you to integrate JavaScript directly into your application's Java source code.

### JavaScript Native Interface (JSNI)

GWT borrows from the Java Native Interface (JNI) concept to implement JavaScript Native Interface (JSNI).

[JSNI methods are declared native][4] and contain JavaScript code in a specially formatted comment block between the end of the parameter list and the trailing semicolon. 

A JSNI comment block looks like this:

{% highlight js %}
`/*-{ and ends with the exact token }-*/`
{% endhighlight %}

JSNI methods are called just like any normal Java method. They can be static or instance methods. Here, we create an instance method of the Gauge class:

{% highlight js %}
public static native void someEvent() /*-{
	var cash = $entry(@...myClass::getCashSum());

	var settlements = new $wnd.Gauge("sales", { 
		label: "Sales", 
		minValue: 0, 
		maxValue: 100, 
		majorTicks: 11, 
		minorTicks: 4 
	});

	settlements.setValue(cash);

}-*/;
{% endhighlight %}

This is perfectly valid Java code because the compiler sees only private static native void someEvent();. GWT parses the contents of the comment block and outputs the JavaScript verbatim.

GWT provides the $wnd and $doc variables to refer to the window and document objects. The code of your GWT app runs in a (hidden) iframe, so document references that iframe's document (and window the iframe's browsing context).

GWT thus initializes the variables $doc and $wnd to let you easily reference the document and browsing context (window) of the "host page" that loads the GWT app.

Linkers decide how the compiled code is loaded, the default one (std) and the newer xsiframe use iframes, whereas the deprecated xs loads your code in the same browsing context (so $doc == document and $wnd == window).

The JSNI syntax is a directive to the Java-to-JavaScript Compiler to accept any text between the comment statements as valid JavaScript code and inject it inline in the generated GWT files.

At compile time, the GWT compiler performs some syntax checks on the JavaScript inside the method, then generates interface code for converting method arguments and return values properly.

Since JSNI code is just regular JavaScript, you will not be able to use Java debugging tools inside your JSNI methods when running in development mode.

You just want to make sure you're accessing your JavaScript objects in a meaningful and maintainable way. Everything else is gravy.


  [1]: http://techoctave.com/gauges
  [2]: http://techoctave.com/charts
  [3]: http://googlewebtoolkit.blogspot.com/2008/07/getting-to-really-know-gwt-part-1-jsni.html
  [4]: http://www.ibm.com/developerworks/web/library/j-ajax4/
