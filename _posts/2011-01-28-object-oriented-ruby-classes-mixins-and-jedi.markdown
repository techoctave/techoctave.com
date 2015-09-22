---
layout: post
author: TVD
title: "Object Oriented Ruby: Classes, Mixins and Jedi"
date: 2011-01-28 03:40:24
permalink: /c7/posts/46-object-oriented-ruby-classes-mixins-and-jedi
---

Objects, Ruby Classes and Mixins are the topics today. Ruby is a dynamic language with a focus on simplicity and productivity. Object Oriented programming in Ruby is at once elegant and simple. Ready for more power and flexibility? Let's get started...

Most academics approach object oriented discussions with Tonka toys and furry kittens. Well, [academia can take a backseat][1]. From here on out, dump the Tonka toys and put the kittens to bed - we're talking Lightsabers and Jedi baby!

<iframe width="100%" height="500" src="http://www.youtube.com/embed/_xP3fI7yn5s" frameborder="0" allowfullscreen></iframe>

###Objects

An object is an instance of a class. Each instance having its own unique attributes and state.

####dojo.rb

{% highlight ruby %}
    require 'Jedi'

    anakin = Jedi.new("Anakin")
    anakin.duel
    anakin.lightsaber("Ruby")
    anakin.juyo
{% endhighlight %}

Here, the *anakin* object is an instance of the Jedi class. Apparently, Anakin is having trouble with some galactic fraktards and fires up his Ruby lightsaber using the *lightsaber* method. Then Anakin proceeds to bring the hurt using a lightsaber combat form called [Juyo][2].

Using the Jedi class is deceivingly simple. That simplicity is possible because of a well designed domain model (collection of ruby classes that model a particular system).

In this article, I'll take you behind the scenes and show you the techniques you need to write clean, maintainable and awesome Ruby code.

###Ruby Classes

In Ruby, an class (object) encapsulates a group of attributes (state) and methods (operations). A developer manipulates an object's state (instance variables) only through class accessors and methods.

####Jedi.rb

Here's how a Jedi class might look:

{% highlight ruby %}
    require 'Padawan'
    require 'Forms'

    class Jedi < Padawan
      include Forms
  
      def initialize(name = 'Unknown')
        @name = name
        puts "Jedi.initialize"
      end

      def duel
        puts "Only a Sith deals in absolutes."
      end
    end
{% endhighlight %}

####Padawan.rb

And the Padawan class might look like this:

{% highlight ruby %}
    require 'Force'
    require 'Lightsaber'

    class Padawan
      attr_accessor :name
  
      include Force
      include Lightsaber
  
      def inspect
        puts "Force-Sensitive: " + @name
      end
    end
{% endhighlight %}

Padawan would be derived from maybe a *Sentient* class. But for simplicity I'm including in the Padawan class attributes you might have seen in a class like *Sentient*. For example, the *@name* attribute.

####Constructor (Initialization)

The initialized method is Ruby's constructor method for class implementations. It's called whenever a new instance of a class is created. For example, here a new instance of the Jedi class is called. The result is the *anakin* object:

{% highlight ruby %}
    #dojo.rb
    anakin = Jedi.new("Anakin")
{% endhighlight %}

This example illustrates a beautiful feature of Ruby - *Flexible Initialization*. This means you have the option to pass a parameter or not:

{% highlight ruby %}
    #Jedi.rb
    def initialize(name = 'Unknown')
        @name = name
        . . .
    end
{% endhighlight %}

You can choose not to pass a parameter. In that case, creating an instance of the Jedi object might look like this:

{% highlight ruby %}
    sith = Jedi.new
{% endhighlight %}

And the default value of the *@name* attribute would be *Unknown*.

####Inspect
You've noticed by now that when we try to look at an object directly, we are shown something cryptic like *<#Jedi:0x101237498 @name="Anakin">*. This is just a default behavior, and we are free to change it.

All we need to do is add a method named *inspect*. You should return a string that describes the object in some meaningful way - including the states of some or all of its instance attributes.

Here, we return the value of the *@name* attribute on the Padawan class. In this instance of the Jedi object, the value of the *@name* attribute is Anakin. So I setup the *inspect* method to return  *Force-Sensitive: Anakin*.

Run *irb* from Terminal. Then *load 'dojo.rb'*. And type *Anakin*. Type *Exit* to leave irb.

####Accessors

A class may have many attributes. It really all depends on the domain you're trying to model. Accessing those attributes directly is not a good practice. Instead, you should create accessors to read and write to those attributes.

To accomplish this in some languages is a pain. You would have to define a *getter* method and *setter* method for each class attribute. Imagine having 10 attributes. That's 20 different accessors you would have to write - in addition to writing your attributes!

Ruby has a more elegant solution - the attr_accessor shortcut:

{% highlight ruby %}
    class Padawan
      attr_accessor :name
      . . .
    end
{% endhighlight %}

This gets you the following Ruby class methods for FREE:

{% highlight ruby %}
    #attr_reader
    def name
      @name
    end

    #attr_writer
    def name(value)
      @name = value
    end
{% endhighlight %}

Awesome! This is at once elegant and beautiful. You can add as much attribute accessors as you like: attr_accessor :name, :weight, :etc.

You're not going to always want a *getter* and *setter*. Sometimes you might only need one. You can do that in Ruby:

{% highlight ruby %}
    attr_reader :midi_chlorian
    attr_writer :heart_rate
{% endhighlight %}

You get the picture!

####Methods

Methods are how we interact with our Ruby classes. Methods allow us to encapsulate activities specific to the particular class:

{% highlight ruby %}
    #Jedi.rb
    def duel
      puts "Only a Sith deals in absolutes."
    end
{% endhighlight %}

Methods sometimes perform work on a Ruby classes' attributes. Sometimes a method just performs work specific to the class. In our Jedi class, we have a *duel* method. This method is used to convey some Jedi axiom just before battle begins.

Like an initialize constructor, a method can take parameters. A Ruby method can even have a default parameter. So our *duel* method could have looked like:

{% highlight ruby %}
    #Jedi.rb
    def duel(opponent = 'Sith')
      puts "You disappoint me " + opponent + "."
      puts "Only a Sith deals in absolutes."
    end
{% endhighlight %}

Coming from static languages, Ruby's minimalistic approach to object oriented programming is at once refreshing and inspiring.

Still with me? Great! Let's move on to more advanced topics.

###Inheritance

Eventually, you'll reach a situation where different Ruby classes have the same attribute and perform the same basic actions.

We know that a Jedi evolved from a Padawan. Therefore, a Jedi should posses the skills of a Padawan with the further developed skills of a Jedi Knight.

In Ruby, such relationships can be expressed using inheritance. Here, the Padawan class is called the parent class:

{% highlight ruby %}
    class Jedi < Padawan
    . . .
    end
{% endhighlight %}

In this way we can reuse the Padawan class for other force-sensitives that we wouldn't consider Jedi. For example, we could have a Sith class:

{% highlight ruby %}
    class Sith < Padawan
    . . .
    end
{% endhighlight %}

Darth Vader was once a Padawan until he turned to the Dark Side and became a Sith Lord. As such, you would expect him to have the knowledge and training of a Padawan with the learning of a Dark Knight.

####Polymorphism

There will be cases where certain methods of the parent class will need to be implemented differently in the inheriting class. For example:

{% highlight ruby %}
    class Sith < Padawan
      def inspect
        puts "Peace is a lie. There is only passion. - " + @name
      end
    end
{% endhighlight %}

Here, the *inspect* method from the *Sith* class will be used instead of the *inspect* method from the *Padawan* class. Object oriented languages (like Ruby) that facilitate this type of behavior are said to be polymorphic. Therefore, the above is an example of Polymorphism.

Rather than exhaustively define every characteristic of every new class, we only need to redefine the differences between the parent class and the child class.

####Does Ruby support multiple inheritance?

No. Ruby was designed with single inheritance. This was on purpose. Single inheritance encourages you to develop a deeper understanding of your domain model.

That said, there are times when a domain model could benefit from sharing methods that do not require a full blown class. That's where Ruby Mixins come in.

###Mixins

Mixins are Ruby modules. Modules are a collection of methods. You cannot create an instance of a module. Therefore, modules do not maintain state.

After requiring a Ruby module, you would then include that module in your Ruby class. This is called a Mixin:

{% highlight ruby %}
    require 'Lightsaber'
    
    class Padawan
      . . .
      include Lightsaber
      . . .
    end
{% endhighlight %}

####Lightsaber.rb

Here is the Mixin Lightsaber module:

{% highlight ruby %}
    module Lightsaber
      def lightsaber(crystal = "Jade")
        puts "Lightsaber.initialized: " + crystal
      end
    end
{% endhighlight %}

So when I instantiate an instance of the Jedi class, I get access to the Lightsaber module - pure Mixin love:

{% highlight ruby %}
    #dojo.rb
    require 'Jedi'

    anakin = Jedi.new("Anakin")
    . . .
    anakin.lightsaber("Ruby")
    . . .
{% endhighlight %}

Modules are for sharing behavior (methods), while classes are for modeling relationships between objects. Ruby classes can Mixin a module and receive all its methods for free.

####Active Record - Base Class or Mixin?

We might think Active Record should have been included rather than extended by a subclass. You can use your own parent class at that point right?

So should Active Record have been implemented as a Mixin instead of a Base Class? Hell No!

Saying it should is a half-truth at best. What never follows such statements is a disclosure that you will spend exorbitant amounts of time mapping your class attributes to a database DSL (domain specific language).

This behavior really adds up to your detriment when dealing with larger domain models. But this is never said. It's that little gotcha that, not surprisingly, never gets mentioned.

I believe for the best speed, simplicity and maintainability, Active Record is best implemented as a base class that you inherit with a single line.

Compare that to the many lines you will spend to map your class attributes to database types. It really is a no-brainer.

I could stop here, but I believe you'll be able to make better judgments when you have a fuller picture of the issue. So I'm going to tell you when implementing Active Record as a mixin makes sense.

It makes sense when you're dealing with legacy code that already has a base class coupled with an inefficient, custom data access layer. Then I recommend using a Ruby ORM like [Datamapper][3].

You will spend a lot of time wiring up your domain models, but you'll get a mature and flexible data layer - just the type of sprucing up any legacy app could use.

###Try it out for yourself

Use either *ruby dojo.rb* to run the example or better yet - run *irb*, then *load 'dojo.rb'* to interact with the Jedi Ruby objects live.

What do you get when you mix Ruby, Jedi and Mixins? A helluva good time! Join the fun:

[Download the Ruby Object Oriented Jedi Tutorial][4]


  [1]: http://techoctave.com/marketing-for-geeks
  [2]: http://starwars.wikia.com/wiki/Lightsaber_combat
  [3]: http://datamapper.org/
  [4]: http://techoctave.com/c7/static/jedi.zip




