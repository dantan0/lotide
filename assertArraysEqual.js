// const assertArraysEqual = function(array1, array2) {
//   // assuming that arrays are not nested or not containing objects
//   let isEqual = true;
//   if (array1.length !== array2.length) {
//     isEqual = false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     // comparing by types
//     if (array1[i] !== array2[i]) {
//       isEqual = false;
//     }
//   }
//   if (isEqual) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([4, 5, 6, 7], [4, 5, 6, 7]);
assertArraysEqual(['Elizabeth', 'Darcy', 'Charlotte'], ['Elizabeth', 'Darcy', 'Charlotte']);
assertArraysEqual([true, undefined, null], [true, undefined, null]); // something to ponder