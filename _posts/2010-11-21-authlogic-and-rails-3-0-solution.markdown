---
layout: post
author: TVD
title: "Authlogic and Rails 3.0 Solution"
date: 2010-11-21 02:37:18
permalink: /c7/posts/37-authlogic-and-rails-3-0-solution
---

I believe [solutions should be simple not simplistic][1]. That's why I wasn't surprised when my client couldn't get the forked branch of Authlogic to work in his production Rails 3.0 environment. Well, I got [Authlogic][2] to work with the Official Branch and I'll show you how!

For those of you who are interested, he's running the [Phusion Passenger for Nginx][3] stack I recommend for hosted Rails applications.

Like you and me, my client is a developer, so I knew there had to be a problem if he switched to a fork'ed branch. But, still, switching to a forked branch just seemed too drastic to be the *simple* solution.

As an open source developer for [Blogcast][4], this fork left me with nagging questions. Was the developer of Authlogic contacted about the issue? Has the developer abandoned Authlogic? If not, are we diverting support away from where it should be - the developer of Authlogic?

My gut tells me the answers to the above look something like: Maybe. No. Yes. Well, we all make mistakes. The best in us tries to learn from those mistakes. Time to move on!

### The Problem
Some of you might be facing an issue with Authlogic 2.1.6 and Rails 3.0.3.

#### Gemfile

{% highlight ruby %}
source 'http://rubygems.org'

gem 'rails', '3.0.3'
gem 'sqlite3-ruby', :require => 'sqlite3'
gem 'mysql2'
gem 'authlogic'
{% endhighlight %}

With a Gemfile that looks like that, you're running into an error that looks like this:

{% highlight ruby %}
undefined method `to_key' for #<UserSession: no credentials provided>
{% endhighlight %}

What this means is your Authlogic [authentication][5] is failing. Why? It's failing because Authlogic's UserSession.new constructor is being called without passing a username and password:

####app/controllers/UserSessionsController

{% highlight ruby %}
def create
  @user_session = UserSession.new(params[:user_session])
  if @user_session.save
    redirect_to root_url
  else
    redirect_to admin_url
  end
end
{% endhighlight %}

How could this happen? Routing in Rails 3.0 is different. As a result, Authlogic can't do two things: 

{% highlight ruby %}
1. First, Authlogic can't create a hash of your username/password and store it in *:user_session*, so params[...] will fail.

2. Finally, Authlogic doesn't know which REST method to bind the authentication routine to, so it will fail to execute your *create* method.
{% endhighlight %}

My solution addresses each concern the Rails 3.0 way. As a result, I'll show you how to keep the Official Authlogic and the bonus is it will actually work in production.

### The Unofficial Branch
First, I want to address the route many are purporting in the Rails Community. Many people are recommending we use the unofficial fork of Authlogic:

{% highlight ruby %}
gem 'authlogic', :git => 'git://github.com/odorcicd/authlogic.git', :branch => 'rails3'
{% endhighlight %}

Essentially, they are suggesting you abandon the Authlogic core. I think such a decision is premature at best. At worst you're going to run into a host of support issues and I recommend against it! I'm not going to use the unofficial fork and I'll tell you why:

{% highlight ruby %}
1. It's unnecessary since Ben has not abandoned Authlogic

2. The branch will not work with Bundler. Bundler installs git branches separately from system gems. So instead of seeing the correct install at /ruby/gems/1.8.7/gems/authlogic-2.1.6. You're going to see something like /.bundle/ruby/1.8.7/bundler/gems/authlogic-87e75311f835. What this means is Rails won't find Authlogic. That's a big problem!

3. I have a more simple solution for you.
{% endhighlight %}

### Think Simple not Simplistic

In discussing the problem, I mentioned two points of failure for Authlogic. My solution is to address the two points of failure so you can move on to better things like shipping your application.

Here, I'm going to show you the solution to getting Authlogic to play nice with Rail 3.0. Then I'm going to explain how my solution addresses each point of failure.

####app/views/user_sessions/new.html.erb

This is a one line of code deal and it's clean. Very clean! So, just update your form_for helper.

This is how it might look originally:

{% highlight ruby %}
<%= form_for @user_session do |f| %>
{% endhighlight %}

Update your form_for helper to this:

{% highlight ruby %}
<%= form_for @user_session, :as => :user_session, :url => { :action => "create" } do |f| %>
{% endhighlight %}

The first problem was Authlogic couldn't create a hash of your username/password. Here, the solution is to create your own user session hash using Rails 3.0 syntax :as => :user_session.

Finally, Authlogic couldn't find which REST method to bind for authentication. So, tell Authlogic explicitly which method to execute :url => { :action => "create" }.

That's it! You're good to go!

#### Stock Options and Technical Debt
There is a second option that I don't recommend as I feel it adds technical debt to your code base. That option overwrites the to_key method in the UserSession model. You also must overwrite the persisted? method as well.

Do this and you don't have to update your *new.html.erb* View:

{% highlight ruby %}
def to_key
  new_record? ? nil : [ self.send(self.class.primary_key) ]
end

def persisted?
  false
end
{% endhighlight %}

This option adds technical debt to the UserSession model since now you have to maintain Authlogic specific code. Such a move is best addressed by Authlogic's author.

I'm going to continue to support Ben Johnson because I believe Authlogic is a fine project for simple [Authentication][6]. I hope this solution gets you back on the Official Authlogic branch.

I know upgrading to Rails 3.0 is challenging. But I'm rooting for you and the entire Rails Community is rooting for you. So pick yourself up, dust yourself off and keep moving forward. Until next time Beloved, take care!


  [1]: https://techoctave.com/c7/posts/36-rails-3-0-rescue-from-routing-error-solution
  [2]: https://github.com/binarylogic/authlogic
  [3]: https://techoctave.com/c7/posts/16-how-to-host-a-rails-app-with-phusion-passenger-for-nginx
  [4]: http://techoctave.com/blogcast
  [5]: https://techoctave.com/c7/posts/34-authentication-vs-authorization
  [6]: https://techoctave.com/c7/posts/34-authentication-vs-authorization
