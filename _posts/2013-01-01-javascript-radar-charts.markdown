---
layout: post
author: TVD
title: "JavaScript Radar Charts"
date: 2013-01-01 02:38:31
permalink: /c7/posts/100-javascript-radar-charts
---

<img src="http://techoctave.com/c7/static/radarchart_product_analysis.png" alt="JavaScript Radar Chart, Spider Chart, Star Chart."/>

Recently, one of our customers needed a Radar Chart for an Enterprise Resource Planning (ERP) application. They thought a Radar Chart would be a great addition to our [JavaScript Charts][1] Suite:

We agree.

So we set out to build a Radar Chart built on the [Six Core Principles][2] we established so long ago:

{% highlight js %}
1. Beautifully Illustrated

2. Cross-Browser Compatible

3. Lightweight footprint

4. Vector Based for Crisp Zoom and Print

5. Highly Configurable

6. Framework Agnostic
{% endhighlight %}

I believed then as I believe now that these principles are central to developer happiness. They inform what we do each and every day.

###What are Radar Charts?

Radar charts plot the values of each category along a separate axis starting from the center of the chart and ending at the outer ring. In a Radar chart, a point close to the center indicates a low value and a point near the perimeter indicates a high value.

Radar charts will illustrate, graphically, the size of gaps amongst several organizational Key Performance Indicators (KPI) by highlighting the area where improvements are needed most.

Take a look at the radar chart above. This is a typical radar chart - sometimes called a spider chart or star chart for the way it looks. It makes concentrations, strengths and weaknesses much more visible.

If it's done well, it clearly defines full performance in each category. A well executed radar chart is a good way to answer the question, "How are we doing?"

###When should you use a Radar Chart?

Use it to identify gaps among both current organizational KPI and ideal organizational KPI. You can use it to compare a variety of organizational data - Individuals, Teams and even whole Organizations. 

That's why you'll often see radar charts used in the scope of Human Resources and Portfolio Management application development projects.

###How to use our Radar Chart?

So let's see how we go about drawing our Radar Chart. The first thing to do is identify the categories or performances you want to compare. Then you'll want to gather the quantitative data for each category. Finally, plot the radar chart using your favorite [JavaScript Charts][3] library.

For our example, we'll analyze the change in advertising spending for National ERP Solutions, Inc. (NES) over two consecutive years:

<img src="http://techoctave.com/c7/static/radarchart_advertising_spending_analysis.png" alt="Radar Chart advertising spending analysis."/>

#### Identify Key Categories or Performances

Here, NES advertising channels were:

{% highlight js %}
1. Internet

2. Television

3. Radio

4. Newspaper

5. Magazine
{% endhighlight %}

These advertising channels will make perfect Radar Categories for our example. For you, your categories will be different, but the idea is to identify areas your organization needs to analyze.

####Gather Categorical Quantitative Data

Here, for Year 1, NES spending was as follows:

{% highlight js %}
1. Internet ($100,000)

2. Television ($200,000)

3. Radio ($175,000)

4. Newspaper ($100,000)

5. Magazine ($100,000)
{% endhighlight %}

For Year 2, NES spending habits made a pinnacle shift:

{% highlight js %}
1. Internet ($200,000)

2. Television ($125,000)

3. Radio ($105,000)

4. Newspaper ($100,000)

5. Magazine ($100,000)
{% endhighlight %}

####Plot Your Radar Chart

Here we'll use our RadarChart component from our JavaScript Charts Suite. First, we'll create an HTML element to bind our chart too:

{% highlight html %}
<div id="advertising"></div>
{% endhighlight %}

Next, we'll create an instance of our RadarChart class:

{% highlight js %}
var advertising = new RadarChart("advertising", {
	data: [[100000, 200000, 175000, 100000, 100000], 
           [200000, 125000, 105000, 100000, 100000]],
    
	maxValue: 250000,
		
	categories: ["Internet", "Television", "Radio", 
                 "Newspaper", "Magazine"],

	legend: true,
	legendTitle: "Advertising",
	legendLabels: ["Year 1", "Year 2"],
});
{% endhighlight %}

Our data property can handle multiple sets of data. Here, the first set is the advertising spend gathered for Year 1. Finally, the last set is the advertising spend gathered for Year 2.

The key categories are listed in the categories property of the RadarChart class. This particular instance has the following categories: "Internet", "Television", "Radio", "Newspaper", "Magazine".

Since we'd like to give our audience a quick legend for identifying which set is which, we've turned on the legend for our RadarChart. Then we set its title to "Advertising". Finally, we label each data set: Year 1 followed by Year 2.

There are over thirty (30) properties we could set for our RadarChart, but these few should suffice for this example. Just know that our RadarChart is as flexible as the times call for.

####Analyze Your Radar Chart Data

What is happening to NES here is what advertisers refer to as [The Great Shift][4]. The Great Shift refers to the time when companies will increase Internet advertising while simultaneously decreasing traditional advertising channels.

Here, NES has doubled its Internet advertising while decreasing Television advertising by 37.5% and decreasing Radio advertising by 42.9%. Newspaper and Magazine advertising remained the same.

As a best-in-class company, being able to comprehend and take action on these trends is mission critical. They help you to understand where the business is heading and what type of talent your organization needs to recruit.

From a Human Resources standpoint, Radar charts help you quickly understand you'll need to seek out folks with digital skills so you can be competitive in the market place. People like software developers, designers, user experience specialists and community managers.

From a Sourcing & Purchasing standpoint, Radar charts help you quickly understand that you'll need tools to monitor internet traffic and conversions so you can effectively measure your Return on Investment (ROI).

###Thoughts and Reflections

What Great Shifts are taking place in your industry? What is your data telling you that you cannot see yet?

You have the data and you have the opportunity. Now is the time to take a fresh perspective on both. This is your day to seize.

Listen, I'm not telling you it's going to be easy. I'm telling you it's going to be worth it. We're the team to help you get there.

    


  [1]: http://techoctave.com/charts/
  [2]: http://techoctave.com/c7/posts/17-jquery-dashboard-gauges-using-raphael-xhtml-and-css
  [3]: http://techoctave.com/charts/
  [4]: http://www.forbes.com/sites/roberthof/2011/08/26/online-ad-spend-to-overtake-tv/
