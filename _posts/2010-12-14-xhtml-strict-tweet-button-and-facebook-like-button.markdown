---
layout: post
author: TVD
title: "XHTML Strict Tweet Button and Facebook Like Button"
date: 2010-12-14 01:30:57
permalink: /c7/posts/40-xhtml-strict-tweet-button-and-facebook-like-button
---

*We needed a smart way to grow targeted and relevant Twitter followers. The alternatives were either ugly, abandoned or downright shady (sometimes all three). There had to be a better way. There wasn't, so we built one! Checkout [Tweetlr][1] and build an audience like a Rockstar!*

I like to chillax just as much as the other guy. But when it comes to [cross browser compatibility, you know I'm all business][2]. Well, I recently integrated with Twitter's Tweet Button and Facebook's Like Button for my open source project [Blogcast][3]. I was not happy with the results.

XHTML Strict 1.0 did not validate and after the upgrade to Rails 3, HTML5 didn't validate either! I needed a better way to integrate with Twitter and Facebook. I needed a way that didn't compromise validation and thus, maintainability.

###Pure JavaScript Buttons for Twitter & Facebook

Inspired by the Digg Button, here's the XHTML Strict version of Twitter's Tweet Button and Facebook's Like Button:

####Twitter's Tweet Button

*Pure JavaScript Solution: Asynchronous.*

Here, I use JavaScript to write the anchor hook for the Tweet Button to wrap itself around:

{% highlight js %}
<script type="text/javascript">
//<![CDATA[
(function() {
	document.write('<a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-via="YourTwitter">Tweet</a>');
	var s = document.createElement('SCRIPT'), s1 = document.getElementsByTagName('SCRIPT')[0];
	s.type = 'text/javascript';
	s.async = true;
	s.src = 'http://platform.twitter.com/widgets.js';
	s1.parentNode.insertBefore(s, s1);
})();
//]]>
</script>
{% endhighlight %}

Notice the Twitter JavaScript widget is written asynchronously. This way my page load isn't slowed by Twitter's widget since it is now non-blocking. Asynchronous means my blog content will load before any of the Twitter Tweet Button objects.

NOTE: Change the data-via attribute from "YourTwitter" to your actual twitter account. This will do two things:

{% highlight bash %}
 1. Through the via note, it gives you credit when your content is tweeted. E.g. XHTML Strict Tweet Button and Facebook Like Button http://t.co/URLsepW via @tiandavis
 
 2. Once your content is tweeted, Twitter suggests your reader to follow your twitter account. So this can be used as a method of increasing your Twitter followers.
{% endhighlight %}

Simply remove the *data-via="YourTwitter"* piece of code if you don't have a twitter account. Enjoy!

*Query String Solution: Synchronous.*

A synchronous solution is also available for Twitter's Tweet Button. Here, instead of using HTML5 data attributes, this solution passes the data attributes as query parameters to Twitter's share service:

{% highlight html %}
    <a href="http://twitter.com/share?count=vertical&amp;via=YourTwitter" class="twitter-share-button">Tweet</a>

    <script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>
{% endhighlight %}

This solution is somewhat cleaner and certainly involves less code. However, this solution also means Twitter's code will load at the same time as your app's code (synchronously). This could potentially block some of your content from loading until the Tweet Button has finished loading.

I'm not really a fan of this solution because I believe my content should Trump Twitter's Tweet Button and thus, I feel the Tweet Button should load after my content.

Also, for each property you should URL encode the value you are sending. Failure to do so could mean some of your URLs don't function properly. *You won't have this issue if you choose the asynchronous Tweet Button solution.*

For speed, reliability and maintainability, better to go with the asynchronous Tweet Button solution.

NOTE: Change the data-via attribute from "YourTwitter" to your actual twitter account. *See above.*

####Facebook's Like Button

*Pure JavaScript Solution: Asynchronous.*

The same benefits achieved in the Tweet Button are achieved here with the Facebook Like Button:

{% highlight js %}
<script type="text/javascript">
//<![CDATA[
(function() {
	document.write('<fb:like width="250"></fb:like>');
	var s = document.createElement('SCRIPT'), s1 = document.getElementsByTagName('SCRIPT')[0];
	s.type = 'text/javascript';
	s.async = true;
	s.src = 'http://connect.facebook.net/en_US/all.js#xfbml=1';
	s1.parentNode.insertBefore(s, s1);
})();
//]]>
</script>
{% endhighlight %}

In particular, I avoid placing the FBML tag directly in my XHTML code. It goes without saying that FBML is thoroughly not standards-compliant code. In addition, I see no reason to chase non-standard HTML headers just because Facebook thinks it's cool to have its own custom markup.

###A Note on Maintainability

XHTML Strict concerns go beyond validation and truly speak to maintainability. The more XHTML Strict your code is, the less likely it is to break a piece of JavaScript. 

Using semantic XHTML also increases the chance your application will display as expected across a wider variety of web browsers.

Also, when you do break validation, it will be easier to track the source without needless validation errors piling up from social media widgets. Inevitably, there will come a time when validation isn't achievable, but this isn't one of them.

Maintaining a clean XHTML Strict 1.0 code base may take a little more work, but I think it speaks to a higher calling than code. I think it speaks to Craftsmanship!

Until next time, take care Beloved!


  [1]: http://techoctave.com/tweetlr
  [2]: https://techoctave.com/posts/33-the-truth-about-cross-browser-development-and-3-secrets-to-better-compatibility
  [3]: http://techoctave.com/blogcast
