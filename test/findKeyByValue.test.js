const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  history: "The Crown",
};

describe("findKeyByValue", () => {
  it("returns sciFi for 'The Expanse'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sciFi');
  });

  it("returns history for 'The Crown'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Crown'), 'history');
  });

  it("returns drama for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns undefined for 'The Book'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Book'), undefined);
  });
});