---
layout: post
author: TVD
title: "Scream SEO Karma with a Google Sitemap for your Rails Blog"
date: 2010-08-26 09:55:00
permalink: /c7/posts/10-scream-seo-karma-with-a-google-sitemap-for-your-rails-blog
---

Recently, I advised a client on what I consider the [top three Google services][1] for his next social media project. Today I want to talk about a fourth Google service I think is helpful, but certainly not mandatory: *Google Sitemaps*.

Think about it, you've spent hours toiling away at your next awesome blog post. Why not help Google find that content it might not have found otherwise? Typically you have to manually build the sitemap. Then you have to manually submit the sitemap to Google. Who has time for all of that?

###Rails Google Sitemap Code

Dynamically create a sitemap for your blog the Rails way.
I know some of you are anxious to jump into the code, so let's get to it:

####config/routes.rb

Create the following Rails route:

{% highlight ruby %}
map.sitemap 'sitemap.xml', :controller => 'sitemap'
{% endhighlight %}

UPDATE: Above route was written for Rails 2.3.8. Here is the updated route for Rails 3.0. Remaining code is Rails 3.0 complaint:

{% highlight ruby %}
match 'sitemap', :to => 'sitemap#index', :via => [:get]
{% endhighlight %}

####app/controllers/sitemap_controller.rb

Create the following Rails controller to serve the Google sitemap requests:

{% highlight ruby %}
class SitemapController < ApplicationController
  def index
    @posts = Post.all(:select => "title, id, updated_at", :order => "updated_at DESC", :limit => 50000) 
    
    respond_to do |format|
      format.xml { render :layout => false }
    end
  end
end
{% endhighlight %}

####app/views/sitemap/index.xml.builder

The *.xml.builder file does the work of formatting the list of Posts into a Google sitemap compliant file: 

{% highlight ruby %}
xml.instruct! :xml, :version => "1.0"
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
  for post in @posts do
    xml.url do
      xml.loc post_url(post)
      xml.lastmod post.updated_at.to_date
      xml.changefreq "monthly"
      xml.priority "0.5"
    end
  end
end
{% endhighlight %}

Beware, there is a 50,000 URL limit for each sitemap you submit to Google through its indexing service.

###Submit Sitemap to Google Automatically
You can also automate your sitemap.xml submissions to Google using this handy Cronjob on Ubuntu or any flavor of linux:

{% highlight bash %}
0 20 * * * /usr/bin/curl http://www.google.com/webmasters/tools/ping?sitemap=http://yourdomain.com/sitemap.xml > /dev/null
{% endhighlight %}

Do pay attention to the */user/bin/curl* directive. You must give the *absolute* path to your instance of curl. Also, I don't want to handle any responses from Google, so I send any responses to */dev/null*. Think of */dev/null* as a black hole where data goes in and is never stored or seen again!

Good luck with your next social media venture. And remember to take some time to [have fun][2] with it!


  [1]: http://techoctave.com/c7/posts/9-three-important-google-services-youre-probably-missing
  [2]: http://techoctave.com/c7/posts/1-hello-world
