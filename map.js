const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item before', item);
    // console.log('item after', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {
  // assuming that arrays are not nested or not containing objects
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // comparing by types
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  // assuming that arrays are not nested or not containing objects
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// test cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[word.length - 1]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(results3, [ 'd', 'l', 'o', 'r', 'm' ]);