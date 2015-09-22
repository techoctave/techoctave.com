---
layout: post
author: TVD
title: "NHibernate: The Good Parts"
date: 2012-02-09 12:18:12
permalink: /c7/posts/68-nhibernate-the-good-parts
---

<img src="http://techoctave.com/c7/static/samurai.jpg" width="100%"/>


NHibernate is an Object Relational Mapper (ORM) for the .NET Runtime. XML Mappings are still the most popular method of mapping persistent classes to their relational tables:


Inspired by the success of [Fluent NHibernate][1] and what [Martin Fowler calls the Fluent Interface][2], NHibernate 3.2 will feature its own [NHibernate Mapping by Code][3] API.

With such change abound, I thought it a great opportunity to layout the fundamentals of XML Mappings. In the process, we'll also delve into a few core development laws I use regardless of platform.

###Elements of Object Oriented Software

Particularly with static languages, I adhere to two core object oriented design principles. These principles were first applied in [Design Patterns:
Elements of Reusable Object-Oriented Software][4] by The Gang of Four - Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides:

{% highlight bash %}
1. Program to an interface, not an implementation.
2. Favor object composition over class inheritance.
{% endhighlight %}

These design principles form the basis for maintainable NTier'd applications both on the J2EE and .NET Runtimes.

Let's take a look at a domain model that implements these core object oriented design principles. Let's model a blog Post:


####The Post Interface (IPost.cs)

The interface exposes the public properties and methods of a persistent class in your domain:

{% highlight js %}
public interface IPost
{
    int Id { get; set; }
    string Title { get; set; }
    string Content { get; set; }
    IAuthor Author { get; set; }
    IList<Comment> Comments { get; set; }
}
{% endhighlight %}

####The Post Implementation (Post.cs)

The Post class implements the IPost interface. Here, we assume the *Author* class and the *Comment* class are defined elsewhere:

{% highlight js %}
public class Post : IPost
{
    private int id;
    private string title;
    private string content;
    private IAuthor author;
    private IList<Comment> comments;

    public Post()
    {
       author = new Author();
       comments = new List<Comment>();
    }

    public virtual int Id 
    { 
       get { return id; } 
       set { id = value; } 
    }

    public virtual string Title
    { 
       get { return title; } 
       set { title = value; } 
    }

    public virtual string Content
    { 
       get { return content; } 
       set { content = value; } 
    }

    public virtual IAuthor Author
    { 
       get { return author; } 
       set { author = value; } 
    }

    public virtual IList<Comment> Comments
    { 
       get { return comments; } 
       set { comments = value; } 
    }
}
{% endhighlight %}

Each Post has an *Author* and a list of *Comments*. In the Post constructor, I create instances of each domain object.

Rarely does a problem domain ever break down to neat hierarchical entities. The majority of domain models are usually composed of another model or a collection of other models that it does work on or relies on.

That's why understanding object composition is so important. Object composition gives you the freedom to model the world as you see it without the self-imposed restrictions that come with being inheritance focused.

The real problem is [inheritance breaks encapsulation][5] because it exposes a subclass to details of it's parents implementation.

These implementation dependencies can cause problems when trying to reuse a subclass. Should any aspect of the inherited implementation not be appropriate for new problem domains, the parent class must be rewritten or replaced by something more appropriate. This dependency limits flexibility and ultimately reusability.

On the other hand, Object Composition requires objects to respect each others interfaces, which in turn requires us to carefully design interfaces that don't stop you from using one object with many others. Because objects are accessed solely through their interfaces, we don't break encapsulation.

Favoring object composition over class inheritance helps you keep each class focused on one task - The Single Responsibility Rule. You classes and class hierarchies will remain small and will be less likely to grow into unmanageable monsters.

###NHibernate XML Mappings

NHibernate XML Mappings are a way to map our domain objects to their corresponding database tables.

Using NHibernate, the database becomes an implementation detail and you can spend more time understanding your problem domain and less time fiddling with database tables.

Here's how we would map our Post class:

#### The NHibernate Mapping (Post.hbm.xml)

Here, we'll assume the Author class is mapped in Author.hbm.xml and the Comment class is mapped in Comment.hbm.xml:

{% highlight js %}
<?xml version="1.0" encoding="utf-8" ?>
<hibernate-mapping xmlns="urn:nhibernate-mapping-2.2"
                   assembly="Blogcast.Domain"
                   namespace="Blogcast.Domain"
                   default-lazy="true">

  <class name="Post" table="Posts">
    <id name="Id" unsaved-value="0">
      <generator class="native"/>
    </id>

    <property name="Title"/>

    <property name="Content"/>

    <many-to-one name="Author" class="Author" cascade="all-delete-orphan"/>

    <bag name="Comments" cascade="all-delete-orphan">
      <key column="PostId"/>
      <one-to-many class="Comment"/>
    </bag>
  </class>
</hibernate-mapping>
{% endhighlight %}

Top to bottom, here are some major key points to take away from this NHibernate class map:

####Lazy Loading

There are time when you don't need to fetch the entire object graph. Setting *default-lazy="true"* ensures NHibernate will only request the entity data you requested at a given time. 

Also, if you use lazy loading (which I highly recommend you do), you need to add the virtual keyword to each of your classes' public properties and methods.

####Orphaned Data

We can all agree orphaned data isn't a good thing. Set the *cascade* property to "all-delete-orphan" to delete data that would otherwise have been orphaned forever. This issue generally comes to light when handling custom types or lists of custom types.

####Class Properties

System Types - (int, string, bool) are defined using the *property* tag.

Custom Types - (Author) are defined using the *many-to-one* tag.

Lists of Custom Types - (List of Comments) are defined using the *bag* tag with a *one-to-many* relationship to the Custom Type (Comment). Here, each instance of a Comment has an associated unique Post instance. Therefore, PostId needs to be a public property on the Comment class. Then NHibernate an properly associate each Comment to the correct Post.


###Take away

Today we covered a modern approach to object oriented programming. We also covered how to flush out a domain model and how to map its custom types in NHibernate.

NHibernate is a fine piece of software. Sometimes the hardest part is understanding how to map your custom classes. I hope this article helps in understanding the mapping between your domain's custom types and lists of custom types.

Don't worry, you'll be an ORM Boss in no time. Godspeed and Happy Coding. Go get 'em!




  [1]: http://lostechies.com/jamesgregory/2011/04/13/me-on-nhibernate-3-2/
  [2]: http://martinfowler.com/bliki/FluentInterface.html
  [3]: http://nhforge.org/blogs/nhibernate/archive/2011/09/12/nh-mapping-by-code-vs-the-untouchable-db.aspx
  [4]: http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612
  [5]: http://books.google.com/books?id=6oHuKQe3TjQC&pg=PT56&lpg=PT56&dq=design+patterns+elements+of+reusable+object-oriented+software+inheritance+breaks+encapsulation&source=bl&ots=lNkNCR6NFI&sig=TvcfMsh_tav8Cm2cue1xoExBKpk&hl=en&sa=X&ei=v04vT9zWMsbc0QHHj830Cg&sqi=2&ved=0CEUQ6AEwBA#v=onepage&q&f=false
