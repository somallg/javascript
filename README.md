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

# Section 5. Events and the Event Emitter

## 5.31 Conceptual Aside: Events
* Event: something that has happened in our app that we can respond to
* System Events (C++ Core, libuv): events from computer system
* Custom Events (Javscript core, Event emitter) 

## 5.32 Javascript Aside: Object Properties, First Class Function, and Arrays

## 5.33 The Node Event Emitter Part 1
* Event listener: the code that responds to an event
    * In Javascript's case, the listener will be a function
 
## 5.34 The Node Event Emitter Part 2
* Magic string: a string that has some special meaning in our code

## 5.35 Javascript Aside: Object.create and Prototypes
* Object.create - simple, clean, clear way to setup a sequence of object, object that inherits from one another on prototype chain
