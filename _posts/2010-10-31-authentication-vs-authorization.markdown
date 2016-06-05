---
layout: post
author: TVD
title: "Authentication vs Authorization"
date: 2010-10-31 03:13:12
permalink: /c7/posts/34-authentication-vs-authorization
---

*Sounds the same to me!* Surprisingly, I hear this all the time from developers. So much, in fact, that it shocks me less and less each time. Well, they're not the same! Authentication and Authorization play two very distinct roles in application security. Let me explain.

<img src="/c7/static/lock.jpg" alt="Authentication vs Authorization" width="100%"/>

###The Difference Matters

####Authentication

Authentication is the process of verifying that a user has the right to access an application. The canonical example is the login screen. A successful login indicates the user is *authorized* and has the right to use the application. A failed login means the user does not have the right to access the application.

Authentication often precedes authorization, but doesn't always have to. For example, on [Seventh Octave][1], I made the decision to not force readers to login to leave comments. What this means is my readers are authorized to leave comments without being authenticated.

This behavior is the same for each article - even popular articles like my [JavaScript Dashboard Gauge Set][2].


####Authorization

Authorization determines what actions a user has the right to take within an application. Here, the canonical example is *Role Management*.

Take for example a Blog application. A *Writer* role may be able to create and update Posts, but not necessarily delete Posts. So, you wouldn't authorize the Writer role to delete Posts. 

On the other hand, you may have a *Moderator* role. As a Moderator, you can delete Comments, but you wouldn't necessarily want a moderator to create, update or delete Posts. So, you would authorize Moderators to delete Comments, but not create, update or delete Posts.

So, basically, *authentication* determines access, whereas *authorization* determines actions. Now you know, and knowing is half the battle.


  [1]: https://techoctave.com
  [2]: https://techoctave.com/posts/17-jquery-dashboard-gauges-using-raphael-xhtml-and-css
