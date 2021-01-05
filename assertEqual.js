const assertEqual = function(actual, expected) {
  let formatExpected = ' ';
  let formatActual = ' ';

  // if (typeof actual === 'string' && typeof expected === 'string') {
  //   formatExpected;
  //   formatActual;

  //   let expectedArray = expected.split(' ');
  //   let actualArray = actual.split(' ');

  //   // console.log(expectedArray, actualArray);

  //   if (expectedArray.length > 1) {
  //     for (let expected of expectedArray) {
  //       formatExpected += expected + ' ';
  //     }
  //   } else {
  //     formatExpected = expected;
  //   }

  //   if (actualArray.length > 1) {
  //     for (let actual of actualArray) {
  //       formatActual += actual + ' ';
  //     }
  //   } else {
  //     formatActual = actual;
  //   }
  // } else {
  //   formatExpected = expected;
  //   formatActual = actual;
  // }

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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse" + " " + "Labs");
assertEqual(1, 1);
assertEqual(3, 5);
assertEqual(222, 111 + 111);