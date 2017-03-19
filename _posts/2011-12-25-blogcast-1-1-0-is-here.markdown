---
layout: post
author: TVD
title: "Blogcast 1.1.0 is Here!"
date: 2011-12-25 05:06:54
permalink: /c7/posts/64-blogcast-1-1-0-is-here
---

![moscow](/c7/static/moscow.jpg)

A year ago, we set out to change the way creatives built community. That day, a better way to blog was born - [Blogcast][1] was born!

Merry Christmas and Happy New Year!

In that time I've met so many wonderful designers, developers and UX professionals. Thousands of downloads later, we're happy to say Blogcast provided the exact value we so hoped it would.

We believe in giving back. Blogcast has always been our way of saying, "Thank you!" Thank you to the community for all you do collectively. The world, indeed our very professions, wouldn't be possible without the many and thankless contributions of countless designers and developers worldwide.

As always, there will be bugs to fix and features to add. But, what's great is we'll do it together. On my shortlist is [User Authorization Roles][2]. Ryan Bate's excellent [CanCan][3] library comes to mind. Any takers?

Well, without further ado, please do enjoy Blogast 1.1.0. You can download from the Official [Blogcast website][4] or from the Official [Blogcast Github Repo][5]:

{% highlight bash %}
git clone https://github.com/techoctave/blogcast.git
cd blogcast
bundle install
{% endhighlight %}

Then jump right in:

{% highlight bash %}
rails server
http://localhost:3000/admin
login with l/p: admin
{% endhighlight %}

### Blogcast Revamped and  Reworked

{% highlight ruby %}
1. Restructured JavaScript assets. Main => blogcast.js. All 3rd party librarie in /librarie folder.

2. Fixed default Comment text not highlighting bug. Using HTML5 Placeholders now.

3. Added AutoSave functionality to New Post and Draft. Shoutout to the Backbone.js Team.

4. Added Shortcut Key Save. Mac OS X => Command + s. Windows => Ctrl + s.

5. Added ability for admins to Edit Comments. Simply click the edit icon.

6. Upgraded to Rails 3.1.0

7. Updated jQuery 1.4.3 to 1.6.4

8. Updated Entourage 1.0.0 to 1.1.0

9. Updates Rails.js 1.0.0 to 1.0.12

10. Added Backbone.js support

11. Added Underscore.js support

12. CSS3 Cleanups
{% endhighlight %}

Take care folks! Have a Merry Christmas and a Happy New Year! Be excellent to each other.



  [1]: https://techoctave.com/c7/posts/38-blogcast-is-a-better-way-to-blog
  [2]: https://techoctave.com/c7/posts/34-authentication-vs-authorization
  [3]: https://github.com/ryanb
  [4]: http://techoctave.com/blogcast/
  [5]: https://github.com/techoctave/blogcast
  [6]: http://documentcloud.github.com/backbone/
