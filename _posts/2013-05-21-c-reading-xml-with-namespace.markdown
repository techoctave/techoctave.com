---
layout: post
author: TVD
title: "C# Reading XML With Namespace"
date: 2013-05-21 11:09:54
permalink: /c7/posts/113-c-reading-xml-with-namespace
---

I've said it before and I'll say it again: .NET is a ghetto. It's my experience that once your application becomes non-trivial, there is no tried-and-true way of accomplishing a given task.

You either have to piece together what feels like desparate code in order to accomplish the most common of use cases. Case in point is using XPath to read data in XML.

Say you have this XML response:

{% highlight xml %}
<?xml version="1.0" encoding="utf-8"?>
<UserResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <User xmlns="http://halo.com/schemas/custom/users/GetUser_V1">
	  <Result>"Successful"</Result>
      <Name>John-117</Name>
      <Age>Unknown</Age>
      <Rank>Master Chief Petty Officer</Rank>
  </User>
  <UUID xmlns="http://halo.com/schemas/custom/users/GetUser_V1">
	  {61D25ABC-CD96-4838-9406-C867B6D07449}
  </UUID>
</UserResponse>
{% endhighlight %}

Using C#, parsing this data should be an easy task - right? You should be able to do something like this?

{% highlight js %}
HaloService haloService = new HaloService();
string response = haloService.ExecuteCall("{61D25ABC-CD96-4838-9406-C867B6D07449}");

XmlDocument results = new XmlDocument();
results.LoadXml(response);

if (results.SelectSingleNode("//UserResponse/User/Result").InnerText == "Successful") {
    string Name = results.SelectSingleNode("//UserResponse/User/Name").InnerText;
}
{% endhighlight %}

But does that work in .NET C#? No.

Why? It doesn't work because the XML response has a namespace separating the key data elements. Here the XML namespace is:

{% highlight xml %}
http://halo.com/schemas/custom/users/GetUser_V1
{% endhighlight %}

###So what are your options:

You really only have two options when confronted with this challenge. The first is to use XMLNamespaceManager. I don't care for that route as you'll see below.

The final option is to strip the Namespaces using Regex. I prefer this route and you'll see why.

####Use XmlNamespaceManager

When using XPath in .NET (via SelectNodes or SelectSingleNode) on XML with namespaces you need to:

{% highlight bash %}
1. Provide your own XmlNamespaceManager

2. Explicitly prefix ALL elements in your XPath expression which are in the namespace
{% endhighlight %}

You do so in a similar fashion as below:

{% highlight js %}
. . .
    
XmlDocument results = new XmlDocument();
results.LoadXml(response);

XmlNamespaceManager ns = new XmlNamespaceManager(results.NameTable);
ns.AddNamespace("ns",      
        "http://halo.com/schemas/custom/users/GetUser_V1");

string Result = results.SelectSingleNode(
"//UserResponse/ns:User/ns:Result", ns).InnerText;

. . .
{% endhighlight %}

This gets you the data, but it's clumsy and has several disadvantages. First, if you don't control the web service (which many people don't), the namespace could change on you at anytime.

When that happens your hardcoded namespace WILL break and you will have production downtime. Second, you can't reuse XPath that was previously valid. Finally, the namespaced XPath expression is less readable and therefore, less maintainable.

The XPath implementation in SelectNodes and SelectSingleNode should really be more flexible. Using familiar methods should not shock developers or lead to unmaintainable code. It simply shouldn't.

    

####Strip The Namespaces Using Regex

Regex is like violence - if it doesn’t solve your problems, you are not using enough of it. Generally, I don't condone the use of  [unnecessary Regex][1]. 

This isn't one of those scenarios. Here, Regex was not only necessary, it was downright welcomed:

{% highlight js %}
string filter = @"xmlns(:\w+)?=""([^""]+)""|xsi(:\w+)?=""([^""]+)""";
response = Regex.Replace(response, filter, "");

XmlDocument results = new XmlDocument();
results.LoadXml(response);

string Name = results.SelectSingleNode("//UserResponse/User/Name").InnerText;
{% endhighlight %}

Here, we remove any XML Namespace (xmlns) declaration before loading the XML. Once you do that, you can read the XML using the XPath expression you expected to use in the first place.

The pros are quick and apparent. First, your application won't break if the owner of the web service needs to change their namespace (this could easily happen). Second, you can reuse previously developed XPath expressions without issue. Finally, the code is simply more readable - one to one - with the original XPath expression.

Really hope this helps save someone some much needed development time. Wish I had this article, it definitely would have saved me time.

Code Long & Prosper!

    


  [1]: http://techoctave.com/c7/posts/50-silly-rabbit-parsing-html-is-for-kids
