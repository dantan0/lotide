const assert = require('chai').assert;
const tail = require('../tail');

// // zero and one word array cases
// assertEqual(tail([]), []);
// assertEqual(tail(["Hell"]), "Lighthouse");

describe("tail", () => {
  it("returns 'Lighthouse' for ['Hell', 'Disneyland', 'Lighthouse']", () => {
    assert.strictEqual(tail(['Hell', 'Disneyland', 'Lighthouse']), 'Lighthouse');
  });
});