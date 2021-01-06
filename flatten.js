const flatten = function(array) {
  // assuming one level of nesting
  let result = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let subItem of item) {
        result.push(subItem);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));