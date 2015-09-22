---
layout: post
author: TVD
title: "Silly Rabbit, Parsing HTML is for Kids"
date: 2011-04-19 02:12:16
permalink: /c7/posts/50-silly-rabbit-parsing-html-is-for-kids
---

![trix](/c7/static/trix.jpg)

If I had a nickel for every time a developer says, "Don't worry, I'll just whip up a RegEx and parse that HTML in no time." I'd retire right this very second. I've grown less and less shocked over the years. Still I'm left surprised every time.

To be honest, I've been there done that. That's why I know it's generally a bad idea. Given, there are times when you have to suck it up and use a Regular Expression. But experience has shown me that this is rarely one of those times.

###Red Pill - Do you even have to ask?

Whether it's reading HTML or stripping HTML tags out of user generated content, the feeling is always the same - utter shock!
Talking a developer out of using RegEx to parse HTML is like talking a good friend off the ledge. Curiously, no one ever says, "Hey, let's use RegEx to parse XML!" So what's the deal with HTML? Is it the familiarity?

Hell, even Jon Skeet cannot parse HTML using regular expressions and the last guy to try went [batshit crazy][1].

Time is too valuable to start down this path. Spend what little time you have implementing your core requirements and business logic. This is not a fight you need to pursue. Just say no and get back to the primary task at hand.

###The problem

Where do I begin? Where do I even begin? What can I say that hasn't [already been said][2].

Honestly, I don't know where to begin. The truth is there will be hundreds of scenarios that you didn't or couldn't or will never think about. Maybe even thousands.

What this boils down to is simple: You will set your project in a never ending cycle of fix-break-fix because chances are there will always be HTML to break your little RegEx parser.

You don't want that! Believe me, you don't need that! Technical Debt is not something to take on lightly. It's not something to take on at all. But for God's sake, don't take it on to parse HTML.

###The solution

Don't take on Technical Debt by rolling your own RegEx HTML parser. Don't do it because the solution is simple - use an HTML parser library. Preferably, one with XPath and CSS3 Selector support.

Depending on your language and platform, I understand this is easier said than done. But if you can pull it off, the benefits will far far outweigh the thrill of slinging on your mouse and riding into the sunset with your trusty Aeron deluxe chair.

In fact, I'll do you one better. Instead of just saying, "Grab an HTML Parser." I'll point out fine HTML Parsers for different platforms:

Ruby: Try [Nokogiri][3]
 
JavaScript: Try [jQuery][4]
 
PHP: Try [PHP5 DOMDocument][5]
 
.Net(C#): Try [Html Agility Pack][6]
 
VB6: Try [MSHTML][7] - The DOM Parser used in IE
 
Python: Try [lxml][8]
 
Perl: Try [HTML:Parser][9]
 
Java: Try [HTML Cleaner][10]
 

There, now all you have to do is get up to speed. Then see if one of these full-fledged HTML Parsers will do the trick.

Using an HTML Parser isn't some new bag of tricks either. Don't be surprised to see jQuery-like syntax for some of the more syntactically pleasing libraries.

###Toss that cowboy hat out the door

This is not about being a Cowboy Coder. You do not have to be a Hero. I'm pretty sure you have a business task to accomplish. And I'm equally sure that task isn't to write an HTML Parser. So don't do it - just say no!

You'll thank yourself in a couple weeks when the Red Bull and adrenaline wears off. It's really not worth it! Granted we all have to start from somewhere. Think of this as your new beginning.


  [1]: http://www.codinghorror.com/blog/2009/11/parsing-html-the-cthulhu-way.html
  [2]: http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags#answer-1732454
  [3]: http://nokogiri.org/
  [4]: http://jquery.com/
  [5]: http://docs.php.net/manual/en/domdocument.loadhtml.php
  [6]: http://htmlagilitypack.codeplex.com/
  [7]: http://www.codeguru.com/vb/vb_internet/html/article.php/c4815
  [8]: http://lxml.de/xpathxslt.html
  [9]: http://search.cpan.org/~gaas/HTML-Parser-3.68/Parser.pm
  [10]: http://htmlcleaner.sourceforge.net/
