---
layout: post
author: TVD
title: "SEO Friendly URLs in Rails"
date: 2010-10-02 01:29:53
permalink: /c7/posts/26-seo-friendly-urls-in-rails
---

Yesterday, a client asked about the potential for SEO friendly URLs for his web project. Apparently, every time he'd ask a consultant about SEO friendly URLs he always got the spiel about how difficult it is.

I always laugh when I hear these things. You see, with the simplicity and power of Rails, SEO friendly URLs are not only possible, they are expected!

### Sweet Google Slugs
Here's a quick run down of the process. Take for example a blog post called *SEO Friendly URLs in Rails*.

####config/routes.rb

This is an example of how to setup RESTful routes in Rails. I'll elaborate on Rails and RESTful architecture another time.

{% highlight ruby %}
map.resources :posts
{% endhighlight %}

UPDATE: The above route was written for Rails 2.3.8. Here is the updated Route for Rails 3.0:

{% highlight ruby %}
resources :posts
{% endhighlight %}

####app/models/post.rb

In your Post domain model, override the to_param method. Here, you can specify the unique id format for each instance of a Post object:

{% highlight ruby %}
def to_param
  "#{id}-#{title.downcase.gsub(/[^a-zA-Z0-9]+/, '-').gsub(/-{2,}/, '-').gsub(/^-|-$/, '')}"
end
{% endhighlight %}

Here, to_param is composed of three regular expressions that are worth discussing in details:

{% highlight ruby %}
1. Removes all non alphanumeric characters from the string.

2. No more than one of the separator in a row.

3. Remove leading/trailing separator.
{% endhighlight %}

####app/views/posts/index.html.erb

Creating a hyperlink from the Post model will create a reference of */posts/26-seo-friendly-urls-in-rails* Voila! A nice Google slug for your friendly neighborhood Google Bot spider:

{% highlight ruby %}
<%= link_to @post.title, @post %>
{% endhighlight %}

####app/controllers/posts_controller.rb

When you go to show the specific post, the actual :id is *26-seo-friendly-urls-in-rails*.

{% highlight ruby %}
def show
  @post = Post.find(params[:id])
end
{% endhighlight %}

As you already know, your :id needs to be an integer value. But, don't worry, Rails is smart enough to call Ruby's to_i to convert your :id to an integer.

With Rails you crack open a big bottle of Awesome and BAMM! You've got SEO friendly URLs. That's good news! Take it from me, you've got better things to worry about, like figuring out [how to host your Rails application][1].

Either way, you run into trouble, you drop me a line!


  [1]: https://techoctave.com/posts/16-how-to-host-a-rails-app-with-phusion-passenger-for-nginx
