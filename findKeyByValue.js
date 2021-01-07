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

const findKeyByValue = function(obj, check) {
  for (let [key, value] of Object.entries(obj)) {
    if (value === check) {
      return key;
    }
  }
};

// test case
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  history: "The Crown",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sciFi');
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Crown"), 'history');

// console.log(findKeyByValue(bestTVShowsByGenre, ["Brooklyn Nine-Nine", "Modern Family"]));