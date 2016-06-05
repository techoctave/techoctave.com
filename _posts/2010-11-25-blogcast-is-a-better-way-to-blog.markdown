---
layout: post
author: TVD
title: "Blogcast is a better way to blog"
date: 2010-11-25 07:02:48
permalink: /c7/posts/38-blogcast-is-a-better-way-to-blog
---

<img src="/c7/static/vision.jpg" alt="Open Source Rails 3 Blogging app - Blogcast" title="Open Source Rails 3 Blogging app - Blogcast"/>

[I believe in the development community][1]. I believe in our ideals. I believe in our laissez faire approach to life. I believe in the innovation that is second nature to us all.

This belief flows so thick through my veins that I believe we should all give back when our time comes. Call it a right of passage if you must. I call it a duty!


###The Status Quo

Yet, when I started [Seventh Octave][2] and started evaluating blogging apps, I found that duty hampered. Hampered by what I can only describe as a lack of understanding about the writing process. As a writer, I need constant feedback and illustration of what my finished product will look like.

With the Status Quo I felt like a prisoner trapped in a claustrophobic cell, pushing preview buttons and waiting  - *anxiously* - for my next meal. A lack of instant feedback hampered my writing and cramped my style.

Then there were the endless menus, features, click-ty-clacks and fancy whizz-bangs. All competing for my attention when I was there to do one thing and one thing only - write!

When I use a blogging app, what I'm primarily there to do is write! Having to click and wait to see how my blog post will look gets in the way of my writing. WYSIWYG Editors get in the way of my writing! Endless features get in the way of my writing!

###Blogcast is a better way to blog.

The Status Quo can take a backseat for all I care! I needed a blogging app that encouraged rapid writing iterations - so I wrote one.

I wrote [Blogcast][3] for developers and writers because that's what I am and that's who I know best! If you let it, the Status Quo will encourage more writer's block than it does substance. 

And that's why I'm releasing Blogcast. I'm releasing Blogcast because I want sharing my development experience to be fun for both me and you! Writing needs to be fun. And, despite the Status Quo, I am convinced there is a better way to blog. That's where Blogcast comes in.

Blogcast's sweet spot is what I call *Fluid Stream of Thought*. I've practiced Fluid Stream of Thought for the past 10 years. It's based on two simple principles:

{% highlight ruby %}
1. Write your first draft like it is your last.

2. Speak to your audience, not at your audience.
{% endhighlight %}

Blogcast stimulates *Fluid Stream of Thought* through live preview of your writing and a tight reward-feedback loop. What this boils down to is a writing experience that you will enjoy! And of course, if you enjoy the writing experience, you will write more.

Furthermore, if you write in a space that is not cluttered you will certainly gain the desire to write more. That's why I designed Blogcast using [Behavioral Driven Development][4] (BDD) and got rid of all the noise and distractions so you could write from a better place. As a developer, you need this. As a writer, you deserve this.

Blogcast is built on six principles:

{% highlight ruby %}
1. Live preview makes for better writing.

2. A post's title makes a fine [SEO URL][5].

3. Wysiwym Markdown makes writing semantic & accessible.

4. Comment management can be painless.

5. A guest should be able to preview his comment.

6. No [crappy-admin-screen][6] syndrome - ever.
{% endhighlight %}

###Blogcast is Open Source & Built on Rails

Under the hood, I built Blogcast with Ruby and all the Open Source glory of Rails 3. Better yet, Blogcast loves [Phusion Passenger for Nginx][7] and it plays well with MySQL and PostgreSQL.

Blogcast uses Rails 3 style unobtrusive JavaScript. I combine Rails 3's HTML5 data attributes with jQuery and Rails.js for cleaner separation of concerns and a more semantic code base.

I believe [solutions should be simple, not simplistic][8]. So, top-down, I wrote Blogcast to be simple. Blogcast uses Bundler for systematic & consistent dependency management.

###Installing Blogcast

First, go to Blogcast's root directory and install the dependences:

{% highlight bash %}
#install dependencies
bundle install
{% endhighlight %}

Now just start your Rails development server:
  
{% highlight bash %}  
#start rails server
rails s
{% endhighlight %}

Fire up your favorite browser and point it to *http://localhost:3000*. This is the public view of your new Blogcast blog. Have a look around and when you're ready, login to *http://localhost:3000/admin*; Username => *admin*, Password => *admin*.

Welcome to [Blogcast][9]. It's going to be a pleasure to get to know you.

###Configuring Blogcast

Blogcast has a few configuration items you should know about: Users, Akismet, Google Search, Google Analytics and RSS.

####Create your own user

Click on the Users link in the upper right-hand corner of Blogcast. Then click on the Add User button:

{% highlight bash %}
#Name
Used as Post author and Draft author

#Initials
Used as Comment author
{% endhighlight %}

At that point, either remove the admin user or update its password to something of your own choosing.

####config/application.rb

{% highlight ruby %}
#Akismet
config.rakismet.key  = '0000X000000X'
config.rakismet.url  = 'http://domain.com/blog'
config.rakismet.host = 'rest.akismet.com'
{% endhighlight %}

You will need to [register for Akismet][10] and get your own API key. Also, change *config.rakismet.url* to your blog location - can be localhost in development.

####app/views/layouts/_sidebar.html.erb

{% highlight html %}
<!--Google Search-->
<input name="sitesearch" value="http://domain.com/blog" type="hidden"/>
{% endhighlight %}

Replace *http://domain.com/blog* with your blog location.

####app/views/layouts/application.html.erb

{% highlight js %}
/*Google Analytics*/
_gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
{% endhighlight %}

Replace *UA-XXXXXXXX-X* with your Google Analytics account.

####app/views/posts/index.rss.builder

{% highlight ruby %}
xml.title "Blogcast"
xml.description "Blogcast is a better way to blog."
{% endhighlight %}

Replace the title and description with your blog's title and description.

Blogcast is for developers who are ready to share their passions with the world. Are you ready? I believe in the development community and I believe Blogcast is a better way to blog. It's time we step up!

[Download Blogcast and Get Started][11]. Take care Beloved!

[Migrating from Wordpress to Blogcast is easy][12]! Blogcast 1.0.5


  [1]: http://twitter.com/tiandavis/statuses/27180591945
  [2]: https://techoctave.com
  [3]: http://techoctave.com/blogcast
  [4]: http://gettingreal.37signals.com/ch09_Interface_First.php
  [5]: https://techoctave.com/posts/26-seo-friendly-urls-in-rails
  [6]: http://gettingreal.37signals.com/ch09_One_Interface.php
  [7]: https://techoctave.com/posts/16-how-to-host-a-rails-app-with-phusion-passenger-for-nginx
  [8]: https://techoctave.com/posts/37-authlogic-and-rails-3-0-solution
  [9]: http://techoctave.com/blogcast
  [10]: http://akismet.com/
  [11]: http://techoctave.com/blogcast
  [12]: https://techoctave.com/posts/43-blogcast-1-0-5-release-notes-and-the-wordpress-migrator-tool
