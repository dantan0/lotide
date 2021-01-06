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

const middle = function(array) {
  const arrayLength = array.length;
  const midIndex = Math.floor(arrayLength / 2);
  let result = [];

  if (arrayLength <= 2) {
    return [];
  } else if (arrayLength % 2 === 0) {
    // an even array
    result.push(array[midIndex - 1], array[midIndex]);
  } else {
    // an odd array
    result.push(array[midIndex]);
  }

  return result;
};

// test code
// assertArraysEqual([1, 2, 5], [1, 2, 5]);
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]