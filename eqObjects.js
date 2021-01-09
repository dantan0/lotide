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
    } else if (typeof value === 'object' && typeof object2[key] === 'object') {
      // if value type if object but not arrays
      if (!eqObjects(value, object2[key])) {
        return false;
      };
    } else {
      // primitive types (types must match)
      if (object2[key] !== value) {
        return false;
      }
    }
  }
  return true;
};

// primitive test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3"};
const cba = { a: 1, b: 2, c: 3};
const bca = { a: "1", b: "3", c: "3"};
const acb = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, cba), false);
assertEqual(eqObjects(abc, bca), false);
assertEqual(eqObjects(abc, acb), true);

const gg = {a : true, b: false};
const hh = {b : false, a: true};
assertEqual(eqObjects(gg, hh), true);

// // array test cases
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd2, cd3), true);

// object test cases
const ee = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
const ff = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
const qq = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
const nn = eqObjects({ g: {q: [2, 5, 8], h: {t: 10}}, y: 3}, { y: 3, g: {h: {t: 10}, q: [2, 5, 8]}});
assertEqual(ee, true);
assertEqual(ff, false);
assertEqual(qq, false);
assertEqual(nn, true);