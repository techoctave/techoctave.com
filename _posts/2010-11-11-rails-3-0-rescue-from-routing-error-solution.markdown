---
layout: post
author: TVD
title: "Rails 3.0 rescue from Routing Error Solution"
date: 2010-11-11 11:03:09
permalink: /c7/posts/36-rails-3-0-rescue-from-routing-error-solution
---

![wizard](/c7/static/wizard.jpg)

Well, I've got good news and I've got bad news. As of Rails 3.0.1, using rescue_from in your ApplicationController to recover from a routing error is broken! That's the bad news.

The good news is I have a solution that will keep you in unison with the Rails Core Team. The [Rails team has promised a fix some time in Rails 3.1][1]. Until then, I've got readers and I've got customers and I *shudder* at the thought of showing them a generic error page.

### The Situation

It's bad enough an error has occurred in the first place. At that point I want to take control of the situation and rescue my audience from a bad experience back to enjoyment!

Previously in Rails 2.3.8 and below you could handle routing errors elegantly using rescue_from ActionController::RoutingError:

{% highlight ruby %}
class ApplicationController < ActionController::Base
  rescue_from ActionController::RoutingError, :with => :render_404

  private
  def render_404(exception = nil)
    if exception
        logger.info "Rendering 404: #{exception.message}"
    end
      
    render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end
end
{% endhighlight %}

However, things are a little different in Rails 3. The reality is, as of Rails 3.0.1, ApplicationController can't catch ActionController::RoutingError and thus, we cannot take advantage of rescue_from like we used to.

Now, for those of you who don't know, [I'm a realist][2]. So, I'm not expecting the Rails team to spring a solution overnight.

Personally, I'm going to wait for the Official fix from the Rails Core Team. In the meantime, I need a simple, no side effects solution that I can use right now!

### Simple Solution

This is one of those times [when it's great to be a developer][3]. There is nothing we can't solve with a little [elbow grease and ingenuity][4]. 

Expanding on the suggestion given by the Rails core team, here's the solution I use to handle routing errors in Rails 3.0:

####config/routes.rb

This code should go to the end of your routes.rb file. That way it will be given the least priority and therefore, act as a wildcard catchall for all those rogue url resources.

{% highlight ruby %}
Yourapp::Application.routes.draw do
  # Last route in routes.rb
  match '*a', :to => 'errors#routing'
end
{% endhighlight %}

NOTE: The "a" is actually a parameter in the Rails 3 Route Globbing technique. For example, if your url was */this-url-does-not-exist*, then params[:a] equals "*/this-url-does-not-exist*". So be as creative as you'd like handling that rogue route.

####app/controllers/errors_controller.rb
Here, I handle my routing errors. I leverage previous 404 handling code from my original ApplicationController mentioned above. So, my errors_controller.rb looks like this:

{% highlight ruby %}
class ErrorsController < ApplicationController
  def routing
    render_404
  end
end
{% endhighlight %}

However, feel free to modify to fit your individual needs. Everyone's situation will be slightly different. For example, if you're not going to reuse your 404 error handling logic, then here's the full ErrorsController without inheritance:

{% highlight ruby %}
class ErrorsController < ApplicationController
  def routing
   render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end
end
{% endhighlight %}

I'm big on keeping things simple. I believe solutions should be simple without being simplistic. Like I said earlier, I look forward to an Official solution from the Rails Core Team. Until then, this gets the job done!

Well, I encourage you to dig into Rails 3 and [have a little fun][5]. And if you have another solution, post here so we can discuss. Until next time Beloved, take care!


  [1]: https://rails.lighthouseapp.com/projects/8994/tickets/4444-can-no-longer-rescue_from-actioncontrollerroutingerror
  [2]: https://techoctave.com/c7/posts/30-hello-i-m-an-entj
  [3]: https://techoctave.com/c7/posts/35-designer-developer-sweeper
  [4]: https://techoctave.com/c7/posts/17-jquery-dashboard-gauges-using-raphael-xhtml-and-css
  [5]: https://techoctave.com/c7/posts/1-hello-world
  [6]: http://techoctave.com/charts
