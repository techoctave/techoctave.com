---
layout: post
author: TVD
title: "The Only Higher Level Than JavaScript Is God's Word."
date: 2013-02-23 03:51:54
permalink: /c7/posts/102-the-only-higher-level-than-javascript-is-god-s-word
---

<img src="http://techoctave.com/c7/static/javascript-is-not-low-level.jpg" width="100%"/>

I'm so sick and tired of people describing JavaScript as "low-level". If you're not "MOV AL, 61h" all damn day, you're not doing low-level programming; so give it a rest.

###Low-Level Programming Languages

For those who studied under [Sams or some other Dummy][1], it's time to lay out some fundamentals.

In computer science, a low-level programming language is a programming language that provides little or no abstraction from a computer's instruction set architecture.

At this point, we're either talking machine code or assembly language.

Low-level languages can be converted to machine code without using a compiler or interpreter, and the resulting code runs directly on the processor.

####Machine Code

Machine code is the only language a microprocessor can process directly without a previous transformation.

{% highlight js %}
    8B542408 83FA0077 06B80000 0000C383
    FA027706 B8010000 00C353BB 01000000
    B9010000 008D0419 83FA0376 078BD98B
    C84AEBF1 5BC3
{% endhighlight %}

Above is a function in 32-bit x86 machine code to calculate the nth Fibonacci number.

Writing machine code was nutballs because it required memorizing or looking up numerical codes for every instruction that is used. Who the hell ever had the time for that?

Please tell me you're not doing this for a living?

####Assembly Language

An [assembly language][2] is a low-level programming language for a computer, microcontroller, or other programmable device, in which each statement corresponds to a single machine code instruction:

{% highlight js %}
    fib:
        mov edx, [esp+8]
        cmp edx, 0
        ja @f
        mov eax, 0
        ret
        
        @@:
        cmp edx, 2
        ja @f
        mov eax, 1
        ret
        
        @@:
        push ebx
        mov ebx, 1
        mov ecx, 1
        
        @@:
            lea eax, [ebx+ecx]
            cmp edx, 3
            jbe @f
            mov ebx, ecx
            mov ecx, eax
            dec edx
        jmp @b
        
        @@:
        pop ebx
        ret
{% endhighlight %}

The same Fibonacci number calculator as above, but in x86 assembly language using [MASM][3] syntax.

Each microcontroller had it's own distinct assembly language instruction set. But, this was a step up because you no longer had to memorize or lookup every single instruction opcode.

A developer could more easily remember commands like move (mov) or compare (cmp) over 8B542408 or FA027706. 

Statements like *mov ax,0* and *add ax,bx* are meaningless to the microprocessor. As arcane as these statements appear, they were still human readable forms of computer instructions.

But, at the end-of-the-day, the computer only responds to commands like B80000 and 03C3. An assembly language and its corresponding assembler is a program that converts strings like mov ax,0 to architecture specific machine code like "B80000".

Surely, you're not doing this for a living either?

###High-Level Programming Langauges

The latest trend is folks regurgitating phrases like "JavaScript is the lowest level programming, the assembly language of the web." I can't even begin to tell you how incredibly wrong that statement is.

It's just stinking wrong. Absolutely, unequivocally wrong:

<img src="http://techoctave.com/c7/static/say-low-level-one-more-goddamn-time.jpg" width="520"/>

In computer science, a high-level programming language is a programming language with strong abstraction from the details of the computer and it's machine code.

That abstraction forms the basis of what developers come to expect in a modern programming language:

{% highlight js %}
 1. Advanced Control Structures
 
 2. Abstract Data Types
 
 3. Object Oriented Programming Constructs
 
 4. Functional Programming Constructs
{% endhighlight %}

JavaScript has all these fundamental constructs of a high-level programming language. That's why it's so versatile. That's why it's so ubiquitous:

{% highlight js %}
    var Light = (function(_super) {
    
        function Light(id, color) {
            _super.call(this, id);
    
            this.color = color;
            console.log("Start Light: " + color);
    
            _super.prototype.drawTerminal();
        }
    
        Light.prototype.setColor = function(color) {
            this.color = color;
            console.log("Change Light: " + color);
        }
    
        Light.prototype.getColor = function() {
            console.log("Color: " + this.color);
            return this.color;
        }
    
        return Light;
    })(Base);
{% endhighlight %}

People will continue to parrot [JavaScript is the assembly language for the web][4]. Ignorance is a choice. But, that doesn't change the facts that JavaScript contains every high-level abstraction developers need to be productive.

The only higher level than JavaScript is [God's word][5].

####How did this low-level nonsense get this far?

One of my developer tweeps [@HexstreamSoft][6] summarized the madness best:

*I guess the "argument" for Javascript being "low-level" is: "Any programming language used as a compilation target is low-level."*

His observation is absolutely correct. This is exactly the logic folks are using to determine whether JavaScript is a low-level programming language or a high-level programming language.

The problem here is this new definition for "low-level" programming language is simply wrong. It never was and never will be the definition of "low-level".

Even if it was, when would the madness stop? If I wrote a new language which transpiles to CoffeeScript, would we then say CoffeeScript is a "low-level" programming language?

Surely not.

JavaScript isn't even close to the lowest level. Every [JavaScript interpreter is written in C/C++][7]. When JavaScript code runs through the interpreter, opcode is generated for the specific computer chipset because that's the only code a machine can understand.

Folks like to opine the terms high-level and low-level are inherently relative. That for every generation of programming language, the previous is a lower-level.

If you haven't heard it before, let me be the first to tell you that is complete and utter bullshit. A programming language either has high-level constructs or it doesn't. This isn't about feelings or transpiling or anything else.

A programming language is "low-level" if it lacks high-level abstract constructs: Functions, Classes, Inheritance, Polymorphism, etc.

It's that simple.

Since JavaScript has these "high-level" abstract constructs, it is a high-level programming language.

####Blame The Wave of Designer Languages

I blame the current wave of [Designer Languages][8] for our temporary bout with insanity.

JavaScript, like many other successful programming languages is seeing it's share of designer languages. Some more successful than others.

Yet, just because another language runs on top of JavaScript, doesn't make JavaScript "low-level". That just makes JavaScript awesome!

In fact, none of these designer languages even add any new [abstract constructs][9]. Most, invariably, only add syntactic sugar to what was already an elegant language.

Designer languages are the expensive shoes you wear to impress your date or the Versace dress your girl wore to the prom. They are pomp and circumstance.

That doesn't make JavaScript "low-level", that just makes designer languages trendy.

Take a deep dive into any designer language. CoffeeScript, TypeScript, Dart, GWT, Sweet, LLJS, Opal, it really doesn't matter.

What you'll find is this...

Each has the same high-level abstract constructs that JavaScript has minus the ease of debugging, support and ultimately, maintainability.

I'm not saying these languages aren't innovative because they are. I'm not saying these languages don't add value to the JavaScript ecosystem because they do.

What I am saying is don't confuse science with fashion.


  [1]: http://techoctave.com/c7/posts/57-hustle-and-code
  [2]: http://flint.cs.yale.edu/cs422/doc/art-of-asm/pdf/CH08.PDF
  [3]: http://msdn.microsoft.com/en-us/library/afzk3475(v=vs.80).aspx
  [4]: http://www.hanselman.com/blog/JavaScriptIsAssemblyLanguageForTheWebPart2MadnessOrJustInsanity.aspx
  [5]: https://twitter.com/andraganescu/status/305006413959290882
  [6]: https://twitter.com/HexstreamSoft/status/305050017180291073
  [7]: http://techoctave.com/c7/posts/97-why-c-never-left
  [8]: http://techoctave.com/c7/posts/90-designer-languages
  [9]: http://blog.izs.me/post/10213512387/javascript-is-not-web-assembly
