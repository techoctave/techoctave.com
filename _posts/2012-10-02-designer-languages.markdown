---
layout: post
author: TVD
title: "Designer Languages"
date: 2012-10-02 02:22:25
permalink: /c7/posts/90-designer-languages
---

<img src="https://techoctave.com/static/designer-languages.png" alt="Designer Languages"/>

Designer Language: a programming language created to avoid the perceived shortcomings of an existing language, usually by creating a superset of the existing language by modifying syntax or modifying programming constructs.

The designer language usually compiles to its parent language and its compiler is usually written in the new langauge itself. The latter of which apparently adds a wow factor to the whole affair.

But all this is nothing new. The Java language has survived its share of designer languages over the past decade or so.

###Designer Languages: The Java Frontier

####Groovy

James Strachan introduced the Java world to [Groovy][1] in early 2007. Dynamic and loosely typed, Groovy built upon the strengths of Java but had additional power features inspired by languages like Python, Ruby and Smalltalk.

With the invention of web frameworks like Grails, Groovy continues to influence the J2EE landscape to this day. However, it wouldn't be long before the J2EE landscape would again be rocked.

####Scala

Similar to Groovy, but with an increased focus on Functional Programming, [Scala][2] is another interesting designer language built on top of Java.

In early 2009, a burgeoning social media company (Twitter) picked up on a little known language called Scala. Famously, a Ruby on Rails shop, Twitter kept Rails for its presentation layer and swapped out its backend with Scala.

Twitter's move to Scala sent ripples through the Rails community and ushered in another star to the limelight. But this is the nature of designer languages - to ripple, to rumble, to roll. 

Designer languages are the forest fires of the computer science world. And it wouldn't be long before sparks flew towards the JavaScript world.

###Designer Languages: The JavaScript Frontier

<img src="https://techoctave.com/static/mona-lisa-javascript-designer-language-Comparison.jpg" alt="Designer Languages: TypeScript, CoffeeScript, GWT and Dart"/>


####CoffeeScript

Jeremy Ashkenas, quietly committed [CoffeeScript][3] to the JavaScript world in late 2009. A year later, a stable CoffeeScript 1.0 was released.

In a short two years, CoffeeScript managed to influence legions of developers. Simplicity and clean output was the key:

{% highlight js %}
class Animal
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."

class Snake extends Animal
  move: ->
    alert "Slithering..."
    super 5

class Horse extends Animal
  move: ->
    alert "Galloping..."
    super 45

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()
{% endhighlight %}

Eventually, CoffeeScript made its way to Brendan Eich - The Creator of JavaScript - and it's influence on the future of the language began.

Inspired by Ruby, Python and Haskell, CoffeeScript went on to become the default JavaScript language in the popular Ruby on Rails web framework.

With those results, CoffeeScript is (arguably), the most successful designer language ever released. I have seen the future of JavaScript and it is amazing.

Much of that future is due to the popular success of CoffeeScript. With CoffeeScript we learned what JavaScript could be.

That's the greatest lesson to be learned from designer languages. That the future isn't written in stone. That we too can influence its path and shape its fringes.

That hope without action is little more than madness. That action with thoughtfulness can move mountains. That the [Future of JavaScript is in our hands][4].

CoffeeScript went on to influence and spur further designer languages in both the static and dynamic space.

####Dart

Google introduced the [Dart][5] language as a final solution to JavaScript in late 2011. The predecessor to Google Web Toolkit (GWT), Dart introduced static typing to the JavaScript landscape.

Developers wrote code in Dart and then compiled to JavaScript - a [whole lot of JavaScript][6] to be exact. This was in sharp contrast to the compiled output of CoffeeScript which was readable and didn't shock the conscience.

Developers weren't too happy with that type of result and the push back was strong. Rightfully so...

With a web server or desktop app, who cares what the compiler outputs - regardless, your app will run. But, in the browser, every byte counts. So if the browser has to download tons of needless code, your user loses and you lose too.

Most would have thought it the end of big brand collision with JavaScript. But, like life itself, the unexpected happened and Microsoft entered the designer language scene.

####TypeScript

Microsoft introduced a superset of JavaScript called [TypeScript][7] in late 2012. Some called TypeScript an improved Dart. Yet, others saw TypeScript as a more [verbose CoffeeScript][8]. 

Based on TypeScript's syntax, it's not too hard to see why:

{% highlight js %}
class Animal {
    constructor(public name) { }
    move(meters) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name) { super(name); }
    move() {
        alert("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    constructor(name) { super(name); }
    move() {
        alert("Galloping...");
        super.move(45);
    }
}

var sam = new Snake("Sammy the Python")
var tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)
{% endhighlight %}

TypeScript, however, didn't seem to be an improvement on either concept. In fact, TypeScript's implementation seemed very Groovy-ish. It seemed history was again repeating itself. 

Ironically, [Microsoft's JavaScript Team][9] disagreed with the "clean break" stance of Dart. Yet, less than a year later, they turned around and pursued the exact same path.

I predict TypeScript adoption will be lack luster at best. Not because the language is tedious like Dart. No...

In fact, TypeScript is much more pleasing to read than Dart. That itself is a success for the TypeScript Team. TypeScript will fail because it doesn't improve the development experience.


###Designer Languages: JavaScript Afterthoughts

Folks tried to bring dynamic features to a static Java. Then, interestingly enough, other folks clamor to add static features to a dynamic JavaScript.

What a funny world we live in...

Listen, I don't believe you help developers by giving them an illusion of type safety that doesn't actually exist at runtime. What we do is serious business. No smoke. No mirrors. 

Time and time again, the fact remains that an extra layer between you and the browser is simply - No good.

Claims of cross browser compatibility - solved years ago with jQuery.

Claims to help you structure your JavaScript - grab a copy of Backbone.js or your favorite JavaScript MVC framework. 

Claims to improve your efficiency with JavaScript - grab a copy of Underscore.js or any myriad of micro frameworks that extend without overwriting base JavaScript functions.

My point is JavaScript was never broken. It's beautiful and timeless. As John Resig said regarding Dart, "Why fix JavaScript when it's the DOM that is broken?" I, wholeheartedly, agree.


  [1]: http://groovy.codehaus.org/
  [2]: http://www.scala-lang.org/
  [3]: http://coffeescript.org/
  [4]: http://www.readwriteweb.com/hack/2011/05/developers-the-future-of-javas.php
  [5]: http://www.dartlang.org/
  [6]: http://news.ycombinator.com/item?id=3097105
  [7]: http://www.typescriptlang.org/
  [8]: https://plus.google.com/118095276221607585885/posts/MgzNUSTwjRt
  [9]: http://en.wikipedia.org/wiki/Dart_(programming_language)#Criticism
