---
layout: post
author: TVD
title: "The Truth about Cross Browser Development and 3 Secrets to better Compatibility"
date: 2010-10-22 12:31:20
permalink: /c7/posts/33-the-truth-about-cross-browser-development-and-3-secrets-to-better-compatibility
---

People like me make Cross Browser development look easy. We tout cross browser [jQuery Dashboard Gauges][1] and [easy compatibility testing online][2], but what we don't tell you is that Cross Browser development is hard! Really hard!

The perfect lie is pretending that it's not. Well, I confess, it's not! So today, I'm gonna give all my secrets away:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/qHm9MG9xw1o" frameborder="0" allowfullscreen></iframe>

##### Secrets, Waking Up (Album), OneRepublic

### Secret #1: Use jQuery

jQuery gives you a lot of power! But, I encourage you to see jQuery for more than just add-ons and plugins. The truth is jQuery abstracts away cross browser JavaScript issues so you can focus on development.

Since the rise of [jQuery][3], many developers either don't remember or are too young to remember the days of JavaScript compatibility hell. There are still many applications in production that were coded specifically to IE6. This happens when you use non-standard objects supplied by IE or any other browser for this matter.

jQuery alleviates this problem by giving you common functionality and then it worries about what function to call for each browser. Pure Awesome! There's a reason [I liken Passenger for Nginx to jQuery][4]! Ponies and Rainbows anyone?

#### Super High-fidelity Batman Utility Belt

[Firebug][5] is a Firefox add-on. Get it! Get it right now! It's my #1 tool for debugging AJAX issues. It's also great for examining XHTML injection at run-time and trouble shooting CSS layout issues.

### Secret #2: Write CSS and XHTML against Firefox

[Firefox][6] is not only the best browser. Firefox is also the closest browser to implement web standards completely and correctly. What this means is if you code your CSS and XHTML to Firefox, you guarantee almost 99% cross browser compatibility.

Use *XHTML 1.0 Strict* as much as possible, but don't be afraid to use *XHTML 1.0 Transitional* when the business case calls for it. And don't be too hard on yourself. Eventually, you're going to need a [Tweet Button or a Facebook Like Button][7] that is not standards compliant. Let it go!

Then you check and tweak for the other major browsers: *Safari, Chrome, Opera and IE*. The caveat, however, is [most of your tweaks will be against IE][8]. That said, the recent versions of IE have come a long way towards standards compliance.

#### Super High-fidelity Batman Utility Belt

[Firefox][9].

### Secret #3: Test Often and Test Religiously

Don't go too long without running your code through the [W3C Markup Validation Service][10]. The trick is the more you validate during markup design and during development, the easier it is to remain standards compliant.

I can't overstate that enough - test often and test religiously! And for Pete's sake, make sure you test in all the major browsers: *Firefox, Safari, Chrome, Opera and IE7+*.

#### Super High-fidelity Batman Utility Belt

[Firefox Web Developer][11] is another great Firefox add-on. Use Firefox Web Developer to make sure you are always in *Standards Compliance Mode*. Use the same tool to validate your XHTML markup against the W3C Markup Validation Service. Also use it to keep constant tabs on whether you are in *Standards Compliance Mode*.


  [1]: https://techoctave.com/c7/posts/17-jquery-dashboard-gauges-using-raphael-xhtml-and-css
  [2]: https://techoctave.com/c7/posts/22-ie7-and-ie8-browser-compatibility-testing-online-with-adobe-browserlab
  [3]: http://jquery.com/
  [4]: https://techoctave.com/c7/posts/3-passenger-for-nginx-is-the-jquery-of-web-server-software
  [5]: http://getfirebug.com/
  [6]: http://www.mozilla.com/en-US/firefox/
  [7]: https://techoctave.com/c7/posts/40-xhtml-strict-tweet-button-and-facebook-like-button
  [8]: https://techoctave.com/c7/posts/22-ie7-and-ie8-browser-compatibility-testing-online-with-adobe-browserlab
  [9]: http://en.wikipedia.org/wiki/Firefox
  [10]: http://validator.w3.org/
  [11]: http://chrispederick.com/work/web-developer/
