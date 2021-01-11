const assert = require('chai').assert;
const tail = require('../tail');

// // zero and one word array cases
// assertEqual(tail([]), []);
// assertEqual(tail(["Hell"]), "Lighthouse");

describe("tail", () => {
  it("returns ['Disneyland', 'Lighthouse'] for ['Hell', 'Disneyland', 'Lighthouse']", () => {
    assert.deepEqual(tail(['Hell', 'Disneyland', 'Lighthouse']), ['Disneyland', 'Lighthouse']);
  });

  it('returns [2,3] for [1,2,3]', () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });

  it("returns empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});
