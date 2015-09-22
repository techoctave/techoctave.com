---
layout: post
author: TVD
title: "Rails Sub URI 403 Forbidden Errors when Deploying with Passenger for Nginx"
date: 2010-07-01 08:00:03
permalink: c7/posts/4-rails-sub-uri-403-forbidden-errors-when-deploying-with-passenger-for-nginx
---

Update: Check out my tutorial on [How to host a Rails app with Phusion Passenger for Nginx][1].

###Beware of Symlink and 403 Forbidden Errors
In my last post, I sold a client on using [Passenger for Nginx][2] and predicted Nginx will do for Web server deployment what jQuery did for JavaScript development.

Not too long after, the client's developer calls me freaking out! He'd been working for 72 hours (non-stop) trying to get the client's blog deployed to a sub URI of the client's domain and couldn't. Everything he did gave him a nasty 403 Forbidden error. I really felt for the guy. I remember those days!

After hearing 403 Forbidden, immediately I knew he had a symlink issue. The problem is a very subtle misunderstanding in the way the Passenger for Nginx documentation reads. To create a sub URI, you want to create a symlink of your Rails app's public directory to your domain's public_html directory:

{% highlight bash %}
ln -s /webapps/mycook/public /websites/phusion/rails
{% endhighlight %}

The problem is many developers mistakenly create a *rails* folder in the public_html directory. So when the above code is executed, a symlink named public will be created in that directory. This will create nasty 403 Forbidden errors because no index.html file exists in the folder and directory listing is disabled by Nginx.

The solution is DO NOT make a directory called rails. Instead, just run the symlink command and it will create a symlink called *rails* in the domain's public_html root directory. 

No one told you to create a directory before running the symlink command, did they? Think about it!


  [1]: http://techoctave.com/c7/posts/16-how-to-host-a-rails-app-with-phusion-passenger-for-nginx
  [2]: http://techoctave.com/c7/posts/3-passenger-for-nginx-is-the-jquery-of-web-server-software
