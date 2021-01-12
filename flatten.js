const flatten = function(array) {
  // assuming one level of nesting
  let result = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

module.exports = flatten;

// console.log(flatten([1, 2, [3, 4], 5, [6, [8,9]]]));