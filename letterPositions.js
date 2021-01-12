const letterPositions = function(sentence) {
  const results = {};
  let noSpace = sentence.split(' ').join('');
  for (let i = 0; i < noSpace.length; i++) {
    let letter = noSpace[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;