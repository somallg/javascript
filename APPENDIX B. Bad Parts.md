# APPENDIX B. Bad Parts

## ==

## with Statement

## eval

## continue Statement

## switch Fall Through

## Block-less Statements
```
if (ok)
    t = true;
    advance();
```

## ++--

## Bitwise Operators
* JavaScript is rarely used for doing bit manipulation

## The function Statement Versus the function Expression
* `function` statements are subject to *hoisting*
* Prohibits the use of `function` statement in `if` statements

## Typed Wrappers
* Don't use `new Boolean` or `new Number` or `new String`

## new

## void
* Is an operator that takes an operand and returns `undefined`
