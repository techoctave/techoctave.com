---
layout: post
author: TVD
title: "CSS Image Replacement using the Phark Technique"
date: 2010-09-02 01:36:52
permalink: /c7/posts/14-css-image-replacement-using-the-phark-technique
---

![css-phark](/c7/static/css-phark.jpg)

Of course context is King, but for most of your image replacement needs, Phark will get the job done. Phark is a semantic, screenreader-friendly image replacement technique developed by Mike Rundle.

Previously, I showed you how to [automatically submit your blog's Sitemap to Google][1]. Having a sitemap might help Google find content it might not have found otherwise. The Phark image replacement technique also helps Google find content it might not have found.

###Phark Image Replacement Technique

But more importantly, the Phark technique  will help readers with seeing difficulties better enjoy your content because the screenreader will read expressive text instead of hitting a boring image tag.

Here's the HTML:

{% highlight html %}
    <h2>
      Sunflower
    </h2>
{% endhighlight %}

Here's the CSS:

{% highlight css %}
    h2 {
     text-indent: -10000px;
     background: url("sunflower.png") no-repeat;
     width: 150px;
     height: 100px;
    }
{% endhighlight %}

The great thing here is you're not *hiding* any text like other techniques call for. Therefore, you don't run the risk of potentially getting penalized for *hidden* text by Google.

Using this CSS image replacement technique will also help you code more semantic XHTML and ensure you're writing Unobtrusive CSS. Did I mention it's also good for saving baby kittens and reducing carbon emissions?

Hey, it's semantic XHMTL markup at its sexiest. Use the Phark CSS image replacement technique! Think of the baby kittens...


  [1]: http://techoctave.com/c7/posts/10-scream-seo-karma-with-a-google-sitemap-for-your-rails-blog
