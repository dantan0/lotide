const loopyLighthouse = function(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let output = i;
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      output = words[0] + words[1];
    } else if (i % multiples[0] === 0) {
      output = words[0];
    } else if (i % multiples[1] === 0) {
      output = words[1];
    }
    console.log(output);
  }
};

// test cases
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([10, 40], [3, 5], ["Loopy", "Lighthouses"]);
