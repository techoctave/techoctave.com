---
layout: post
author: TVD
title: "Rails Request Environment Variables"
date: 2010-09-30 01:28:29
permalink: /c7/posts/25-rails-request-environment-variables
---

You are an internet savvy Starter. So, I hope you're [paying attention to your users somehow][1]! Well, there's gonna come a time when you'll need to do some analytic gathering yourself. Rails environment variables can come in handy then.

I've [written][2] [quite][3] a few [Ruby][4] on [Rails][5] tutorials so far. I hope this Rails tutorial also helps you reach your destination.

###Using Rails Request.env

Here's an example of using the Rails *request.env* object:

{% highlight ruby %}
@contact = Contact.new
@contact.referrer = request.env["HTTP_REFERER"]
@contact.user_agent = request.env["HTTP_USER_AGENT"]
{% endhighlight %}

###Rails Request.env List

Request.env is a Rails object that contains information on your visitor's environment (e.g. browser, referrer) and information on your server's environment. The *request.env* object is a key/value pair Ruby array. Here is the list of the environment variables you have access to:

{% highlight ruby %}
#Rails Request.env Variables
SERVER_NAME
PATH_INFO
REMOTE_HOST
HTTP_ACCEPT_ENCODING
HTTP_USER_AGENT
SERVER_PROTOCOL
HTTP_CACHE_CONTROL
HTTP_ACCEPT_LANGUAGE
HTTP_HOST
REMOTE_ADDR
SERVER_SOFTWARE
HTTP_KEEP_ALIVE
HTTP_REFERER
HTTP_COOKIE
HTTP_ACCEPT_CHARSET
REQUEST_URI
SERVER_PORT
GATEWAY_INTERFACE
QUERY_STRING
REMOTE_USER
HTTP_ACCEPT
REQUEST_METHOD
HTTP_CONNECTION
{% endhighlight %}

Good Luck Beloved! Have Fun!


  [1]: http://www.google.com/analytics/
  [2]: https://techoctave.com/posts/10-scream-seo-karma-with-a-google-sitemap-for-your-rails-blog
  [3]: https://techoctave.com/posts/16-how-to-host-a-rails-app-with-phusion-passenger-for-nginx
  [4]: https://techoctave.com/posts/21-learn-how-to-use-jquery-in-your-ruby-on-rails-app
  [5]: https://techoctave.com/posts/23-rails-date-formats

