const assertEqual = function(actual, expected) {
  let formatExpected = ' ';
  let formatActual = ' ';

  if (typeof actual === 'string') {
    formatActual = `"${actual}"`;
  } else {
    formatActual = `${actual}`;
  }
  
  if (typeof expected === 'string') {
    formatExpected = `"${expected}"`;
  } else {
    formatExpected = `${expected}`;
  }

  if (formatActual === formatExpected) {
    console.log(`✅✅✅ Assertion Passed: ${formatActual} === ${formatExpected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${formatActual} !== ${formatExpected}`);
  }
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

// test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([4, 'tiger', 'lion'], [4, 'tiger', 'lion']), true);
assertEqual(eqArrays([true, null], [true, null]), true);
assertEqual(eqArrays([undefined], [null]), false);