---
layout: post
author: TVD
title: "Entourage.js - Automatic Download Tracking for Asynchronous Google Analytics"
date: 2011-09-05 05:09:33
permalink: /c7/posts/58-entourage-js-automatic-download-tracking-for-asynchronous-google-analytics
---

![entourage-js](/c7/static/entourage-js.jpg)

Google Analytics doesn't track file downloads automatically. I needed unobtrusive and framework agnostic download tracking for Google Analytics. That's when [Entourage.js][1] was born.

Entourage.js is Automatic Download Tracking for Asynchronous Google Analytics.


###Why Entourage?

To be honest, I wish this extension wasn't necessary. I wish Google Analytics tracked file downloads automatically and out-of-the-box, but it doesn't. An extension was needed - so be it. But if it was going to be done, I wanted to make sure it was done right!

I set goals for Entourage.js before a single line of code was written. Entourage.js needed to embody the following:

{% highlight js %}
 1. Automatic Tracking
 2. Framework Agnostic
 3. Unobtrusive JavaScript
 4. Small Footprint
{% endhighlight %}

####Automatic
Google suggests adding an onClick event to each anchor tag you use for file downloads. I don't want to have to do that each time I have a download. I would rather drop an extension that would do this consistently and automatically each time.

Entourage.js automatically tracks the name and extension of each file downloaded with the following convention:

{% highlight js %}
/download/fileName.extension
{% endhighlight %}

For example, in Google Analytics Top Content, the downloads Entourage.js would look like:

{% highlight js %}
/download/entourage.zip       1,504
{% endhighlight %}

####Framework Agnostic

Entourage.js also had to be framework agnostic. I know a lot of people have or will roll framework specific solutions. That's great for them, but it wasn't going to work for me.

I use and love jQuery just as much as the other guy. In fact, I use it in all of my company's products. That said, there are people with just as much love for Prototype.js or MooTools.

I respect that. I don't believe they should have to download another framework in this case. I don't believe a framework is critical to this solution scope at all.

####Unobtrusive JavaScript

This is Google's recommended way to track downloads:

{% highlight js %}
    <a href="http://www.example.com/files/map.pdf" onClick="javascript: _gaq.push(['_trackPageview', '/downloads/map']);"> 
{% endhighlight %}

I believe in standards based development. I believe we honor our profession when we encourage each other towards best practices.

Inline JavaScript is not a best practice. Inline JavaScript mixes structure with behavior in a most unnecessary mixing of concerns. The example is just plain sloppy. 

I believed then and I believe now that the spirit of the solution is best honored with an Unobtrusive implementation that leaves the structure of the HTML5 markup clean and readable. Entourage.js does just that.

####Small Footprint

The final goal of the project was to have a small footprint. I needed something that was fast to download and painless to install in each project. I needed the extension to be as small as possible.

Here's were we are at today:

{% highlight js %}
**Original Size:**	1.54KB (772 bytes gzipped)

**Compiled Size:**	579 bytes (339 bytes gzipped)

Saved **63.21%** off the original size (**56.09%** off the gzipped size)
{% endhighlight %}

Compiled and gzipped, Entourage.js is less than 1kb. It's fast, dependable and - for now - I'm happy with the results.


###Installation Guide

Installation is clean and simple. Download [Entourage.js][2]. Place the following script declaration in you head tag:

{% highlight js %}
    <script src="javascripts/entourage.js"></script>
{% endhighlight %}

Just above your Google Analytics Queue array declaration:

{% highlight js %}
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
      _gaq.push(['_trackPageview']);
    </script>
{% endhighlight %}

Then place your asynchronous call to load Google Analytics to somewhere just before your body tag:

{% highlight js %}
    <script type="text/javascript">
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
{% endhighlight %}

Follow a similar hierarchy and you are set.

###Code Review

The simplicity and ease-of-use speak for themselves. But, I also believe in sharing and I think there is much we can learn from dissecting the internals of Entourage.js.

All 579 bytes of the code base are broken up into three top level modules: The Event *Handler*, *Entourage* and *GetFileName*.

####Finding Closure

[Closures][3] are often considered an advanced feature in JavaScript. A closure is a special kind of object that combines two things: a function, and the environment in which that function was created.

{% highlight js %}
    (function() {
    
    //Event Handler
    
    //Entourage
    
    //Get true FileName from link pathname
    
    })();
{% endhighlight %}

Note the repeating open-and-close parenthesis. These tell the JavaScript interpreter to execute the anonymous function and it's internal business logic immediately.

Closures in JavaScript have many practical uses. Here, Entourage.js operates in its own scope with its own private methods and variables.

This means Entourage.js introduces no new Global variables. So there is no chance of objects from extension clobbering objects in your project.

Entourage.js is completely independent and self-contained. This means you can plug it into your own project - worry free! There's value there.


####Event Handler

The event handler caches a list of document links. Then it assigns the Entourage callback to each link's *onclick* event. Many would create custom events to monitor this behavior, but I find the native onclick event more than adequate for the job.

{% highlight js %}
    //Event Handler
    onload = function() {
         //Setup an onclick event handler for each link
         var links = document.links;
         for(var i = 0; i < links.length; i++) {
         //Call Entourage whenever the link is clicked
             links[i].onclick = Entourage;
         }
     };
{% endhighlight %}

Also, it's important to note the *onload* event. Executing after the *onload* event has fired ensures the DOM is loaded by the time Entourage is ready to go to work.

Another interesting note here is the ever vigilant *for* loop. I could have used a for in loop like this:

{% highlight js %}
    //Potential Alternative to the traditional for loop
    for(link in links) {
       if(links.hasOwnProperty(link)) {
          links[i].onclick = Entourage;      
       }
    }
{% endhighlight %}

The problem here is each link object is [not ordered as you would expect][4]. Also, since hasOwnProperty is a method, it could be overwritten or replaced with an unexpected value. This could cause bugs that are hard to track.

Overall, I found the simple for loop fast, adequate and less prone to logic errors.


####Entourage

Some interesting parts here too. JavaScript implements perl-style regular expressions. The *fileTypes* variable is a regular expression literal that lists the acceptable file types.

{% highlight js %}
    //Entourage
    Entourage = function() {
        var fileTypes = /\.doc$|\.eps$|\.jpg$|\.png$|\.svg$|\.xls$|\.ppt$|\.pdf$|\.xls$|\.zip$|\.txt$|\.vsd$|\.vxd$|\.js$|\.css$|\.rar$|\.exe$|\.dmg$|\.wma$|\.mov$|\.avi$|\.wmv$|\.mp3$/i;

        //The link object is now available in "this"
        var pathname = this.pathname; 
        var fileName;
        var autograph;
        	
        //File type match found
        if(pathname.match(fileTypes)) {
        	//Get the file name
        	fileName = GetFileName(pathname);
        		
        	//Add file to the Google Analytics Queue
        	autograph = '/download/' + fileName;
        	_gaq.push(['_trackPageview', autograph]);
        }
    };
{% endhighlight %}

Some of the more popular file downloads to track are: *.pdf and *.zip

Once you're in Entourage, that means the link's callback was called. At that point, the variable *this* now contains the link object. Here, the *pathname* is the link property of concern to us.

If the fileType is present in the whitelist, the *pathname* is used to extract the download's *fileName*. Then the download's *autograph* is added to the Google Analytics Queue.

I chose to use _trackPageview to track the file download. The download metric would then show under Top Content as a PageView metric.

Another option is to use _trackEvent to track the file download. In my mind, _trackPageview via Top Content felt more simple and accessible, so I chose that route. Reasonable minds could differ here, so I'll leave it to the SEO Experts to debate which is "best".

####Get True FileName from Link Pathname

Still with me? Good! *GetFileName* is probably thee most important method in Entourage.js!

{% highlight js %}
    //Get true FileName from link pathname
    GetFileName = function(pathname) {
        //Remove the anchor at the end
        pathname = pathname.substring(0, (pathname.indexOf("#") == -1) ? pathname.length : pathname.indexOf("#"));
        	
        //Removes the query after the file pathname
        pathname = pathname.substring(0, (pathname.indexOf("?") == -1) ? pathname.length : pathname.indexOf("?"));
        	
        //Removes everything before the last slash in the path
        pathname = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length);
    	
    	return pathname;
    };
{% endhighlight %}

It is incredibly difficult to extract a download's *fileName* from a link's *pathname* property.

There could be a hash (#) in the URL. You have to account for this.

There could also be a query (?) in the URL. You have to account for this. 

And, of course, there is the fully qualified URL preceding the *fileName*. You have to account for this too.

You have to account for each situation and most times that isn't easy. Entourage.js accomplishes each scenario well, without bloated code or overcomplicated algorithms. Clean and Simple.


###The Big Picture

The Big Picture is I believe you'll love Entourage.js. It's lightweight and standards based with measurable goals and forethought. 

Bottom line is if you need to track downloads with Google Analytics, then don't roll your own framework. Download [Entourage.js][5] and spend less time coding and more time working on your core business.

###Update: Entourage.js 1.1.0

####10,000 Foot View

**Single Global Variable:** Inspect the DOM, you'll find a single Global Variable called *entourage*.

**Public and Private Members:** Used the Module Design Pattern to establish both public and private object members. It's a little less restrictive than Object Literal Notation and gets the job done! Check the DOM, *getFileName* and *autograph* are not accessible outside the entourage namespace.

**Cleaner FileType Whitelist:** Reduced the whitelist to the most popular file extensions. Added support for Office 2007 documents and Open Office documents.

**Strict Comparison:** Used strict comparison on conditionals. Increases reliability and increases speed.

**Link Count Cache:** Cached link.length for comparison during initialization. Link.length doesn't have to be calculated each iteration - this increases the performance.

**Global Namespace:** Explicitly added Entourage to the Global Namespace.

**JSHint:** Ran Entourage.js through JSHint - a fork of Douglas Crockford's JSLint. The Google Analytics Queue doesn't exist until the onclick event. It didn't like that, but that's expected. Also, it didn't like the *new* operator. Called it a "Weird construction". I can deal with a little weird...Barring those two expected, I'd say Entourage.js passed 100%.

####The Code

See an overview of the code at 10,000 FT:

{% highlight js %}
    (function() {
    var entourage = new (function() {
    	this.VERSION = "1.1.0";
    	
    	//Get true FileName from link pathname
    	var getFileName = function(pathname) {
    		//No updates...
    
    		return pathname;
    	};
    
    	var autograph = function() {
    		var whitelist, pathname, match, fileName, associate;
    		
    		whitelist = /\.pdf$|\.zip$|\.od*|\.doc*|\.xls*|\.ppt*|\.exe$|\.dmg$|\.mov$|\.avi$|\.mp3$/i;

            //The link object is now available in "this"
    		pathname = this.pathname;
    		
    		//Compare the fileType to the whitelist
    		match = pathname.match(whitelist);
    		
    		if (typeof match !== "undefined" && match !== null) 
            {
    			//Get the file name
    			fileName = getFileName(pathname);
    
    			//Add file to the Google Analytics Queue
    			associate = '/download/' + fileName;
    			_gaq.push(['_trackPageview', associate]);
    		}
        };
    
    	this.initialize = function() {
    		var links = document.links;
    		
    	    for (var i=0, l=links.length; i<l; i++) {
    			//Call Entourage whenever the link is clicked
    	        links[i].onclick = autograph;
    	    }
        };
    })(); //Entourage.js
    
    //Add entourage to the global namespace
    window.entourage = entourage;
    
    //Execute onload - ensuring links are present in the DOM
    window.onload = entourage.initialize;
    })();
{% endhighlight %}

####Usability and User Experience

I follow a couple core principles when it comes to designing products. At the base of the pillar is Usability and User Experience. I kept _trackPageview because I believe it is more usable and provides a better tracking experience.

From discussion, I think we've seen that neither _trackEvent or _trackPreview offer the "perfect" solution. Both skew the data. Analyzing my own Google Analytics data, I can say - with peace of mind - the skew is neglible at best.

Once the data is skewed, I believe the question of which method skews the data most is less relevant than thee most important metric - Usuability.

I setup an experiment to test this idea. One implemented Entourage.js as a _trackEvent and the other as a _trackPreview. To get access to download count for a file, I found this:

{% highlight js %}
**_trackPageview**
2 clicks

**_trackEvent**
4 clicks
{% endhighlight %}

Two extra clicks for _trackEvent. That really is a big deal! But, even if I find it negligible, what wasn't negligible was how I felt using Top Content via _trackPageview versus Event Tracking via _trackEvent.

Using Top Content, I felt the User Interface was easier to use and I felt like I could get to my data quicker. I felt the opposite with Event Tracking.

With Event Tracking, I felt the segmentation was overkill and I felt it wasn't necessarily suited for the file tracking problem domain. I could understand if I had an app or video where I wanted to track feature usage - I get that! But here, all I want to do is track file downloads and I felt Event Tracking got in the way more than it helped.

Of course, other than the extra two clicks, everything I've said about Event Tracking is purely subjective. It's how I feel about that aspect of Google Analytics' Interface. Others - no doubt - will have their own personal opinion. I'm Ok with that! Please feel free to express the same in the comments.

Unfortunately or Fortunately - I'm undecided - you can find sources supporting either side on whether we should use _trackPageview or _trackEvent.

Maybe it's just me, but maybe our Google Overloads want us to realize something:

*It's more important how you use the data than how you view it.*


####Special Thanks!
@Rene: Thanks for suggesting to make the whitelist more readable.

@Justo @Scott: For highlighting the _trackPageview and _trackEvent issue and putting it up for discussion.

@X10: For catching the repeating file type.

@Rob: For bringing some clarity to _trackEvent affect on Bounce Rate.

@Stjepan: For suggesting the faster *for* loop and bringing some technical depth to the discussion.

Thanks everyone!
















  [1]: http://techoctave.com/entourage/
  [2]: http://techoctave.com/entourage/
  [3]: https://developer.mozilla.org/en/JavaScript/Guide/Closures
  [4]: http://stackoverflow.com/questions/242841/javascript-foreach-vs-for
  [5]: http://techoctave.com/entourage/
