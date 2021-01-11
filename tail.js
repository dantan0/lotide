const tail = function(array) {
  if (array.length === 1 || array.length === 0) {
    return [];
  }
  return array.slice(1);
};

module.exports = tail;