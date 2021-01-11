const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([4, 5, 6, 7], [4, 5, 6, 7]);
assertArraysEqual(['Elizabeth', 'Darcy', 'Charlotte'], ['Elizabeth', 'Darcy', 'Charlotte']);
assertArraysEqual([true, undefined, null], [true, undefined, null]); // something to ponder
