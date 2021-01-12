// const assertEqual = require('../assertEqual'); 
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays", () => {
  it("returns true for [1,2,3] and [1,2,3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true for [4, 'tiger', 'lion'] and [4, 'tiger', 'lion']", () => {
    assert.deepEqual(eqArrays([4, 'tiger', 'lion'], [4, 'tiger', 'lion']), true);
  });

  it ("returns true [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("return false for [undefined] and [NaN]", () => {
    assert.deepEqual(eqArrays([undefined], [NaN]), false);
  });

  it("return false for [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]],[[2, 3], 4]), false);
  });
});