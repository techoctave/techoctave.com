---
layout: post
author: TVD
title: "Create your blog post meta description automatically in Rails"
date: 2010-12-27 02:30:15
permalink: /c7/posts/42-create-your-blog-post-meta-description-automatically-in-rails
---

Google uses your blog's meta description to create a synopsis of your link's content. This description shows up when someone Googles key terms. The better the description, the more likely someone will spot your link and click it.

What better way to populate your blog's meta description than with your blog's content! I've created an algorithm to extract the first 250 characters of your blog's content for dynamic insertion into your blog's meta description. 

For me, having my meta description created automatically is one less thing I have to worry about. That way I can focus on writing. That's why I created it and that's why I use it in [Blogcast][1].

###Time for Some Rails Goodness

####helpers/posts_helper.rb
I put the code in a helper to make integration in the Post view a little cleaner. I'm happy with the results. The code is a bit involved, so I break down the details in the algorithm below.

{% highlight ruby %}
    module PostsHelper
      def description(content)
        sanitize(content.gsub(/<code[^<]*<\/code>/, ""), :tags => %w(), :attributes => %w()).gsub(/[\r\n?]/, " ").squeeze(" ").gsub(/\"/, "'")[0..250].strip
      end
    end
{% endhighlight %}

I use the sanitize core method to clean up any HTML blocks hanging around. I also use a little regular expression to make sure none of our beautiful code samples clog up our SEO pipeline.

####views/posts/show.html.erb

Here, I deliver a nice neat little present for Google. Hello Google!

{% highlight ruby %}
    <% content_for :description do %>
       <%= description(@post.content) %>
    <% end %>
{% endhighlight %}

####Here's the algorithm:

{% highlight ruby %}
 1. Remove any code blocks from the content
 
 2. Sanitize content of any HTML code
 
 3. Remove any newline characters
 
 4. Truncate multiple sequences of spaces to a single space
 
 5. Replace double-quotes with single quotes
 
 6. Grab the first 250 characters
 
 7. Trim out any extra spaces hanging around
{% endhighlight %}

Why grab 250 characters? Well, there's been reports that Google uses anywhere from 150-180 characters of the meta description for your link's description snippet. Either way, Google doesn't penalize for having extra characters.

That said, Google hasn't confirmed exactly how much characters they use. So, I think 250 is good because you can ensure more description of the link, even if just a little bit.

Of course, if you don't provide a meta description, Google will discern one from the content of your page. Which is best? Well, it really depends. You should make a judgment call based on your situation.

Until next time Beloved, take care!

  [1]: http://techoctave.com/blogcast
