# APPENDIX A. Awful Parts

## Global Variables
* Make it harder to run independent subprograms in the same program
* 3 ways to define global variable
    * Place a `var` statement outside of any function `var foo = value;`
    * Add a property directly to the global object `window.foo = value;`
    * Use a variable without declaring it. This is called *implied global* `foo = value;`
    
## Scope
* JavaScript uses block syntax, but does not provide block scope
* Better to declare all variables at the top of each function

## Semicolon Insertion
* JavaScript has a mechanism that tries to correct faulty programs by automatically inserting semicolons. Do no depend on this. It can mask more serious errors
```
return
{
    status: true
};
```

## Reserved Words
* Cannot be used to name variables or parameters
* When reserved words are used as keys in object literals, they must be quoted
* Cannot be used with the dot notation, necessary to use the bracket notation

## Unicode
* Unicode considers the pair to be a single character
* JavaScript thinks the pair is two distinct character

## typeof
* Returns a string that identifies the type of its operand

## parseInt
* If the first character of the string is 0, the the string is evaluated in base 8 instead of base 10
* Causes problems that parse dates and times

## Floating Point
* Binary floating-point numbers are inept at handling decimal fractions, so 0.1 + 0.2 is not equal to 0.3

## NaN

## Phony Arrays

## Falsy Values
* Large set of falsy values

## hasOwnProperty
* Is a method, not an operator, so in any object it could be replaced with a different function or event a value that is not a function

## Object
