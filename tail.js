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

const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  }
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const newWords = tail(words);
assertEqual(words.length, 3);
assertEqual(newWords.length, 2);