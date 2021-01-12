const reverse = function(args) {
  if (args.length <= 2) {
    console.log('Not enough arguments');
    return;
  }
  const inputStrings = args.slice(2);
  
  let reversedStrings = '';

  for (let string of inputStrings) {
    // construct string by looping backwards
    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }

    // check length
    if (reversedStrings.length === 0) {
      reversedStrings += reversedString;
    } else {
      reversedStrings += '\n' + reversedString;
    }
  }

  return reversedStrings;
};

const args = process.argv;

module.exports = reverse;

// console.log(reverse(args));