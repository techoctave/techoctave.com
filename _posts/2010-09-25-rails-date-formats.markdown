---
layout: post
author: TVD
title: "Rails Date Formats"
date: 2010-09-25 06:31:39
permalink: /c7/posts/23-rails-date-formats
---

For the newly initiated *(we all were at some time)*, getting a handle on date formats in Rails can be confusing. Believe me, I understand. Rails is a lot like Chicago. If you're not careful, you might forget it's part of Ruby.

When I talk to developers, the biggest confusion I see comes from forgetting that Rails is built on top of the Ruby programming language. Therefore, what you're really searching for is Ruby date formatting. 

Here is a list of Ruby (*and Rails*) date formats:

{% highlight ruby %}
%a - The abbreviated weekday name (''Sun'')
%A - The  full  weekday  name (''Sunday'')
%b - The abbreviated month name (''Jan'')
%B - The  full  month  name (''January'')
%c - The preferred local date and time representation
%d - Day of the month (01..31)
%H - Hour of the day, 24-hour clock (00..23)
%I - Hour of the day, 12-hour clock (01..12)
%j - Day of the year (001..366)
%m - Month of the year (01..12)
%M - Minute of the hour (00..59)
%p - Meridian indicator (''AM'' or ''PM'')
%S - Second of the minute (00..60)
%U - Week  number  of the current year,
        starting with the first Sunday as the first
        day of the first week (00..53)
%W - Week  number  of the current year,
        starting with the first Monday as the first
        day of the first week (00..53)
%w - Day of the week (Sunday is 0, 0..6)
%x - Preferred representation for the date alone, no time
%X - Preferred representation for the time alone, no date
%y - Year without a century (00..99)
%Y - Year with century
%Z - Time zone name
%% - Literal ''%'' character
{% endhighlight %}

Here is a Ruby (*Rails*) date format example:

{% highlight ruby %}
@comment.created_at = Time.Now
@comment.created_at.strftime("%d %b %y") #Output: 05 Jul 10
@comment.created_at.strftime("%m/%d/%Y") #Output: 07/05/2010
{% endhighlight %}

If you ever need to display dates as 1st, 2nd, 3rd, 4th, then check out this StackOverflow post on [how to Ordinalize your dates in Rails][1].

Just remember Rails is built on top of Ruby. So, whatever syntactic goodies you can access in Ruby can be accessed in Rails.


  [1]: http://stackoverflow.com/questions/165170/in-ruby-on-rails-how-do-i-format-a-date-with-the-th-suffix-as-in-sun-oct-5t
