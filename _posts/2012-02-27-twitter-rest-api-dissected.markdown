---
layout: post
author: TVD
title: "Twitter REST API Dissected"
date: 2012-02-27 10:04:41
permalink: /c7/posts/71-twitter-rest-api-dissected
---

<img src="/c7/static/rest.jpg" width="100%" alt="Twitter's REST API Dissected"/>

Consuming a RESTful Web Service is non trivial at best. Building our Twitter CRM - [Tweetlr][1] - showed me first hand how verbosity and inconsistencies manifest in web service design.

Building a RESTful Web Service for others to consume is a whole other story. It's not easy. While I don't believe we need to be [saved from REST][2], I do believe clarity on the principles of REST is both prudent and necessary. Especially, when it comes to [best practices in the forth coming ASP.NET Web API][3].

###Working through some examples

At its core, [REST][5] is a combination of HTTP Verbs (GET, POST, PUT, DELETE), Resources (e.g. http://twitter.com/tweets/) and the Internet Media Type returned (e.g. JSON, XML, SOAP). 

Let's work through some modified examples from David's presentation. Please see the presentation for original examples:

####Example #1: Statuses/Show

GET http://api.twitter.com/1/statuses/show/id.format

**Problems:**

{% highlight ruby %}
- Operation ("Show") included in the URL
- Status ID not a child of the "statuses" collection
{% endhighlight %}

**Better:** GET http://twitter.com/tweets/id.format

{% highlight ruby %}
- Show via combo of GET HTTP Verb and tweets Resource

- Internet Media type returned could be JSON, XML, SOAP, etc.
{% endhighlight %}

####Example #2: Statuses/Update

POST http://api.twitter.com/1/statuses/update.format

**Problems:**

{% highlight ruby %}
- Operation ("update") included in the URL
- Uses the authenticated user implicitly
{% endhighlight %}

**Better:** PUT http://twitter.com/tweets/id.format

{% highlight ruby %}
- User authentication via OAuth or Basic Authentication

- Update via combo of PUT HTTP Verb and tweets Resource

- Internet Media type returned could be JSON, XML, SOAP, etc.
{% endhighlight %}

####Example #3: Statuses/Destroy

POST http://api.twitter.com/1/statuses/destroy/id.format

**Problems:**

{% highlight ruby %}
- Operation ("destroy") included in URL like it's 1997.
- Odd, illogical hierarchy again
- Allows both "POST" and "DELETE" as verbs
{% endhighlight %}

**Better:** DELETE http://twitter.com/tweets/id.format

{% highlight ruby %}
- Delete via combo of DELETE HTTP Verb and tweets Resource

- Internet Media type returned could be JSON, XML, SOAP, etc.
{% endhighlight %}

###Summary

At University, during heated debates, a good friend always reminded me not to throw the baby out with the bath water. I think that advice is prudent here.

[REST][6] is no more a framework than Agile is. Both are fundamental principles we should use to guide our actions, not restrain them. Fundamentalism is no substitute for passion, reason and debate.

Let's recap:

GET http://twitter.com/tweets/

{% highlight ruby %}
- GET to fetch a list tweets for the authenticated user.
{% endhighlight %}

POST http://twitter.com/tweets/

{% highlight ruby %}
- POST to create a new tweet
{% endhighlight %}

PUT http://twitter.com/tweets/12345

{% highlight ruby %}
- PUT to update tweet 12345
{% endhighlight %}

DELETE http://twitter.com/tweets/12345

{% highlight ruby %}
- DELETE to delete tweet 12345
{% endhighlight %}

  [1]: http://techoctave.com/tweetlr
  [2]: http://wekeroad.com/2012/02/28/someone-save-us-from-rest/
  [3]: http://codebetter.com/glennblock/2012/02/28/why-are-there-2-controllers-in-the-asp-net-web-api-contactmanager-example-rest-has-nothing-to-with-it-2/
  [5]: http://martinfowler.com/articles/richardsonMaturityModel.html
  [6]: http://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven
