const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('letterPositions', () => {
  const word1 = letterPositions('hello');
  it("return [0] for h in 'hello'", () => {
    assert.deepEqual(word1['h'], [0]);
  });

  it("return [2,3] for l in 'hello'", () => {
    assert.deepEqual(word1['l'], [2, 3]);
  });

  it("return [4] for o in 'hello'", () => {
    assert.deepEqual(word1['o'], [4]);
  });
});