---
layout: post
author: TVD
title: "Simple Long Polling Example with JavaScript and jQuery"
date: 2011-10-16 02:20:07
permalink: /c7/posts/60-simple-long-polling-example-with-javascript-and-jquery
---

<img alt="Advanced JavaScript Long Polling Techniques (Server Push Techniques)" src="https://techoctave.com/static/push.jpg"/>

There are many reasons you might need to poll a web server. Recently, one of our [Dashboard Gauge Suite][1] customers needed to poll sales data from his company's data warehouse and update his executive dashboard with the fresh data.

But you could be doing something different too. Maybe you're pulling your company's QC data so you can give your leadership team a visual of how each group is managing defect counts.

These two scenarios each have three things in common. First, a passion to display data in a beautiful and familiar way. Second, a desire to update each gauge without refreshing the page. Finally, each needs a smart and efficient way to poll their respective servers.

Here, we're going to accomplish each commonality with an emphasis on polling options and techniques:

###A History of Polling

Realtime web applications have been with us for quite some time now. To the end user, these applications feel responsive and fluid. Gmail is (arguably) one of the most major applications to popularize this technique. JavaScript is at the heart here.

Have you ever been in the middle of replying to an email, when (suddenly) you're notified the person has sent you another followup? That's the perfect example of polling - sometimes referred to as server-push or comet technology.


###A Tale of Two Polling Techniques 

####Traditional Polling

*The setInterval Technique*

Now, if you needed to poll your web service, your first instinct might be to do something like this with JavaScript and jQuery:

{% highlight js %}
setInterval(function(){
    $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
    }, dataType: "json"});
}, 30000);
{% endhighlight %}

Here, we have the poll ready to execute every thirty (30) seconds. This code is pretty good. It's clean and asynchronous. You're feeling confident. Things will work (and they will), but with a catch. What if it takes longer than thirty (30) seconds for the server to return your call?

That's the gamble with using *setInterval*. Lag, an unresponsive server or a whole host of network issues could prevent the call from returning in its allotted time. At this point, you could end up with a bunch of queued Ajax requests that won't necessarily return in the same order.

*The setTimeout Technique*

If you find yourself in a situation where you're going to bust your interval time, then a recursive *setTimeout* pattern is recommend:

{% highlight js %}
(function poll(){
   setTimeout(function(){
      $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);

        //Setup the next poll recursively
        poll();
      }, dataType: "json"});
  }, 30000);
})();
{% endhighlight %}

Using the Closure technique, *poll* becomes a self executing JavaScript function that runs the first time automatically. Sets up the thirty (30) second interval. Makes the asynchronous Ajax call to your server. Then, finally, sets up the next poll recursively.

As you can see, jQuery's Ajax call can take as long as it wants to. So, this pattern doesn't guarantee execution on a fixed interval per se. But, it does guarantee that the previous interval has completed before the next interval is called.

Both techniques suffer from the same flaw - a new connection to the server must be opened each time the *$.ajax* method is called. To make that connection, your realtime app must gear up and battle through hoards of competing network traffic to make it to your server.

What if you could just keep the connection open?

####Long Polling - An Efficient Server-Push Technique

**EDIT:** Applications built with Long Polling in mind attempt to offer realtime server interaction, using a persistent or [long-lasting HTTP connection][2] between the server and the client.

Sadly, with our current technology, long polling cannot be accomplished with client-side JavaScript alone. What you really need is a framework that combines HTML5 WebSockets with some server-side component.

If you're trying to do long polling with JavaScript only - STOP. It's not possible without a server-side piece like SignalR for .NET or Socket.IO for Node.JS applications.

If you still want to do some type of client-side polling, then better to use setTimeout to set the interval in some fashion. Maybe something like:

{% highlight js %}
(function poll() {
   setTimeout(function() {
       $.ajax({ url: "server", success: function(data) {
            sales.setValue(data.value);
       }, dataType: "json", complete: poll });
    }, 30000);
})();
{% endhighlight %}

If you can pull off keeping your connection open, then your application could see faster server response times and feel more responsive. That's a good thing - Good luck!

Thanks to @Lars for pointing this out in the comments. Thanks man!


###What's next? HTML5 WebSockets.

These types of Ajax Push techniques set the foundation for HTML5 WebSockets. With HTML5 WebSockets, we'll be able to see true Server Push styles of application development. This will make for truly responsive web applications.

Lately, I've been recommending [Socket.IO][3] for just such the occasion. Think of Socket.IO as the jQuery of HTML5 WebSockets.

No two browser vendors will implement the WebSockets protocol exactly alike. Socket.IO tries to normalize those differences. Here's how you might use Socket.IO with our [Dashboard Gauge Suite][4]:

{% highlight js %}
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect("http://localhost");
  socket.on('sales', function (data) {
    //Update your dashboard gauge
    salesGauge.setValue(data.value);

    socket.emit('profit', { my: 'data' });
  });
</script>
{% endhighlight %}

In order to provide realtime connectivity on every browser, Socket.IO selects the most capable transport at runtime, without it affecting the API. If WebSockets are available, it will use WebSockets.

If WebSockets aren't available, Socket.IO will select the next best transport including: Adobe Flash Socket or Ajax Polling. So having a solid understanding of JavaScript Long Polling examples is crucial.

We're still some time off before WebSockets will be universally and consistently supported. Until then, the jQuery Long Polling technique is a best-in-class solution for realtime server communications.

###Eat, Pray and Code

Long polling addresses the weakness of traditional polling by keeping the connection to your server open. Keeping the connection to the server open eliminates the travel time from client to server and thus, significantly reduces the issues surrounding network latency.

If you're looking for a beautiful suite of dashboard gauges for your next business intelligence project, I encourage you to check out our [Dashboard Gauge Suite][5]. And if you need an accompanying Polling solution, please do give the jQuery Long Polling solution a try.

We also sell a beautiful set of JavaScript Charts in our [JavaScript Charts][6] Suite. It's easy to get started, with a powerful API when you need it.


  [1]: http://techoctave.com/gauges
  [2]: http://en.wikipedia.org/wiki/Comet_%28programming%29
  [3]: http://socket.io/
  [4]: http://techoctave.com/gauges
  [5]: http://techoctave.com/gauges
  [6]: http://techoctave.com/charts
