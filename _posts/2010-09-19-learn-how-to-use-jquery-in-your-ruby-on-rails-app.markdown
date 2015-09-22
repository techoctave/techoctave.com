---
layout: post
author: TVD
title: "Learn How to use jQuery in your Ruby on Rails App"
date: 2010-09-19 03:35:47
permalink: /c7/posts/21-learn-how-to-use-jquery-in-your-ruby-on-rails-app
---

Prototype is great, but you want to use Rails and AJAX in your application with jQuery and on your terms. Welcome Netizen! 

We need to take a couple steps before we start using jQuery in-place of RJS, so let's jump right in. Pretend you have a blog and you want to preview Comments using AJAX. That should set the scene:

###Help Rails recognize AJAX requests

You need to set each AJAX request header to "text/javascript". This gives Rails the ability to recognize AJAX requests.

public/javascripts/blog.js

{% highlight ruby %}
    jQuery(document).ready(function($) {
      //Tell Rails that we’re sending a JavaScript request
      $.ajaxSetup({  
    	 'beforeSend': function (xhr){
         xhr.setRequestHeader("Accept", "text/javascript")}  
      });

      //General helper for forms submitted via ajax
      $("form.remote_for").submit(function (){
         $('input[type=submit]').attr('disabled', 'disabled');
         $.post($(this).attr('action'), $(this).serialize(), null, "script");  
         return false;
      });
    }); //document.ready
{% endhighlight %}

app/views/posts/show.html.erb

{% highlight ruby %}
    <% form_for([@post, @comment], :html => { :class => "remote_for" }) do |f| %>
    ...
    <% end %>
{% endhighlight %}

###Remove layouts for AJAX requests automatically

app/controllers/application_controller.rb

{% highlight ruby %}
    #Remove layouts for all ajax calls
    layout proc{ |c| c.request.xhr? ? false : "application" }
{% endhighlight %}

###Preview your Rails blog Comment

app/controllers/comments_controller.rb

{% highlight ruby %}
     #POST /posts/1-hello-world/comments/preview
     def preview
        @post = Post.find(params[:post_id])
        @comment = @post.comments.build(params[:comment])
    
        respond_to do |format|
           format.html { post_url(@post) }
           format.js #auto-maps to preview.js.erb
        end
     end
{% endhighlight %}

app/views/comments/preview.js.erb

Here, the elegance of Rails and the beauty of jQuery combine at that miraculous middle ground of function and instinct. This is where you can embed your Rails Domain Model data into your jQuery code.

{% highlight ruby %}
    jQuery(document).ready(function($) {
    	$("#comment_preview").empty();
    	$("#comment_preview").append("<%= escape_javascript(render :partial => @comment, :locals => { :post => @post }) %>");
    	
    	$("#new_comment_canvas").hide();
    	$("#comment_preview_canvas").show();
    });
{% endhighlight %}

Once Rails finishes processing the @comment and @post Models, it will return the resulting JavaScript to the Browser as an AJAX response. So, the mechanics of AJAX communication is abstracted away and you're left free to focus on your user's experience.

app/views/posts/show.html.erb

{% highlight ruby %}
    <div id="comment_preview_canvas">
    	<div id="comment_preview"></div>
    </div>
{% endhighlight %}

So to summarize, here are the steps to use jQuery in your next Ruby on Rails app:

{% highlight bash %}
 1. Show Rails how to recognize AJAX requests
 
 2. Submit your HTTP response to Rails as an AJAX request
 
 3. Remove layouts for AJAX calls
 
 4. Respond to AJAX calls via action.js.erb
 
 5. Place your jQuery code in action.js.erb
 
 6. Have XHTML code ready to show your AJAX results
{% endhighlight %}

That's it! Don't worry, you'll get used to it soon enough. I've done it so many times that I can do it in my sleep. It'll take you a tad bit longer, but stick with it. Good Luck!

