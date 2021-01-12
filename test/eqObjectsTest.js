const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('eqObjects', () => {
  it("returns true for { a: '1', b: '2' } and { b: '2', a: '1' }", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("returns true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("returns true for { a: { z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    const ee = { a: { z: 1 }, b: 2 };
    const ff = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(ee, ff), true);
  });

  it("returns true for { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 }", () => {
    const gg = { a: { y: 0, z: 1 }, b: 2 };
    const hh = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(gg, hh), false);
  });

  it("returns { g: {q: [2, 5, 8], h: {t: 10}}, y: 3} and { y: 3, g: {h: {t: 10}, q: [2, 5, 8]}}", () => {
    const qq = { g: {q: [2, 5, 8], h: {t: 10}}, y: 3};
    const zz = { y: 3, g: {h: {t: 10}, q: [2, 5, 8]}};
    assert.strictEqual(eqObjects(qq, zz), true);
  });
});