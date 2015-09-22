---
layout: post
author: TVD
title: "JavaScript is the Target Language for the Web and that's OK."
date: 2013-06-03 10:23:19
permalink: /c7/posts/115-javascript-is-the-target-language-for-the-web-and-that-s-ok
---

<img src="http://techoctave.com/c7/static/unreal-engine-epic-citadel-mozilla.jpg" alt="Asm.js is for game developers, not web developers." title="Asm.js is for game developers, not web developers."/>

JavaScript is indeed a target language. Time and good sense has shown us it is a [high-level language][1], so far removed from either low-level or assembly. Yet, it is a target language non-the-less. 

A target language whose value, I posit, is maximized for only a specific class of software development - Game Development.

For [all the][2] [examples][3] we can think of to use asm.js, game development seems to me to be the only time this assembly analogy makes any good sense. In fact, game development is the only use case at all.

Unless I missed something, are there any other necessary uses for asm.js? And please don't tell me it can be used to transpile {[Some][4] [Designer Language][5]} to JavaScript . . . Been there. Done that. We all have the T-Shirt.

As we all know, game development - although a discipline of software development - is a separate practice from web development entirely. Pragmatically speaking, asm.js is for game developers, not web developers.

Similar to how web developers use JavaScript, game developers use C/C++ and OpenGL or DirectX to breathe life into their work. The only reason video games are able to run on the web is because developers can access [WebGL/OpenGL][6] through an HTML5 canvas element.

In fact, [game developers target JavaScript][7] because that's the <u>ONLY</u> way they can access OpenGL:

<img src="http://techoctave.com/c7/static/asmjs-compilation-execution-pipeline.jpg" alt="Game developers target JavaScript that is the only way they can access WebGL via HTML5." title="Game developers target JavaScript that is the only way they can access WebGL via HTML5."/>

But for WebGL, game developers would have no use for JavaScript. Instead of three (3) layers between game developers and WebGL/OpenGL, what if there were zero (0)? Think how much faster the games would be. In fact, there would be no need for asm.js at all.

Why is game development the optimal use case? Simple. It's optimal because it gives game developers another venue to display their work. Asm.js could be the jQuery of game development. Opening markets from only consoles and desktops to a larger market via the web.

Yet, the game developer's day-to-day activities don't change. Asm.js doesn't get in their way. It doesn't relegate C/C++ to second class citizenry. They'll still go about their day as they've always have. Except, now they have a new environment a build script can target.

With game development, asm.js isn't an unnecessary intermediary...

Listen, [I love C/C++][8], but clearly web developers are not going to develop front-end code in it. I'm sure not, would any of you?

In fact, the folks unlucky enough to maintain GWT Java code would love to meet the fella who made that call because it makes their day-to-day development experience a complete nightmare (Think classic ASP.NET WebForms, but with Java and Eclipse). That's not good for them and it's not good for any of you either.

Game developers who want to run their software on web browsers can target JavaScript. Asm.js serves that purpose. That's it. Nothing more. Nothing less.

That makes JavaScript the Target Language for the Web and that's OK.


  [1]: http://techoctave.com/c7/posts/102-the-only-higher-level-than-javascript-is-god-s-word
  [2]: http://blog.mozilla.org/blog/2013/03/27/mozilla-is-unlocking-the-power-of-the-web-as-a-platform-for-gaming/
  [3]: http://www.hanselman.com/blog/JavaScriptIsWebAssemblyLanguageAndThatsOK.aspx
  [4]: https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS
  [5]: http://techoctave.com/c7/posts/90-designer-languages
  [6]: https://developer.mozilla.org/en-US/docs/Web/WebGL/Getting_started_with_WebGL?redirectlocale=en-US&redirectslug=WebGL%2FGetting_started_with_WebGL
  [7]: http://www.unrealengine.com/html5_faq/
  [8]: http://techoctave.com/c7/posts/97-why-c-never-left
