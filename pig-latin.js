const pigLatin = function(args) {
  if (args.length <= 2) {
    console.log('Not enough arguments');
    return;
  }
  let stringArray = args.slice(2);
  let result = '';

  for (let string of stringArray) {
    let newString = string.slice(1) + string[0] + 'ay';
    result += newString + ' ';
  }

  return result;
};

const args = process.argv;

module.exports = pigLatin;

// console.log(pigLatin(args));