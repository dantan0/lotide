const findKeyByValue = function(obj, check) {
  for (let [key, value] of Object.entries(obj)) {
    if (value === check) {
      return key;
    }
  }
};

module.exports = findKeyByValue;