---
layout: post
author: TVD
title: "Simple JavaScript Inheritance Using CoffeeScript Extends"
date: 2012-10-26 04:03:03
permalink: /c7/posts/93-simple-javascript-inheritance-using-coffeescript-extends
---

<img src="https://techoctave.com/static/most-attractive-photo-on-internet.jpg" alt="The Most Attractive Photo On The Internet"/>

I tend to [favor object composition][1] over class inheritance. This is especially true when I'm modeling a business process because business is about distinct people coming together to produce a particular result.

Organizations have hierarchy. Yet, that "coming together" is typically more functional than hierarchical. One can say teams are "composed" of distinct functional specialties (Designer, Developer, UX, etc.) and so a modern composite approach to object oriented programming lends more naturally to the way work actually gets done.

###Isn't This Article About JavaScript Inheritance?

Yes.

But, I wanted you to understand class inheritance is only one approach to object oriented programming. Better yet, I want you to see examples of how others use both the object composition and class inheritance techniques.

For example, I find class inheritance particular useful when [modeling a distinct real world object][2]. On the flip side, I find object composition works great when modeling Line of Business applications and other games.

###Modeling Buttons, Bases and Shiny Things

Take the power panel for example:

<img src="https://techoctave.com/static/power-panel-2.jpg" alt="JavaScript Power Panel"/>

In particular, let's focus on two components of the power panel:

{% highlight js %}
1. Glow Starter Light

2. Fuel Pimp Fill Button
{% endhighlight %}

In classical object oriented fashion, you'd reason both the Light and the Button share a base each uses to embed itself within the power panel. From there both the Light and Button would go on to have distinct properties and methods.

In JavaScript, this base class would be modeled like this:

{% highlight js %}
var Base = (function() {
	function Base(id) {
		console.log("base: " + id);
		this.id = id;
	}
	
	Base.prototype.drawTerminal = function() {
		console.log("drawTerminal");
	};
	
	Base.prototype.getId = function() {
		console.log("Id: " + this.id);
		return this.id;
	};
	
	return Base;
})();
{% endhighlight %}

There are a couple of really cool things at work here. Let's take some time to look at each.

First, you'll notice the class is defined using an anonymous self executing closure which returns its class signature after it is defined. The closure encapsulates the details of the class. But, it also turns the class signature into a kind of namespace, thereby preventing class properties and methods from polluting the Global Namespace.

Second, you'll notice the class has a bonafide constructor you can use to setup the class instance. All methods of the class extend the prototype chain of the class: Class.prototype.* Lastly, we return the class definition - it will be your class' interface to the world.

You could easily create a new instance of the base class:

{% highlight js %}
var base = new Base("123456");
{% endhighlight %}

But, that wouldn't be too useful. And that's fine because it's not meant to be too useful. The base class is just that, a base class (with base functionality) from which most other classes will inherit from. Here, the base's primary function is to simply drawTerminal because everyone will need a Terminal in order to connect to the Power Panel.

###JavaScript Inheritance And ALL THE THINGS

####Getting Started with JavaScript Inheritance

Things really get interesting when you want to create a Light that inherits from the base class. But, what's the best way to accomplish classical inheritance in a prototypical world?

One of the most interesting ways to achieve classical inheritance in JavaScript is to do the following:

{% highlight js %}
var Light = (function(_super) {

	function Light(id, color) {
		_super.call(this, id);
		
		this.color = color;
		console.log("Start Light: " + color);
		
		_super.prototype.drawTerminal();
	}
	
	Light.prototype.setColor = function(color) {
		this.color = color;
		console.log("Change Light: " + color);
	}
	
	Light.prototype.getColor = function() {
		console.log("Color: " + this.color);
		return this.color;
	}
	
	return Light;
})(Base);
{% endhighlight %}

The first thing you'll notice is we passed the parent class into the self-executing closure. This then becomes the *super* object reference in the anonymous function. The parent constructor and methods are access through the *super* object.

In particular, to call the parent's constructor, simply execute:       

{% highlight js %}
_super.call(this, id);
{% endhighlight %}

[Function.call][3] calls a function with a given *this* value and the arguments provided individually. You can use *call* to chain constructors for an object. Here, *this* refers to the current object, the calling object. Next, you can supply as many arguments as your parent's constructor demands.

Access to the parent's methods are done through the prototype chain:

{% highlight js %}
_super.prototype.drawTerminal();
{% endhighlight %}

This is pretty powerful stuff! You have things you'd never dream of in JavaScript:

{% highlight js %}
1. Parent Constructor Reuse

2. Parent Method Inheritance
{% endhighlight %}

All the things that make your code more maintainable.

####JavaScript Multiple Inheritance

If you ever need to, this technique also opens the door for Multiple Inheritance in JavaScript. Consider the following:

{% highlight js %}
var Light = (function(_super1, _super2) {
	function Light(id, color) {
		_super1.call(this, id);
		_super2.call(this, id, color);
		
		. . .
	}

    . . .
	
	return Light;
})(Base, AnotherClass);
{% endhighlight %}

JavaScript child classes can inherit from as many parent classes as needed. It goes without saying to be judicious when inheriting from multiple classes. But, if you ever need to, JavaScript is more than flexible enough to accommodate that need.

####CoffeeScript: In Too Deep

Still with me? Excellent!

Up until this point, your freshly minted Light Class can call it's parent constructor and call methods on its parent class. But, you haven't actually inherited anything.

That is to say, the methods of the Base Class are not present on the prototype chain for the Light Class.

If inheritence worked, the Light Class would have four methods on the prototype chain. Two from the parent: drawTerminal and getId. The remaining (from itself): setColor and getColor.

Yet, only the Light Class methods exist:

<img src="https://techoctave.com/static/light-class-before-extend.png" alt="JavaScript Light Class Before CoffeeScript Extends"/>

Not a complete loss. You could still write wrappers over the parent methods. After all, you still have access to _super. But, for large code bases, this can become unmaintainable. Better if child instances just magically had access to parent methods.

That's where [CoffeeScript's Extends][4] method comes into play:

{% highlight js %}
var __hasProp = {}.hasOwnProperty;
var __extends = function(child, parent) {
	for (var key in parent) {
		if (__hasProp.call(parent, key)) 
			child[key] = parent[key];
	}
	
	function ctor() { 
		this.constructor = child; 
	}
	
	ctor.prototype = parent.prototype;
	
	child.prototype = new ctor();
	child.__super__ = parent.prototype; 
	
	return child; 
};
{% endhighlight %}

CoffeeScript Extends method does a deep copy of parent methods unto the child prototype chain. Even better, using CoffeeScript Extends method is easy. Simply pass the child class as the first argument and the parent class as the second argument:

{% highlight js %}
var Light = (function(_super) {
	__extends(Light, _super);
	
	function Light(id, color) {
		_super.call(this, id);
		
		this.color = color;
		console.log("Start Light: " + color);
		//_super.prototype.drawTerminal();
		this.drawTerminal();
	}
	
	Light.prototype.setColor = function(color) {
		this.color = color;
		console.log("Change Light: " + color);
	}
	
	Light.prototype.getColor = function() {
		console.log("Color: " + this.color);
		return this.color;
	}
	
	return Light;
})(Base);
{% endhighlight %}

The result is parent methods are accessible in the child class without having to rewrite those same methods:

<img src="https://techoctave.com/static/light-class-after-extend.png" alt="JavaScript Light Class After CoffeeScript Extends"/>

This time when we count we get the four expected methods: drawTerminal, getId, setColor and getColor. Which is great because an instance of the child class can access the parent method with ease:

{% highlight js %}
    var light = new Light("LABC123", "Red");
    light.getId();
{% endhighlight %}

This cuts down on the potential for much code duplication. Also, it's simply pleasant to use. You still call the parent constructor using the _super.call route. But, this time you can access the parent methods within the current scope. Lastly, instances of the Light class magically have access to those parent methods as well.

###JavaScript Inheritance: Final Thoughts

JavaScript is a [beautiful and inspiring][5] language. It's a first class language with all the expressiveness of a functional language and the organization of an object oriented language. It is that dual nature that makes her so intriguing and yet, undeniable.

The time has come to recognize and celebrate both. Back in days long past, I too longed for organized class structures in JavaScript. Lo' and Behold, they were always there to begin with and now you have them too.

Inheritance has always been a tricky subject in JavaScript. Simply put, the language doesn't provide a keyword for inheritance. Yet, JavaScript is expressive enough to provide a plethora of mechanisms to achieve inheritance. This is the [fertile ground of innovation][6] I so vigorously profess.

Yet, many a language and community is ripe for innovation. Each standing at its pinnacle, poised for the future. So what makes JavaScript so enduring, yet so delectable? Us...



  [1]: https://techoctave.com/posts/68-nhibernate-the-good-parts
  [2]: http://techoctave.com/gauges/
  [3]: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/call
  [4]: http://coffeescript.org/
  [5]: https://techoctave.com/posts/90-designer-languages
  [6]: https://techoctave.com/posts/92-words-are-wind
