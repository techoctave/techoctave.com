---
layout: post
author: TVD
title: "3 Reasons SVG Beats Canvas"
date: 2013-06-24 12:43:16
permalink: /c7/posts/116-3-reasons-svg-beats-canvas
---

<img src="https://techoctave.com/c7/static/vader-vs-batman-things-just-got-real.png" alt="3 Reasons SVG Beats Canvas"/>

We often get asked, "Should we use SVG or Canvas?" The consensus is pretty clear, use SVG.

###DOM Handling

Every SVG element attaches to the Document Object Model (DOM). So you can easily attach event handlers and manipulate elements like you would with jQuery and other JavaScript frameworks.

This is not the case with canvas. With canvas all elements are contained within a single canvas element and don't attach to the DOM. What this means is you can't interact with individual elements within the canvas itself.

###Browser Support

SVG and canvas elements are supported by all the modern HTML5 browsers. Neither have native support in IE8 and below.

However, if your component is written using [Raphael.js][1] you can support IE8 and below using VML. That's not the case with canvas.

With canvas you're not able to run in IE8 at all. So if you're trying to reach the widest browsers as possible, canvas is not for you.

###SVGs are Scalable

SVGs are automatically more advantageous for high-resolution iPads and the flexible images needed in Responsive Web Design applications. This means your logos and [JavaScript Gauges][2] will automatically scale. Canvas components won't scale at all.

Think of HTML5 Canvas as Adobe Photoshop and SVG as Adobe Illustrator. Both are excellent pieces of software. Both can produce great logos. But Illustrator produces scalable, crisp logos whereas Photoshop does not. 

The consensus is pretty clear, stick with SVG. And, in case your wondering, SVG is The Batman.


  [1]: http://raphaeljs.com/
  [2]: http://techoctave.com/gauges/
