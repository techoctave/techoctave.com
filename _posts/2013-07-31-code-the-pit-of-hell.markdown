---
layout: post
author: TVD
title: "Code & The Pit of Hell"
date: 2013-07-31 12:43:19
permalink: /c7/posts/122-code-the-pit-of-hell
---

<img src="https://techoctave.com/c7/static/psd.rb.png" alt="Ruby Photoshop Parser"/>

The fine folks over at LayerVault have released [PSD.rb][1], allowing Ruby developers to easily work with Photoshop documents.

If you use and love Ruby like we do, then you love this idea like we do. What once was a black box is now open for innovation. What's more is the surrounding context; Mans ever compulsion to control his environment, no matter the cost.

All great narratives have their version of the pit of hell. If you've ever read [Dante's Inferno][2] or did the same thing over and over expecting a different result, then you too have danced with the devil. 

Development is no different.

Except our pit of hell is masked in ones and zeros and entices with songs of victory very brave few can resist. The Dark Lord Cthulhu himself constantly double dog dares us to [parse HTML][3]. Once a week we try to [reinvent JavaScript][4].

Madness.

Photoshop's PSD format is not our favorite file format either. For many, to parse PSD is their last dance with sanity. It's not easy.

Many simply go mad.

And in their fall is a glimpse into honesty and bravery few seldom experience. I wanted to share that experience with you. Here's a code snippet from the [last guy who tried to parse PSD][5] in the Xee project:

*===================================================*

*uint32_t chunklen=[fh readUInt32BE];*

*off_t nextchunk=[fh offsetInFile]+((chunklen+3)&~3);*

*At this point, I'd like to take a moment to speak to you about the Adobe PSD format. PSD is not a good format. PSD is not even a bad format. Calling it such would be an insult to other bad formats, such as PCX or JPEG. No, PSD is an abysmal format.* 

*Having worked on this code for several weeks now, my hate for PSD has grown to a raging fire that burns with the fierce passion of a million suns.* 

*If there are two different ways of doing something, PSD will do both, in different places. It will then make up three more ways no sane human would think of, and do those too. PSD makes inconsistency an art form.*

*Why, for instance, did it suddenly decide that *these* particular chunks should be aligned to four bytes, and that this alignement should *not* be included in the size? Other chunks in other places are either unaligned, or aligned with the alignment included in the size. Here, though, it is not included.* 

*Either one of these three behaviours would be fine. A sane format would pick one. PSD, of course, uses all three, and more.*

*Trying to get data out of a PSD file is like trying to find something in the attic of your eccentric old uncle who died in a freak freshwater shark attack on his 58th birthday. That last detail may not be important for the purposes of the simile, but at this point I am spending a lot of time imagining amusing fates for the people responsible for this Rube Goldberg of a file format.* 

*Earlier, I tried to get a hold of the latest specs for the PSD file format. To do this, I had to apply to them for permission to apply to them to have them consider sending me this sacred tome.* 

*This would have involved faxing them a copy of some document or other, probably signed in blood. I can only imagine that they make this process so difficult because they are intensely ashamed of having created this abomination.* 

*I was naturally not gullible enough to go through with this procedure, but if I had done so, I would have printed out every single page of the spec, and set them all on fire. Were it within my power, I would gather every single copy of those specs, and launch them on a spaceship directly into the sun.*

*PSD is not my favourite file format.*

*if(sign!='8BIM') break; // sanity check*

*===================================================*

But there is a happy ending to this story...

The truth is for all our shortcomings as developers, every line of code we commit contributes to the greater good. With every project and every passion we lay the foundation for a brighter tomorrow.

Without the [hustle and code][6] of the Xee developers, who knows where we might be with PSD.rb or PSD.js or PSD.* 

We contribute to the greater good...Remember that. 

When you're down-and-out...Remember that. When it's time for you to push back on that project deadline...Remember that. When the code is too hard, the frustration too great...Remember that.

Remember that after all the hustle, just beyond the field of "finished" is a brighter tomorrow for all of us.

Code for the moments that take your breath away.




  [1]: http://cosmos.layervault.com/psdrb.html
  [2]: http://en.wikipedia.org/wiki/Inferno_(Dante)
  [3]: https://techoctave.com/posts/50-silly-rabbit-parsing-html-is-for-kids
  [4]: https://github.com/jashkenas/coffee-script/wiki/List-of-languages-that-compile-to-JS
  [5]: https://code.google.com/p/xee/source/browse/XeePhotoshopLoader.m#102
  [6]: https://techoctave.com/posts/57-hustle-and-code
