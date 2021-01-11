const eqArrays = function(array1, array2) {
  // assuming that arrays are not nested or not containing objects
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // comparing by types
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else {
      // items are not arrays
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;