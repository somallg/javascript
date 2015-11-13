# APPENDIX E. JSON
* Lightweight data interchange format

## JSON Syntax
* 6 kinds of values
    * objects
    * arrays
    * strings
    * numbers
    * booleans
    * null
* Unordered container of name/value pairs
    
## Using JSON Securely
* A JSON text can be turned into a useful data structure with the `eval` function
```
var myData = eval('(' + myJSONText + ')');
```
* Using `JSON.parse` instead of `eval`

## A JSON Parser