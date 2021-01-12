const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // scan over the entire list
  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (item in results) {
        // results[item]
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;