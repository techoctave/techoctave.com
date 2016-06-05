---
layout: post
author: TVD
title: "Embed YouTube Videos with XHTML Strict Code"
date: 2010-07-30 06:07:23
permalink: /c7/posts/6-embed-youtube-videos-with-xhtml-strict-code
---

In my last post on [Ferris Club][1] I used a typical YouTube video. But, I bet you didn't know that little morsel of code was XHTML 1.0 Strict compliant!

###XHTML Strict 1.0 or Bust

####The Code

The default YouTube code is ugly and dangerous to puppies. Strip away all the baggage until you have this:

{% highlight html %}
<object type="application/x-shockwave-flash" width="520" height="350" data="http://www.youtube.com/v/owGykVbfgUE&amp;hl=en_US&amp;fs=1?rel=0"></object>
{% endhighlight %}

Modify the width and height to your taste, then replace the data url with your YouTube video of choice. Rinse. Repeat and enjoy! See, XHTML 1.0 Strict can be social and sexy.

So you know it actually works, here is the embedded YouTube video from the example we reviewed. Without further ado, here is Isaiah Mustafa aka The Old Spice Guy in *The Man Your Man Could Smell Like*:

<iframe width="100%" height="500" src="https://www.youtube.com/embed/owGykVbfgUE" frameborder="0" allowfullscreen></iframe>

####The History

For those of you that didn't know, the < embed /> tag has been deprecated since XHTML 1.0. In other words, fire it faster than Omarosa!

Look down. Look up. I'm on a horse.


  [1]: https://techoctave.com/posts/5-think-you-know-ferris-bueller-think-again-ferris-club
