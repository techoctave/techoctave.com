---
layout: post
author: TVD
title: "Create a Blog Archive with Rails"
date: 2010-10-08 01:19:51
permalink: /c7/posts/29-create-a-blog-archive-with-rails
---

Creating an archive for your blog posts can be fun. But first, you'll have to understand ActiveRecord's *group_by* method. 

Previously, I wrote about [SEO Friendly URLs in Rails][1]. Having a well-formed archive helps with SEO by creating a centralized location for all your [Google Bot slugs][2].

Creating a [Google Sitemap for your Rails blog][3] is another good SEO step to consider. Showing Google where to find your posts is wise Rails-fu and will set the stage for your blog's archive.

###Rails ActiveRecord Group_By

Learning to group a collection of your posts by month can be confusing at first. Using Rails' ActiveRecord *group_by* method is the key to success here. Let's get started:

####app/controllers/archives_controller.rb

{% highlight ruby %}
    def index
        @posts = Post.all(:select => "title, id, posted_at", :order => "posted_at DESC")
        @post_months = @posts.group_by { |t| t.posted_at.beginning_of_month }
    end
{% endhighlight %}

The code gets your collection of posts. Then it gets each post's corresponding post date. 

Also, notice the code brings back only the data needed instead of the entire object graph. This decreases latency and thus, increases speed.

Another feature of this code is I'm grouping by month. Now, this may sound more purpose than feature, but it actually means something significant. Grouping by month ensures the list is chronological, even when a new year starts.

####app/views/archives/index.html.erb

{% highlight ruby %}
    <div class="archives">
    	<h2>Blog Archive</h2>
    	
    	<% @post_months.sort.reverse.each do |month, posts| %>
    	<h3><%=h month.strftime("%B %Y") %></h3>
    	<ul>
    		<% for post in posts %>
    		<li><%=h link_to post.title, post_path(post) %></li>
    		<% end %>
    	</ul>
    	<% end %>
    </div>
{% endhighlight %}

This will display a month, then list each blog post for that month. When complete, it will list the next month, etc. Initially, your posts will display from oldest to newest. If that's what you want, then you're done. 

But, if you're like me, you want to display your blog archive posts from newest to oldest. To accomplish this, you need to *reverse* your collection using Ruby's reverse string function.

That's it! Good luck and happy coding!


  [1]: http://techoctave.com/c7/posts/26-seo-friendly-urls-in-rails
  [2]: http://techoctave.com/c7/archives
  [3]: http://techoctave.com/c7/posts/10-scream-seo-karma-with-a-google-sitemap-for-your-rails-blog



