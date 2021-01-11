const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([4, 'tiger', 'lion'], [4, 'tiger', 'lion']), true);
assertEqual(eqArrays([true, null], [true, null]), true);
assertEqual(eqArrays([undefined], [null]), false);

// nest arrays
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);