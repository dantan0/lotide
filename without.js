const assertArraysEqual = function(array1, array2) {
  // assuming that arrays are not nested or not containing objects
  let isEqual = true;
  if (array1.length !== array2.length) {
    isEqual = false;
  }
  for (let i = 0; i < array1.length; i++) {
    // comparing by types
    if (array1[i] !== array2[i]) {
      isEqual = false;
    }
  }
  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  // create a shallow copy of an array assuming array is not nested
  let result = source.slice();
  for (let item of itemsToRemove) {
    let index = result.indexOf(item);
    if (index > -1) {
      result.splice(index, 1);
    }
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);