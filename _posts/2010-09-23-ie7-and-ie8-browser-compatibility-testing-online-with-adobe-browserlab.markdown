---
layout: post
author: TVD
title: "IE7 and IE8 Browser Compatibility Testing Online with Adobe BrowserLab"
date: 2010-09-23 12:30:00
permalink: /c7/posts/22-ie7-and-ie8-browser-compatibility-testing-online-with-adobe-browserlab
---

![adobe-browserlab](/c7/static/adobe-browserlab.png)

I am a zealot when it comes to *Cross Browser Compatibility*. I never wanted to hear the cost arguments or anything else for that matter. My position was, if it didn't work correctly or at least degrade gracefully across the *major* browsers (Firefox, Chrome, Safari, IE and Opera), then somehow I had failed my clients.

For a long time, I even extended this philosophy to IE6 support *(trembles with a sudden convulsive movement)*. As a result, I came to know every single IE hack and filter. After awhile, I was able to recognize every browser bug by name, but more importantly, identify each browser bug fix.

One happy hour, after a very expensive IE6 bug, a good friend finally convinced me it was time to move on. About nine months ago, in a very unceremonious fashion, I stopped supporting IE6. I've been making more money and gaining more time ever since.

You can save time with your *Cross Browser Compatibility* testing. Recently, I contracted to test a client's Ruby on Rails app across multiple releases of the major browsers. Tired of using the test box, I decided to look for an online replacement to the traditional cross browser testing process. That's when I ran across [Adobe's BrowserLab][1].

Maybe it was just my client's app, but Adobe's rendering engine was kinda slow (1-2 minutes processing). But, once it was done, things got pretty cool, pretty quickly. First, I was able to setup baseline Browser Sets that would run each time I clicked "Test". So, I was testing IE6 through IE8 all at once.

Then using the 2-up View, I was able to compare IE7 and IE8 compatibility side-by-side. Here, the major drawback for me was BrowserLab didn't render the entire page. BrowserLab only rendered up to a certain point on the page. But, it got the job done!

Of course, don't forget to setup a Test suite for Firefox, Chrome, Safari and Opera. But as you might agree, those browsers understand standards well.

How do you handle *Cross Browser Compatibility* issues on your squad? Leave a comment. I'd love to hear your experiences!


  [1]: https://browserlab.adobe.com/en-us/index.html?sc=cslive&rc=1&lang=en_US#state=browse;zoom=100;showDelay=true;url=;delay=0;view=0
