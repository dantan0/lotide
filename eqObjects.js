const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;