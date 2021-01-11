const middle = function(array) {
  const arrayLength = array.length;
  const midIndex = Math.floor(arrayLength / 2);
  let result = [];

  if (arrayLength <= 2) {
    return [];
  } else if (arrayLength % 2 === 0) {
    // an even array
    result.push(array[midIndex - 1], array[midIndex]);
  } else {
    // an odd array
    result.push(array[midIndex]);
  }

  return result;
};

module.exports = middle;