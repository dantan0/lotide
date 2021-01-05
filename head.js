// copied over. export can be used in the future
const assertEqual = function(actual, expected) {
  let formatExpected;
  let formatActual;

  if (typeof actual === 'string' && typeof expected === 'string') {
    formatExpected = ' ';
    formatActual = ' ';

    let expectedArray = expected.split(' ');
    let actualArray = actual.split(' ');

    // console.log(expectedArray, actualArray);

    if (expectedArray.length > 1) {
      for (let expected of expectedArray) {
        formatExpected += expected + ' ';
      }
    } else {
      formatExpected = expected;
    }

    if (actualArray.length > 1) {
      for (let actual of actualArray) {
        formatActual += actual + ' ';
      }
    } else {
      formatActual = actual;
    }
  } else {
    formatExpected = expected;
    formatActual = actual;
  }

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

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
};

// console.log(head([2,32,5]));
assertEqual(head([3,5,9]), 3);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");