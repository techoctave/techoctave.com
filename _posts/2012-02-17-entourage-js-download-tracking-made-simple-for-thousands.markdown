---
layout: post
author: TVD
title: "Entourage.js - download tracking made simple for thousands"
date: 2012-02-17 02:58:44
permalink: /c7/posts/69-entourage-js-download-tracking-made-simple-for-thousands
---

<a href="http://techoctave.com/entourage/"><img src="https://techoctave.com/c7/static/entourage.png"/></a>


Six months ago, I set out to change the way people [track file downloads with Google Analytics][1]. Amidst great success, lo and behold, entourage.js version 1.1.2 has arrived:

###Lights. Cameras. Action.

After nearly 10,000 downloads, I'm happy to say [entourage.js][2] can be found on websites large and small. 

Starters who sell online books use entourage. Transit authorities use entourage. Hospitals use entourage. Influential bloggers and SEO agencies use entourage. And they all love it!

Entourage.js remains unobtrusive and standards based. It's an excellent choice for developers and non-developers alike. Just drop entourage into your existing code base and you're done:

{% highlight js %}
<script type="text/javascript" src="entourage.js"></script>
{% endhighlight %}


Need to track a large amount or even a small amount of file downloads? Checkout [entourage.js][3]. It's the only automatic download tracking for asynchronous Google Analytics that just works!

####Changelog

{% highlight bash %}
- Previously attached Entourage to "every" link. Here, the issue was Entourage clobbered existing link events - that's bad. Upgrade to attach Entourage only to links with a whitelisted download type.

- Refactored code base.
{% endhighlight %}


A big shoutout to [@MikeCP][4] for identifying, analyzing and submitting the issue. Entourage wouldn't be as great without such a talented and passionate community. Enjoy!


  [1]: https://techoctave.com/posts/58-entourage-js-automatic-download-tracking-for-asynchronous-google-analytics
  [2]: http://techoctave.com/entourage/
  [3]: http://techoctave.com/entourage/
  [4]: https://twitter.com/#!/MikeCP
