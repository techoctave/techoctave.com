---
layout: post
author: TVD
title: "C# File Binary Serialization & Tender Love Making"
date: 2013-07-24 01:47:33
permalink: /c7/posts/120-c-file-binary-serialization-tender-love-making
---

.NET is a [ghetto][1].

People say the world is getting smaller. That there just isn't that much left to explore. I suspect the people who say that haven't coded yet.

The other day, we spent an absurd amount of time trying to find the best way to serialize a simple document for use in an XML Web Service call. Our wish is that this code snippet helps someone else.

### Serialize Binary Documents
Here's how we serialized a binary file to a string based format in C#:

{% highlight js %}
string filePath = @"C:\OBEY\Word.doc";

byte[] file = File.ReadAllBytes(filePath);

string serializeDocument = Convert.ToBase64String(file);
{% endhighlight %}

High level, the steps are:

{% highlight js %}
1. Get the document's file path

2. Load the file into a byte array

3. Convert the byte array to a Base64 string
{% endhighlight %}

It's crazy, during research, everyone wanted to talk about serializing [POCOs][2]* to send across the wire. EVERYONE. But, that's only one application of serialization. How about the most simple use case, serializing a simple document.

Well, now you know how.

**As an aside, if you're not familiar with the term Plain Old C# Object, I encourage you to read up on design principles in leading ["Enterprise" Architecture][3]. It's truly a fascinating read. And yes, I know POCO stands for Plain Old CLR Object, but who are we kidding right? :)* 

### Deserialize Binary Documents

Deserialization - that is converting a Base64String to a binary document - is just as simple. Here's how:

{% highlight js %}
byte[] document = Convert.FromBase64String(string);
{% endhighlight %}

Where the variable *string* is a serialized Base64String string. From there you can make tender love to the document. Or whatever else you were planning to do.

'Till next time...Peace, Love and Happy Coding! :)




  [1]: https://techoctave.com/posts/113-c-reading-xml-with-namespace
  [2]: http://www.martinfowler.com/bliki/POJO.html
  [3]: http://en.wikipedia.org/wiki/Enterprise_Architect_(software)
