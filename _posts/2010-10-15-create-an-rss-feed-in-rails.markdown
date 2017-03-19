---
layout: post
author: TVD
title: "Create an RSS feed in Rails"
date: 2010-10-15 04:16:38
permalink: /c7/posts/32-create-an-rss-feed-in-rails
---

Not too long ago, I showed you [how to create a blog archive for your Rails blog][1]. Well, creating an RSS feed for your Rails blog might not necessarily increase SEO like a [Google Sitemap][2] can, but it's a helluva great way to stay in touch with your readers. 

Here's a walk through for integrating RSS with your Rails blog.

### RSS and Ruby on Rails - The Full Story

####app/controllers/posts_controller.rb

{% highlight ruby %}
@posts = Post.all(:select => "title, author, id, content, posted_at", :order => "posted_at DESC", :limit => 20) 
    
respond_to do |format|
   format.rss { render :layout => false }
end
{% endhighlight %}

In Rails, this call sends all RSS calls to *index.rss.builder* by default. Let's take a look at what that View does.

####app/views/posts/index.rss.builder

This is where all the Railsy magic happens. In another language, in another web application framework, this could've easily been ugly. But with Rails, we're talking *rainbows and ponies* baby!

{% highlight ruby %}
xml.instruct! :xml, :version => "1.0" 
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Your Blog Title"
    xml.description "A blog about software and chocolate"
    xml.link posts_url
    
    for post in @posts
      xml.item do
        xml.title post.title
        xml.description post.content
        xml.pubDate post.posted_at.to_s(:rfc822)
        xml.link post_url(post)
        xml.guid post_url(post)
      end
    end
  end
end
{% endhighlight %}

You just implemented the RSS specification in Ruby on Rails. Congrats! Let's keep moving, we're almost done.

####app/views/layouts/application.html.erb

You can get browsers to auto-detect your Rails blog rss feed with a single line of *Ruby on Rails* code:

{% highlight ruby %}
    <%= auto_discovery_link_tag(:rss, "http://iblog.com") %>
{% endhighlight %}

Or, if you want, you can use straight *XHTML* to get browsers to auto-detect your Rails blog rss feed:

{% highlight ruby %}
    <link href="http://iblog.com" rel="alternate" title="RSS" type="application/rss+xml" />
{% endhighlight %}

That's it, now mere mortals can subscribe to your feed and get inside the mind of a Rails master. Dramatic, I know! 

Have fun and Good Luck! 


  [1]: https://techoctave.com/c7/posts/29-create-a-blog-archive-with-rails
  [2]: https://techoctave.com/c7/posts/10-scream-seo-karma-with-a-google-sitemap-for-your-rails-blog


