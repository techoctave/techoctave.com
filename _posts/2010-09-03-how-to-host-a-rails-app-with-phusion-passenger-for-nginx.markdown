---
layout: post
author: TVD
title: "How to host a Rails app with Phusion Passenger for Nginx"
date: 2010-09-03 07:24:22
permalink: /c7/posts/16-how-to-host-a-rails-app-with-phusion-passenger-for-nginx
---

![ruby-enterprise-edition](/c7/static/ruby-enterprise-edition.png)

I believe [Phusion Passenger for Nginx will do for Rails Deployment what jQuery did for JavaScript Development][1]. So it should come as no surprise that this will be an opinionated Rails deployment tutorial. Simply put, I couldn't phantom deploying Rails without Passenger for Nginx.

Today I'm going to run you through getting your Rails app running on Ubuntu, Ruby Enterprise Edition (REE), Rails, Nginx and Phusion Passenger for Nginx. Lastly, I'll quickly show you how to successfully [deploy your Rails app to a sub URI without any 403 Forbidden errors][2].

Here are my notes from one of my client's latest Rails deployment.

###Ruby Enterprise Edition (REE):

We're going to start by installing Ruby Enterprise Edition (REE). Download the latest .deb REE package, then install it:

{% highlight bash %}
    wget http://rubyforge.org/frs/download.php/71100/ruby-enterprise_1.8.7-2010.02_i386_ubuntu10.04.deb
    
    sudo dpkg -i ruby-enterprise_1.8.7-2010.02_i386_ubuntu10.04.deb
    
    ruby -v
{% endhighlight %}

You should see something similar to *ruby 1.8.7 (2010-04-19 patchlevel 253) ... Ruby Enterprise Edition 2010.02*. Now, update your RubyGem package manager and all of your installed gems:

{% highlight bash %}
    sudo gem update --system
    sudo gem update
{% endhighlight %}

###Ruby on Rails

At this point you should make sure you've installed the Ruby on Rails gem. Don't worry, you've probably already done that. Here's the command to install Rails (just in case):

{% highlight bash %}
    sudo gem install rails
    rails -v
{% endhighlight %}

###Install, Configure and Manage Nginx

####Install Nginx

First, let's install the Open SSL library. You're going to need this later for SSL support and management:

{% highlight bash %}
    sudo aptitude install libssl-dev
{% endhighlight %}

Next, we are going to install the Passenger for Nginx module. This module will install both Nginx and Passenger:

{% highlight bash %}
    sudo passenger-install-nginx-module
{% endhighlight %}

Follow the default options. Soon, you'll be prompted with two options to either select 1 or to select 2. 

Choose option 2 if you need to install additional Nginx modules. One module that comes to mind is the *Nginx SSL module*.

For this tutorial, select option 1. Let the install finish. Congrats, you've just installed a blazing fast Webserver (Nginx) and Rails application server (Passenger)!

You will also need to create a user and group for nginx. Issue the following command to do so:

{% highlight bash %}
    adduser --system --no-create-home --disabled-login --disabled-password --group nginx
{% endhighlight %}    

Finally, let's create an init.d script and have it boot at startup. The init.d will allow us to control Nginx:

{% highlight bash %}
    sudo nano /etc/init.d/nginx
{% endhighlight %}

Copy and paste the following Nginx init script into the new file:

{% highlight bash %}
    #! /bin/sh
    
    ### BEGIN INIT INFO
    # Provides:          nginx
    # Required-Start:    $all
    # Required-Stop:     $all
    # Default-Start:     2 3 4 5
    # Default-Stop:      0 1 6
    # Short-Description: starts the nginx web server
    # Description:       starts nginx using start-stop-daemon
    ### END INIT INFO
    
    PATH=/opt/nginx/sbin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
    DAEMON=/opt/nginx/sbin/nginx
    NAME=nginx
    DESC=nginx
    
    test -x $DAEMON || exit 0
    
    # Include nginx defaults if available
    if [ -f /etc/default/nginx ] ; then
        . /etc/default/nginx
    fi
    
    set -e
    
    . /lib/lsb/init-functions
    
    case "$1" in
      start)
        echo -n "Starting $DESC: "
        start-stop-daemon --start --quiet --pidfile /opt/nginx/logs/$NAME.pid \
            --exec $DAEMON -- $DAEMON_OPTS || true
        echo "$NAME."
        ;;
      stop)
        echo -n "Stopping $DESC: "
        start-stop-daemon --stop --quiet --pidfile /opt/nginx/logs/$NAME.pid \
            --exec $DAEMON || true
        echo "$NAME."
        ;;
      restart|force-reload)
        echo -n "Restarting $DESC: "
        start-stop-daemon --stop --quiet --pidfile \
            /opt/nginx/logs/$NAME.pid --exec $DAEMON || true
        sleep 1
        start-stop-daemon --start --quiet --pidfile \
            /opt/nginx/logs/$NAME.pid --exec $DAEMON -- $DAEMON_OPTS || true
        echo "$NAME."
        ;;
      reload)
          echo -n "Reloading $DESC configuration: "
          start-stop-daemon --stop --signal HUP --quiet --pidfile /opt/nginx/logs/$NAME.pid \
              --exec $DAEMON || true
          echo "$NAME."
          ;;
      status)
          status_of_proc -p /opt/nginx/logs/$NAME.pid "$DAEMON" nginx && exit 0 || exit $?
          ;;
      *)
        N=/etc/init.d/$NAME
        echo "Usage: $N {start|stop|restart|reload|force-reload|status}" >&2
        exit 1
        ;;
    esac
    
    exit 0
{% endhighlight %}

To save the file using nano, press ctrl+o, then enter. Then exit by pressing ctrl+x.

Change permission on the script to make it an executable:

{% highlight bash %}
    sudo chmod +x /etc/init.d/nginx
{% endhighlight %}

Have the new executable run at startup:

{% highlight bash %}
    sudo /usr/sbin/update-rc.d -f nginx defaults
{% endhighlight %}

Now, you have the power to start, stop and restart Nginx. Start your shiny new Nginx Webserver with this command:

{% highlight bash %}
    sudo /etc/init.d/nginx start
{% endhighlight %}

Navigate to your server's IP address using Firefox or your favorite browser. You should see "Welcome to Nginx!" This means Nginx is up-and-running. Now we can focus on configuring Nginx for your Rails web application.

####Configure Nginx

Edit your Nginx configuration:

{% highlight bash %}
    sudo nano /opt/nginx/conf/nginx.conf
{% endhighlight %}

Make sure Nginx knows the location of your passenger and ruby installation:

{% highlight bash %}
    . . .
    http {
        passenger_root /usr/local/lib/ruby/gems/1.8/gems/passenger-2.2.15;
        passenger_ruby /usr/local/bin/ruby;
    . . .
        server {
        . . .
        }
    }
{% endhighlight %}

For fun, let's modify our Server section to deploy our Rails app to a Sub URI:

{% highlight bash %}
    server {
        listen 80;
        server_name domain.com;
        charset utf-8;
        root /www/domain.com/public_html;
        passenger_enabled on;
        passenger_base_uri /blog;
        rails_spawn_method smart;
        rails_env production;
    }
{% endhighlight %}

To do this, we have to make a symlink from our Rails app's public directory to the document root of our static website:

{% highlight bash %}
    ln -s /www/domain.com/railsapp/public /www/domain.com/public_html/blog
{% endhighlight %}

This command will create a symlink called *blog* in the document root */www/domain.com/public_html/*. 

Remember, if you want to make the sub uri work, do not create a folder called *blog* in the document root. This will get you a nice [Rails sub uri 403 Forbidden error][3] from your passenger Nginx setup. 

For a typical Xen VPS setup, you should also think about adding the following tweaks to your Nginx conf:

{% highlight bash %}
    user                      nginx nginx;
    worker_processes          4;
    worker_connections        1024;
    passenger_max_pool_size   6;
{% endhighlight %}

Read more about the the *[passenger_max_pool_size][4]* directive. The maximum value depends on your server's cpu processor and other factors. Do experiment!

When you're finished, save the file and restart Nginx:

{% highlight bash %}
    sudo /etc/init.d/nginx restart
{% endhighlight %}

####Manage Nginx

In the future you can restart the entire Nginx server or only restart your application with the following command:

{% highlight bash %}
    touch /www/domain.com/blog/tmp/restart.txt
{% endhighlight %}

The next time you load your Rails app it will restart.

Passenger also has some pretty cool built-in monitoring applications. You can access them using these commands:

{% highlight bash %}
    sudo passenger-status
    sudo passenger-memory-stats
{% endhighlight %}

I suggest installing another utility to see what's using memory on your entire server. It's called htop:

{% highlight bash %}
    sudo apt-get install htop
    sudo htop
{% endhighlight %}

Well, you're done really! I hope this helps. 

For the uninitiated, deploying to Ubuntu (or any Linux distro) can be daunting. But, once you get over having nothing but a black screen to work with, you'll realize how unshackled and productive you feel. Good luck Beloved!


  [1]: http://techoctave.com/c7/posts/3-passenger-for-nginx-is-the-jquery-of-web-server-software
  [2]: http://techoctave.com/c7/posts/4-rails-sub-uri-403-forbidden-errors-when-deploying-with-passenger-for-nginx
  [3]: http://techoctave.com/c7/posts/4-rails-sub-uri-403-forbidden-errors-when-deploying-with-passenger-for-nginx
  [4]: http://modrails.com/documentation/Users%20guide%20Nginx.html#PassengerMaxPoolSize
