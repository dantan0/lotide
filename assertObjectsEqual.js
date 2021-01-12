const eqArrays = function(array1, array2) {
  // assuming that arrays are not nested or not containing objects
  if (array1 === undefined || array2 === undefined) {
    return undefined;
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // comparing by types for every element
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let [key, value] of Object.entries(object1)) {
    if (object2[key] === undefined) {
      // if it doesn't exist in the second obj
      return false;
    }
    if (Array.isArray(value) && Array.isArray(object2[key])) {
      // if value type is array
      if (!eqArrays(object2[key], value)) {
        return false;
      }
    } else {
      // primitive types (types must match)
      if (object2[key] !== value) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // assuming that arrays are not nested or not containing objects
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// assertObjectsEqual({ a: 'a', b: 'b', c: 'c' }, { c: 'c', a: 'a', b: 'b' });
// assertObjectsEqual({ hi: 123, bye: 456 }, { bye: 456, hi: 123 });

