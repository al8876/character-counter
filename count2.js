var countLetters = function StringCharacterCounter(str) {

  var string = str.toLowerCase().split('');

  // result = {};
  // var index = 0;
  // for (var letter of string) {
  //   if (!result[letter]) {
  //     result[letter] = [];
  //   }
  //   result[letter].push(index);
  //   index ++
  // }

  result = {};
  for (var i = 0; i < string.length; i ++) {
    var letter = string[i];
    if (!result[letter]) {
      result[letter] = [];
    }
    result[letter].push(i);
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));