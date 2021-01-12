# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @graphic_pickler/lotide`

**Require it:**

`const _ = require('@graphic_pickler/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays(array1, array2)`: compare two arrays to check if they are equal and return true or false
* `eqObjects(object1, object2)`: compare two objects to check if they are equal and return true or false
* `countLetters(str)`: take in a sentence and return a count of each of the letters in that sentence
* `countOnly(allItems, itemsToCount)`: take in a collection of items and returns a subset of those items
* `findKeyByValue(obj, check)`: take in an object and a value and return the first key containing the given value if found
* `flatten(array)`: take in a nested array and flatten it to a single level
* `letterPositions(str)`: return the position of a letter
* `loopyLighthouse(range, multiple, words)`: print different words based on a specified range and multiple
* `map(array, callback)`: return the result of a callback function on a given array
* `middle(array)`: return the middle element of the given array
* `head(array)`: return the first element of the given array
* `tail(array)`: return all the elements of the given array except the first
* `pigLatin(str)`: return a crypted string
* `takeUntil(array, callback)`: return the result of a callback on the array where the original array is sliced until the callback evaluates to true
* `without(source, itemsToRemove)`: return the result with only those elements from the source that are not present in the itemsToRemove array