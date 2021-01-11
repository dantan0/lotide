const assertEqual = require('../assertEqual');
const tail = require('../tail');

// regular cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
const newWords = tail(words);
assertEqual(words.length, 3);
assertEqual(newWords.length, 2);
assertEqual(newWords[0], "Lighthouse");
assertEqual(newWords[1], "Labs");
assertEqual(newWords[1], "No Code");

// zero and one word array cases
assertEqual(tail([]), []);
assertEqual(tail(["Hell"]), "Lighthouse");