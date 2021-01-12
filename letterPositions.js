const eqArrays = function(array1, array2) {
  // assuming that arrays are not nested or not containing objects
  if (array1 === undefined || array2 === undefined) {
    return false;
  }
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


const letterPositions = function(sentence) {
  const results = {};
  let noSpace = sentence.split(' ').join('');
  for (let i = 0; i < noSpace.length; i++) {
    let letter = noSpace[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;

// // test
// let res = letterPositions('hello');
// console.log(res);
// // console.log(res['h']);
// assertArraysEqual(res['h'], [0]);
// assertArraysEqual(res['l'], [2, 3]);
// assertArraysEqual(res['t'], [5]);

// let res2 = letterPositions('letterPositions');
// console.log(res2);
// assertArraysEqual(res2['P'], [6]);