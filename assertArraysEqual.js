const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  // assuming that arrays are not nested or not containing objects
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;