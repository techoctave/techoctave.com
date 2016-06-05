---
layout: post
author: TVD
title: "Blogcast 1.0.5 release notes and the WordPress migrator tool"
date: 2010-12-31 04:34:40
permalink: /c7/posts/43-blogcast-1-0-5-release-notes-and-the-wordpress-migrator-tool
---

A couple months ago I made a bet with a friend. He felt developers don't blog as much because they don't have the time to. But I felt differently. I told him the issue was much deeper than time.

I said, "We would blog more if writing was fun!" That realization was the beginning of [Blogcast][1]. Simple as that.

Blogcast 1.0.5 is the start of my vision to make writing fun for a lot more people. Initially, I focused on new writers because many needed encouragement to start. But, what about seasoned writers with years of blog posts under their belt?

Should they be condemned to a blogging platform that no longer caters to their needs as a writer? I don't believe that. I won't believe that!

### Release Notes

Blogcast 1.0.5 features four enhancements:

{% highlight ruby %}
- Created a WordPress migrator

- Removed all db/migrate migrations

- Added seed data to db/seeds.rb

- Cleaned up generic error pages
{% endhighlight %}

### Blogcast WordPress migrator

Why WordPress? Simple. Many of us in the Ruby and Rails community use WordPress as our blogging engine. But more importantly, fans of Blogcast have reached out to me and asked for a migration tool.

Jason Fried once said, "No is easier to do. Yes is easier to say." I wholeheartedly believe this because you can't be everything to everybody.

Yet, a migration tool aligned with my vision to make writing accessible and fun. So, a migration tool is something I support with a resounding and unequivocal Yes!
 
#### Usage

Go to your Blogcast installation and run *rake --tasks* to see your available options. One of those options will be rebirth:wordpress:

{% highlight ruby %}
rake rebirth:wordpress[scroll]
{% endhighlight %}

This is Blogcast's WordPress migrator tool. The scroll parameter is the location and name of your WordPress export file.

Use the migrator tool like so:

{% highlight ruby %}
rake rebirth:wordpress[/path/to/wordpress.xml]
{% endhighlight %}

A successful run will look similar to this:

{% highlight ruby %}
--->Here are my wordly posessions my Liege: /path/to/wordpress.xml
--->The gates of wordpress open and the faithful enter.
--->Enter my apprentice.
--->wordpress casts' forth your posessions.
--->Hand me your scroll.

------>>Posts, the wind blows strong in your favor apprentice.
------>>I have paid the Ferryman on your behalf.
------>>Posts saved: 80
------>>Comments saved: 61

------>>Drafts, find your redemption through prayer and reflection.
------>>Go now. On the other side you have only yourself to face.
------>>Drafts saved: 3

--->God created Rails to train the faithful.
--->Rise Acolyte. Rise and bath in deliverance.
{% endhighlight %}

####Notes

There should be no spaces between rebirth:wordpress and [...]. The correct syntax is rebirth:wordpress[...].

Blogcast uses <a href="http://softwaremaniacs.org/soft/highlight/en/download/" rel="nofollow">highlight.js</a> for client-side syntax highlighting. If you need to, create your own custom language package. Blogcast uses Bash, C++, CSS, XHTML, Javascript and Ruby by default.

I use the excellent [Nokogiri][2] for wordpress.xml parsing. So, if you need to use the migration tool, go there to find out how to install Nokogiri properly on your specific system.

Also, make sure your Gemfile is up-to-date with the Nokogiri gem. If you don't need to use the migrator tool, then you don't need to have a dependency on Nokogiri.

The wordpress.xml export file doesn't maintain formatting details. That's good news and bad news. The good news is you don't have the extraneous formatting associated with WYSIWYG editors.

The bad news is semantic tags like those used in WYSIWYM editors aren't preserved either. What you're left with is pure unformatted data. You'll have to edit your old posts and add the line breaks (new paragraphs) and Markdown headers that you need.

Finally, if you inserted any manual tags for code highlighting, then you can remove those tags. Highlight.js is smart enough to figure out what programming language you're using automatically.


### Removed all db/migrate Migrations

I removed all migrations from this release because they added more confusion than benefit. Migrations are a development tool.

A lot of people were using the migrations for deployment and then proclaiming it was a bug when it didn't work. Keep in mind, you are not supposed to use migrations to deploy your Rails database.

Most of you already know schema.rb is the canonical definition of your Rails app database structure. The Rails Core Team has already spoken on the issue (copied directly from the Rails generators):

> Note that this schema.rb definition is
> the authoritative source for your
> database schema. If you need to create
> the application database on another
> system, you should be using
> db:schema:load, not running all the
> migrations from scratch. The latter is
> a flawed and unsustainable approach
> (the more migrations you'll amass, the
> slower it'll run and the greater
> likelihood for issues).


For Pete's sake run *rake db:schema:load* so you're not pulling your hair out. If you need to make specific changes for yourself or a client, then implement and execute your additional migrations. But, you should not run migrations to load the database from scratch.

{% highlight ruby %}
rake db:schema:load
{% endhighlight %}

A successful run will look like this:

{% highlight ruby %}
-- create_table("comments", {:force=>true})
   -> 0.0098s
-- create_table("drafts", {:force=>true})
   -> 0.0041s
-- create_table("posts", {:force=>true})
   -> 0.0092s
-- create_table("spams", {:force=>true})
   -> 0.0038s
-- create_table("users", {:force=>true})
   -> 0.0040s
-- initialize_schema_migrations_table()
   -> 0.0055s
-- assume_migrated_upto_version(20100704180607, "db/migrate")
   -> 0.0077s
{% endhighlight %}

### Admin user seed instance now available

By default, the admin user is available in the development database that comes with Blogcast. To help with deployment and automated tasks, I added the default instance of the user model to db/seeds.rb.

This should add some value to your deployment and setup tasks. The user model instance in db/seeds.rb now looks like this:

{% highlight ruby %}
user = User.new

user.name = "admin"
user.initials = "a.d.min"
user.email = "admin@localhost.host"
user.login = "admin"
user.password = "admin"
user.password_confirmation = "admin"
user.persistence_token = "10ca7461d933..."

user.save
{% endhighlight %}

Use the following Rails rake task to load the default admin user seed:

{% highlight ruby %}
rake db:seed
{% endhighlight %}

A successful run will look like:

{% highlight ruby %}
--->God created Rails to train the faithful.
------>Blogcast admin user created. Username: admin, Password: admin
--->From this seed may you forever bear fruit.
{% endhighlight %}

### Cleaned up generic error pages

Depending on your setup, some of you may have had some issues getting your 404 and 500 error pages to render properly.

I looked into the issue. The problem was a generic error page didn't have access to an asset deeper than its current directory. The solution was to move any required assets to the same directory level.

In Blogcast 1.0.5, I moved the error.css and cute koala.png to the same directory level as the 404.html and 500.html generic error pages.

It gets the job done. Plus with this change I still get to maintain separation of concerns. So, overall I'm happy with the results.

### Special thanks

Special thanks to everyone that made this release possible. A very special thanks to the WordPress Veterans who graciously donated their blog exports to the cause. Thank you!

Happy New Year folks!


  [1]: http://techoctave.com/blogcast
  [2]: http://nokogiri.org/tutorials/installing_nokogiri.html
