# Learn and Understand NodeJS

# Section 1. Introduction and Setup

## 1.1 Introduction and the Goal of this Course
* Don't imitate, understand

# 1.2 Big Words and NodeJS

# 1.3 Watching this Course in High Definition

# 1.4 Conceptual Aside: The Command Line Interface
* CLI : utility to type command to your computer rather than clicking
    * Bash on Linux
    * Terminal on Mac
    * Command Prompt on Windows
    
# 1.5 Command Line References

# Section 2. V8: The Javascript Engine

## 2.6 Conceptual Aside: Processors, Machine Language, and C++
* Machine Code: programming languages spoken by computer processors
* Node is written in C++
* V8 is written in C++

## 2.7 Javascript Aside: Javascript Engines and the ECMAScript Specification
* ECMAScript: the standard Javascript is based on
* Javascript Engine: a program that converts Javascript code into something the computer processor can understand

## 2.8 V8 Under the Hood

## 2.9 Adding Features to JavaScript

# Section 3. The Node Core

## 3.10 Conceptual Aside: Servers and Clients
* Servers: computer performs services
* Clients: asks for services
* Request/Response model

## 3.11 What Does Javascript Need to Manage a Server?
* Better ways to organize our code into reusable pieces
* Ways to deal with files
* Ways to deal with databases
* The ability to communicate over the Internet
* The ability to accept requests and send responses (in the standard format)
* A way to deal with work that takes a long time

## 3.12 The C++ Core

## 3.13 The Javascript Core

## 3.14 Downloading Lecture Source Code

## 3.15 Let's Install and Run Some Javascript in Node
* Breakpoint: a spot in our code where we tell a debugging tool to pause the execution of our code

# Section 4. Modules, Exports, and Require

## 4.16 Conceptual Asides: Modules
* Module: a reusable block of code whose existence does not accidentally impact other code 
* CommonJS modules: an agreed upon standard for how code modules should be structured

## 4.17 Javascript Aside: First-Class Functions and Function Expressions
* First-Class Functions: everything you can do with other types you can do with functions
* An Expression: a block of code that results in a value
* Invoke/Call: run the function

## 4.18 Let's Build A Module

## 4.19 Javascript Aside: Objects and Object Literals
* Name/value pair: a name which maps to a value
* Object: a collection of name/value pairs
* Object literal: name/value paris separated by commas and surrounded by curly braces

## 4.20 Javascript Aside: Prototypal Inheritance and Function Constructors
* Inheritance: one object gets access to the properties and methods of another object
* Function contructors: a normal function that is used to construct objects

## 4.21 Javascript Aside: By Reference and By Value
* Primitive: a type of data that represents a single value

## 4.22 Javascript Aside: Immediately Invoked Function Expressions (IIFE)
* Scope: where in code you have access to particular variable or function

## 4.23 How Do Node Modules Really Work?: module.exports and require
* **require** is a function, that you pass a 'path' to
* **module.exports** is what the require function *returns*
* This works because **your code is actually wrapped is a function** that is given these things as function parameters

## 4.24 Javascript Aside: JSON
* JSON: "Javascript object notation" - a standard for structuring data that is inspired by javascript object literals

## 4.25 More on require
* Use wisely to structure project

## 4.26 Module Patterns
* Revealing Module Pattern: exposing only the properties and methods you want via an returned object
    * Very common and clean way to structure and protect code within modules
    
## 4.27 exports vs module.exports
* Mutate: to change something
    * Adding a method or property to an object means you've mutated the object
* Just use **module.exports**

## 4.28 Requiring Native (Core) Modules

## 4.29 Modules and ES6

## 4.30 Web Server Checklist
* ~~Better ways to organize our code into reusable pieces~~
* Ways to deal with files
* Ways to deal with databases
* The ability to communicate over the Internet
* The ability to accept requests and send responses (in the standard format)
* A way to deal with work that takes a long time

# Section 5. Events and the Event Emitter

## 5.31 Conceptual Aside: Events
* Event: something that has happened in our app that we can respond to
* System Events (C++ Core, libuv): events from computer system
* Custom Events (Javascript core, Event emitter) 

## 5.32 Javascript Aside: Object Properties, First Class Function, and Arrays

## 5.33 The Node Event Emitter Part 1
* Event listener: the code that responds to an event
    * In Javascript's case, the listener will be a function
 
## 5.34 The Node Event Emitter Part 2
* Magic string: a string that has some special meaning in our code

## 5.35 Javascript Aside: Object.create and Prototypes
* Object.create - simple, clean, clear way to setup a sequence of object, object that inherits from one another on prototype chain

## 5.36 Inheriting from the Event Emitter

## 5.37 Javascript Aside: Node, ES6 and Template Literals
*  ES6 (ECMAScript 2015) - new standard of Javascript, new features, managing, writing Javascript code easier
    * babeljs.io
* Template literal: a way to concatenate strings in Javascript (ES6)
    * Easier to work with than a bunch of strings concatenated with '+'
    
## 5.38 Javascript Aside: .call and .apply

## 5.39 Inheriting from the Event Emitter Part 2

## 5.40 Javascript Aside: ES6 Classes
* Syntactic sugar: a feature that only changes how you type something, but nothing changes under the hood

## 5.41 Inheriting from the Event Emitter Part 3
* exports class

# Section 6. Asynchronous Code, libuv, The Event Loop, Streams, Files and more...

## 6.42 Javascript Aside: Javascript is Synchronous
* Asynchronous: more than one process running simultaneously
    * Node does things asynchronously. V8 does not
* Synchronous: one process executing at a time
    * Javascript is synchronous, i.e one line of code executing at a time
    
## 6.43 Conceptual Aside: Callbacks
* Callback: a function passed to some other function, which we assume will be invoked at some point

## 6.44 libuv, The Event Loop, and Non-Blocking Asynchronous Execution
* Non-blocking: doing other things without stopping your programming from running

## 6.45 Conceptual Aside: Streams and Buffers
* Buffer: a temporary holding spot for data being moved from one place to another
    * Intentially limited in size
* Stream: a sequence of data made available over time
    * Pieces of data that eventually combine into a whole

## 6.46 Conceptual Aside: Binary Data, Character Sets, and Encodings
* Binary Data: data stored in binary (sets of 1s and 0s)
* Character Set: a representation of characters as numbers
    * Unicode and ASCII are character sets
* Character Encoding: how many bit characters are stored in binary

## 6.47 Buffers

## 6.48 ES6 Typed Arrays
* Byte: 8 bits (00101100)
* ES6 does have way to dealing with raw binary data

## 6.49 Javascript Aside: Callbacks
* Callback: a function passed to some other function, which we assume will be invoked at some point

## 6.50 Files and fs
* Error-First Callback: callbacks take an error object as their first parameter
    * *null* if no error, other will contain an object defining the error
* Always lean to asynchronous approach

## 6.51 Streams
* Stream: sequence of pieces of data (broken up into chunk)
* Chunk: a piece of data being sent through a stream
* Streams are EventEmitter
* Abstract (Base) Class: a type of constructor you never work directly with, but inherit from
    * Create new custom objects which inherit from the abstract base class
    
* Custom Stream => Stream.Readable.prototype (read) => Stream.prototype -> EventEmitter.prototype (on, emit)
* Readable/Writable: not only physical readable/writable, but from Node's perspective

## 6.52 Conceptual Aside: Pipes
* Pipes: connecting two streams by writing to one stream what is being read from another
    * In Node you pipe from a Readable stream to a Writable stream 

## 6.53 Pipes
* Method chaining: a method returns an object so we can keep calling more methods

## 6.54 Web Server Checklist
* ~~Better ways to organize our code into reusable pieces~~
* ~~Ways to deal with files~~
* Ways to deal with databases
* The ability to communicate over the Internet
* The ability to accept requests and send responses (in the standard format)
* ~~A way to deal with work that takes a long time~~

## Section 7. HTTP and being a Web Server

## 7.55 Conceptual Aside: TCP/IP
* Protocol: a set of rules two sides agree on to use when communicating
    * Both client and server are programmed to understand and use that particular set of rules
*  Client-Server Model for Computing: request/response (standard format)

## 7.56 Conceptual Aside: Addresses and Ports
* Port: once a computer receives a packet, how it knows what program to send it to
    * When a program is setup on the operating system to receive packets from a particular port, it is said that the program is 'listening' to that port
    
## 7.57 Conceptual Aside: HTTP
* HTTP: a set of rules (and a format) for data being transferred on the web
    * Stands for 'HyperText Transfer Protocol'. It's a format (of various) defining data being transferred via TCP/IP

* MIME type: a standard for specifying the type of data being sent
    * Stands for 'Multipurpose Internet Mail Extensions'. Examples: application/json, text/html, image/jpeg

## 7.58 http_parser

## 7.59 Let's Build a Web Server in Node




## 8.70 npm Global Installation
* https://docs.npmjs.com/getting-started/fixing-npm-permissions

## 8.71 init, nodemon, and package.json Part 2

## 8.72 Using Other People's Code

# Section 9. Express

## 9.73 Installing Express and Making it Easier to Build a Web Server
* Environment variables: global variables specific to the environment (server) our code is living in
    * Differents servers can have different variable settings, ad we can access those values in code

* HTTP Method: specifies the type of action the request wishes to make
    * GET, POST, DELETE, and others. Also called **verbs**
    
## 9.74 Routes

## 9.75 Static Files and Middleware
* Middleware: code that sits between two layers of software
    * In the case of Express, sitting between the request and the response
* Static: not dynamic
    * In other words, not processed by code in any way. For example HTML, CSS, and image files are 'static' files

## 9.76 Templates and Template Engines
* Install template engine
* `app.set('view engine', 'jade')`

## 9.77 Querystring and Post Parameters

## 9.78 RESTfull APIs and JSON
* REST: an architectural style for building APIs
    * Stands for 'Representational State Transfer'. We decide that HTTP verbs and URLs mean something
    
## 9.79 Structuring an App
* express-generator

# Section 10. Javascript, JSON, and Databases

## 10.80 Conceptual Aside: Relational Databases and SQL
* Relational databases
* SQL

## 10.81 Node and MySql

## 10.82 Conceptual Aside: NoSQL and Documents
* NoSQL: a variety of technologies that are alternatives to tables and SQL
    * One of those types is a **document** database. MongoDB is one of those
* Sacrifire hard drive for greater flexibility

## 10.83 MongoDB and Mongoose

## 10.84 Web Server Checklist
* ~~Better ways to organize our code into reusable pieces~~
* ~~Ways to deal with files~~
* ~~Ways to deal with databases~~
* ~~The ability to communicate over the Internet~~
* ~~The ability to accept requests and send responses (in the standard format)~~
* ~~A way to deal with work that takes a long time~~

# Section 11. The MEAN stack

## 11.85 MongoDB, Express, AngularJS, and NodeJS
* Stack: the combination of all technologies used to build a pieced of software
    * You database system, your server side code, your client side code, and everything else
* What you choose to build software
* **M**ongoDB: stores your data in documents that look a lot like JSON and JavaScript object literal notation
* **E**xpress: JavaScript framework that makes thing like routing, writing APIS, and working with HTTP easier
* **A**ngularJS: JavaScript framework for managing code and UI in the browser, removing a lot of manual work
* **N**odeJS: JavaScript on the server. Handle HTTP requests and responses and lots more

## 11.86 AngularJS: Managing the Client
* Browers are written in C++
* Browers also have JS engines embedded in them and give them access to extra features
* DOM: the structure browsers use to store and manage web pages
    * Document Object Model. Browers give the JS engine the ability to manipulate the DOM
    
## 11.87 AngularJS: Managing the Client Part 2

## 11.88 AngularJS: Managing the Client Part 3
