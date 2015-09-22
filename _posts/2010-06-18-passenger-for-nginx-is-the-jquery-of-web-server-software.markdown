---
layout: post
author: TVD
title: "Passenger for Nginx is the jQuery of Web Server Software"
date: 2010-06-18 05:30:34
permalink: c7/posts/3-passenger-for-nginx-is-the-jquery-of-web-server-software
---

Update: Check out my tutorial on [How to host a Rails app with Phusion Passenger for Nginx][1].

###Be Careful with that Latte

Earlier this week, I consulted on a client's Rails app deployment. The client was trying to deploy his Software as a Service Rails app on an Ubuntu distro using Apache and modruby. Everything sounded decent until I heard modruby.

I nearly fell off my overpriced Starbucks bar stool! I couldn't phantom someone using modruby. Its unbelievable class sharing issue coupled with its lack of maintenance is a disaster waiting to happen. 

I couldn't let my client do that. "Have you heard of *Phusion Passenger for Nginx*?" I said. "Let me tell you all about it..." That's why they pay me the big bucks!

###Nginx, Passenger and Ruby Enterprise Edition (REE)

Nginx is a powerful, lightweight, high-performance Web server. Phusion passenger a.k.a. mod rails is thee pre-eminent Ruby on Rails application server. 

![nginx](/images/nginx.png)

Combined with Ruby Enterprise Edition (REE), your next Rails app could use 33% less memory. On average, that's about 250MB less memory footprint versus another infrastructure strategy. All that cost savings for the same app!

###Finally Some Syntactic Sugar with your Coffee

When I say Nginx is the jQuery of Web servers, I mean Nginx is simple without being simplistic. With its C like configuration syntax, you can express Web server related tasks in a developer appealing way. I predict Nginx will do for Web server deployment what jQuery did for JavaScript development - revolutionize!

Take this common Web server task written in Nginx:

{% highlight bash %}
## Redirect from www to non-www
if ($host = 'www.domain.com') {
	 rewrite  ^/(.*)$  http://domain.com/$1  permanent;
}
{% endhighlight %}


Compare this same task in Apache:

{% highlight bash %}
<VirtualHost *:80>
    ServerName www.domain.com
    Redirect permanent / http://domain.com/
</VirtualHost>
{% endhighlight %}

Nginx is intuitive and expressive and as a developer I choose to write this task in Nginx. It just feels less heavy and I appreciate not having to deal with the XML hell in the long run. Thanks Nginx!


  [1]: http://techoctave.com/c7/posts/16-how-to-host-a-rails-app-with-phusion-passenger-for-nginx
