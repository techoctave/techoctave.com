---
layout: post
author: TVD
title: "Save Raphael SVG Chart As Image"
date: 2013-11-12 12:33:24
permalink: /c7/posts/130-save-raphael-svg-chart-as-image
---

<img src="https://techoctave.com/c7/static/svg-to-png.png" alt="Save Raphael SVG As Image"/>

We work with the best developers in the craft. They push the envelope. They make the right decisions. Do the right work and [ship][1].


In that environment, a lot of great minds ask the same great questions. One of those questions often sounds like this, "How do we save our SVG chart to a PNG image?"

Saving SVG to PNG image turns out to be a [very][2] [popular][3] [question][4]. Though, not surprisingly, because the browser is involved, it is not an [easy][5] on to [answer][6].


###Save Raphael SVG To Image Client Side

First, you'll have to have an HTML5 element to hang your SVG on:

{% highlight html %}
<div id="sales"></div>
{% endhighlight %}

and a HTML5 button to trigger the download event:

{% highlight html %}
<button id="createImage">Create Image *.png</button>
{% endhighlight %}

Next, you'll have to have an SVG graphic to load into the HTML5 element. Here we'll use our [JavaScript Gauges][7]:

{% highlight js %}
window.onload = function() {
	var sales = new Gauge("sales");
};
{% endhighlight %}

At this point, you will have an SVG object loaded into your HTML5  node. Then follow this algorithm to setup the SVG image download process.

Save SVG To Image Algorithm:

{% highlight js %}
1. Get the svg instance

2. Create the canvas element

3. Load the canvas element with our svg instance

4. Save svg to png

5. Clear the canvas
{% endhighlight %}

Here's the SVG To Image Algorithm in Code:

{% highlight js %}
//Create PNG Image
document.getElementById("createImage").onclick = function() {
	//Get the svg
	var svg = document.getElementById("sales").innerHTML;
		
	//Create the canvas element
	var canvas = document.createElement('canvas');
	canvas.id = "canvas";
	document.body.appendChild(canvas);
		
	//Load the canvas element with our svg
	canvg(document.getElementById('canvas'), svg);
		
	//Save the svg to png
	Canvas2Image.saveAsPNG(canvas);
		
	//Clear the canvas
	canvas.width = canvas.width;
};
{% endhighlight %}

Step 3 uses the [Canvg][8] library. Canvg is a SVG parser and renderer. It takes a URL to a SVG file or the text of an SVG file, parses it in JavaScript, and renders the result on a Canvas element.

Step 4 uses the [Canvas2Image][9] library. This is a small library that lets you easily save a HTML5 canvas element as an imagefile.

####Pros

The pros are you get a 100% client-side solution to saving Raphael SVG to PNG image. Which means less server load and more front-end awesome.

That's the good news...

####Cons

The bad news is the image is downloaded without a file extension. Also, the limitations with browser mime type control, you cannot give the image a custom file name.

If you're paying attention, you know those are pretty BIG cons.


###Save Raphael SVG To Image Server Side

When you want to set a customized filename for the generated PNG file, you have to send the data:uri string from the canvas.toDataURL() element onto server side using Ajax. Then rewrite the response headers and send back the browser. Here's a good article summarizing the [server-side][10] technique using CoffeeScript and Ruy.


###Conclusion

Using client-side only is not an option yet because the browser technology just isn't there. What you'll want to do is combine both client-side and server-side techniques to get the maximum customization.

Something like...

Save SVG To Image Algorithm:

{% highlight js %}
1. Get the svg instance

2. Create the canvas element

3. Load the canvas element with our svg instance

4. Ajax the canvas.toDataURL() results to your server

5. Rewrite the response headers and send back to the browser
{% endhighlight %}

Using Ruby and Rails would look something similar to:

{% highlight js %}
# svg_controller.rb
class SvgController < ApplicationController
  require "base64"
  
  def show
    @svg = Svg.where(id: params[:id]).first
    respond_to do |format|
      format.png {
        headers['Content-type'] = 'image/png'
        headers["Content-Disposition"] = "attachment; filename=\"chart.png\""
        @result = Base64.decode64(@svg.content.gsub('data:image/png;base64,', ''))
        render :text => @result
      }
    end
  end
end
{% endhighlight %}

That will get you the customization you need.Step 5 is an implementation detail. Use Ruby, J2EE, .NET, Python, use whatever you need to get the job done and you will have your victory.

Happy Coding and Godspeed!

  [1]: https://techoctave.com/posts/79-never-save-anything-for-the-swim-back
  [2]: http://stackoverflow.com/questions/14631408/save-svg-html5-to-png-or-image
  [3]: http://stackoverflow.com/questions/4086703/convert-raphael-svg-to-image-png-etc-client-side
  [4]: http://stackoverflow.com/questions/15981394/save-svgin-div-to-png-or-convert-to-png-raphael-js
  [5]: http://stackoverflow.com/questions/17454971/export-svg-to-png-with-image-inside-svg
  [6]: http://stackoverflow.com/questions/3975499/convert-svg-to-image-jpeg-png-etc-in-the-browser
  [7]: http://techoctave.com/gauges
  [8]: https://code.google.com/p/canvg/
  [9]: http://www.nihilogic.dk/labs/canvas2image/
  [10]: http://www.intridea.com/blog/2013/1/9/downloadable-svg-in-png-format
