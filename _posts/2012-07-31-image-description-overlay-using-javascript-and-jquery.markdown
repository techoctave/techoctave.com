---
layout: post
author: TVD
title: "Image Description Overlay using JavaScript and jQuery"
date: 2012-07-31 01:59:54
permalink: /c7/posts/84-image-description-overlay-using-javascript-and-jquery
---

<img src="http://techoctave.com/c7/static/ferrari-california-overlay.png" alt="The Ferrari California is a grand touring sports car. The car revives the ‘California’ name used for the late-1950s Ferrari 250 GT."/>

We all know accessibility and SEO are important facets of web application development. Accessibility, itself, speaks to the heart of what the web is all about. Namely, the ability for people to break free from whatever bonds hold them at bay and explore a world vast and wild. I know first hand the power of that freedom.

While writing this article, I got to see live and in-person how magnificent the Ferrari California truly is. Inspired and pumped, I implemented one of its dashboard gauges. You can find the Ferrari California dashboard gauge in our [JavaScript Gauge Suite][1].

###SEO and Accessibility Matter

Accessibility and SEO come into play particularly with image rich applications. Think Instagram for example. With these types of applications, it is important to specify the alt attribute on each and every image: 

{% highlight js %}
    <img class="overlay" src="ferrari.jpg" alt="The Ferrari California is a grand touring sports car. The car revives the 'California' name used for the late-1950s Ferrari 250 GT."/>
{% endhighlight %}

This ensures the application is readable to a whole host of folks who otherwise wouldn't be privy to the information. Wouldn't it be cool if we could reuse that alt attribute to enhance our application? That's exactly what we are going to do in this lesson — JavaScript style.

###Adding Image Overlays (Automatically)

The image must have an *overlay* class attribute. Then we'll write code to reuse each image's alt tag to create a description overlay on hover.

Here is the jQuery and JavaScript code to add the image overlay:

{% highlight js %}
$(window).load(function() {
  $("img.overlay").each(function(){
    //Wrap the image with an overlay
    $(this).wrap("<div class='description_overlay'></div>");
	
    //Cache description overlay object
    var o = $(this).parent(".description_overlay");
	
    //Append the description to the overlay
    o.append("<div class='description'><div class='description_content'></div></div>");
	
    //Align the description with the image
    o.find(".description").css("opacity", 0);
    o.find(".description").css("width", $(this).width());
    o.find(".description").css("display", "block");
    o.find(".description").css("text-align", "center");

    //Set the description from the img alt attribute
    o.find(".description_content").html($(this).attr("alt"));
	
    //Apply the hover effects
    o.mouseover(function(){
      o.find(".description").stop().fadeTo(500, 0.7);
    });

    o.mouseout(function(){
      o.find(".description").stop().fadeTo(500, 0);
    });
  });
});
{% endhighlight %}

For each image with the class overlay, we start to apply our techniques. First, we wrap that image with description_overlay div and append placeholders for the description content.

Some CSS needs to be messaged a little:

{% highlight css %}
.description_overlay {  
    position: relative;
	margin-left: 21em;
	margin-top: 5em;
}  

.description {  
    position: absolute; 
    bottom: 5px;
    left: 0px;  
    display: none; 

    background-color: black;  
    font-family: "arial";  
    font-size: 1em;  
    color: white; 
}  

.description_content {  
    padding: 20px;  
}

.description, img {
	cursor: pointer;
}
{% endhighlight %}

See, not as much CSS as you would think...

After some CSS messaging, we then apply the alt content to the description placeholder. Finally, we apply the mouseover and mouseout hover effects.

It’s great isn’t it!
It’s still JavaScript, but it's clean and beautiful. Just like that Ferrari California you’ll be driving if you stick with me. :-)

Oh and before I forget...Yes - I drove the hell outta it!!! ;)




  [1]: http://techoctave.com/gauges/
  [2]: http://techoctave.com/learn-coffee-script-like-a-boss/
