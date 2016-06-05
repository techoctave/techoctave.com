---
layout: post
author: TVD
title: "Rails 3.1 and The jQuery Effect"
date: 2011-03-11 02:30:13
permalink: /c7/posts/49-rails-3-1-and-the-jquery-effect
---
<img src="/c7/static/rails-jquery.jpg" width="100%" alt="jQuery and Rails 3.1" title="jQuery and Rails 3.1"/>

Ruby on Rails 3.0 was a big evolution of the Rails DNA. Architectural changes were hard to miss - true. But, more happened - more changed.

In Rails 3.0 I saw a strategic change in the way the Rails Core Team viewed itself. Prototype went from being the Official JavaScript framework for Rails to being the Recommended JavaScript framework for Rails. That's a really big deal!

That opened the door for JavaScript options when using Rails. And dare I say, it was a venerable extension of diplomacy to the rest of the JavaScript community.

### The jQuery Effect

There I stood as a Rails developer - proud as ever - because above all this move showed that the Rails Core Team leads. I call this *The jQuery Effect* and it's about getting out of the way of progress:

{% highlight js %}
<!--The jQuery Effect-->
<script type="text/javascript">jQuery.noConflict();</script>
{% endhighlight %}

jQuery has built a vibrant community of developers. And dare I say it was this single line of code that turned the tides in the JavaScript Framework Wars.

### The JavaScript Framework Wars

Not to long ago the JavaScript Framework Wars were armed for battle and at conflict. Who threw the first punch? We'll never know. One thing's for sure, it was on!

I consider these frameworks the major Contenders: Prototype, jQuery, MooTools and Ext JS. As with all Wars the issue is about assets and who owns what. Here, the asset is the infamous dollar ($) sign.

All this over a dollar ($) sign? Yes! Only one framework at a time could use the dollar ($) sign. Since the $() function was an integral part of each of these frameworks, no one wanted to change there use of the dollar ($) sign just to suit "that other framework."

### Finding Common Ground

What John Resig and the jQuery Core Team realized was that people used the $ for efficiency not identity. So let other frameworks use the $ and give jQuery developers the best of both worlds:

{% highlight js %}
<script type="text/javascript">jQuery.noConflict();</script>
<script type="text/javascript">
  jQuery(document).ready(function($) {
    $("#button").click(function() {
       alert('Hello World!');
    });
  }); //document.ready
</script>
{% endhighlight %}

As a result jQuery developers didn't have to choose efficiency over flexibility. While the other frameworks pandered, "One Framework to Rule Them ALL." jQuery played it's hand and moved aside.

### One Developer's Story

jQuery was young and I was an accomplished Prototype developer. I had my favorite Prototype modal dialog I just had to use for a recent project - I had too. But I also wanted to broaden my horizons and try another framework as my main.

At that time, jQuery looked really promising but the plugins were ugly. MooTools had some really beautiful plugins, but the community believed you should only use one JavaScript framework and they weren't budging - I agree with them today ;) Ext JS felt too heavy for me and I passed.

I really liked how polished MooTools plugins were, but choosing MooTools meant I was locked into using MooTools and only MooTools. And as I stated earlier, "I just had to have the Prototype Modal Dialog plugin."

So I went with jQuery. I went with jQuery because it gave me options. And in a world of uncertainty, options are the currency of progress. With a single line of code, I was able to use jQuery as my foundation and still got to use my "favorite" Prototype Modal Dialog.

### The Aftermath

After that project, I never used that Modal Dialog again! And you know what? Something surprising happened - something I didn't even expect to happen: *I never used another JavaScript framework again either.* I was bit by the jQuery bug and I was a convert for life.

How did that happen? How? A single line of code? Really? Yes. *jQuery.noConflict();* allowed me to test the framework and not have to choose between some of my favorite plugins and jQuery. It was not an all or nothing transaction.

The jQuery team knew its JavaScript framework was great and so it decreased the friction needed to adopt jQuery and let evolution play its course. It was a success! Today jQuery is one of the most popular and widely used JavaScript frameworks.

I often wonder how many developers converted to jQuery in that fashion. How many picked up jQuery and never looked back because of *The jQuery Effect*. We may never know the true numbers, but I'd gamble the numbers would be both shocking and impressive.

### Rails 3.1 and jQuery Sitting in a Tree

When Rails 3.0 was released, I believe DHH and the Rails Core Team took a similar stance as the jQuery team did so long ago: Give developers options and get out of the way of progress - let evolution play its course.

Earlier today [DHH announced][1]:

*Rails 3.1 will ship with jQuery as the default JavaScript library. Prototype helpers/RJS are going into a gem.*

I believe Ruby on Rails is the most powerful and beautiful web application framework today. If you doubt that, I dare you to look around the ecosystem. You WILL NOT find a single - respectable - web framework, written in any language, that hasn't adopted the paradigms and philosophies of Rails. Not a single one!

DHH and the Rails Core Team know Rails is the best framework out there and it is up to them to reduce the friction needed to adopt the framework. With the countless number of developers using jQuery, shipping Rails 3.1 with jQuery is a powerful move indeed.

### The Lesson

The lesson here is simple. Reduce the friction between your Product and potential Customer. Make it easy for your customer to access your product. Then the product can stand on its own and wow the customer.

But until you get the product in your customer's hand, what do you have? Nothing. Not even a chance. That's a powerful thing that John Resig and the jQuery Core Team understood well and it paid off big time. First by its adoption my Microsoft and ASP.Net MVC and now by Ruby on Rails.

I commend both the jQuery Core Team and the Rails Core Team. And many thanks for teaching this powerful lesson indeed. I can't wait to get my hands on the Rails 3.1 release.



  [1]: http://twitter.com/dhh/statuses/45923430608023552
